"use client";
import { useState } from 'react';

const providers = [
  { name: 'Apollo Hospitals', category: 'Hospital', location: 'Delhi', logo: '🏥' },
  { name: 'Dr. Lal PathLabs', category: 'Lab', location: 'Mumbai', logo: '🧪' },
  { name: 'MedPlus Pharmacy', category: 'Pharmacy', location: 'Bangalore', logo: '💊' },
  { name: 'PhysioCare', category: 'Physiotherapist', location: 'Chennai', logo: '🧑‍⚕️' },
  { name: 'SRL Diagnostics', category: 'Lab', location: 'Kolkata', logo: '🧪' },
  { name: 'Fortis', category: 'Hospital', location: 'Delhi', logo: '🏥' },
];

const categories = ['All', 'Hospital', 'Lab', 'Pharmacy', 'Physiotherapist'];

export default function ProviderShowcase() {
  const [selected, setSelected] = useState('All');
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
  <h2 className="text-4xl font-bold text-center mb-10 text-green-700 tracking-tight">Provider Showcase</h2>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300
                ${selected === cat
                  ? 'bg-green-600 text-white border-green-600 shadow-md'
                  : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {providers.filter(p => selected === 'All' || p.category === selected).map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 flex flex-col items-center shadow-md border border-green-100 hover:shadow-lg transition-all duration-200"
            >
              <span className="text-5xl mb-3 drop-shadow-sm">{p.logo}</span>
              <div className="font-semibold text-lg mb-1 text-green-900 text-center">{p.name}</div>
              <div className="text-xs text-gray-500 mb-1">{p.category} • {p.location}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-green-500 to-green-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-600 transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-green-300">
            Join Our Growing Network
          </button>
        </div>
      </div>
    </section>
  );
}