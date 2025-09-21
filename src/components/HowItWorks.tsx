import { FaSearch, FaRobot, FaCalendarCheck, FaMoneyBillWave, FaTruck } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch className="text-green-400 text-2xl" />, title: 'Search Symptoms/Services' },
  { icon: <FaRobot className="text-green-400 text-2xl" />, title: 'AI Suggests Provider' },
  { icon: <FaCalendarCheck className="text-green-400 text-2xl" />, title: 'Book Appointment / Order Medicines' },
  { icon: <FaMoneyBillWave className="text-green-400 text-2xl" />, title: 'Pay Online or COD' },
  { icon: <FaTruck className="text-green-400 text-2xl" />, title: 'Track, Get Service & Review' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-green-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-stone-200 tracking-tight">How Medsta Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-white/10 rounded-full p-4 shadow mb-2">{s.icon}</div>
              <div className="font-semibold text-lg text-stone-200">{s.title}</div>
              {i < steps.length - 1 && <div className="hidden md:block h-1 w-16 bg-green-600 mx-4 my-auto rounded-full" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}