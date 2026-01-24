export default function ProviderPartnerCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 flex justify-center">
        <div className="w-full bg-white rounded-2xl shadow-lg border border-blue-100 p-10 text-center flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4 text-black tracking-tight">For Providers & Partners</h2>
          <p className="mb-4 text-black text-lg">Get more visibility, early access to our analytics dashboard, and a featured listing during launch.</p>
          <p className="mb-8 text-black">Onboarding steps: <span className="font-semibold text-blue-700">KYC → Profile Setup → Get Bookings After Launch</span></p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-10 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-300">Pre-Register as Provider</button>
        </div>
      </div>
    </section>
  );
}