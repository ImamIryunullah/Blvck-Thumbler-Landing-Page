import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full h-16 grid grid-cols-2 top-0 z-50">
        {/* LEFT */}
        {/* LEFT */}
        <div className="bg-[#1B1F24] flex items-center px-4 sm:px-6">
          {/* MOBILE: INISIAL */}
          <span className="block sm:hidden text-xl font-bold text-yellow-600 tracking-widest">
            BT
          </span>

          {/* DESKTOP: FULL BRAND */}
          <div className="hidden sm:flex items-center">
            <span className="text-xl font-bold text-white">BLACK</span>
            <span className="text-xl font-bold text-yellow-600 ml-2">
              THUMBLER.
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#262C33] flex items-center justify-end px-6">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
            className="group relative w-10 h-10 flex flex-col justify-center items-end gap-[6px]"
          >
            <span className="h-[1.5px] w-7 bg-white transition-all duration-300 group-hover:w-9"></span>
            <span className="h-[1.5px] w-4 bg-white transition-all duration-300 group-hover:w-9"></span>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%", y: 0 }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="
              fixed z-50 bg-[#12161C]
              flex items-center justify-center
              
              /* MOBILE */
              bottom-0 right-0 w-full h-20 flex-row gap-10

              /* DESKTOP */
              md:top-0 md:h-full md:w-24 md:flex-col
            "
          >
            {/* CLOSE (desktop only) */}
            <button
              onClick={() => setOpen(false)}
              className="hidden md:block absolute top-6 text-white/60 hover:text-white"
            >
              ✕
            </button>

            {/* SOCIAL ICONS */}
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaFacebookF />} />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

/* ===== ICON COMPONENT ===== */
function SocialIcon({ icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="
        text-white/70 text-2xl
        hover:text-yellow-600
        cursor-pointer
        transition-colors
      "
    >
      {icon}
    </motion.div>
  );
}
