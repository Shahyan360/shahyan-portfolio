# Project inventory

Reviewed 25 October 2026 against the supplied brief and the accessible Shahyan360 repositories. The latest chat instructions override the original brief's broad project list. Public products receive primary placement; professional implementations provide depth.

| Project | Category / status | Technology | Evidence and contribution | Public presentation | Missing information |
| --- | --- | --- | --- | --- | --- |
| [Lizz](https://github.com/Shahyan360/Lizz-demo), formerly Maxine | AI / live demo | Next.js 16, React, TypeScript, Gemini, Zod, Blob | README, public-app/package.json, architecture documentation, screenshot assets. Full-stack AI workflow and isolated demo preparation; preserve distinction from original private application. | Featured; [live demo](https://lizz-ai.vercel.app/demo); interactive iframe and case study | No production tenant/customer readiness claim. Public runtime does not run live vector retrieval or mailbox integrations. |
| [Aster ERP](https://github.com/Shahyan360/aster-erp), formerly Zascare | Finance / live portfolio sandbox | Angular 21, PrimeNG, NgRx, RxJS, decimal.js | README, package.json, architecture and workflow documentation, screenshots. Authorized adaptation of an existing enterprise frontend; original template/contributions retained. | Featured; [sandbox](https://aster-erp.vercel.app); iframe and case study | No production accounting backend, banking connection or real approval action. Do not claim sole authorship. |
| [Meridian ERP](https://github.com/Shahyan360/meridian-erp) | ERP / hosted full-stack application | React/Vite, Express, Prisma, PostgreSQL, SQLite local demo, Gemini | README, client/server manifests, repository structure and live public website. Full-stack operational flows, permissions, accounting and assistant. | Featured; [website](https://meridian-erp-khalidshahyan0-1999s-projects.vercel.app); iframe and case study | Hosted workspace uses private owner authentication. Local demo credentials do not grant public production access. |
| [Unico](https://github.com/Shahyan360/odoo-unico-custom-addons) | Enterprise Odoo / sanitized source export | Odoo 19, Python ORM, PostgreSQL, QWeb, OWL, Stripe | README, complete file tree, unico_purchase manifest and sale_order.py. Custom development and solution consulting; source retains Klouded module attribution. | Featured enterprise case study; 14 modules; original conceptual art and illustrative workflow | Odoo runtime not independently tested; some proprietary dependencies omitted. Business-impact metrics withheld. |
| [DSL Group](https://github.com/Shahyan360/-odoo-dsl-custom-addons) | Enterprise Odoo / sanitized source export | Odoo 19, Python ORM, XML/QWeb, OWL | README, complete tree, duplicate_mixin.py, map manifest. Custom development and consulting; author/license notices retained. | Featured enterprise case study; five modules; original conceptual artwork | Export is not the complete multi-company implementation. Runtime and private customer scale not independently validated. |
| [Embodied AI](https://github.com/Shahyan360/Unity-fyp) | Local AI / ongoing research | Unity, C#, Flask, Ollama/Llama | Root tree, PROJECT_COMPLETION.md, backend README. Scenario, object-context, local model, navigation and response-contract behavior documented by repository. | Playground research entry, clearly labeled local application and conceptual artwork | No public browser build; no Unity runtime validation performed in this portfolio task. Do not equate completion guide with a commercial release. |
| [use-case](https://github.com/Shahyan360/use-case) | Archived / small repository | Not established | Discovered in full accessible account search; archived, size 1KB; no README returned | Excluded | Insufficient substantive implementation evidence for portfolio placement. |
| Shopify–Odoo integration | Professional implementation / supplied history | Odoo 17/18, Python, Shopify APIs, webhooks, PostgreSQL | Alam Cotton Mills experience from user-provided brief | Detailed experience implementation story; no fabricated repository | Source and numerical performance outcomes not independently validated. |
| MXT manufacturing ERP | Professional implementation / supplied history | Odoo 17, ORM, BOMs, PostgreSQL, Docker | User-provided MXT work history | Detailed implementation story | Runtime/source and quantified outcomes not validated. |
| LAPS education ERP | Professional implementation / supplied history | Odoo, relational data, ERP configuration | User brief; initial scope is two schools | Detailed implementation story and employment history | Wider franchise scope withheld; no 80-campus deployment claim. |
| UAE e-invoicing | Professional implementation experience | XML/UBL, invoice mapping, PINT-AE/Peppol concepts | User brief / Alam Cotton Mills | Detailed implementation story; no legal certification claim | No public source or independently verified regulatory compliance evidence. |

The account search returned seven accessible repositories. The generic repository-list endpoint returned no results, so account-scoped repository search was used. Private original ai-assistant configuration was not readable through the connector; no private files or credentials were copied into this portfolio.

## Exclusions from the original broad brief

The task manager, APS portal, school desktop app, Android app, traffic ML projects, maze/treasure algorithms, knapsack, Pygame, UPPAAL, DAO, MedInventory, society database, Figma UI, IoT assignment, procurement auditor and Synoptix landing-page specifics are not promoted to public project entries. Current accessible repositories did not substantiate them, and the user explicitly asked for curation. The confirmed major professional implementations remain in the experience narrative.

## Content audit / validation queue

- Employment dates use the latest four-company timeline from the supplied brief. No earlier resume was substituted.
- Degree is **BS Software Engineering — University of Lahore**, with no year, completion claim or “expected” label.
- No 5+ years claim: the published timeline begins January 2022.
- No customer testimonials, awards, certifications, revenue, user counts or production adoption claims were invented.
- DSL five companies / 23 users / 65 locations, Unico 35 users / 5,000+ orders, Shopify 300 orders/day, 80%/70% improvements, report timing 30→5s and MXT 40% improvement require validation. They are not published as achievements.
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

## Live embed configuration

All three product hosts originally returned `X-Frame-Options: DENY`; Lizz/Aster additionally used `frame-ancestors 'none'`. The GitHub connector denied writes, so **no remote source edits were made**. Authorized Vercel project response-header transforms now remove X-Frame-Options and set CSP with only `'self'`, the exact portfolio origin, and `http://127.0.0.1:3000` as frame ancestors. All other existing CSP directives are preserved. No authentication or deployment protection was disabled.

Portfolio origin: `https://shahyan-systems-portfolio.copperfrost647061.chatgpt.site`

| Product | Vercel project | Route version |
| --- | --- | --- |
| Lizz | prj_5NsETvr8xzm9hdIt3MxzEjyZVwWX | dbfa33ca-7e9f-4840-9558-267e0196d756 |
| Aster | prj_5uI88ZffDZODjUBZa9X32T86nyAA | ba3d3513-294b-47dc-9e02-30be61ce124c |
| Meridian | prj_UX57rsrv3VkzKFH9CtmaViekWWO6 | 3b13b59c-eda0-4da9-af1e-408cfdee585c |

If the portfolio moves to another domain, update these exact allowlists; never replace them with `*`. The production Meridian application remains owner-authenticated. Embedding its public website does not grant workspace access.
