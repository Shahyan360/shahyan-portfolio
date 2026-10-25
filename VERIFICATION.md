# Verification — 25 October 2026

## Build and code

- Next.js 16.4.3 production static export: passed; all requested routes and five case studies rendered to HTML.
- Strict TypeScript: passed through `npm run build`; standalone `npm run typecheck` also passed.
- `npm audit`: zero vulnerabilities after upgrading the build-only sharp dependency to 0.35.5.
- No live AI provider key, contact backend, private customer records or database are included in the portfolio.
- Native internal links avoid Next static-export segment-prefetch 404s and use progressive cross-document View Transitions where supported.

## Browser and interaction checks

Final coverage: **27 checks passed in Chromium and 27 in Firefox**. The final Chromium run had one transient timeout while loading the external Lizz host; that exact test passed in 2.5 seconds on a targeted rerun. Firefox's complete final 27-test run passed. No assertion or production code was weakened to clear this external timeout.

The Playwright suite covers:

- Direct loading of all 11 main/content routes, one H1, metadata and browser exceptions.
- 320, 390, 768 and 1440px widths across all routes: no horizontal page overflow or broken loaded images.
- Five-project curation and all four gallery filters.
- Systems Atlas domain updates, conventional links and lazy Three.js rendering.
- Enterprise workflow step selection, next/reset states, and AI human-review simulation.
- Quick View persistence and retained case-study access.
- Mobile menu, Escape and focus return.
- Real mailto/tel targets, no fake contact form.
- Portrait only on home/About; degree text without a graduation date or completion claim.
- Internal links and real 404 response.
- Native navigation from home → Work → Lizz → Work with no failed local requests.
- Reduced-motion content visibility and disabled headline animation.
- All three actual hosted applications rendered inside the portfolio; external links and expanded-view Escape behavior work. Lizz Inbox interaction was verified inside its frame without a provider call.
- Homepage live-project switching.

The original system Firefox installation failed to launch (`spawn UNKNOWN`). A fresh Firefox copy installed into ignored `.browsers/` resolved the environment failure; the browser suite then ran successfully. Use that project-local installation for reproducibility if the system copy remains damaged.

## Accessibility

Automated axe WCAG A/AA scans passed on home, work, about, contact, experience, playground and Lizz. Reduced-motion, visible focus, native controls, skip link, meaningful iframe title and expanded-view focus handling are implemented. An initial Unico artwork contrast issue was fixed. Lighthouse label/name findings were also fixed. Automated tools do not substitute for a complete manual screen-reader audit.

## Lighthouse mobile

Measured against the exported homepage served locally with compression, using Lighthouse 13.5.0 and Chromium:

| Category | Score |
| --- | ---: |
| Performance | 95 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |

Mobile LCP: 3.0s in the recorded simulated run. These are local lab measurements; actual hosting, device, network and third-party embed performance can vary. The baseline was 77 performance before compression/prefetch corrections. The final audit reports no browser console errors. External iframes are deliberately not loaded during the initial-page audit.

## Visual QA

Reviewed the mobile hero, desktop hero, real Lizz embedded Inbox and actual Meridian public website in the in-app browser. Portrait preserves realistic features, with editorial rectangular crops. Screenshots and local test reports live in ignored `qa/`; original public product captures are kept with the assets.

## Limits and deliberate omissions

- No current resume was specifically validated for download. Older resume files were not automatically published.
- Historical business-impact numbers remain withheld pending validation; source-observable module counts are used instead.
- Public Odoo exports were inspected, not executed as complete ERP installations. Their case studies explicitly describe dependencies/runtime limits and contribution boundaries.
- Meridian's public website embeds; its hosted workspace retains private owner authentication.
- Unity research is repository-documented and was not independently run during this portfolio task.
- Embedded applications retain their own state, availability, accessibility and browser-cookie constraints. External opening is always provided.
- New connected Sites publication uses the default owner-private audience. A future custom domain needs matching metadata and application frame-ancestor allowlists.
