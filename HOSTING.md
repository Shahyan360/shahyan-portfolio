# Hosting and deployment

The source exports to `out/`. This is a static, client-enhanced portfolio; its contact action is a real `mailto:` link. No credential or private environment value is required. `NEXT_PUBLIC_SITE_URL` is intentionally public and configures canonical/social/sitemap origins.

Recommended response headers at the host:

```text
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src https://lizz-ai.vercel.app https://aster-erp.vercel.app https://meridian-erp-khalidshahyan0-1999s-projects.vercel.app; object-src 'none'; base-uri 'self'
```

Next.js static export includes inline hydration scripts; do not add a script restriction incompatible with the built output. Test any CSP against all routes and the optional 3D view before enforcing it. The static preview server includes nosniff and the referrer policy, but does not claim to configure the production host's global security headers.

## Application embed allowlists

The three applications initially denied all framing. Vercel response-header transforms now remove X-Frame-Options and replace only the frame-ancestors directive (preserving other CSP directives) with:

```text
frame-ancestors 'self' https://shahyan-systems-portfolio.copperfrost647061.chatgpt.site http://127.0.0.1:3000
```

Vercel project and version IDs are recorded in PROJECT_INVENTORY.md. These rules are managed at the project routing layer, independent of source redeployments. When moving domains, update these exact allowlists. Never allow all framing origins. Keep current authentication, user sessions and access controls intact.

Local URLs using `localhost` instead of `127.0.0.1` are intentionally not allowlisted. Open the documented `127.0.0.1:3000` preview to test frames.

## Publishing

Connected Sites keeps a private default audience. The native deployment result determines actual publication; the expected origin is not evidence of deployment. Reuse the project ID and saved version on retries. A static deployment archive is generated from the same pushed source commit as the exported assets.
