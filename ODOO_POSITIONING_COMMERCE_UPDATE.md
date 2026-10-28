# Senior Odoo positioning and Commerce Sync — 28 October 2026

## Owner-confirmed positioning

The user explicitly requests primary positioning as **Senior Odoo Developer & Solution Consultant** and confirms that the Odoo projects are implementations they personally delivered. The portfolio now leads with that role in the header, hero, About, Contact, metadata, social image, and Person structured data. Odoo implementations appear before complementary products and automation on the homepage, and Odoo is the initial work filter.

All seven Odoo pages use Implementation / Implemented by me language and first-person responsibility. The procurement auditor is an implemented prototype, not an unbuilt concept. Existing source author/license notices and the specific live-acceptance limits in the recent QuickBooks work remain accurate. The user confirmation establishes delivery attribution; it does not invent production-acceptance results, metrics, or sole authorship of supplied connector features.

## Commerce Sync evidence upgrade

The existing `/work/ecommerce-order-inventory-sync/` entry now links to `Shahyan360/n8n-ecommerce-inventory-sync` and `https://n8n-ecommerce-inventory-sync.vercel.app`. It is not duplicated as another project.

The repository was inspected at `75c288006f3e2e5538e9fe93c561f58230451172`, including README, architecture, deployment readiness, testing, gateway/inventory TypeScript, workflow exports, public simulator source, and static build boundaries. The portfolio now describes concrete signed ingress, durable inbox leasing, lifecycle/revision protection, atomic stock allocation, cancellation/expiry, shipping policy, notification outboxes, reconciliation, and the 13-workflow library.

GitHub CI run `40619559757` was verified completed successfully for `a2bb2f49e6572284dec71624230ebcea0e5e6cb8`. The repository records 64 backend cases and eight simulator cases in that run. These historical CI results apply to that commit. No client PostgreSQL, merchant account, or real n8n environment was accessed during the portfolio update.

Three actual public-demo screenshots—Overview, Inventory, Workflows—were captured through Chrome and optimized to WebP. They show fictional session data, and appear in the project preview and a captioned screenshot gallery with full-image links.

## Embedded simulator

The public app originally used `frame-ancestors 'none'`. Commerce commit `9119339d53c858141f9a736d211f111641f90c49` adds exact ancestors for self, the canonical public portfolio, and 127.0.0.1:3000. Other CSP directives remain intact.

Its bridge checks parent identity, exact origin, protocol, and nonce, and waits until the simulator's initial data is rendered. It sends readiness/Escape only, without records or credentials. Public build and release allowlists include the bridge, and CI now runs its eight checks. The app deployment `dpl_98CyLTDwjR9TYesJsi8Jh5AzcEwg` reached READY from Git; public headers and bridge JavaScript were verified.

The portfolio adds the application origin to frame-src and exposes the existing lazy, verified viewer in the project page and four-build homepage selector. The simulator remains separate from the operational backend: no labels, charges, supplier orders, or merchant credentials are connected.

## Verification

- Portfolio production build, strict TypeScript, and ESLint passed.
- Local route, metadata, four-width layout, accessibility, Odoo attribution, source/screenshot, and existing interaction checks passed. Desktop/mobile Commerce tests additionally verified actual rendered UI, the last-unit scenario, reload, Escape/collapse, and close/unload.
- Commerce public simulator: eight existing tests passed locally without a database connection.
- Commerce bridge: eight focused origin/readiness/Escape tests passed.
- Commerce TypeScript and public builds passed; release scan reported no credential/private-artifact leaks.
- Final production Chromium/Firefox reports are retained in ignored `qa/` when completed. The portfolio browser suite does not execute live merchant operations or reproduce the historical backend CI suite.
