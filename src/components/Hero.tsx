"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [showModal, setShowModal] = useState(true);
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center p-4 md:p-6 overflow-hidden" style={{ background: 'linear-gradient(120deg, #b2f7ef 0%, #c2e9fb 50%, #a1c4fd 100%)' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        {/* IMPORTANT: Replace this with the path to your own video in the /public folder */}
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10"></div>

      <div className="z-20 relative text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight">
          Healthcare, <span className="text-green-300">Your Way.</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-gray-200">
          Healthcare in India is fragmented, inconvenient, and expensive. <span className="font-semibold text-green-200">Medsta</span> solves this by unifying doctors, labs, medicines, physiotherapists, and transport services into one seamless platform.
        </p>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-6 md:mb-8">
          <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg hover:from-green-700 hover:to-green-600 transition-all font-semibold text-sm md:text-lg focus:outline-none focus:ring-2 focus:ring-green-300">Pre-Register Now</button>
          <button className="bg-white border border-green-600 text-green-700 px-6 md:px-8 py-2 md:py-3 rounded-full shadow hover:bg-green-50 transition-all font-semibold text-sm md:text-lg focus:outline-none focus:ring-2 focus:ring-green-200">Join as Provider</button>
          <button className="bg-gray-100 text-green-700 px-6 md:px-8 py-2 md:py-3 rounded-full shadow hover:bg-gray-200 transition-all font-semibold text-sm md:text-lg focus:outline-none focus:ring-2 focus:ring-green-100">Learn More</button>
        </div>
        {/* Demo Search Bar - Styling might need adjustment for visibility on video */}
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center max-w-xl mx-auto mb-4 md:mb-6">
          <input disabled className="w-full md:w-72 px-3 md:px-4 py-2 rounded-full border border-gray-300 bg-white/80 text-gray-800 placeholder:text-gray-500 focus:outline-none" placeholder="Search: Doctors | Tests | Medicines (Demo)" />
          <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-full disabled:opacity-60 font-semibold text-sm md:text-base" disabled>Search</button>
        </div>
        <div className="text-xs md:text-sm text-gray-300 mb-2">Geo-location-based availability preview (Demo)</div>
      </div>
      {/* Pre-Login Modal (keeping its own styling) */}
      {showModal && (
        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-sm w-full relative border border-green-100 text-gray-800">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-green-600 text-xl md:text-2xl font-bold" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-green-800">Pre-Register for Early Access</h2>
            <form className="flex flex-col gap-3 md:gap-4">
              <input type="email" placeholder="Email" className="border border-green-200 rounded-full px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300" required />
              <input type="tel" placeholder="Phone Number" className="border border-green-200 rounded-full px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300" required />
              <select className="border border-green-200 rounded-full px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300">
                <option>Preferred Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Bengali</option>
                <option>Tamil</option>
                <option>Telugu</option>
                <option>Marathi</option>
                <option>Other</option>
              </select>
              <button type="submit" className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2 rounded-full hover:from-green-700 hover:to-green-600 transition-all font-semibold text-sm md:text-lg focus:outline-none focus:ring-2 focus:ring-green-300">Pre-Register</button>
            </form>
            <div className="text-xs md:text-sm text-green-500 mt-2 md:mt-3">We’ll notify you when Medsta launches!</div>
          </div>
        </motion.div>
      )}
    </section>
  );
}