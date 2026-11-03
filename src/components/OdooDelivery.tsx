import { deliveryApproach } from '@/content/delivery';

export default function OdooDelivery() {
  return <section className="section-wrap odoo-delivery" id="delivery" aria-labelledby="delivery-title">
    <div className="section-heading"><span className="eyebrow">ODOO / CONSULTING & DELIVERY</span><h2 id="delivery-title">From requirements<br /><em>to everyday use.</em></h2><p>My delivery responsibilities span the business process, technical implementation, user adoption, and ongoing support.</p></div>
    <div className="case-coverage-grid">{deliveryApproach.map((step, index) => <article key={step.title}><span className="eyebrow">{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
  </section>;
}
