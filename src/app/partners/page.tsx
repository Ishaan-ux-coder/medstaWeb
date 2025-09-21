import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const partners = [
  {
    name: "Pathkind Labs",
    type: "Authorised Collection Center",
    image: "/partners/24.png",
  },
  {
    name: "Bright Diagnostic Center",
    type: "Diagnostic Center",
    image: "/partners/23.png",
  },
  {
    name: "Dava India",
    type: "Generic Pharmacy",
    image: "/partners/26.png",
  },
  {
    name: "Bharat Pharmacy",
    type: "Pharmacy",
    image: "/partners/25.png",
  },
  {
    name: "Anchal Chanchal Medical Store",
    type: "Medical Store",
    image: "/partners/22.png",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-[--primary-cream] to-green-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-[--text-primary] tracking-tight">
              Our Network of Trusted Partners
            </h1>
            <p className="mt-4 text-xl text-[--text-secondary] max-w-3xl mx-auto">
              We collaborate with certified and trusted local labs, pharmacies, and clinics to bring you the best healthcare services right at your doorstep.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={partner.image}
                    alt={`Image of ${partner.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  {/* CORRECTED: Name is now blue, type is a dark, readable gray */}
                  <h3 className="text-2xl font-bold text-[--primary-blue]">{partner.name}</h3>
                  <p className="text-md text-[--text-secondary] mt-1">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}