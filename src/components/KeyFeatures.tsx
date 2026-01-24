import { FaRobot, FaUserMd, FaPills, FaCalendarCheck, FaAmbulance, FaFileMedical, FaBell, FaLanguage, FaMoneyBillWave } from 'react-icons/fa';

// Add a 'status' to each feature to mark it as 'active' or 'coming soon'
const features = [
  { icon: <FaUserMd className="text-blue-600 text-3xl" />, title: 'Multi-vendor Marketplace', desc: 'Doctors, labs, pharmacies, physiotherapists all in one place.', status: 'active' },
  { icon: <FaPills className="text-blue-600 text-3xl" />, title: 'Medicine Ordering', desc: 'Order medicines with hyperlocal delivery.', status: 'active' },
  { icon: <FaCalendarCheck className="text-blue-600 text-3xl" />, title: 'Appointment Booking', desc: 'Book online or offline appointments easily.', status: 'active' },
  { icon: <FaMoneyBillWave className="text-blue-600 text-3xl" />, title: 'COD + Digital Payments', desc: 'Multiple payment options for convenience.', status: 'active' },
  { icon: <FaRobot className="text-gray-400 text-3xl" />, title: 'AI Symptom Checker', desc: 'Conversational bot suggests the right doctor, lab, or service nearby.', status: 'coming soon' },
  { icon: <FaAmbulance className="text-gray-400 text-3xl" />, title: 'Patient Transportation', desc: 'Ambulance, cabs, and bikes for patient transport.', status: 'coming soon' },
  { icon: <FaFileMedical className="text-gray-400 text-3xl" />, title: 'Digital Prescriptions', desc: 'Access digital prescriptions and health records.', status: 'coming soon' },
  { icon: <FaBell className="text-gray-400 text-3xl" />, title: 'AI Medicine Reminders', desc: 'Get reminders for your medicines.', status: 'coming soon' },
  { icon: <FaLanguage className="text-gray-400 text-3xl" />, title: 'Multilingual Support', desc: 'Choose your preferred language.', status: 'coming soon' },
];

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-black tracking-tight drop-shadow-sm">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              // Add a subtle border and conditional opacity for a professional look
              className={`relative bg-blue-50 rounded-lg p-6 flex flex-col items-center shadow border border-blue-100 hover:shadow-xl transition-shadow duration-300 ${f.status === 'coming soon' ? 'opacity-60' : ''}`}
            >
              {/* Badge for "Coming Soon" features */}
              {f.status === 'coming soon' && (
                <div className="absolute top-2 right-2 bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Coming Soon
                </div>
              )}
              <div className="mb-4">{f.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 text-center ${f.status === 'coming soon' ? 'text-gray-500' : 'text-black'}`}>
                {f.title}
              </h3>
              <p className="text-black text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}