export default function ProviderPartnerCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-cream to-green-100">
      <div className="max-w-3xl mx-auto px-4 flex justify-center">
        <div className="w-full bg-white rounded-2xl shadow-lg border border-green-100 p-10 text-center flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800 tracking-tight">For Providers & Partners</h2>
          <p className="mb-4 text-gray-700 text-lg">Get more visibility, early access to our analytics dashboard, and a featured listing during launch.</p>
          <p className="mb-8 text-gray-600">Onboarding steps: <span className="font-semibold text-green-700">KYC → Profile Setup → Get Bookings After Launch</span></p>
          <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-10 py-3 rounded-full shadow-lg hover:from-green-700 hover:to-green-600 transition-all font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-green-300">Pre-Register as Provider</button>
        </div>
      </div>
    </section>
  );
}