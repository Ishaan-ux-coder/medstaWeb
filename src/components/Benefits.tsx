export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black tracking-tight">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100 flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-4 text-black">For Patients</h3>
            <ul className="list-disc pl-5 text-black space-y-2 text-base">
              <li>Easy booking</li>
              <li>Doorstep delivery</li>
              <li>Transparent pricing</li>
              <li>AI-based suggestions</li>
              <li>Multilingual UI</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-4 text-black">For Providers</h3>
            <ul className="list-disc pl-5 text-black space-y-2 text-base">
              <li>Digital presence</li>
              <li>Real-time bookings</li>
              <li>Analytics dashboard</li>
              <li>Featured listings</li>
              <li>Revenue tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}