import { motion } from "framer-motion";

const features = [
  {
    title: "Premium Material",
    desc: "Crafted from high-grade stainless steel for durability and safety.",
    number: "01",
  },
  {
    title: "24H Temperature Lock",
    desc: "Keeps your drink hot or cold all day without compromising taste.",
    number: "02",
  },
  {
    title: "Minimal Aesthetic",
    desc: "Matte black finish designed to match modern lifestyles.",
    number: "03",
  },
];

export default function Features() {
  return (
    <section className="relative w-full bg-[#161A1E] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest text-gray-500 uppercase">
            Why Black Thumbler
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
            Designed to Perform.
            <br />
            Built to Last.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                relative
                border border-white/5
                bg-white/5
                backdrop-blur-sm
                p-8
                rounded-xl
              "
            >
              <span className="absolute top-6 right-6 text-6xl font-extrabold text-yellow-600 select-none">
                {item.number}
              </span>

              <h3 className="text-lg font-semibold text-white">{item.title}</h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
