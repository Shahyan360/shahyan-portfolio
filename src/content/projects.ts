import { odooProjects } from './odooProjects';
import { automationProjects } from './automationProjects';
import type { OdooRepository } from './odooRepositories';

export type Project = {
  slug: string; name: string; subtitle: string; category: string; domain: string; status: string;
  description: string; repo?: string; demo?: string; image?: string; color: string;
  imageAlt?: string; imageCaption?: string;
  odoo?: boolean; automation?: boolean; visualLabel?: string;
  role: string; challenge: string; overview: string; architecture: string[];
  implementation: { title: string; text: string }[]; outcome: string; scope: string;
  technologies: string[]; evidence: string;
  coverage?: { title: string; text: string }[];
  validation?: { title: string; text: string }[];
  deliveryNote?: string;
  acceptance?: { title: string; text: string }[];
  acceptanceIntro?: string; verificationUrl?: string;
  screenshots?: { src: string; alt: string; caption: string }[];
  repositories?: OdooRepository[];
  independent?: boolean;
};
export const projects: Project[] = [
  {
    slug: 'lizz', name: 'Lizz', subtitle: 'A calmer inbox. A clearer next step.', category: 'AI · Full-stack', domain: 'ai', status: 'Live public demo',
    description: 'An AI email workspace that classifies messages, extracts request details, and drafts source-grounded replies, with tasks, estimates, and human review.',
    repo: 'Lizz-demo', demo: 'https://lizz-ai.vercel.app/demo', image: '/images/lizz.webp', color: 'sage',
    role: 'AI workflow and full-stack development; public demonstration with isolated fictional data, structured inference, and human review.',
    challenge: 'Business requests arrive as unstructured conversations. Extracting the important details is only half the problem: the proposed response must be explainable, reviewable, and tied to a useful next action.',
    overview: 'Lizz turns incoming email into actionable work: classify the request, extract useful details, consult business references, and prepare a response for human review. The public demo combines live Gemini analysis with seven fictional conversations, editable drafts, team tasks, and draft estimates—without connecting a mailbox.',
    architecture: ['Fictional email', 'Validated sample ID', 'Gemini inference', 'Zod validation', 'Human review', 'Local tasks & drafts'],
    implementation: [
      { title: 'Constrain the model boundary', text: 'The public API accepts validated sample IDs. Fixed fictional references provide context, while constrained JSON and Zod schemas validate results before the interface renders them.' },
      { title: 'Make review an explicit step', text: 'Draft editing, approval, and rejection are visible workflow states. No confidence score or automation rule can send a real email or authorize a financial action.' },
      { title: 'Budget inference before it runs', text: 'Durable private Blob quota reservations bound shared usage before the provider is called. Timeouts and labeled sample responses keep the demonstration useful when live inference is unavailable.' },
      { title: 'Separate product architecture from the demo', text: 'The original application contains Prisma/MySQL, Redis/BullMQ, Qdrant, and provider workflows. The public Next.js runtime deliberately isolates those modules and uses per-tab demonstration state.' },
    ], outcome: 'A deployed, inspectable AI workspace with live Gemini inference and a clear human review boundary. Visitors can distinguish model-generated results from explicitly labeled sample output.',
    scope: 'The public demo does not send email, connect customer accounts, run live vector retrieval, or provide multi-tenant customer workspaces. Demonstration data is fictional.',
    technologies: ['Next.js 16', 'React', 'TypeScript', 'Gemini', 'Zod', 'Vercel Blob'], evidence: 'README.md and public-app/package.json',
  },
  odooProjects[0],
  {
    slug: 'aster', name: 'Aster ERP', subtitle: 'Clarity, down to the decimal.', category: 'Finance · Frontend', domain: 'products', status: 'Live portfolio sandbox',
    description: 'An Angular finance workspace for reviewing payment vouchers, exploring General Ledger movements, and reconciling a synthetic Trial Balance.',
    repo: 'aster-erp', demo: 'https://aster-erp.vercel.app', image: '/images/aster.webp', color: 'lavender',
    role: 'Authorized portfolio adaptation of an existing enterprise frontend. Contributions include a synthetic adapter, finance overview, Trial Balance views, session reliability, decimal helpers, route splitting, tests, and accessibility improvements.',
    challenge: 'Financial interfaces need more than polished tables. They must preserve precision, explain posting states, avoid stale requests, and keep totals consistent across views.',
    overview: 'Aster ERP brings payment vouchers, the General Ledger, Trial Balance, and Chart of Accounts into a connected Angular 21 finance interface. Visitors can search records, edit simulated drafts, inspect posted entries, and review balances derived from the same fictional journal. The public sandbox runs inside the browser tab without a backend account.',
    architecture: ['Angular interface', 'NgRx / Signals', 'Synthetic adapter', 'Shared journal', 'Ledger', 'Trial Balance'],
    implementation: [
      { title: 'Keep the financial state coherent', text: 'Overview figures and Trial Balance derive from the synthetic journal. Drafts do not change the journal; reversals retain the original record and append counter-entries.' },
      { title: 'Handle precision deliberately', text: 'Decimal helpers support amount and tax previews. The case study preserves documented calculation conventions instead of presenting demo behavior as a universal accounting rule.' },
      { title: 'Build for real navigation', text: 'Standalone Angular components and feature routes load on demand. NgRx, Signals, and RxJS coordinate state and cancel stale ledger requests when filters change.' },
      { title: 'Make contribution boundaries visible', text: 'The original finance components and API contracts remain adapted. The upstream PrimeNG/Sakai template notice and existing copyright attribution are retained.' },
    ], outcome: 'A deployed finance sandbox where visitors can edit simulated vouchers, inspect ledger movement, reverse posted fixtures, and reconcile a Trial Balance without a backend account.',
    scope: 'No production banking connection, database, accounting backend, or real approval action is connected. Local state is not durable or multi-user. This is a collaborative frontend adaptation.',
    technologies: ['Angular 21', 'TypeScript', 'NgRx', 'RxJS', 'PrimeNG', 'decimal.js'], evidence: 'README.md, package.json, financial workflow documentation',
  },
  {
    slug: 'meridian', name: 'Meridian ERP', subtitle: 'One connected business workspace.', category: 'ERP · Full-stack', domain: 'products', status: 'Public site · Private workspace',
    description: 'A full-stack workspace connecting sales, inventory, purchasing, people, school operations, accounting, and an AI assistant.',
    repo: 'meridian-erp', demo: 'https://meridian-erp-alpha.vercel.app', image: '/images/meridian.webp', color: 'blue',
    role: 'Full-stack product engineering across the React workspace, Express API, relational models, operational flows, accounting, and a permission-aware assistant.',
    challenge: 'Business modules share data, but they cannot all mutate it independently. Posting an order needs to keep stock, payments, and double-entry journals consistent, including cancellation and reversal.',
    overview: 'Meridian ERP connects products, sales, purchasing, inventory, people, school administration, and double-entry accounting through an Express API and shared Prisma model. Posting, payment, and reversal workflows preserve stock and journal consistency. Its public website can be explored here; the PostgreSQL-backed workspace requires its own owner account. The separate local demo uses fictional SQLite records.',
    architecture: ['React / Vite', 'Express API', 'Session & roles', 'Domain operations', 'Prisma', 'PostgreSQL'],
    implementation: [
      { title: 'Model posting as a business event', text: 'Draft orders have no stock or journal effect. Posting, partial payments, and cancellation use server-validated transitions, with historical movement and journal entries preserved.' },
      { title: 'Keep authorization on the server', text: 'Revocable database sessions use HttpOnly cookies. Admin, manager, and employee permissions are enforced by API routes; browser guards provide navigation feedback rather than security.' },
      { title: 'Make AI actions reviewable', text: 'The Gemini assistant reads through permitted tools. Write proposals require a separate confirmation, are identity-bound, expire, and recheck permissions before execution.' },
      { title: 'Support a complete operating flow', text: 'The workspace includes products, customers, suppliers, inventory, orders, HR, school records, and financial reports. Monetary calculations use rounded integer minor units.' },
    ], outcome: 'A complete, inspectable full-stack application with connected operational flows, role access, financial reports, and a deployed private workspace.',
    scope: 'The hosted workspace requires an owner account; public demo credentials apply only to local installations. Statutory tax filing and payment-provider integration are outside its scope.',
    technologies: ['React / Vite', 'Express', 'Prisma', 'PostgreSQL', 'SQLite demo', 'Gemini'], evidence: 'README.md, workspace manifests and server architecture',
  },
  ...odooProjects.slice(1),
  ...automationProjects,
];
export const githubUrl = (project: Project) => project.repo ? `https://github.com/Shahyan360/${project.repo}` : undefined;
export const projectRepositories = (project: Project) => {
  const repositories = (project.repositories || []).map(({ repo, label }) => ({ repo, label }));
  if (project.repo && !repositories.some(repository => repository.repo === project.repo)) {
    repositories.unshift({ repo: project.repo, label: project.repositories?.length ? 'Existing addon collection' : project.name });
  }
  return repositories;
};
