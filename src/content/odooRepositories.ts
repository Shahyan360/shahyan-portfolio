export type OdooRepository = {
  repo: string;
  label: string;
  description: string;
  technologies: string[];
  validation: string;
};

const sourceValidation = 'Implemented in source. Runtime installation, automated tests, and external-provider acceptance for this public reconstruction were deferred; no production deployment is claimed.';

export const odooRepositories = {
  manufacturing: {
    repo: 'mxt-manufacturing-erp', label: 'MXT Manufacturing ERP',
    description: 'Native BOM demand, warehouse orderpoints and transit resupply, independent purchase approvals, production stages, reservation and inspection gates, and QWeb reporting. The quality workflow is a custom Community implementation.',
    technologies: ['Odoo 17 Community', 'Python / ORM', 'PostgreSQL', 'MRP / Stock / Purchase', 'QWeb'],
    validation: 'The repository records native Odoo installation, upgrade, automated tests, browser review, and PDF validation. Docker portability and broader scenario acceptance remain pending. These repository results were not rerun for this portfolio update.',
  },
  shopify: {
    repo: 'odoo-shopify-integration', label: 'Odoo Shopify Integration',
    description: 'Two store configurations, raw-body signed webhooks, store-scoped customer/product bindings, replay checks, native sales and partial delivery flows, reviewed inventory adjustments, compare-and-swap stock exports, and bounded retries. Tax/shipping mappings and partial refunds need explicit review.',
    technologies: ['Odoo 18 Community', 'Python', 'Shopify GraphQL / Webhooks', 'PostgreSQL'], validation: sourceValidation,
  },
  finance: {
    repo: 'odoo-financial-automation', label: 'Odoo Financial Automation',
    description: 'Net-30 applications with independent approval, company-currency exposure and overdue checks at sales confirmation, invoice/paid/margin commission accruals and adjustments, and current-residual customer statements. Commission entries are reviewable accruals, not payouts.',
    technologies: ['Odoo 18 Community', 'Python / ORM', 'Native accounting', 'QWeb'], validation: sourceValidation,
  },
  crm: {
    repo: 'odoo-crm-website-automation', label: 'Odoo CRM & Website Automation',
    description: 'Opt-in qualification policies, follow-up activities and escalation, queued email templates, product quotation requests with internal review, native CRM-to-quotation creation, and linked-sale won automation. Native website checkout remains authoritative.',
    technologies: ['Odoo 18 Community', 'CRM / Sales / Website', 'Python', 'XML / QWeb'], validation: sourceValidation,
  },
  migration: {
    repo: 'odoo-migration-optimization', label: 'Odoo Migration & Optimization',
    description: 'Separate Odoo 17/18 addon variants, date/location/company-filtered stock movement balances, an ORM baseline and record-rule-aware SQL aggregation, synthetic workloads, benchmark recording, and a custom-column migration example. No measured speedup is claimed.',
    technologies: ['Odoo 17 / 18 Community', 'Python / ORM', 'PostgreSQL / SQL', 'Migration scripts'], validation: sourceValidation,
  },
  school: {
    repo: 'odoo-school-management', label: 'LAPS School ERP',
    description: 'Campus admissions and document review, numbered student enrollment and transfer history, recurring fees and draft guardian invoices, campus permissions, procurement approvals, HR campus assignment, and signed generic bank receipts with native payment registration.',
    technologies: ['Odoo 18 Community', 'Python / ORM', 'Accounting / HR / Purchase', 'QWeb', 'HMAC webhooks'], validation: sourceValidation,
  },
  franchise: {
    repo: 'odoo-franchise-management', label: 'LAPS Franchise Management',
    description: 'Franchise contracts and regions, monthly draft invoices with duplicate-billing protection, regional/HQ collection views from posted accounting records, signed generic bank receipts, and native reconciliation. Fictional campus fixtures do not describe a historical rollout count.',
    technologies: ['Odoo 18 Community', 'Python / ORM', 'PostgreSQL', 'Native accounting', 'QWeb'], validation: sourceValidation,
  },
  einvoicing: {
    repo: 'odoo-uae-einvoicing', label: 'UAE E-Invoicing',
    description: 'UBL 2.1 invoice/credit-note snapshots, tax and identity mapping, configurable XSD and shared/AE validation adapters, immutable transmission history, rejection revisions, and bounded retries. Simulator outcomes are distinct from authorized generic-sandbox responses.',
    technologies: ['Odoo 18 Community', 'Python', 'UBL / XML', 'XSD / XSLT adapters', 'PINT-AE'],
    validation: sourceValidation + ' Official schema execution, certification, accreditation, and provider verification are not asserted.',
  },
  auditor: {
    repo: 'odoo-ai-procurement-auditor', label: 'AI Procurement Auditor',
    description: 'Structured vendor-confirmation extraction using offline JSON or optional GPT-4o-mini, strict Pydantic validation, SKU/UoM aliases, purchase-order comparisons, immutable discrepancy findings, order fingerprints, and manager review. Purchase lines are not changed automatically.',
    technologies: ['Odoo 17 Community', 'Python / ORM', 'Pydantic', 'GPT-4o-mini', 'QWeb'], validation: sourceValidation,
  },
  labs: {
    repo: 'odoo-integration-labs', label: 'Independent Integration Labs',
    description: 'Outlook contact imports, Zoho CRM and QuickBooks sandbox imports, connection-scoped mappings and conflict policies, OAuth/refresh handling, encrypted tokens, retry inboxes, and Stripe test PaymentIntent/receipt workflows with native accounting review.',
    technologies: ['Odoo 18 Community', 'Python', 'OAuth 2.0 / PKCE', 'Microsoft Graph', 'Zoho CRM', 'QuickBooks', 'Stripe test API'], validation: sourceValidation,
  },
} satisfies Record<string, OdooRepository>;
