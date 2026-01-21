import Bottle from "../assets/Hero.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* ================= LEFT ================= */}
        <div className="bg-[#1B1F24] relative flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              z-10
              px-6 py-16
              md:px-20 md:py-0
              lg:px-28
            "
          >
            <span className="text-xs tracking-widest text-gray-500 uppercase">
              Premium Drinkware
            </span>

            <h1
              className="
              mt-4
              text-3xl sm:text-4xl
              md:text-6xl lg:text-7xl
              font-extrabold text-white leading-tight
            "
            >
              Blvck
              <br />
              Thumbler
            </h1>

            <p
              className="
              mt-5
              max-w-md
              text-gray-400
              text-sm sm:text-base
            "
            >
              Designed for those who value simplicity and bold character. A
              timeless tumbler crafted to elevate your everyday moments.
            </p>

            <p className="mt-6 text-xs text-gray-500 max-w-sm">
              Built with precision. Defined by minimalism.
            </p>
          </motion.div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-[#262C33] relative overflow-hidden flex flex-col justify-center">
          {/* BACKGROUND TEXT (DESKTOP ONLY) */}
          <h2
            className="
            hidden md:block
            absolute top-4 left-1/2 -translate-x-1/2
            text-[140px] lg:text-[180px]
            font-extrabold text-black/20 select-none whitespace-nowrap
          "
          >
            BLVCK
          </h2>

          <h2
            className="
            hidden md:block
            absolute top-56 right-14
            text-[100px]
            font-extrabold text-black/15 select-none
          "
          >
            THUMBLER
          </h2>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              z-10
              px-6 py-12
              md:px-16 md:py-0
              lg:px-20
            "
          >
            <ul className="space-y-3 text-gray-200 text-sm md:text-base">
              <li>• Premium stainless steel</li>
              <li>• Keeps drinks hot or cold for 24 hours</li>
              <li>• Minimal matte black finish</li>
            </ul>

            <button
              className="
              mt-6
              w-fit
              text-white text-sm md:text-base
              border-b border-gray-400
              hover:border-white transition
            "
            >
              Explore the product →
            </button>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTLE ================= */}

      {/* MOBILE: inline */}
      <div className="md:hidden flex justify-center -mt-24 mb-8">
        <motion.img
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={Bottle}
          alt="Hero Bottle"
          className="w-[220px] drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        />
      </div>

      {/* DESKTOP: absolute */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-20">
        <motion.img
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          src={Bottle}
          alt="Hero Bottle"
          className="
            w-[420px] lg:w-[520px]
            drop-shadow-[0_0_60px_rgba(255,255,255,0.15)]
          "
        />
      </div>
    </section>
  );
}
