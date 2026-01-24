import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-[--dark-green] sticky top-0 z-40">
      {/* This main div now handles the overall layout and spacing */}
      <div className="flex justify-between items-center max-w-full px-4 sm:px-6 lg:px-8">
        {/* Left side: Logo and Brand Name */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center py-4 space-x-2">
            <Image
              src="/logo.png"
              alt="Medsta Logo"
              width={40}
              height={40}
            />
            <span className="font-semibold text-white text-3xl">
              Medsta
            </span>
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          <Link
            href="/"
            className="py-4 px-3 text-stone-200 font-semibold hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-4 px-3 text-stone-200 font-semibold hover:text-white transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/partners"
            className="py-4 px-3 text-stone-200 font-semibold hover:text-white transition duration-300"
          >
            Our Partners
          </Link>
          <a
            href="#"
            className="py-4 px-3 text-stone-200 font-semibold hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Right side: Secondary items & WhatsApp */}
        <div className="hidden md:flex items-center space-x-5">
          <a href="https://wa.me/918354070437" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-stone-200 font-semibold hover:text-white transition duration-300">
            <FaWhatsapp className="w-6 h-6" />
            <span>Order +91 8354070437</span>
          </a>
          <a
            href="#"
            className="py-2 px-3 font-medium text-stone-200 rounded hover:text-white transition duration-300"
          >
            Log In
          </a>
          <a
            href="#"
            className="py-2 px-3 font-medium text-white bg-[--primary-green] rounded hover:opacity-90 transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}