'use client';
import { useState } from 'react';

const faqs = [
  { q: 'How do I book an appointment?', a: 'You can search for providers and book appointments directly from the Medsta platform.' },
  { q: 'What payment methods are supported?', a: 'We support COD and all major digital payment options.' },
  { q: 'How is my data kept private?', a: 'We use industry-standard encryption and never share your data without consent.' },
  { q: 'What is the refund policy?', a: 'Refunds are processed as per our transparent refund policy, available on the website.' },
  { q: 'How do I join as a provider?', a: 'Click on "Join as Provider" and complete the onboarding steps.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-primary-cream">
      <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10 text-primary-green tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow">
              <button className="w-full text-left px-6 py-4 font-semibold text-green-700 flex justify-between items-center" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
                <span>{open === i ? '-' : '+'}</span>
              </button>
              {open === i && <div className="px-6 pb-4 text-gray-700">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}