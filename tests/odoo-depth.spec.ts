import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Unico operational work is navigable independently of its QuickBooks validation', async ({ page }) => {
  await page.goto('/work/unico/');
  await page.getByRole('navigation', { name: 'Case study sections' }).getByRole('link', { name: 'Operational work', exact: true }).click();
  await expect(page).toHaveURL(/#operational-work$/);
  await expect(page.locator('#operational-title')).toBeInViewport();
  await expect(page.locator('#operational-work')).toContainText('stock quants');
  await expect(page.locator('#operational-work')).toContainText('negative-margin');
  await expect(page.locator('#operational-work')).toContainText('SNMP printer');
  await page.getByRole('navigation', { name: 'Case study sections' }).getByRole('link', { name: 'Recent QuickBooks work' }).click();
  await expect(page.locator('#engineering')).toContainText('qbo_status_sync.py');
  await expect(page.locator('.case-delivery-note')).toContainText('not a completed production rollout');
});

test('Odoo delivery and experience retain the historical versus reconstruction distinction', async ({ page }) => {
  await page.goto('/experience/#delivery');
  await expect(page.locator('#delivery .case-coverage-grid article')).toHaveCount(6);
  await expect(page.locator('#delivery')).toContainText('User Acceptance Testing');
  const mxt = page.locator('.experience-row').filter({ hasText: 'MXT Solutions LLC' });
  await expect(mxt.getByRole('link', { name: /UAE E-Invoicing/ })).toHaveAttribute('href', '/work/uae-e-invoicing/');
  await mxt.getByRole('link', { name: /UAE E-Invoicing/ }).click();
  await expect(page.locator('#context')).toContainText('MXT Solutions and Alam Cotton Mills');
  await expect(page.locator('#context')).toContainText('not assigned to every historical engagement');
  await page.goto('/work/mxt-manufacturing/');
  await expect(page.locator('#engineering')).toContainText('work centers');
  await expect(page.locator('#engineering')).toContainText('cost calculations');
  await page.goto('/work/laps-education/');
  await expect(page.locator('#engineering')).toContainText('attendance monitoring');
  await expect(page.locator('#engineering')).toContainText('does not imply that reconstruction includes');
});

test('InvoiceOCR is supporting work with source access and no invented runtime', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.hero-meta')).toContainText('SENIOR ODOO DEVELOPER');
  await expect(page.locator('#selected-work .project-card h3')).toHaveText(['Unico', 'DSL Group']);
  await page.getByRole('link', { name: 'Explore InvoiceOCR', exact: true }).click();
  await expect(page).toHaveURL(/\/work\/invoiceocr\/$/);
  await expect(page.locator('.case-role')).toContainText('Think AI Works internship');
  await expect(page.getByRole('link', { name: 'View repository', exact: true })).toHaveAttribute('href', 'https://github.com/Shahyan360/taw-python-invoiceocr');
  await expect(page.locator('#engineering')).toContainText('rule-based extraction');
  await expect(page.locator('.scope-note')).toContainText('No live deployment URL');
  await expect(page.locator('iframe, .live-project')).toHaveCount(0);
});

test('InvoiceOCR detail is accessible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/work/invoiceocr/');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations.map(violation => ({ id: violation.id, targets: violation.nodes.map(node => node.target) }))).toEqual([]);
});
