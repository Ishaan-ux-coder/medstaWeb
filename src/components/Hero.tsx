"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UploadPrescriptionModal from './UploadPrescriptionModal';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Rotating Search Text Logic
  const searchItems = ["NICOTEX", "Amoxycilin", "Chyawanprash", "Pads", "Inhalers"];
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  const [hasInput, setHasInput] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSearchIndex((prev) => (prev + 1) % searchItems.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  // ... (existing helper for modal if needed, or if modifying inside component) ...

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center p-6 overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          {/* IMPORTANT: Replace this with the path to your own video in the /public folder */}
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay for better text readability */}
        {/* Gradient Overlay for better text readability - CHANGED to White for Black text support */}
        <div className="absolute inset-0 bg-white/85 z-10"></div>
      </div>

      <div className="z-20 relative text-white max-w-5xl mx-auto mt-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg text-[#40444C]">
            Say GoodBye to high medicine prices
          </h1>
          <p className="text-lg md:text-xl mb-10 font-medium text-black/80 drop-shadow-md">
            Compare prices and save up to 51%
          </p>
        </motion.div>

        {/* Search Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl bg-white rounded-full shadow-2xl p-2 flex items-center gap-2 mb-12 border border-blue-100"
        >
          {/* Deliver To Section */}
          <div className="hidden sm:flex items-center gap-2 px-6 border-r border-gray-200 cursor-pointer hover:bg-gray-50 rounded-l-full py-2 transition-colors">
            <span className="text-blue-600 text-xl">📍</span>
            <span className="text-gray-700 font-medium whitespace-nowrap">Deliver to</span>
            <span className="text-gray-400 text-xs">▼</span>
          </div>

          {/* Search Input - Container relative for animated placeholder */}
          <div className="flex-1 flex items-center gap-3 px-4 relative h-12 overflow-hidden">
            <span className="text-gray-400 text-lg z-10">🔍</span>

            {/* Animated Placeholder Layer */}
            <div className={`absolute left-12 top-0 bottom-0 flex items-center pointer-events-none text-gray-400 text-lg transition-opacity duration-200 ${hasInput ? 'opacity-0' : 'opacity-100'}`}>
              <span>Search for&nbsp;</span>
              <div className="relative h-[1.5em] w-40 overflow-hidden flex flex-col justify-center">
                <motion.span
                  key={searchItems[currentSearchIndex]}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute left-0 font-medium text-gray-500"
                >
                  {searchItems[currentSearchIndex]}
                </motion.span>
              </div>
            </div>

            <input
              type="text"
              onChange={(e) => setHasInput(e.target.value.length > 0)}
              className="w-full bg-transparent outline-none text-gray-800 text-lg z-20 relative h-full"
            />
          </div>

          {/* Search Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center aspect-square">
            <span className="text-xl">🔍</span>
          </button>
        </motion.div>

        {/* Place Order Via Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl"
        >
          <div className="text-center mb-6 relative">
            <span className="bg-transparent px-4 text-xs font-bold text-black/60 tracking-widest uppercase relative z-10">PLACE YOUR ORDER VIA</span>
            {/* Optional: Add a subtle line behind text if needed, but text shadow might suffice given video bg */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Call to Order Card */}
            <button className="bg-blue-50/90 backdrop-blur-sm hover:bg-blue-100 border border-blue-200 rounded-xl p-6 flex items-center justify-center gap-4 transition-all hover:shadow-lg group">
              <div className="bg-white p-3 rounded-full text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                📞
              </div>
              <div className="text-left">
                <div className="text-black font-medium text-lg">Call <span className="font-bold">8354070437</span></div>
                <div className="text-black/60 text-sm">to place order</div>
              </div>
            </button>

            {/* Upload Prescription Card */}
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-blue-50/90 backdrop-blur-sm hover:bg-blue-100 border border-blue-200 rounded-xl p-6 flex items-center justify-center gap-4 transition-all hover:shadow-lg group"
            >
              <div className="bg-white p-3 rounded-full text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                📄
              </div>
              <div className="text-left">
                <div className="text-black font-medium text-lg">Upload a <span className="font-bold">prescription</span></div>
                <div className="text-black/60 text-sm leading-none">&nbsp;</div> {/* Spacer to match height */}
              </div>
            </button>
          </div>
        </motion.div>
      </div>
      {/* Pre-Login Modal (keeping its own styling) */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60]">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full relative border border-blue-100 text-gray-800">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors text-2xl font-bold" onClick={() => setShowModal(false)}>&times;</button>
              <h2 className="text-2xl font-extrabold mb-2 text-gray-900">Get Early Access</h2>
              <p className="text-gray-600 mb-6 text-sm">Be the first to experience the future of healthcare.</p>
              <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email Address" className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" required />
                <input type="tel" placeholder="Phone Number" className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" required />
                <select className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-600">
                  <option>Preferred Language</option>
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Bengali</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Marathi</option>
                  <option>Other</option>
                </select>
                <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-blue-500/30 transition-all font-bold text-lg mt-2">Pre-Register</button>
              </form>
              <div className="text-xs text-center text-gray-400 mt-4 font-medium">We’ll notify you when Medsta launches!</div>
            </div>
          </motion.div>
        )}

        {/* Upload Prescription Modal */}
        {showUploadModal && <UploadPrescriptionModal onClose={() => setShowUploadModal(false)} />}
      </AnimatePresence>
    </section>
  );
}