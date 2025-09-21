import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import KeyFeatures from "../components/KeyFeatures";
import OffersDiscounts from "../components/OffersDiscounts";
import ProviderShowcase from "../components/ProviderShowcase";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import ComingSoon from "../components/ComingSoon";
import Testimonials from "../components/Testimonials";
import ProviderPartnerCTA from "../components/ProviderPartnerCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <OffersDiscounts />
      <ProviderShowcase />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <ComingSoon />
      <Testimonials />
      <ProviderPartnerCTA />
      <Footer />
    </>
  );
}
