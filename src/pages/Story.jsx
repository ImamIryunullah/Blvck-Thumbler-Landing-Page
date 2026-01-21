import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative w-full bg-[#111418] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT — STORY TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-widest text-gray-500 uppercase">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Less Noise.
              <br />
              More Meaning.
            </h2>

            <p className="mt-6 text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Black Thumbler was born from a simple idea — everyday objects
              should be thoughtfully designed. We believe minimalism is not
              about having less, but choosing better.
            </p>

            <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              Every curve, every material, and every finish is intentionally
              crafted to deliver clarity, durability, and timeless presence in
              your daily routine.
            </p>
          </motion.div>

          {/* RIGHT — VISUAL / QUOTE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* BIG QUOTE BACKGROUND */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[120px] md:text-[180px] font-extrabold text-white/5 select-none">
                STORY
              </span>
            </div>

            {/* FOREGROUND QUOTE */}
            <div className="relative z-10 border-l border-white/10 pl-6">
              <p className="text-lg md:text-xl text-yellow-600 font-light leading-relaxed">
                “Design is not decoration.
                <br />
                It’s intention.”
              </p>

              <span className="mt-4 block text-xs tracking-widest text-gray-500 uppercase">
                Black Thumbler Philosophy
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SUBTLE GLOW */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
