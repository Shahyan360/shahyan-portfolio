import { test, expect, type Page } from '@playwright/test';

const lizz = 'https://lizz-ai.vercel.app/demo';
const fixture = (acknowledge = true, restricted = false) => `<!doctype html><html lang="en"><body><h1>Public test interface</h1><button>Test control</button><div style="height:1600px">Scrollable fictional test content</div><script>
window.addEventListener('message', event => {
  if (${acknowledge} && event.data?.type === 'shahyan:embed:ping') {
    window.parent.postMessage({ type: 'shahyan:embed:ready', version: 1, session: event.data.session, access: '${restricted ? 'restricted' : 'public'}' }, event.origin);
  }
});</script></body></html>`;

async function mockBuild(page: Page, acknowledge = true, restricted = false) {
  await page.route(lizz, route => route.fulfill({ contentType: 'text/html', body: fixture(acknowledge, restricted) }));
  await page.goto('/work/lizz/#live-build');
  await page.getByRole('button', { name: 'Launch interactive demo', exact: true }).click();
  await expect(page.frameLocator('iframe').locator('h1')).toHaveText('Public test interface');
  return page.locator('.live-project');
}

test('load without acknowledgement never becomes ready and offers a recoverable fallback', async ({ page }) => {
  await page.clock.install();
  const viewer = await mockBuild(page, false);
  await expect(viewer).toHaveAttribute('data-state', 'loading');
  await page.clock.fastForward(16000);
  await expect(viewer).toHaveAttribute('data-state', 'unconfirmed');
  await expect(viewer.getByRole('heading', { name: 'We couldn’t confirm this view.' })).toBeVisible();
  await expect(viewer.getByRole('link', { name: 'Open Lizz externally' })).toHaveAttribute('href', lizz);
  await viewer.getByRole('button', { name: 'Retry embedded view' }).click();
  await expect(viewer).toHaveAttribute('data-state', 'loading');
  await viewer.getByRole('button', { name: 'Close Lizz viewer' }).click();
  await expect(viewer.locator('iframe')).toHaveCount(0);
  await expect(viewer.getByRole('button', { name: 'Launch interactive demo', exact: true })).toBeFocused();
});

test('spoofed parent messages do not confirm a child application', async ({ page }) => {
  const viewer = await mockBuild(page, false);
  await page.evaluate(() => window.postMessage({ type: 'shahyan:embed:ready', version: 1, session: '12345678-1234-1234-1234-123456789012', access: 'public' }, window.location.origin));
  await expect(viewer).toHaveAttribute('data-state', 'loading');
  await expect(viewer.getByText('Public interface connected', { exact: true })).toHaveCount(0);
});

test('a confirmed authentication page is explained without exposing a session', async ({ page }) => {
  const viewer = await mockBuild(page, true, true);
  await expect(viewer).toHaveAttribute('data-state', 'restricted');
  await expect(viewer.locator('.live-auth-notice')).toContainText('requires its own account');
  await expect(viewer.locator('iframe')).toBeVisible();
  await expect(viewer.getByRole('link', { name: 'Open externally', exact: true })).toHaveAttribute('target', '_blank');
});

test('reload creates a fresh view and close returns to an unloaded launch state', async ({ page }) => {
  let requests = 0;
  await page.route(lizz, route => { requests++; return route.fulfill({ contentType: 'text/html', body: fixture() }); });
  await page.goto('/work/lizz/#live-build');
  const viewer = page.locator('.live-project');
  await viewer.getByRole('button', { name: 'Launch interactive demo', exact: true }).click();
  await expect(viewer).toHaveAttribute('data-state', 'ready');
  await viewer.getByRole('button', { name: 'Reload Lizz' }).click();
  await expect(viewer).toHaveAttribute('data-state', 'ready');
  expect(requests).toBe(2);
  await viewer.getByRole('button', { name: 'Close Lizz viewer' }).click();
  await expect(viewer).toHaveAttribute('data-state', 'idle');
  await expect(viewer.locator('iframe')).toHaveCount(0);
});

test('homepage launches only selected builds and preserves a launched view across switches', async ({ page }) => {
  let requests = 0;
  await page.route(lizz, route => { requests++; return route.fulfill({ contentType: 'text/html', body: fixture() }); });
  await page.goto('/');
  const gallery = page.locator('.live-gallery');
  await expect(gallery.locator('iframe')).toHaveCount(0);
  await gallery.getByRole('button', { name: 'Launch interactive demo', exact: true }).click();
  await expect(gallery.locator('#build-lizz .live-project')).toHaveAttribute('data-state', 'ready');
  await gallery.getByRole('button', { name: 'Aster ERP', exact: true }).click();
  await expect(gallery.locator('iframe')).toHaveCount(1);
  await gallery.getByRole('button', { name: 'Lizz', exact: true }).click();
  await expect(gallery.locator('#build-lizz .live-project')).toHaveAttribute('data-state', 'ready');
  expect(requests).toBe(1);
});

test('embedded scrolling does not move the containing portfolio', async ({ page }) => {
  const viewer = await mockBuild(page);
  await expect(viewer).toHaveAttribute('data-state', 'ready');
  await page.frameLocator('iframe').locator('body').hover();
  const parentScroll = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(0, 400);
  await expect.poll(() => page.frames().find(frame => frame.url() === lizz)?.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  expect(await page.evaluate(() => window.scrollY)).toBe(parentScroll);
});

test('offline browser has a specific recovery state', async ({ page, context }) => {
  const viewer = await mockBuild(page);
  await expect(viewer).toHaveAttribute('data-state', 'ready');
  await context.setOffline(true);
  await expect(viewer).toHaveAttribute('data-state', 'offline');
  await expect(viewer.getByRole('heading', { name: 'You appear to be offline.' })).toBeVisible();
  await context.setOffline(false);
});

test('public copy and metadata use current project names and the canonical domain', async ({ page, request }) => {
  const outdated = new RegExp(['Ma' + 'xine', 'Zas' + 'care', 'previously known as', 'formerly called', 'formerly known', 'renamed from'].join('|'), 'i');
  for (const route of ['/', '/work/', '/work/lizz/', '/work/aster/', '/work/meridian/', '/experience/', '/about/', '/playground/', '/contact/']) {
    await page.goto(route);
    await expect(page.locator('body')).not.toContainText(outdated);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /^https:\/\/shahyan-khalid-360\.vercel\.app\//);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://shahyan-khalid-360.vercel.app${route}`);
  }
  const sitemap = await request.get('/sitemap.xml');
  expect(await sitemap.text()).not.toContain('chatgpt.site');
  expect(await sitemap.text()).toContain('https://shahyan-khalid-360.vercel.app/');
});

for (const build of [{ slug: 'lizz', name: 'Lizz' }, { slug: 'aster', name: 'Aster ERP' }, { slug: 'meridian', name: 'Meridian ERP' }]) {
  test(`mobile ${build.name} viewer remains usable without portfolio overflow`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/work/${build.slug}/#live-build`);
    const viewer = page.locator('.live-project');
    await viewer.getByRole('button', { name: /Launch interactive/ }).click();
    await expect(viewer).toHaveAttribute('data-state', 'ready', { timeout: 20000 });
    await viewer.getByRole('button', { name: 'Expand' }).click();
    await expect(viewer).toHaveClass(/expanded/);
    await expect(viewer.getByRole('link', { name: 'Open externally', exact: true })).toBeVisible();
    const bounds = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth }));
    expect(bounds.width).toBeLessThanOrEqual(bounds.viewport + 1);
    await viewer.getByRole('button', { name: `Close ${build.name} viewer`, exact: true }).click();
    await expect(viewer.locator('iframe')).toHaveCount(0);
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');
  });
}

test('Meridian public website does not confer an authenticated workspace session', async ({ request }) => {
  const response = await request.get('https://meridian-erp-alpha.vercel.app/api/auth/me');
  expect(response.status()).toBe(200);
  expect((await response.json()).user).toBeNull();
});
