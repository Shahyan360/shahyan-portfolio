import { test, expect } from '@playwright/test';

const commerceRoute = '/work/ecommerce-order-inventory-sync/';
const odooSlugs = ['unico', 'dsl', 'alam-cotton-mills', 'uae-e-invoicing', 'mxt-manufacturing', 'laps-education', 'procurement-auditor'];

test('Senior Odoo positioning leads the portfolio and attributes delivered implementations', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.hero-meta')).toContainText('SENIOR ODOO DEVELOPER');
  await expect(page.locator('.hero h1')).toContainText('Odoo');
  await expect(page.locator('#selected-work .project-card h3')).toHaveText(['Unico', 'DSL Group']);
  const person = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
  expect(person.jobTitle).toBe('Senior Odoo Developer & Solution Consultant');
  await page.goto('/work/');
  await expect(page.getByRole('button', { name: /^Odoo/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.project-card')).toHaveCount(7);
  for (const slug of odooSlugs) {
    await page.goto(`/work/${slug}/`);
    await expect(page.locator('.case-role')).toContainText('IMPLEMENTED BY ME');
    await expect(page.locator('.case-role')).toContainText('I implemented');
    await expect(page.locator('.case-heading .eyebrow')).toContainText('/ IMPLEMENTATION');
  }
});

test('commerce evidence links and genuine screenshots replace the earlier plan-only description', async ({ page }) => {
  await page.goto(commerceRoute);
  await expect(page.getByRole('link', { name: 'View the recorded CI run' })).toHaveAttribute('href', /40619559757$/);
  await expect(page.locator('.project-screenshots img')).toHaveCount(3);
  for (const image of await page.locator('.project-screenshots img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveAttribute('alt', /Commerce Sync/);
    await expect.poll(() => image.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(700);
  }
  await expect(page.locator('.scope-note')).toContainText('browser-only simulator');
  await expect(page.locator('.scope-note')).not.toContainText('No public workflow endpoint');
});

for (const width of [390, 1440]) {
  test(`commerce public simulator works inside the portfolio at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(`${commerceRoute}#live-build`);
    const viewer = page.locator('.live-project');
    await viewer.getByRole('button', { name: /Launch interactive/ }).click();
    await expect(viewer).toHaveAttribute('data-state', 'ready', { timeout: 25000 });
    await viewer.scrollIntoViewIfNeeded();
    const frame = page.frameLocator('iframe');
    await expect(frame.getByRole('heading', { name: 'Order operations', exact: true })).toBeVisible();
    await frame.getByRole('button', { name: 'Race for the last unit', exact: false }).click();
    await expect(frame.getByRole('status')).toContainText('1 order(s) reserved the last unit');
    await viewer.getByRole('button', { name: /^Expand/ }).click();
    await frame.locator('body').press('Escape');
    await expect(viewer).not.toHaveClass(/expanded/);
    await viewer.getByRole('button', { name: 'Reload Order & Inventory Sync', exact: true }).click();
    await expect(viewer).toHaveAttribute('data-state', 'ready', { timeout: 25000 });
    await viewer.getByRole('button', { name: 'Close Order & Inventory Sync viewer', exact: true }).click();
    await expect(viewer.locator('iframe')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  });
}
