import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-white fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300">
      {/* This main div now handles the overall layout and spacing */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left side: Logo and Brand Name */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center py-4 space-x-2 group">
            <div className="relative transform group-hover:scale-105 transition duration-300">
              <Image
                src="/logo.png"
                alt="Medsta Logo"
                width={40}
                height={40}
                className="drop-shadow-md"
              />
            </div>
            <span className="font-bold text-white text-3xl tracking-tight drop-shadow-sm group-hover:text-blue-200 transition duration-300">
              Medsta
            </span>
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          {['Home', 'About Us', 'Our Partners', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : item === 'About Us' ? '/about' : item === 'Our Partners' ? '/partners' : '#'}
              className="py-4 px-4 text-gray-800 font-bold text-lg hover:text-blue-700 relative group transition duration-300"
            >
              {item}
              <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </Link>
          ))}
        </div>

        {/* Right side: Secondary items & WhatsApp */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://wa.me/918354070437" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 font-bold hover:text-blue-700 transition duration-300 group">
            <FaWhatsapp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="group-hover:underline decoration-blue-600 decoration-2 underline-offset-4">Order +91 8354070437</span>
          </a>
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="py-2 px-4 font-bold text-gray-800 rounded-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              Log In
            </a>
            <a
              href="#"
              className="py-2.5 px-6 font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}