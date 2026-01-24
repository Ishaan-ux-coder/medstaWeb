import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DealsSection from "../components/DealsSection";
import ShopCategories from "../components/ShopCategories";
import PromotionalBanners from "../components/PromotionalBanners";
import ProductSection from "../components/ProductSection";
import ProviderShowcase from "../components/ProviderShowcase";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import ProviderPartnerCTA from "../components/ProviderPartnerCTA";
import Footer from "../components/Footer";
import { FaHome, FaStar } from "react-icons/fa";

// Sample Data for "Local Favourites"
const localFavourites = [
  { id: 1, name: "Neurobion Forte Tablet 30", image: "", discount: "15%", mrp: "47.53", price: "40.4", substituteSavings: "26.66%" },
  { id: 2, name: "Limcee Orange Flavour Chewable Tablet 15", image: "", discount: "20%", mrp: "24.68", price: "19.74" }, // No substitute shown in img, optional
  { id: 3, name: "Sunren D3 Capsule 4", image: "", discount: "50%", mrp: "124.31", price: "62.03", substituteSavings: "" },
  { id: 4, name: "Shelcal 500 Tablet 15", image: "", discount: "20%", mrp: "139.36", price: "111.49", substituteSavings: "50.1%" },
  { id: 5, name: "Dolo 650 Tablet 15", image: "", discount: "26%", mrp: "30.11", price: "22.13", substituteSavings: "50.1%" },
  { id: 6, name: "Cipcal 500 Tablet 15", image: "", discount: "50%", mrp: "98.12", price: "48.96", substituteSavings: "" },
  { id: 7, name: "Lupical D3 Capsule 4", image: "", discount: "50%", mrp: "96.1", price: "47.95", substituteSavings: "" }
];

// Sample Data for "Popular Item"
const popularItems = [
  { id: 1, name: "Renocia Hair Revitalizing Solution 60ml", image: "", discount: "20%", mrp: "2950", price: "2360", substituteSavings: "" },
  { id: 2, name: "Solspre Nasal Spray 100ml", image: "", discount: "20%", mrp: "522.77", price: "418.22", substituteSavings: "50.1%" },
  { id: 3, name: "Cetaphil Oily Skin Cleanser 125ml", image: "", discount: "8%", mrp: "699", price: "643.08", substituteSavings: "" },
  { id: 4, name: "Oligocare Forte+ Tablet 15", image: "", discount: "20%", mrp: "729.66", price: "583.73", substituteSavings: "" },
  { id: 5, name: "Systane Ultra Ophthalmic Solution 10ml", image: "", discount: "20%", mrp: "562.5", price: "450", substituteSavings: "" },
  { id: 6, name: "Hairbless Tablet 30", image: "", discount: "25%", mrp: "596", price: "447", substituteSavings: "" },
  { id: 7, name: "Ketoscalp Shampoo 100ml", image: "", discount: "44%", mrp: "185", price: "103.6", substituteSavings: "" }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PromotionalBanners />
      <DealsSection />
      <ShopCategories />
      <ProductSection title="Local Favourites" icon={<FaHome className="text-yellow-600" />} products={localFavourites} />
      <ProductSection title="Popular items" icon={<FaStar className="text-yellow-400" />} products={popularItems} />
      <ProviderShowcase />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <ProviderPartnerCTA />
      <FAQ />
      <Footer />
    </>
  );
}
