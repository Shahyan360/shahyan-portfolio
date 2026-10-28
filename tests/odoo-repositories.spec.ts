import { test, expect } from '@playwright/test';

const mappings = [
  { slug: 'unico', repos: ['odoo-financial-automation', 'odoo-crm-website-automation'] },
  { slug: 'dsl', repos: ['odoo-crm-website-automation'] },
  { slug: 'alam-cotton-mills', repos: ['odoo-shopify-integration', 'odoo-migration-optimization', 'odoo-financial-automation'] },
  { slug: 'mxt-manufacturing', repos: ['mxt-manufacturing-erp'] },
  { slug: 'laps-education', repos: ['odoo-school-management', 'odoo-franchise-management'] },
  { slug: 'uae-e-invoicing', repos: ['odoo-uae-einvoicing'] },
  { slug: 'procurement-auditor', repos: ['odoo-ai-procurement-auditor'] },
  { slug: 'independent-integration-labs', repos: ['odoo-integration-labs'] },
];

test('repository links match the existing implementations on cards and detail pages', async ({ page }) => {
  await page.goto('/work/');
  await expect(page.locator('.project-card')).toHaveCount(8);
  for (const { slug, repos } of mappings) {
    const card = page.locator(`.project-${slug}`);
    await expect(card).toHaveCount(1);
    for (const repo of repos) {
      const href = `https://github.com/Shahyan360/${repo}`;
      const link = card.locator(`a[href="${href}"]`);
      await expect(link).toHaveCount(1);
      await expect(link).toContainText('GitHub');
      await expect(link).toHaveAttribute('target', '_blank');
    }
  }
  for (const { slug, repos } of mappings) {
    await page.goto(`/work/${slug}/`);
    await expect(page.locator('#repositories')).toContainText('Implemented by Muhammad Shahyan Khalid');
    await expect(page.locator('#repositories')).toContainText('fictional data');
    await expect(page.locator('#repositories')).toContainText('do not contain original confidential client source');
    await expect(page.locator('#repositories .repository-grid article')).toHaveCount(repos.length);
    for (const repo of repos) {
      const href = `https://github.com/Shahyan360/${repo}`;
      await expect(page.locator('.case-heading .repository-links').locator(`a[href="${href}"]`)).toHaveCount(1);
      await expect(page.locator('#repositories').locator(`a[href="${href}"]`)).toHaveCount(1);
    }
  }
});

test('grouped school and franchise work retains its historical boundaries', async ({ page }) => {
  await page.goto('/work/laps-education/');
  await expect(page.locator('#context')).toContainText('two schools');
  await expect(page.locator('#engineering')).toContainText('Later franchise/headquarters-related work');
  await expect(page.locator('#repositories')).toContainText('Fictional campus fixtures');
  await expect(page.locator('#repositories')).toContainText('Runtime installation');
  await page.goto('/work/alam-cotton-mills/');
  await expect(page.locator('#context')).toContainText('September 2024 to March 2026');
  await expect(page.locator('#repositories')).toContainText('record-rule-aware SQL');
  await expect(page.locator('#repositories')).toContainText('No measured speedup');
});

test('independent labs remain separate from employment and live acceptance claims', async ({ page }) => {
  await page.goto('/work/independent-integration-labs/');
  await expect(page.locator('.case-role')).toContainText('no client attribution');
  await expect(page.locator('#engineering')).toContainText('Contacts.Read');
  await expect(page.locator('#engineering')).toContainText('does not send Stripe refunds');
  await expect(page.locator('.scope-note')).toContainText('provider acceptance were deferred');
  await expect(page.locator('iframe, .live-project')).toHaveCount(0);
  await page.goto('/experience/');
  await expect(page.locator('.implementation-stories article')).toHaveCount(7);
  await expect(page.locator('.implementation-stories')).not.toContainText('Independent Integration Labs');
});

test('repository actions are available in homepage and experience summaries', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#selected-work .project-card')).toHaveCount(2);
  await expect(page.locator('.project-unico .repository-links a')).toHaveCount(3);
  await expect(page.locator('.project-dsl .repository-links a')).toHaveCount(2);
  await page.goto('/experience/');
  for (const { slug, repos } of mappings.filter(mapping => mapping.slug !== 'independent-integration-labs')) {
    const story = page.locator('.implementation-stories article').filter({ has: page.locator(`a[href="/work/${slug}/"]`) });
    for (const repo of repos) await expect(story.locator(`a[href="https://github.com/Shahyan360/${repo}"]`)).toHaveCount(1);
  }
});
