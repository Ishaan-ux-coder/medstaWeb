"use client";
import React from 'react';

const testimonials = [
  { name: 'Priya S.', role: 'Patient', review: 'Medsta made booking a doctor and getting medicines so easy! Highly recommended.', badge: 'Verified Patient' },
  { name: 'Dr. Ramesh K.', role: 'Provider', review: 'The provider dashboard is intuitive and helped me reach more patients.', badge: 'Verified Doctor' },
  { name: 'SRL Diagnostics', role: 'Lab', review: 'Seamless onboarding and great support from the Medsta team.', badge: 'ISO Certified Lab' },
  { name: 'Amit Verma', role: 'Patient', review: 'Got my medicines delivered within 2 hours. Super fast service!', badge: 'Verified Buyer' },
  { name: 'Sneha Patel', role: 'Pharmacy Owner', review: 'Medsta helped me increase my daily orders significantly.', badge: 'Partner Pharmacy' },
  { name: 'Rahul Roy', role: 'Patient', review: 'Best app for booking lab tests at home. Very convenient.', badge: 'Verified User' },
  { name: 'Dr. Anjali Gupta', role: 'Dentist', review: 'My appointments are organized much better now. Thanks Medsta!', badge: 'Verified Doctor' },
  { name: 'City Path Labs', role: 'Lab', review: 'Great platform to manage samples and reports digitally.', badge: 'Partner Lab' },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow text-center w-80 flex-shrink-0 mx-4">
    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl mb-3">
      {t.name.charAt(0)}
    </div>
    <div className="font-bold text-lg mb-1 text-gray-800">{t.name}</div>
    <div className="text-xs text-blue-600 font-semibold mb-3 uppercase tracking-wide">{t.role}</div>
    <p className="italic text-gray-600 mb-4 text-sm leading-relaxed">&quot;{t.review}&quot;</p>
    <span className="bg-white border border-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">{t.badge}</span>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black tracking-tight drop-shadow-sm">Testimonials & Social Proof</h2>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks for smooth fade effect at edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee">
            {/* First set of testimonials */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`original-${i}`} t={t} />
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`duplicate-${i}`} t={t} />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

      </div>
    </section>
  );
}