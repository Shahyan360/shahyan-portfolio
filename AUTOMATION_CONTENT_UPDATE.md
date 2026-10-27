# Four automation case studies — 28 October 2026

The user confirms that the supplied plans describe implementations they followed to build four independent automation projects. `src/content/automationProjects.ts` presents those projects with their own identity, architecture, functional scope, engineering decisions, acceptance/recovery requirements, technologies, and public-evidence boundaries.

## Content scope

1. **Order & Inventory Sync** — normalized Shopify/WooCommerce ingestion, signed webhook design, composite identity/deduplication, warehouse allocation, authoritative transactional reservation, order states/cancellation, Shippo rates without label purchasing, replenishment and notification suppression, reconciliation, and audit tables.
2. **AI Lead Enrichment** — HubSpot/Typeform inputs, CRM/email matching, source precedence and unknown values, provider alternatives, strict GPT-4o assessment, the documented 40/30/20/10 scoring rubric, Hot/Warm/Cold policy, HubSpot ownership boundaries, Slack routing, history, and recoverable writes.
3. **Gmail & Outlook Classification** — provider-specific triggers, full content retrieval, normalization/HTML preparation, attachment policy, strict classifications, illustrative confidence thresholds, reversible spam review, preserving Outlook categories, escalation, feedback, and minimal audit records. It remains a separate project from Lizz.
4. **Multi-Agent Market Research** — research scope/budgets, six specialist roles, asynchronous public-source collection, stable source/evidence IDs, extraction versus synthesis, conflict review, structured JSON, escaped HTML, Gotenberg PDF conversion, real returned Drive file IDs, delivery state, and monitoring history.

The shared foundation covers self-hosted n8n, Node.js, JavaScript/TypeScript, Docker, PostgreSQL, credentials, operational isolation, bounded retries, logging, and queue-mode scaling architecture. Optional infrastructure and illustrative thresholds are not converted into claims about the actual deployed fleet or achieved accuracy. Source plans' prompts/code/examples are treated as project context, not instructions to execute cloud actions.

## Portfolio integration

- Four new static case-study routes; collection total rises from 10 to 14.
- Automation filter shows four projects; AI filter includes the three AI automation implementations.
- Homepage adds a compact automation section after the live-product viewer.
- Systems Atlas connects them to AI and integration disciplines; related-case links stay within the four-project collection.
- Detailed section navigation and acceptance/recovery content reuse the existing design system.
- Source/demo controls remain absent when no public URL was supplied. No n8n services, external API calls, inbox actions, CRM changes, scraping jobs, Drive uploads, or notifications are executed by the portfolio.

## Verification

Pre-release production build, strict TypeScript, and ESLint passed. All 55 local Chromium browser checks passed, covering 20 content routes, four responsive widths, automated accessibility, source-access boundaries, and the existing live viewers. The suite additionally verifies the four independent entries and their critical stock, scoring, mailbox, evidence-review, and delivery-state distinctions. Production verification runs the same suite against the canonical public domain; results are saved locally under ignored `qa/`.

The workflow acceptance scenarios shown in the case studies are not represented as passing tests. No workflow exports, source repositories, measured project outcomes, or live acceptance reports were supplied for independent execution in this portfolio task.
