# Shahyan — Senior Odoo Developer portfolio

Odoo-focused portfolio for Muhammad Shahyan Khalid, Senior Odoo Developer & Solution Consultant. Built with React, strict TypeScript, authored CSS, self-hosted fonts and an on-demand Three.js Atlas. No database, API key, tracking service or contact backend is needed.

## Run

Node 24 and npm 11 were used for verification.

```powershell
cd D:\Portfolio\shahyan
npm ci
npm run dev
```

Development: http://127.0.0.1:3000. For the exported production build:

```powershell
npm run build
npm start
```

## Routes

`/`, `/work/`, `/work/lizz/`, `/work/aster/`, `/work/meridian/`, `/work/unico/`, `/work/dsl/`, `/work/alam-cotton-mills/`, `/work/uae-e-invoicing/`, `/work/mxt-manufacturing/`, `/work/laps-education/`, `/work/procurement-auditor/`, `/experience/`, `/about/`, `/playground/`, `/contact/`, and a real 404. Every route is exported to its own HTML directory for direct loads/refreshes. Sitemap, robots, social image and Person structured data are included.

## Content

Edit `src/content/profile.ts`, `experience.ts`, `projects.ts`, `odooProjects.ts`, `automationProjects.ts`, `skills.ts`, and `achievements.ts`. The same records feed homepage, gallery, case studies and Quick View. Read `PROJECT_INVENTORY.md` before changing attribution, project status, metrics or demo claims. No resume download is published until a current file is validated.

Odoo implementations lead the homepage and the default work filter. The header, hero, About, Contact, SEO/social metadata, and Person job title use the Senior Odoo Developer positioning. Main complementary products: **Lizz**, **Aster ERP**, **Meridian ERP**. Seven Odoo implementation pages cover Unico, DSL Group, Alam Cotton Mills, UAE e-invoicing, MXT manufacturing, LAPS education ERP, and an implemented procurement-auditing prototype. Unico includes the supplied recent QuickBooks configuration, shared status handler, local validation results, clean handoff, and remaining staging/live-acceptance requirements. Playground contains original workflow studies and the local Embodied AI research entry.

Four additional automation case studies cover order/inventory synchronization, AI lead enrichment/CRM scoring, Gmail/Outlook classification, and multi-agent market research. Their implementation is confirmed by the user; technical scope comes from the supplied implementation plans. Dedicated routes are `/work/ecommerce-order-inventory-sync/`, `/work/ai-lead-enrichment-crm-scoring/`, `/work/gmail-outlook-email-classification/`, and `/work/multi-agent-market-research/`. The portfolio now contains 14 project case studies and 20 content routes. Homepage links, an Automation filter, related studies, and Systems Atlas connections make these discoverable. Commerce Sync now links to its public repository and live simulator, with three authentic screen captures, recorded CI evidence, and a verified embedded viewer. The other three automation projects retain their supplied implementation-plan evidence boundaries.

## Embedded live projects

Homepage and product case studies contain real, scrollable iframes with launch, reload, expand, collapse, close and external-opening controls. They load only after visitor activation. A nonce-bound, origin-checked postMessage acknowledgement confirms that meaningful application UI rendered; an iframe load event alone never marks it ready. Unconfirmed loads and offline browsers receive recoverable explanations. The portfolio never proxies credentials or production data. Meridian's website is public; its workspace requires its own owner account.

The application source and Vercel response-header transforms allow framing only by `https://shahyan-khalid-360.vercel.app`, local preview, and each application itself. See `HOSTING.md` for mapping and configuration. A new portfolio domain must be added to the CSP and bridge allowlists. The four application repositories contain the bridge and its focused security tests.

## Assets

Optimized assets are checked in under `public/images`. Original supplied/repository captures are retained for repeatable local processing. `npm run assets` regenerates them using sharp; the portrait source path in `scripts/assets.mjs` must be updated if the original attachment moves. It is **not** part of a normal build/deployment. Fonts are locally bundled; no remote fonts are fetched at runtime.

## Verify

```powershell
npm run typecheck
npm run lint
npm run build
npm audit
npx playwright install chromium firefox
npm run test:e2e -- --project=chromium
npm run test:e2e -- --project=firefox
```

Tests check all routes, metadata, navigation, four widths (320/390/768/1440), images, keyboard menu behavior, filters, Quick View persistence, the Atlas, both simulations, portrait restrictions, degree copy, automated WCAG A/AA scans and all three real iframe renders. They do not send emails, call live AI, or mutate hosted customer data.

## Deploy

`npm run build` exports a portable static website into `out/`. Deploy **the contents of out/** on a static host supporting directory index files and a 404.html fallback. No server-side Next runtime is required. Set `NEXT_PUBLIC_SITE_URL` to the final absolute origin before building to update metadata and sitemap.

Production is `https://shahyan-khalid-360.vercel.app`. Push to `main` in `Shahyan360/shahyan-portfolio`; its connected Vercel project builds and deploys automatically. `.openai/hosting.json` records the original preview service and is not used for the current GitHub-to-Vercel production deployment.

For Vercel, use the Next.js framework integration, build command `npm run build`, Node 24 and an automatic/unset Output Directory. Its Next.js builder discovers the export; forcing `out` there misdirects its manifest lookup. A generic static host can serve `out` directly. Do not add a SPA catch-all rewrite. Keep all three product embed allowlists in sync with the chosen portfolio origin. Security headers are in `HOSTING.md`.

Run the same browser suite against production by setting the non-secret `BASE_URL` to `https://shahyan-khalid-360.vercel.app` before `npm run test:e2e`. Production tests do not start a local server, send email, invoke live inference, or change private workspace data. Recoverability checks use explicitly intercepted fictional test documents in the browser test context.

## Documentation

- `DESIGN_SYSTEM.md`: visual decisions and interaction language.
- `PROJECT_INVENTORY.md`: repository audit, evidence, contribution boundaries, assets and validation queue.
- `HOSTING.md`: hosting and exact-origin embed configuration.
- `VERIFICATION.md`: results and remaining verification limits.
- `PRODUCTION_FIX_REPORT.md`: production root causes, corrected mapping, releases and reliability verification.
