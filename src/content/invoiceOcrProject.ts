import type { Project } from './projects';

export const invoiceOcrProject: Project = {
  slug: 'invoiceocr', name: 'InvoiceOCR', subtitle: 'From invoice document to reviewable data.',
  category: 'Document AI · Python', domain: 'ai', status: 'Implemented · Public source',
  repo: 'taw-python-invoiceocr', color: 'lavender', visualLabel: 'OCR / AP',
  description: 'A Think AI Works internship project for invoice OCR, structured extraction, financial validation, review, and JSON/CSV export.',
  role: 'I developed InvoiceOCR during my Think AI Works internship, implementing the Python API, document-processing and extraction flows, persistence, validation, and review/export interface. It is supporting document-automation work alongside my Odoo specialization.',
  challenge: 'Accounts-payable teams receive digital PDFs, scans, and images. Extracted values need consistent identifiers, dates, currencies, and amounts, with missing information and inconsistencies visible before accounting use.',
  overview: 'I implemented a FastAPI application that reads digital PDFs with PyMuPDF and scans/images with Tesseract, extracts invoice fields through Gemini, local Ollama, or an explicitly labeled offline parser, and presents structured results for human verification. SQLAlchemy stores processing history, with JSON and CSV exports for downstream work. This is a separate application; no Odoo connector is claimed.',
  architecture: ['PDF / image upload', 'Text extraction or OCR', 'Configured extraction provider', 'Pydantic validation', 'SQLAlchemy history', 'Human review & export'],
  implementation: [
    { title: 'Choose extraction per document page', text: 'Digital PDF text is read directly; pages without meaningful text pass through OCR. Image signatures, file/page/pixel limits, encrypted PDFs, and processing deadlines produce specific errors instead of empty success results.' },
    { title: 'Keep provider output structured', text: 'Gemini and Ollama use constrained JSON output and schema validation. Missing values remain null. The offline label/table parser is marked as rule-based extraction, with no AI-model call implied. Provider timeouts, incomplete output, and quota failures remain visible.' },
    { title: 'Preserve financial precision and review', text: 'Pydantic validates decimal strings, ISO dates, currencies, and line items. Consistency warnings identify missing invoice fields, due dates before invoice dates, and subtotal/tax/total differences. These checks support review; they do not certify tax correctness.' },
    { title: 'Reuse prior extraction without duplicate records', text: 'A file hash and extraction-configuration key identify repeated uploads. A database uniqueness constraint handles competing inserts, and paginated history retains the provider, extracted fields, warnings, and processing timestamp.' },
    { title: 'Make exports useful for the next step', text: 'The review interface exposes saved invoice details and JSON/CSV download. CSV values are protected against spreadsheet formula interpretation. PostgreSQL is the target database, with SQLite for local demonstration.' },
  ],
  outcome: 'An implemented invoice-processing application that turns documents into persistent, structured records with explicit review and export steps.',
  scope: 'Use fictional invoices for demonstrations. No live deployment URL is published in the reviewed README, and no public upload endpoint is connected to this portfolio. The repository contains implementation code and basic tests, while its README retains pending verification steps. Runtime and provider acceptance were not re-executed for this portfolio. This is not production-ready accounting software, automated tax verification, payment execution, or an Odoo integration.',
  technologies: ['Python', 'FastAPI', 'PyMuPDF', 'Tesseract OCR', 'Pydantic', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'Gemini / Ollama', 'Decimal'],
  evidence: 'README; app/api/invoices.py; OCR, extraction, LLM, schema and persistence source; basic test file. Source tree f53f6cc864e440fef08645cc65ff930e8fa59a66 reviewed 3 November 2026.',
};
