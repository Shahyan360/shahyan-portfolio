# Project inventory

Reviewed 25 October 2026 against the supplied brief and the accessible Shahyan360 repositories. The latest chat instructions override the original brief's broad project list. Public products receive primary placement; professional implementations provide depth.

| Project | Category / status | Technology | Evidence and contribution | Public presentation | Missing information |
| --- | --- | --- | --- | --- | --- |
| [Lizz](https://github.com/Shahyan360/Lizz-demo) | AI / live demo | Next.js 16, React, TypeScript, Gemini, Zod, Blob | README, public-app/package.json, architecture documentation, screenshot assets. Full-stack AI workflow and isolated demo preparation; preserve distinction from original private application. | Featured; [live demo](https://lizz-ai.vercel.app/demo); interactive iframe and case study | No production tenant/customer readiness claim. Public runtime does not run live vector retrieval or mailbox integrations. |
| [Aster ERP](https://github.com/Shahyan360/aster-erp) | Finance / live portfolio sandbox | Angular 21, PrimeNG, NgRx, RxJS, decimal.js | README, package.json, architecture and workflow documentation, screenshots. Authorized adaptation of an existing enterprise frontend; original template/contributions retained. | Featured; [sandbox](https://aster-erp.vercel.app); iframe and case study | No production accounting backend, banking connection or real approval action. Do not claim sole authorship. |
| [Meridian ERP](https://github.com/Shahyan360/meridian-erp) | ERP / hosted full-stack application | React/Vite, Express, Prisma, PostgreSQL, SQLite local demo, Gemini | README, client/server manifests, repository structure and live public website. Full-stack operational flows, permissions, accounting and assistant. | Featured; [website](https://meridian-erp-alpha.vercel.app); iframe and case study | Hosted workspace uses private owner authentication. Local demo credentials do not grant public production access. |
| [Unico](https://github.com/Shahyan360/odoo-unico-custom-addons) | Enterprise Odoo / sanitized source export | Odoo 19, Python ORM, PostgreSQL, QWeb, OWL, Stripe | README, complete file tree, unico_purchase manifest and sale_order.py. Custom development and solution consulting; source retains Klouded module attribution. | Featured enterprise case study; 14 modules; original conceptual art and illustrative workflow | Odoo runtime not independently tested; some proprietary dependencies omitted. Business-impact metrics withheld. |
| [DSL Group](https://github.com/Shahyan360/-odoo-dsl-custom-addons) | Enterprise Odoo / sanitized source export | Odoo 19, Python ORM, XML/QWeb, OWL | README, complete tree, duplicate_mixin.py, map manifest. Custom development and consulting; author/license notices retained. | Featured enterprise case study; five modules; original conceptual artwork | Export is not the complete multi-company implementation. Runtime and private customer scale not independently validated. |
| [Embodied AI](https://github.com/Shahyan360/Unity-fyp) | Local AI / ongoing research | Unity, C#, Flask, Ollama/Llama | Root tree, PROJECT_COMPLETION.md, backend README. Scenario, object-context, local model, navigation and response-contract behavior documented by repository. | Playground research entry, clearly labeled local application and conceptual artwork | No public browser build; no Unity runtime validation performed in this portfolio task. Do not equate completion guide with a commercial release. |
| [use-case](https://github.com/Shahyan360/use-case) | Archived / small repository | Not established | Discovered in full accessible account search; archived, size 1KB; no README returned | Excluded | Insufficient substantive implementation evidence for portfolio placement. |
| Shopify–Odoo integration | Professional implementation / supplied history | Odoo 17/18, Python, Shopify APIs, webhooks, PostgreSQL | Alam Cotton Mills experience from user-provided brief | Dedicated case study, homepage/Atlas links and experience story; no fabricated repository | Source and numerical performance outcomes not independently validated. |
| MXT manufacturing ERP | Professional implementation / supplied history | Odoo 17, ORM, BOMs, PostgreSQL, Docker | User-provided MXT work history | Dedicated case study, homepage/Atlas links and experience story | Runtime/source and quantified outcomes not validated. |
| LAPS education ERP | Professional implementation / supplied history | Odoo, relational data, ERP configuration | User brief; initial scope is two schools | Dedicated case study, homepage/Atlas links and employment history | Wider franchise scope withheld; no 80-campus deployment claim. |
| UAE e-invoicing | Professional implementation experience | XML/UBL, invoice mapping, PINT-AE/Peppol concepts | User brief / Alam Cotton Mills | Dedicated case study, homepage/Atlas links; no legal certification claim | No public source or independently verified regulatory compliance evidence. |

The account search returned eight accessible repositories, including the portfolio. The generic repository-list endpoint returned no results, so account-scoped repository search was used. Private original ai-assistant configuration was not readable through the connector; no private files or credentials were copied into this portfolio.

## Exclusions from the original broad brief

The task manager, APS portal, school desktop app, Android app, traffic ML projects, maze/treasure algorithms, knapsack, Pygame, UPPAAL, DAO, MedInventory, society database, Figma UI, IoT assignment and Synoptix landing-page specifics are not promoted to public project entries. Current accessible repositories did not substantiate them, and the user explicitly asked for curation. The confirmed major Odoo implementations now have dedicated case-study pages. The latest request also includes the procurement auditor as a prototype sourced from the supplied brief, without a repository or runtime claim.

## Content audit / validation queue

- Employment dates use the latest four-company timeline from the supplied brief. No earlier resume was substituted.
- Degree is **BS Software Engineering — University of Lahore**, with no year, completion claim or “expected” label.
- No 5+ years claim: the published timeline begins January 2022.
- No customer testimonials, awards, certifications, revenue, user counts or production adoption claims were invented.
- DSL user/location counts, Unico 35 users / 5,000+ orders, Shopify 300 orders/day, 80%/70% improvements, report timing 30→5s and MXT 40% improvement require validation. They are not published as achievements.
- Downloadable resume is omitted pending a specifically validated current file. Older resumes found on disk were not published automatically; the brief warns about conflicting dates.
- Unico and DSL source presence does not establish sole authorship. The public case studies explicitly retain contribution boundaries.
- Lizz live inference behavior and source/runtime boundaries derive from its repository; this portfolio's own AI pipeline is deterministic and labeled illustrative.

## Asset provenance

- Portrait: supplied PNG, used only on homepage and About, optimized to 900/600/540px WebP crops. Natural features preserved; mild presentation-only CSS grading.
- Lizz: `docs/screenshots/lizz-overview.png`, repository screenshot of fictional data.
- Aster: `docs/screenshots/overview.jpg`, repository screenshot of fictional data.
- Meridian: actual public website capture made during this task, optimized to WebP.
- Enterprise artwork, Atlas, research-room illustration and OG graphic: original CSS/SVG/Three.js visuals, labeled conceptual where appropriate.
- Manrope and Instrument Serif are self-hosted Fontsource packages under their distributed OFL licenses. Metadata uses system monospace; no external font request is needed.

## Production integration

The portfolio is published from Shahyan360/shahyan-portfolio, main, at https://shahyan-khalid-360.vercel.app. Current production application URLs are Lizz https://lizz-ai.vercel.app/demo, Aster ERP https://aster-erp.vercel.app, and Meridian ERP https://meridian-erp-alpha.vercel.app.

All three application source repositories now contain an origin-checked rendered-UI acknowledgement bridge and focused security tests. Their CSP and Vercel response-header allowlists use the canonical portfolio domain and 127.0.0.1 local preview. Lizz's Vercel build root is public-app. Each application update was pushed to main and triggered a production Git deployment. See HOSTING.md for exact mapping and maintenance.

Professional implementation context remains distinct from source-export scope. The current brief reaffirms DSL's five-company environment and Unico's QuickBooks integration work; those are described as implementation responsibilities without publishing private data or unsupported impact figures.

## Odoo expansion — 27 October 2026

The latest request explicitly asks for all supplied Odoo project details. `src/content/odooProjects.ts` now holds seven dedicated studies: Unico, DSL Group, Alam Cotton Mills, UAE e-invoicing, MXT Manufacturing, LAPS Education ERP, and Procurement Auditor. The last is a prototype based on the supplied brief, without an independently verified runtime or repository. Six professional stories and that prototype are linked through the collection, homepage, experience page, and Systems Atlas. The three live applications retain primary homepage placement.

Unico's recent supplied update covers connector 19.0.1.2.11 → 19.0.1.6.3, company/environment bindings, PO configuration, AP references, release rights, vendor/product mapping, existing MTO configuration, Windows queue investigation, shared qbo_status_sync.py handling, retries, stale attempts, connection identity, Pending Verification, committed PO/receipt outcomes, cancellations, and clean delivery. Reported local results are 252 compatibility tests, 22 failure scenarios plus five lifecycle checks, and a broader 560-test run with 546 passing and 14 baseline failures/errors. The four-file change and 231-file package are reported handoff facts, not artifacts independently rerun or inspected during this portfolio update.

These connector results do not retroactively validate the public addon export. Production-equivalent staging, compatible queue dependencies, module upgrade/restart, and representative live QBO Sandbox acceptance remain required. The portfolio does not claim a completed production rollout, confirmed live PO export, newly authored financial connector, or publication of the private connector package.

## Automation expansion — 28 October 2026

The user confirmed building four independent projects from the supplied n8n implementation plans. They are presented as automation implementations, not relabeled as unfinished concepts. Their technical descriptions distinguish the documented architecture, optional scaling paths, example policies, and acceptance requirements from independently verified runtime behavior.

| Case study | Supplied implementation scope | Public evidence boundary |
| --- | --- | --- |
| Order & Inventory Sync | Shopify/WooCommerce ingestion, event/order identity, authoritative reservation, Shippo rates, reorder recommendations, Slack alerts, reconciliation | No public stores, endpoint, workflow export, passing acceptance report, or throughput figure supplied |
| AI Lead Enrichment | HubSpot/Typeform, enrichment provenance, GPT-4o assessment, deterministic scoring, CRM updates, routing and history | Provider alternatives remain alternatives; scoring weights are policy, not measured predictive accuracy |
| Gmail & Outlook Classification | Provider triggers/content retrieval, structured classification, labels/categories, confidence/review, feedback and audits | Independent from Lizz; no private mailbox data, public connection, accuracy result, or destructive mailbox demo |
| Multi-Agent Market Research | Six specialist roles, bounded collection, evidence IDs, review, JSON/HTML/Gotenberg PDF, Drive delivery and notifications | No actual report, deployed agent URL, performance benchmark, or guaranteed factual accuracy supplied |

Shared foundation: self-hosted n8n, Node.js, Docker, PostgreSQL, JavaScript/TypeScript, protected credentials, recoverable state, and optional Redis/worker scaling. No attribution to an employer or client was added because the supplied plans do not establish one. The previously listed 19 omitted academic/other projects remain omitted; this request authorizes these four additions only.
