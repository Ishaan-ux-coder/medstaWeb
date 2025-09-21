export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a55a1] to-[#51d4b6] text-white py-8 px-4 md:px-8 rounded-t-3xl" style={{borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem'}}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
        <div className="flex flex-col items-start gap-2 md:gap-3">
          <div className="font-extrabold text-xl md:text-2xl tracking-tight mb-1">Medsta</div>
          <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 mt-4 md:mt-0">
          <span className="bg-white/10 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium shadow hover:bg-white/20 transition">App Coming Soon</span>
          <span className="bg-white/10 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium shadow hover:bg-white/20 transition">Play Store</span>
          <span className="bg-white/10 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium shadow hover:bg-white/20 transition">App Store</span>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2 md:gap-4">
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
          <div className="text-xs mt-2 text-white/70">&copy; {new Date().getFullYear()} Medsta. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}