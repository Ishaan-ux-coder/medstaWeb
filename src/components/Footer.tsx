import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaytm, SiGooglepay } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-blue-50 pt-16 pb-8 text-sm text-gray-600 font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

        {/* Column 1: Company */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg text-gray-800 mb-2">Company</h3>
          <a href="/about" className="hover:text-blue-600 transition-colors">About Us</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Health Article</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Health Stories</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Health Library</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Diseases & Health Conditions</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Ayurveda</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Understanding Generic Medicines</a>
          <a href="#" className="hover:text-blue-600 transition-colors">All Medicines</a>
          <a href="#" className="hover:text-blue-600 transition-colors">All Brands</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Need Help</a>
          <a href="/faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Savings Calculator</a>
        </div>

        {/* Column 2: Social & Legal */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="text-2xl text-blue-600 hover:scale-110 transition-transform"><FaInstagram /></a>
              <a href="#" className="text-2xl text-blue-600 hover:scale-110 transition-transform"><FaFacebookF /></a>
              <a href="#" className="text-2xl text-blue-600 hover:scale-110 transition-transform"><FaYoutube /></a>
              <a href="#" className="text-2xl text-blue-600 hover:scale-110 transition-transform"><FaLinkedinIn /></a>
              <a href="#" className="text-2xl text-blue-600 hover:scale-110 transition-transform"><FaTwitter /></a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Legal</h3>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Editorial Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Returns & Cancellations</a>
          </div>
        </div>

        {/* Column 3: Subscribe & Address */}
        <div className="flex flex-col gap-6">

          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Grievance Officer</h3>
            <p className="text-xs text-gray-500">
              Name: <span className="font-medium text-gray-700">Kishor Kumar</span><br />
              Email: <a href="mailto:grievance-officer@medsta.in" className="text-blue-600 hover:underline">grievance-officer@medsta.in</a>
            </p>
          </div>
        </div>

        {/* Column 4: Download & Contact */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Download Medsta</h3>
            <p className="text-xs text-gray-500 mb-4">Manage your health with ease Download Medsta today!</p>
            <p className="text-xs text-gray-500 mb-4">Get easy access to medicine refills, health information, and more. With our app, you'll never have to wait in line again. Download now and start taking control of your health.</p>

            <div className="flex gap-4">
              {/* Google Play Button Placeholder - using CSS/Text for simplicity or SVG if available. Using simple styled div for now mimicking the button */}
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="text-2xl">▶</div> {/* Play icon placeholder */}
                <div className="text-left">
                  <div className="text-[10px] uppercase">Get it on</div>
                  <div className="text-sm font-bold leading-none">Google Play</div>
                </div>
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="text-2xl"></div> {/* Apple icon placeholder */}
                <div className="text-left">
                  <div className="text-[10px] uppercase">Download on the</div>
                  <div className="text-sm font-bold leading-none">App Store</div>
                </div>
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Contact Us</h3>
            <p className="text-xs text-gray-500 mb-4">
              Our customer representative team is available 7 days a week from 8:00 am - 10:00 pm.
            </p>
            <div className="flex justify-between items-center text-xs">
              <a href="mailto:support@medsta.in" className="text-blue-600 hover:underline">support@medsta.in</a>
              <span className="text-gray-700 font-bold">8354070437</span>
            </div>
          </div>

          <div className="text-xs text-gray-400 mt-auto">
            v4.13.0
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>© 2026 - Medsta</span>
          <span>|</span>
          <span>All rights reserved. Our content is for informational purposes only. <a href="#" className="underline">See additional information</a>.</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Our Payment Partners</span>
          <div className="flex gap-2 text-2xl text-gray-600">
            <SiVisa className="text-blue-700" />
            <SiMastercard className="text-red-600" />
            <SiPaytm className="text-blue-500" />
            <SiGooglepay className="text-green-600" />
          </div>
        </div>
      </div>
    </footer>
  );
}