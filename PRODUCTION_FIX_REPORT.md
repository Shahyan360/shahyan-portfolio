# Production correction — 26 October 2026

## Root causes established

1. The public portfolio resolves to `https://shahyan-khalid-360.vercel.app`, but all three applications' frame-ancestor policies still named the private preview origin and local preview. A real browser showed the refused-to-connect frame on the public Lizz case study. All application URLs themselves returned HTTP 200.
2. The viewer marked its `load` event as success, although browsers can fire that event for a blocked cross-origin frame. It had no render acknowledgement, timeout recovery or close/unload action.
3. Lizz's Vercel Git connection pointed at `Shahyan360/Lizz-demo`, branch `main`, but its build root was unset. The isolated public application is in `public-app`. That root was corrected before the new Git deployment.
4. Canonical/social/sitemap structured metadata still fell back to the original preview service. There was no portfolio environment override, so the source fallback was authoritative.
5. Two public case-study introductions and four documentation references included obsolete naming history.

## Implemented corrections

- Source and Vercel response-header policies use exact ancestors: self, the canonical public portfolio, and `http://127.0.0.1:3000`. Existing CSP directives, authentication, deployment protection and private workspace access remain intact.
- Each public application now includes an acknowledgement bridge. It accepts only its direct parent at an allowlisted origin with protocol v1 and a valid nonce. It responds only after visible application UI exists, and shares no credentials, user records or page content.
- The portfolio validates message origin, source iframe, protocol, nonce and access state. `onLoad` begins verification; it never establishes readiness. A 15-second unconfirmed state and a specific browser-offline state offer retry/external opening. Restricted pages receive an account explanation.
- Launch, reload, expand/collapse, Escape from inside the child, close/unload, focus return and external opening are supported. Homepage viewers are lazy, and switching preserves already launched views without preloading all three applications.
- Lizz, Aster ERP and Meridian ERP descriptions explain current functionality, actual contributions, architecture and public-access boundaries. Obsolete names are removed from public copy, README and inventory. Source identifiers and database/API internals were not cosmetically renamed.
- Unico and DSL case studies remain, with the broader QuickBooks and multi-company delivery context distinguished from public addon exports. Alam Cotton Mills, MXT, LAPS and e-invoicing stories remain.
- Production origin is centralized in `src/lib/site.ts`. Canonicals, OG image URLs, Person data, robots and sitemap use the public origin. `vercel.json` records build output and compatible security headers.
- ESLint and additional browser reliability checks were added. Existing visual identity, portrait treatment, responsive layouts, Atlas and simulations remain.

## Production mappings

| Repository | Vercel project | Branch / root | Stable public URL |
| --- | --- | --- | --- |
| Shahyan360/shahyan-portfolio | shahyan-portfolio | main / root | https://shahyan-khalid-360.vercel.app |
| Shahyan360/Lizz-demo | lizz-ai | main / public-app | https://lizz-ai.vercel.app/demo |
| Shahyan360/aster-erp | aster-erp | main / root | https://aster-erp.vercel.app |
| Shahyan360/meridian-erp | meridian-erp | main / root | https://meridian-erp-alpha.vercel.app |

These are verified production domains, not generated build URLs. The older portfolio short domain redirects to the canonical one. The old long Meridian project alias still serves the application, but the portfolio now uses the domain returned by Vercel's project-domain records.

## Application releases verified

| Product | Git commit | Automatic production deployment |
| --- | --- | --- |
| Lizz | 7f8e87b73536224d8e671b7a1754347c9505a020 | dpl_F9fHBCGRDKVxRzLrGfNjxvEyo48u |
| Aster ERP | 90650bfa5394c134b98fb3e3c1b379cb265ad5e9 | dpl_9JUVEEN8xqY21mz49hKm5bUtLAkq |
| Meridian ERP | 6cf30959f51f3074e4ff97238325b3d497f939ff | dpl_8wZ5ABgXSATbqfbqpQTteA5jzEMp |

All three were triggered by pushing their connected main branches and reached READY. The production bridge assets returned JavaScript with HTTP 200 on the public domains. The source bridge suites passed 7 checks per application (21 total).

## Portfolio verification

Before publication: strict typecheck, ESLint, production static export, dependency audit and 39 Chromium checks passed. Coverage includes all routes, four widths, automated WCAG scans, both simulations, the Atlas, current copy/metadata, real desktop/mobile embeds, child Escape, reload, close, lazy retained views, scrolling, authentication reporting, offline and unconfirmed recovery, and spoofed-message rejection. The anonymous Meridian session endpoint returned no user.

Public production verification is recorded after the Git-triggered portfolio deployment; see the completion update in this report and ignored `qa/production-results.json` when available. The test suite can target production through `BASE_URL` without starting a local server. Failure/restricted-state fixtures are intercepted fictional documents in the test context, while the real embed checks use the actual hosted applications.

### Public production verification completed

The functional release `1498d3f1dc8fe13f3826190c15acc7aa9ed6919d` deployed automatically from Git to `dpl_7MV2QBkJWdg3UattJ9J35V9zFK5b`, reached READY, and served the canonical public domain with the intended CSP and current copy.

- Chromium: **39/39 production checks passed**, no skipped, unexpected or flaky checks.
- Firefox: **39/39 production checks passed**, no skipped, unexpected or flaky checks.
- Application bridges: **21/21 focused checks passed** (seven per application).
- Typecheck, ESLint, production build and npm dependency audit passed; the audit reported zero vulnerabilities.
- Real desktop/mobile Lizz, Aster and Meridian frames acknowledged rendered UI. Expand/collapse, Escape from the child, reload and close/unload were verified against those hosts. Parent scrolling, lazy retained views and neutral loading failures were also covered.
- Recovery and restricted-state fixtures were tested in isolated browser contexts on the deployed portfolio. These fixtures do not alter a hosted application's production behavior.
- Automated WCAG A/AA scans passed on the seven checked portfolio routes. No obsolete branding remained in public page copy or metadata; canonical/social/sitemap origins used the public domain.
- Manual in-app-browser verification opened Lizz's Inbox and Aster's demo financial-year flow and finance dashboard inside the public portfolio. Those checks recorded no browser console errors. Screenshots are saved locally in ignored qa/.
- An anonymous request to Meridian's session endpoint returned no user. No owner account, private session or customer workspace was exposed.

The final follow-up commit updates this verification record only. It does not alter the tested application behavior. No remaining manual configuration is required for the public viewers; Meridian's authenticated workspace continues to require its own owner account by design.

The first portfolio release attempt hit Vercel's `NEXT_NO_ROUTES_MANIFEST` because an explicit `out` override conflicts with its Next.js framework builder. That override was removed; static export remains enabled, and the framework integration selects its build output automatically. The failed attempt was not promoted over the existing public site.

## Remaining access boundaries

Meridian exposes its public website; its real workspace still requires its own owner account. The portfolio neither supplies admin credentials nor shares a private session. Browser cookie policies or a future external outage may still limit an embedded application; the viewer will explain unconfirmed loading and offer external opening. No account or permission change is needed to explore Lizz's or Aster's public demonstration.

No further authorization was needed: existing Git credentials and the connected Vercel account allowed the requested source pushes and configuration changes. Future portfolio-domain changes require synchronized CSP and bridge allowlists as documented in HOSTING.md.
