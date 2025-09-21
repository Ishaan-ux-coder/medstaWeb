export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-700 text-white py-12 mt-16 rounded-t-3xl shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <div className="font-extrabold text-2xl tracking-tight text-white mb-1">Medsta</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="hover:text-green-200 transition">About</a>
            <a href="#" className="hover:text-green-200 transition">Careers</a>
            <a href="#" className="hover:text-green-200 transition">Blog</a>
            <a href="#" className="hover:text-green-200 transition">Privacy Policy</a>
            <a href="#" className="hover:text-green-200 transition">Terms</a>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-white/20 transition">App Coming Soon</span>
          <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-white/20 transition">Play Store</span>
          <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-white/20 transition">App Store</span>
        </div>
        <div className="flex flex-col gap-2 text-center md:text-right">
          <div className="flex gap-3 justify-center md:justify-end">
            <a href="#" className="hover:text-green-200 transition">Twitter</a>
            <a href="#" className="hover:text-green-200 transition">LinkedIn</a>
            <a href="#" className="hover:text-green-200 transition">Instagram</a>
          </div>
          <div className="text-xs mt-2 text-green-100">&copy; {new Date().getFullYear()} Medsta. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}