import type { ComponentProps } from 'react';
// Every route is exported as HTML. Native links avoid RSC prefetch traffic and
// let supported browsers use cross-document View Transitions progressively.
export default function SiteLink(props: ComponentProps<'a'>) { return <a {...props} />; }
