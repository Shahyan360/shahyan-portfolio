import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes = ['/', '/work/', '/about/', '/experience/', '/playground/', '/contact/', '/work/lizz/', '/work/aster/', '/work/meridian/', '/work/unico/', '/work/dsl/', '/work/alam-cotton-mills/', '/work/uae-e-invoicing/', '/work/mxt-manufacturing/', '/work/laps-education/', '/work/procurement-auditor/'];

test('all routes load directly with metadata, content and no browser errors', async ({ page }) => {
  const errors: string[] = []; page.on('pageerror', e => errors.push(e.message));
  for (const route of routes) { const response = await page.goto(route); expect(response?.status()).toBe(200); await expect(page.locator('h1')).toHaveCount(1); await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/); await expect(page.locator('h1')).toBeVisible(); }
  expect(errors).toEqual([]);
});

for (const width of [320, 390, 768, 1440]) {
  test(`no horizontal overflow or broken images at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) { await page.goto(route); await page.locator('h1').waitFor(); const sizes = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: innerWidth })); expect(sizes.content, route).toBeLessThanOrEqual(sizes.viewport + 1); const broken = await page.locator('img').evaluateAll(images => images.filter((image): image is HTMLImageElement => image instanceof HTMLImageElement && image.complete && image.naturalWidth === 0).map(image => image.src)); expect(broken, route).toEqual([]); }
  });
}

test('project filters return the intended curated collection', async ({ page }) => {
  await page.goto('/work/'); await expect(page.locator('.project-card')).toHaveCount(10);
  await page.getByRole('button', { name: 'Live products' }).click(); await expect(page.locator('.project-card')).toHaveCount(3);
  await page.getByRole('button', { name: 'Enterprise', exact: false }).click(); await expect(page.locator('.project-card')).toHaveCount(7);
  await page.getByRole('button', { name: /^AI/ }).click(); await expect(page.locator('.project-card')).toHaveCount(2); await expect(page.locator('.project-card h3')).toHaveText(['Lizz', 'Procurement Auditor']);
});

test('atlas switches domains and retains conventional case-study links', async ({ page }) => {
  await page.goto('/'); await page.getByRole('button', { name: '02 Applied intelligence' }).click(); await expect(page.locator('.atlas-info h3')).toHaveText('Applied intelligence'); await expect(page.locator('.atlas-related').getByRole('link', { name: 'Lizz', exact: true })).toHaveAttribute('href', '/work/lizz/');
  await page.getByRole('button', { name: 'Explore in 3D' }).click(); await expect(page.locator('.spatial-atlas canvas')).toBeVisible();
});

test('workflow moves through meaningful states and resets', async ({ page }) => {
  await page.goto('/experience/'); const flow = page.locator('.workflow-explorer'); await expect(flow.locator('h3')).toHaveText('Customer order');
  await flow.getByRole('button', { name: 'Next step' }).click(); await expect(flow.locator('h3')).toHaveText('Inventory check'); await expect(flow.locator('.workflow-detail')).toContainText('Shortage: 4');
  await flow.getByRole('button', { name: '05 Accounting' }).click(); await expect(flow.getByRole('button', { name: 'Flow complete' })).toBeDisabled();
  await flow.getByRole('button', { name: 'Reset' }).click(); await expect(flow.locator('h3')).toHaveText('Customer order');
});

test('AI simulation ends at review and makes its provenance clear', async ({ page }) => {
  await page.goto('/playground/'); const flow = page.locator('.workflow-explorer'); await flow.getByRole('button', { name: '05 Draft & review' }).click(); await expect(flow.locator('.workflow-status')).toContainText('Awaiting human review'); await expect(flow.locator('.workflow-detail')).toContainText('No email sent'); await expect(flow.locator('.demo-label')).toContainText('Illustrative simulation');
});

test('quick view persists and retains access to project details', async ({ page }) => {
  await page.goto('/'); await page.getByRole('button', { name: 'Quick view' }).click(); await expect(page.locator('body')).toHaveClass('quick-view'); await expect(page.locator('.hero-portrait')).toBeHidden(); await expect(page.locator('.project-card')).toHaveCount(5); await page.reload(); await expect(page.locator('body')).toHaveClass('quick-view'); await page.getByRole('button', { name: 'Explore mode' }).click(); await expect(page.locator('.hero-portrait')).toBeVisible();
});

test('mobile menu supports Escape and restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 }); await page.goto('/'); const menu = page.getByRole('button', { name: 'Menu +' }); await menu.click(); await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible(); await page.keyboard.press('Escape'); await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toHaveCount(0); await expect(menu).toBeFocused();
});

test('contact uses working mail and telephone targets without false form success', async ({ page }) => {
  await page.goto('/contact/'); await expect(page.getByRole('link', { name: 'Write me an email' })).toHaveAttribute('href', /^mailto:khalidshahyan0@gmail.com/); await expect(page.getByRole('link', { name: '+92 327 0268858' })).toHaveAttribute('href', 'tel:+923270268858'); await expect(page.locator('form')).toHaveCount(0);
});

test('education has no invented graduation date and portrait is limited to home/about', async ({ page }) => {
  for (const route of routes) { await page.goto(route); const portrait = page.locator('img[alt="Muhammad Shahyan Khalid in a navy blazer and glasses"]'); await expect(portrait).toHaveCount(['/', '/about/'].includes(route) ? 1 : 0); }
  await page.goto('/about/'); await expect(page.locator('.education-section')).not.toContainText(/expected|graduated|202[0-9]/i);
});

test('internal links resolve to exported routes', async ({ page, request }) => {
  const all = new Set<string>(); for (const route of routes) { await page.goto(route); const links = await page.locator('a[href^="/"]').evaluateAll(nodes => nodes.map(n => new URL((n as HTMLAnchorElement).href).pathname)); links.forEach(link => all.add(link)); }
  for (const link of all) { expect((await request.get(link)).status(), link).toBe(200); }
  expect((await request.get('/a-page-that-does-not-exist/')).status()).toBe(404);
});

test('native navigation reaches case studies and returns without prefetch failures', async ({ page, baseURL }) => {
  const failures: string[] = []; page.on('response', response => { if (response.status() >= 400 && response.url().startsWith(baseURL!)) failures.push(response.url()); });
  await page.goto('/'); await page.getByRole('link', { name: 'Explore my work', exact: true }).click(); await expect(page).toHaveURL(/\/work\/$/);
  await page.getByRole('link', { name: 'Explore project: Lizz case study', exact: true }).click(); await expect(page.locator('h1')).toHaveText('Lizz.');
  await page.getByRole('link', { name: 'All work', exact: false }).click(); await expect(page.locator('.project-card')).toHaveCount(10); expect(failures).toEqual([]);
});

for (const route of ['/', '/about/', '/work/', '/contact/', '/playground/', '/work/lizz/', '/experience/']) {
  test(`WCAG A/AA automated scan ${route}`, async ({ page }) => { await page.emulateMedia({ reducedMotion: 'reduce' }); await page.goto(route); const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze(); expect(results.violations.map(v => ({ id: v.id, description: v.description, targets: v.nodes.map(n => n.target) }))).toEqual([]); });
}

test('reduced motion retains visible content and disables headline animation', async ({ page }) => { await page.emulateMedia({ reducedMotion: 'reduce' }); await page.goto('/'); const style = await page.locator('.hero h1>span').first().evaluate(el => getComputedStyle(el).animationName); expect(style).toBe('none'); await expect(page.locator('.project-card').first()).toBeVisible(); });

for (const build of [{ slug: 'lizz', name: 'Lizz', expected: /A little room to breathe/ }, { slug: 'aster', name: 'Aster ERP', expected: /A clear, connected|Aster|finance/i }, { slug: 'meridian', name: 'Meridian ERP', expected: /Meridian/ }]) {
  test(`real ${build.name} build renders inside the portfolio`, async ({ page }) => {
    await page.goto(`/work/${build.slug}/#live-build`); const viewer = page.locator('.live-project');
    await expect(viewer.getByRole('link', { name: 'Open externally' })).toHaveAttribute('target', '_blank');
    const errors: string[] = []; page.on('pageerror', error => errors.push(error.message));
    await viewer.getByRole('button', { name: /Launch interactive/ }).click(); const frame = page.frameLocator('iframe'); await expect(frame.locator('body')).toContainText(build.expected, { timeout: 25000 });
    await expect(viewer).toHaveAttribute('data-state', 'ready', { timeout: 20000 });
    await viewer.scrollIntoViewIfNeeded();
    if (build.slug === 'lizz') { await frame.getByRole('button', { name: 'Inbox 7', exact: true }).click(); await expect(frame.getByRole('heading', { name: 'Your inbox, in focus.' })).toBeVisible(); }
    await viewer.getByRole('button', { name: 'Expand' }).click(); await expect(viewer).toHaveClass(/expanded/);
    await frame.locator('body').press('Escape'); await expect(viewer).not.toHaveClass(/expanded/);
    await viewer.getByRole('button', { name: `Reload ${build.name}`, exact: true }).click();
    await expect(viewer).toHaveAttribute('data-state', 'ready', { timeout: 20000 });
    await viewer.getByRole('button', { name: `Close ${build.name} viewer`, exact: true }).click();
    await expect(viewer.locator('iframe')).toHaveCount(0); await expect(viewer).toHaveAttribute('data-state', 'idle');
    expect(errors).toEqual([]);
  });
}

test('homepage live build selector switches between three products', async ({ page }) => { await page.goto('/'); const gallery = page.locator('.live-gallery'); await gallery.getByRole('button', { name: 'Aster ERP' }).click(); await expect(gallery.locator('.live-project:visible')).toHaveAttribute('aria-label', 'Aster ERP interactive website'); await gallery.getByRole('button', { name: 'Meridian ERP' }).click(); await expect(gallery.getByRole('heading', { name: 'Step inside Meridian ERP.' })).toBeVisible(); });
