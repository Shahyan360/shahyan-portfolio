import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const privateStudies = ['alam-cotton-mills', 'uae-e-invoicing', 'mxt-manufacturing', 'laps-education', 'procurement-auditor'];

test('all Odoo work is discoverable without implying public client access', async ({ page, request }) => {
  await page.goto('/experience/#implementations');
  const stories = page.locator('.implementation-stories article');
  await expect(stories).toHaveCount(7);
  for (const link of await stories.locator('a[href^="/"]').all()) {
    const href = await link.getAttribute('href');
    expect((await request.get(href!)).status()).toBe(200);
  }
  for (const slug of privateStudies) {
    await page.goto(`/work/${slug}/`);
    await expect(page.locator('.live-project, iframe')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'View repository', exact: true })).toHaveCount(1);
    await expect(page.locator('#repositories')).toContainText('independently reconstructed');
    await expect(page.locator('.scope-note')).toContainText(/private|prototype|confidential/i);
    await expect(page.locator('.related-odoo a')).toHaveCount(7);
  }
  const sitemap = await request.get('/sitemap.xml');
  for (const slug of privateStudies) expect(await sitemap.text()).toContain(`/work/${slug}/`);
});

test('Unico preserves the supplied reliability results and remaining acceptance', async ({ page }) => {
  await page.goto('/work/unico/');
  await expect(page.locator('#engineering')).toContainText('19.0.1.2.11 to 19.0.1.6.3');
  await expect(page.locator('#engineering')).toContainText('qbo_status_sync.py');
  await expect(page.locator('#engineering')).toContainText('Pending Verification');
  await expect(page.locator('#engineering')).toContainText('committed outcomes');
  await expect(page.locator('#validation')).toContainText('252 compatibility tests passed');
  await expect(page.locator('#validation')).toContainText('22 failure scenarios and five durable lifecycle checks');
  await expect(page.locator('#validation')).toContainText('560-test broader run: 546 passed');
  await expect(page.locator('#validation')).toContainText('same 14 failures/errors reproduced');
  await expect(page.locator('.case-delivery-note')).toContainText('not a completed production rollout');
  await expect(page.locator('#coverage')).toContainText('Stripe');
  await expect(page.locator('#coverage')).toContainText('Manufacturing and work in progress');
  await page.getByRole('navigation', { name: 'Case study sections' }).getByRole('link', { name: 'Validation & delivery' }).click();
  await expect(page).toHaveURL(/#validation$/);
  await expect(page.locator('#validation h2')).toBeInViewport();
});

test('implementation boundaries remain explicit across the Odoo stories', async ({ page }) => {
  await page.goto('/work/dsl/'); await expect(page.locator('#context')).toContainText('five US companies');
  await page.goto('/work/alam-cotton-mills/'); await expect(page.locator('#coverage')).toContainText('not a complete greenfield implementation');
  await page.goto('/work/laps-education/'); await expect(page.locator('#context')).toContainText('two schools');
  await page.goto('/work/uae-e-invoicing/'); await expect(page.locator('.scope-note')).toContainText('not a claim of independently verified legal compliance');
  await page.goto('/work/procurement-auditor/'); await expect(page.locator('.project-status')).toContainText('Implemented prototype');
  await expect(page.locator('#context')).toContainText('I implemented');
});

for (const route of ['/work/unico/', '/work/dsl/', '/work/alam-cotton-mills/', '/work/uae-e-invoicing/', '/work/mxt-manufacturing/', '/work/laps-education/', '/work/procurement-auditor/', '/work/independent-integration-labs/']) {
  test(`Odoo case study accessibility ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(results.violations.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) }))).toEqual([]);
  });
}
