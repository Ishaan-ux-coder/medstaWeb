import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-[--primary-cream] to-green-100">
        <div className="max-w-4xl mx-auto px-4 py-16">
          
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-[--text-primary] tracking-tight">Medsta – Healthcare, Your Way.</h1>
            <p className="mt-4 text-2xl text-[--dark-blue]">One Platform. One Click. Complete Care.</p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[--text-primary] mb-4">Introduction</h2>
            <div className="space-y-4 text-[--text-secondary] text-lg">
              <p>Healthcare in India’s Tier 2 and Tier 3 cities is broken — fragmented, slow, and inconvenient. People still rely on manual processes, multiple calls, and long travel just to get medicines, visit a doctor, and get lab tests done.</p>
              <p>Medsta is solving this problem by creating a hyper-local digital healthcare ecosystem where everything is connected:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Doctors, pharmacies, labs, physiotherapists, ambulances, and patient transport and other allied services – all in one place</li>
                <li>AI-powered medicine reminders and medical suggestions to keep patients healthier</li>
                <li>Digital-first convenience so patients can book, track, and complete their healthcare journey without stress</li>
              </ul>
              <p>We exist to make healthcare as simple as ordering food online — but with the trust of local providers.</p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <section>
              <h2 className="text-3xl font-bold text-[--text-primary] mb-4">Our Mission</h2>
              <p className="text-[--text-secondary] text-lg">“To bring affordable, accessible, and trustworthy healthcare to every household in Bharat by connecting local doctors, labs, pharmacies, physiotherapists, and allied services under one digital roof.”</p>
            </section>
            <section>
              <h2 className="text-3xl font-bold text-[--text-primary] mb-4">Our Vision</h2>
              <p className="text-[--text-secondary] text-lg">We envision a future where every Indian can access healthcare within minutes, healthcare is proactive, fitness is integrated, and Medsta is the go-to name for digital health.</p>
            </section>
          </div>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[--text-primary] mb-4">How Medsta Was Born</h2>
            <div className="space-y-4 text-[--text-secondary] text-lg">
              <p>The idea for Medsta started with a simple frustration — why does healthcare still require so many steps? Our founder saw families struggle every day with time-consuming, expensive, and exhausting processes for basic medical needs. This had to change.</p>
              <div className="mt-6 p-6 bg-white rounded-xl shadow border border-green-100">
                <h3 className="text-2xl font-semibold text-[--dark-blue] mb-3">Our Journey</h3>
                <ul className="list-disc pl-6 space-y-2 text-[--text-secondary]">
                  <li><span className="font-bold">2024:</span> Idea conceptualized to create a “Zomato + Amazon” for healthcare.</li>
                  <li><span className="font-bold">2025:</span> WhatsApp-based pilot launched — first 3 pharmacies, 3 labs, and 4 doctors onboarded.</li>
                  <li><span className="font-bold">2025-26:</span> App & website development completed (web & app launch planned).</li>
                  <li><span className="font-bold">Future:</span> Expansion to nearby districts, AI doctor suggestion system, Medsta Health & Fitness Shop, Gym/Yoga booking, and nationwide rollout.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[--text-primary] mb-4">Our Core Values</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left bg-white rounded-xl shadow border border-green-100">
                <thead className="bg-blue-50/50">
                  <tr>
                    <th className="p-4 text-lg font-semibold text-[--dark-blue]">Value</th>
                    <th className="p-4 text-lg font-semibold text-[--dark-blue]">What It Means</th>
                  </tr>
                </thead>
                <tbody className="text-[--text-secondary]">
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Trust First</td>
                    <td className="p-4">Work only with verified, licensed providers. Build confidence with patients.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Accessibility</td>
                    <td className="p-4">Affordable, inclusive, and available to every household, even in remote areas.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Innovation</td>
                    <td className="p-4">Use AI, automation, and digital-first solutions to simplify healthcare.</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-semibold">Transparency</td>
                    <td className="p-4">No hidden charges. Clear pricing and honest communication.</td>
                  </tr>
                   <tr className="border-t">
                    <td className="p-4 font-semibold">Patient-Centric</td>
                    <td className="p-4">Every feature is designed for the user — easy, fast, and reliable.</td>
                  </tr>
                   <tr className="border-t">
                    <td className="p-4 font-semibold">Community Focus</td>
                    <td className="p-4">Empower local providers instead of replacing them. Build an ecosystem.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="text-center p-8 bg-white rounded-2xl shadow-lg border border-green-100">
            <h2 className="text-3xl font-bold text-[--text-primary] mb-4">Your One-Stop Healthcare Companion</h2>
            <p className="text-[--text-muted] text-lg max-w-2xl mx-auto mb-6">From ordering medicines and booking lab tests to consulting local doctors and arranging transport, Medsta has you covered.</p>
            <a href="https://medsta.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-[--primary-blue] to-[--primary-green] text-white px-10 py-3 rounded-full shadow-lg hover:opacity-90 transition-all font-semibold text-lg">
              Visit Medsta.in
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}