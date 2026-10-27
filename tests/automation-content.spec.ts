import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const automationRoutes = [
  '/work/ecommerce-order-inventory-sync/',
  '/work/ai-lead-enrichment-crm-scoring/',
  '/work/gmail-outlook-email-classification/',
  '/work/multi-agent-market-research/',
];

test('four independent implementations are discoverable with honest access boundaries', async ({ page, request }) => {
  await page.goto('/#automation');
  await expect(page.locator('#automation .odoo-project-links a')).toHaveCount(4);
  await page.goto('/work/');
  await page.getByRole('button', { name: 'Automation', exact: false }).click();
  await expect(page.locator('.project-card')).toHaveCount(4);
  await expect(page.locator('.project-card h3')).toHaveText(['Order & Inventory Sync', 'AI Lead Enrichment', 'Gmail & Outlook Classification', 'Multi-Agent Market Research']);
  const sitemap = await (await request.get('/sitemap.xml')).text();
  for (const route of automationRoutes) {
    await page.goto(route);
    await expect(page.locator('.case-heading .project-status')).toHaveText('Automation implementation');
    await expect(page.locator('.live-project, iframe')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'View repository', exact: true })).toHaveCount(0);
    await expect(page.locator('.case-evidence')).toContainText('Implementation confirmed by Shahyan');
    await expect(page.locator('#acceptance')).toContainText('Executed test results and live acceptance evidence were not supplied');
    await expect(page.locator('.related-automation a')).toHaveCount(3);
    expect(sitemap).toContain(route);
  }
});

test('automation case studies preserve business-state and AI-review decisions', async ({ page }) => {
  await page.goto(automationRoutes[0]);
  await expect(page.locator('#engineering')).toContainText('row-locked transaction');
  await expect(page.locator('#engineering')).toContainText('neither label purchase nor proof that an order shipped');
  await page.goto(automationRoutes[1]);
  await expect(page.locator('#engineering')).toContainText('40 points to ICP fit, 30 to purchase intent, 20 to urgency, and 10 to data quality');
  await expect(page.locator('#engineering')).toContainText('Weak evidence', { ignoreCase: true });
  await page.goto(automationRoutes[2]);
  await expect(page.locator('#coverage')).toContainText('instead of permanent deletion');
  await expect(page.locator('#engineering')).toContainText('merge existing categories');
  await page.goto(automationRoutes[3]);
  await expect(page.locator('#coverage')).toContainText('Six specialist roles');
  await expect(page.locator('#engineering')).toContainText('Gotenberg');
  await expect(page.locator('#engineering')).toContainText('leaves work pending/incomplete');
  await page.getByRole('navigation', { name: 'Case study sections' }).getByRole('link', { name: 'Acceptance & recovery' }).click();
  await expect(page).toHaveURL(/#acceptance$/);
  await expect(page.locator('#acceptance h2')).toBeInViewport();
});

for (const route of automationRoutes) {
  test(`automation accessibility ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(results.violations.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) }))).toEqual([]);
  });
}
