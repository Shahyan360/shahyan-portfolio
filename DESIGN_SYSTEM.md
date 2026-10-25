# Design system — The architecture of intelligent systems

## Direction

An editorial engineering portfolio with warm charcoal, ivory, sage, and vermilion. A large human portrait anchors identity; system diagrams explain the work. Oversized type, deliberate asymmetry and ruled layouts carry the design when animation is disabled.

## Research

Reviewed [Dennis Snellenberg](https://dennissnellenberg.com/) for project hierarchy and clear contact conversion; [Jesper Landberg](https://jesperlandberg.com/) for motion-led project presentation; [Bruno Simon](https://bruno-simon.com/) for discoverable interactions and explicit conventional controls; [Rauno Freiberg](https://rauno.me/) and [Web Interface Guidelines](https://interfaces.rauno.me/) for precise immediate feedback and keyboard/accessibility details. [Aristide Benoist](https://aristidebenoist.com/) was JavaScript-only in the research fetch. Godly's redirect was unavailable. No reference assets, branding or source code were copied.

## Tokens

- Background `#181917`; surface `#20211e`; foreground `#efeee7`; muted `#a8aa9f`; border `#3b3d35`.
- Accent `#f17b5c`; pale sage `#c4ccb3`. Accent provides direction and interaction, not decorative neon.
- Manrope Variable: body, UI, display. Instrument Serif: intentional editorial emphasis. System mono: restrained metadata.
- Typography uses clamp(); desktop body content increases at 1200px. Small metadata is secondary to readable primary content.
- Fluid gutter: 23px mobile, 4.4vw desktop, capped at 88px. Maximum main content width 1660px.

## Compositions

- Hero: three-line engineering statement beside an editorial portrait. Mobile uses a wide crop beneath typography; no circular avatar.
- Selected work: large Lizz introduction, paired Aster/Meridian products, then distinct Odoo source studies.
- Live collection: switch among real websites in a bounded, scrollable frame. Launch on demand, reload, expand/collapse, and always offer external opening.
- Case studies: overview, contribution, challenge, architecture, engineering decisions, scope/outcome, next project. No duplicated case-study source.
- Experience: structured ruled rows; major implementation stories supplement repository-backed projects.
- Contact finale: sage field and oversized serif-inflected statement, with working email/social links.

## Interaction vocabulary

- Brief feedback: 150–300ms button/filter transitions; medium changes: 350–700ms; hero entrance under one second, never blocks navigation.
- Native cursor retained; subtle supplemental desktop ring and limited magnetic CTA movement.
- Project preview movement is small and interruptible. No scroll hijacking or forced intro.
- Systems Atlas: accessible domain buttons update technical summaries and real case-study links. Optional Three.js view loads only after activation; static SVG remains the default.
- 3D: bounded geometry, 1.5x pixel ratio cap, low-power context preference, offscreen/document-hidden pause and resource cleanup. No continuous rotation in reduced-motion mode.
- Enterprise and AI explorers: meaningful state transitions with fictional data. No live-model claim or simulated message-delivery success.
- Quick View: shared content condensed, motion removed, portrait/experimental sections hidden; preference stored locally with versioned key.

## Accessibility and fallbacks

Semantic landmarks and headings, skip link, visible focus, native buttons/links, labeled iframe, status announcements, expanded-view focus containment, Escape behavior, reduced-motion CSS and no dependence on WebGL. Mobile interactions never depend on hover. External hosts retain their own accessibility responsibility.

## Asset treatment

Portrait optimized as three WebP crops, no feature alteration; subtle saturation/brightness grading only. Product previews are authentic captures. Odoo and research visuals explicitly use conceptual labels. Favicon and OG artwork contain no portrait, honoring the placement rule.
