# Production hosting and embed configuration

Production portfolio: https://shahyan-khalid-360.vercel.app
Repository: https://github.com/Shahyan360/shahyan-portfolio
Vercel project: prj_WAsrZd1De7dicBEatqyX8Mho43t0

Push main to deploy automatically. Build from the repository root with Node 24, npm ci and npm run build. For Vercel's Next.js framework integration, leave Output Directory unset: it discovers the static export automatically and still reads Next's build manifests. Setting it explicitly to out makes that builder look for manifests in the wrong place. A generic static host can serve out/ directly. Do not add a SPA catch-all: each route has its own exported HTML. vercel.json records the build and security headers. The canonical origin is centralized in src/lib/site.ts; NEXT_PUBLIC_SITE_URL is an optional public configuration override. There was no Vercel environment override at audit time.

## Verified application mapping

| Product | Repository / production branch | Root | Framework / build / output | Stable production URL |
| --- | --- | --- | --- | --- |
| Lizz | Shahyan360/Lizz-demo / main | public-app | Next.js / next build / framework-managed | https://lizz-ai.vercel.app/demo |
| Aster ERP | Shahyan360/aster-erp / main | repository root | Angular / npm run build / dist/aster-erp/browser | https://aster-erp.vercel.app |
| Meridian ERP | Shahyan360/meridian-erp / main | repository root | React + Express / npm run build:cloud / client/dist | https://meridian-erp-alpha.vercel.app |

Lizz's Git link was correct, but its root directory was unset. This was corrected to public-app before its new Git-triggered release. This is essential: the repository root contains a separate application and is not the public demo build target. No application credentials, auth policy, or database migration was changed.

The older short portfolio domain redirects to the canonical portfolio. Generated build URLs and branch preview URLs are not used as permanent product links.

## Frame permissions

Each application uses this exact frame-ancestor allowlist in both its source configuration and the Vercel response-header rule:

```text
frame-ancestors 'self' https://shahyan-khalid-360.vercel.app http://127.0.0.1:3000
```

All other existing CSP directives are retained. X-Frame-Options: DENY is removed only because it conflicts with the deliberate exact-origin framing policy. No wildcard ancestors, authentication bypass, or customer-session sharing is used. Localhost is not included: use the documented 127.0.0.1 preview.

| Product | Vercel project | Managed route |
| --- | --- | --- |
| Lizz | prj_5NsETvr8xzm9hdIt3MxzEjyZVwWX | 1a671770-d28f-4641-bef9-fe432392ceae |
| Aster ERP | prj_5uI88ZffDZODjUBZa9X32T86nyAA | 3f0258f3-d70e-4598-a238-8b4c88b1b722 |
| Meridian ERP | prj_UX57rsrv3VkzKFH9CtmaViekWWO6 | 73123922-6797-4c9f-b511-c3ae85f61228 |

Vercel routing transforms are independent of source redeployments. Keep them consistent with the source policy. When changing the portfolio domain, update all three CSP allowlists and all three bridge allowlists, then verify the actual production origin in a browser.

## Render acknowledgement

Each public application serves public/portfolio-embed.js. It responds only to its direct parent at an allowlisted origin, with protocol v1 and a valid session nonce. A response is sent only after visible, meaningful UI exists. It sends no credentials, records, account identifiers or page content. A login route is reported as restricted; the public Aster demo entry is distinguished from private account access.

The parent verifies the exact application origin, iframe window, protocol version and current nonce. A load event starts verification but never establishes readiness. After 15 seconds without confirmation, a neutral fallback offers retry and external opening. Browser-offline state is reported separately. Escape from inside a verified child can collapse the enlarged view. Close unloads the frame.

Meridian's public website is explorable; its workspace still requires an owner account. Embedded login may be affected by browser third-party cookie policies. Use external opening instead of weakening session protections.

Focused bridge checks can be run with node --test scripts/test-portfolio-embed.mjs from Lizz's public-app directory, the Aster root, or the Meridian root. Each suite covers parent origin/source validation, nonce/version validation, blank UI, authentication reporting, trusted Escape messages and standalone no-op behavior.

## Original preview service

.openai/hosting.json is retained as historical project configuration. It does not control the current GitHub-to-Vercel production deployment.
