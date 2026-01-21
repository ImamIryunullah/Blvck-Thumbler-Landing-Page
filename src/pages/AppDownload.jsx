import { motion } from "framer-motion";
import GooglePlay from "../assets/PlayStore.png";
import AppStore from "../assets/appStore.png";

export default function AppDownload() {
  return (
    <section className="relative bg-[#14181D] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-xs tracking-widest text-gray-500 uppercase">
              Stay Connected
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Experience Black Thumbler
              <br />
              Beyond the Product
            </h2>

            <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed">
              Track your hydration, explore exclusive drops, and stay connected
              with the Black Thumbler lifestyle — all in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white border border-white/10 rounded-xl px-6 py-4 hover:border-yellow-600 transition"
            >
              <img
                src={GooglePlay}
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center bg-white border border-white/10 rounded-xl px-6 py-4 hover:border-yellow-600 transition"
            >
              <img
                src={AppStore}
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-yellow-600/10 blur-[140px] rounded-full pointer-events-none" />
    </section>
  );
}
