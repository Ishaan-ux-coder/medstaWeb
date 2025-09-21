import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-transparent sticky top-0 z-40 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-full px-4 sm:px-6 lg:px-8">
        {/* Left side: Logo and Brand Name */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center py-2 sm:py-4 space-x-2">
            <Image
              src="/logo.png"
              alt="Medsta Logo"
              width={32}
              height={32}
              className="sm:w-40 sm:h-40"
            />
            <span className="font-semibold text-white text-xl sm:text-3xl drop-shadow">
              Medsta
            </span>
          </a>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          <a
            href="#"
            className="py-2 sm:py-4 px-2 sm:px-3 text-white font-semibold hover:text-green-200 transition duration-300 drop-shadow text-sm sm:text-base"
          >
            Home
          </a>
          <a
            href="#"
            className="py-2 sm:py-4 px-2 sm:px-3 text-white font-semibold hover:text-green-200 transition duration-300 drop-shadow text-sm sm:text-base"
          >
            About
          </a>
          <a
            href="#"
            className="py-2 sm:py-4 px-2 sm:px-3 text-white font-semibold hover:text-green-200 transition duration-300 drop-shadow text-sm sm:text-base"
          >
            Services
          </a>
          <a
            href="#"
            className="py-2 sm:py-4 px-2 sm:px-3 text-white font-semibold hover:text-green-200 transition duration-300 drop-shadow text-sm sm:text-base"
          >
            Contact
          </a>
        </div>

        {/* Right side: Secondary items & WhatsApp */}
        <div className="hidden md:flex items-center space-x-3 sm:space-x-5">
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white font-semibold hover:text-green-200 transition duration-300 drop-shadow text-sm sm:text-base">
            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Order +91 9999999999</span>
          </a>
          <a
            href="#"
            className="py-1 sm:py-2 px-2 sm:px-3 font-medium text-white rounded hover:text-green-200 transition duration-300 drop-shadow text-sm sm:text-base"
          >
            Log In
          </a>
          <a
            href="#"
            className="py-1 sm:py-2 px-2 sm:px-3 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 drop-shadow text-sm sm:text-base"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}