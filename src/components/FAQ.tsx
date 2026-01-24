'use client';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  { q: 'Is opting for substitutes safe?', a: 'Yes, substitute medicines are chemically identical to branded ones and are approved by regulatory authorities.' },
  { q: 'Is there a guarantee on the quality of substitutes?', a: 'Absolutely. All medicines on Medsta come from certified manufacturers and undergo strict quality checks.' },
  { q: 'How are substitutes different from branded medicines?', a: 'The only difference is the name and packaging. The active ingredients and effectiveness are exactly the same.' },
  { q: 'How can I avail free delivery?', a: 'Free delivery is available on orders above ₹500 or for first-time users using code MEDSTAFirst.' },
  { q: 'What is Medsta?', a: 'Medsta is your one-stop digital healthcare platform connecting you to local doctors, labs, and pharmacies.' },
  { q: 'Why Choose Medsta?', a: 'We offer the convenience of digital booking with the trust of your local neighborhood healthcare providers.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  // Toggle function
  const toggle = (i: number) => {
    if (open === i) {
      return setOpen(null);
    }
    setOpen(i);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Centered Heading with blue accent line implied by design */}
        <div className="text-center mb-10">
          <div className="w-12 h-1 bg-[--primary-blue] mx-auto mb-4 rounded-full"></div>
          <h2 className="text-3xl font-bold text-black tracking-tight">FAQs</h2>
        </div>

        {/* Main Card Container */}
        <div className="bg-blue-50 rounded-3xl p-8 shadow-lg border border-blue-100">
          <div className="divide-y divide-blue-200">
            {faqs.map((f, i) => (
              <div key={i} className="py-5 first:pt-0">
                <button
                  className="w-full text-left font-bold text-black flex justify-between items-center group hover:text-blue-700 transition-colors"
                  onClick={() => toggle(i)}
                >
                  <span className="text-lg">{f.q}</span>
                  <span className={`text-blue-700 transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>
                    <FaChevronDown />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-black font-medium leading-relaxed pr-8">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button Container */}
          <div className="mt-8 text-center pt-4">
            <button className="px-12 py-3 bg-white border-2 border-blue-700 text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-sm">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}