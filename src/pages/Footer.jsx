export default function Footer() {
  return (
    <footer className="relative bg-[#0D0F12] text-gray-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              <span className="text-white">Black </span>
              <span className="text-yellow-600/90">Thumbler</span>
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              A premium drinkware brand focused on timeless design,
              functionality, and intentional living.
            </p>

            <p className="mt-6 text-xs tracking-widest text-gray-500 uppercase">
              Minimal • Bold • Timeless
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white transition">Home</li>
                <li className="hover:text-white transition">Product</li>
                <li className="hover:text-white transition">Story</li>
                <li className="hover:text-white transition">Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Social</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-white transition">Twitter</li>
                <li className="hover:text-white transition">Instagram</li>
                <li className="hover:text-white transition">Facebook</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/10" />

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Black Thumbler. All rights reserved.
          </span>

          <span className="tracking-widest uppercase">
            Designed by @devlogby.mam
          </span>
        </div>
      </div>

      {/* SUBTLE GLOW */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />
    </footer>
  );
}
