'use client';
import { useState } from 'react';
import { Arrow } from './Arrow';

const enterprise = [
  { title: 'Customer order', tag: 'SO-DEMO-1042', text: 'A fictional customer orders 12 assemblies. Confirming the order creates demand; it does not magically create stock.', detail: 'Requested: 12 units · Available: 8 units', state: 'Order confirmed' },
  { title: 'Inventory check', tag: 'AVAILABILITY', text: 'Eight available units are reserved. The remaining four units become a shortage that purchasing can act on.', detail: 'Reserved: 8 · Shortage: 4 · Route: replenish', state: 'Shortage identified' },
  { title: 'Procurement', tag: 'PO-DEMO-208', text: 'A purchase request is linked to the originating sale. The team can see which customer demand depends on this receipt.', detail: 'Purchase: 4 units · Origin: SO-DEMO-1042', state: 'Purchase requested' },
  { title: 'Receiving', tag: 'WH/IN/DEMO', text: 'The warehouse receives four units. The shortage clears and the full customer order can move to fulfillment.', detail: 'Received: 4 · Ready to fulfill: 12', state: 'Materials available' },
  { title: 'Accounting', tag: 'JOURNAL / DEMO', text: 'Fulfillment and financial records retain their links. Payment and reconciliation remain distinct, traceable business events.', detail: 'Order → Delivery → Invoice → Reconciliation', state: 'Connected record trail' },
];
const ai = [
  { title: 'Incoming email', tag: 'FICTIONAL MESSAGE', text: '“Hi, we need 12 task chairs for our new studio. Could you share options and a draft estimate?”', detail: 'From: Jamie at fictional Northstar Studio', state: 'Message received' },
  { title: 'Classification', tag: 'ILLUSTRATIVE OUTPUT', text: 'The message is classified as a product enquiry with an estimate request. This portfolio uses a deterministic simulation, not live AI.', detail: 'Intent: quotation · Topic: studio seating', state: 'Intent structured' },
  { title: 'Extraction', tag: 'STRUCTURED DETAILS', text: 'Useful fields are separated from the prose. Missing information remains unknown instead of being invented.', detail: 'Item: task chair · Quantity: 12 · Deadline: unknown', state: 'Details extracted' },
  { title: 'Context', tag: 'FICTIONAL REFERENCE', text: 'A fixed sample reference supplies product context. Lizz’s public demo uses fixed fictional documents, not live customer retrieval.', detail: 'Source: Northstar sample seating guide', state: 'Source attached' },
  { title: 'Draft & review', tag: 'HUMAN DECISION', text: '“Thanks, Jamie. I can help with seating options for 12 people. What is your budget and preferred delivery date?” The draft is ready for a person to review.', detail: 'Draft only · No email sent · No transaction created', state: 'Awaiting human review' },
];
export default function WorkflowExplorer({ kind = 'enterprise' }: { kind?: 'enterprise' | 'ai' }) {
  const [step, setStep] = useState(0);
  const steps = kind === 'ai' ? ai : enterprise;
  const current = steps[step];
  return <div className={`workflow-explorer ${kind}`}>
    <div className="workflow-top"><span className="eyebrow">{kind === 'ai' ? 'INTELLIGENCE PIPELINE' : 'ENTERPRISE WORKFLOW'}</span><span className="demo-label"><span /> Illustrative simulation · Fictional data</span></div>
    <div className="workflow-steps" role="group" aria-label="Choose workflow step">{steps.map((s, i) => <button key={s.title} onClick={() => setStep(i)} aria-pressed={i === step} className={i < step ? 'complete' : ''}><span>{i < step ? '✓' : `0${i + 1}`}</span><strong>{s.title}</strong>{i < steps.length - 1 && <Arrow />}</button>)}</div>
    <div className="workflow-state" aria-live="polite" aria-atomic="true"><div className="workflow-counter">0{step + 1}<span>/ 05</span></div><div key={step} className="workflow-copy"><span className="eyebrow accent">{current.tag}</span><h3>{current.title}</h3><p>{current.text}</p><div className="workflow-detail">{current.detail}</div></div><div className="workflow-status"><span className="status-dot" />{current.state}</div></div>
    <div className="workflow-controls"><button className="text-link" onClick={() => setStep(0)} disabled={step === 0}>↺ Reset</button><span>Explore the decisions behind the flow.</span><button className="button button-small" onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} disabled={step === steps.length - 1}>{step === steps.length - 1 ? 'Flow complete' : 'Next step'} <Arrow /></button></div>
  </div>;
}
