import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-green-800 sticky top-0 z-40">
      {/* This main div now handles the overall layout and spacing */}
      <div className="flex justify-between items-center max-w-full px-4 sm:px-6 lg:px-8">
        {/* Left side: Logo and Brand Name */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center py-4 space-x-2">
            <Image
              src="/logo.png"
              alt="Medsta Logo"
              width={40}
              height={40}
            />
            <span className="font-semibold text-white text-3xl">
              Medsta
            </span>
          </a>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          <a
            href="#"
            className="py-4 px-3 text-stone-200 font-semibold hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="py-4 px-3 text-stone-200 font-semibold hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="py-4 px-3 text-stone-200 font-semibold hover:text-white transition duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="py-4 px-3 text-stone-200 font-semibold hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Right side: Secondary items & WhatsApp */}
        <div className="hidden md:flex items-center space-x-5">
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-stone-200 font-semibold hover:text-white transition duration-300">
            <FaWhatsapp className="w-6 h-6" />
            <span>Order +91 9999999999</span>
          </a>
          <a
            href="#"
            className="py-2 px-3 font-medium text-stone-200 rounded hover:text-white transition duration-300"
          >
            Log In
          </a>
          <a
            href="#"
            className="py-2 px-3 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}