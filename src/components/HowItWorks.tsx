import { FaSearch, FaRobot, FaCalendarCheck, FaMoneyBillWave, FaTruck } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch className="text-blue-600 text-2xl" />, title: 'Search' },
  { icon: <FaRobot className="text-blue-600 text-2xl" />, title: 'AI Suggests' },
  { icon: <FaCalendarCheck className="text-blue-600 text-2xl" />, title: 'Book or Order' },
  { icon: <FaMoneyBillWave className="text-blue-600 text-2xl" />, title: 'Pay Online or COD' },
  { icon: <FaTruck className="text-blue-600 text-2xl" />, title: 'Track, Get Service' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-black tracking-tight">How Medsta Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start w-full">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center w-full">
              <div className="bg-blue-50 rounded-full p-4 shadow mb-4 h-16 w-16 flex items-center justify-center">{s.icon}</div>
              <div className="font-semibold text-lg text-black leading-tight">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}