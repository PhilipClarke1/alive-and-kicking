import { motion } from "framer-motion";
import { Section } from "./Section";
import { seatingImage } from "../data/menu";
import louPhoto from "../assets/lou1984pic2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function About() {
  return (
    <Section
      id="about"
      title="Our Story"
      className="bg-gradient-to-b from-[#f5efe6] to-[#ede4d4]"
      titleClassName="text-slate-800"
    >
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 -mt-4 mb-12">
        <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-slate-400" />
        <span className="text-red-700 text-2xl">&#9733;</span>
        <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-slate-400" />
      </div>

      {/* First block: Louis photo left, origin story right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <img
              src={louPhoto}
              alt="Louis Mastrangelo, founder of Alive & Kicking Lobsters"
              className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-black/5"
            />
            <div className="absolute bottom-3 right-3 md:-bottom-3 md:-right-3 bg-slate-800 text-amber-100 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold tracking-wider uppercase">
              Louis Mastrangelo
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          className="space-y-5"
        >
          <motion.p variants={fadeUp} className="text-slate-500 text-lg tracking-wide uppercase font-medium">
            Owner Louis Mastrangelo
          </motion.p>
          <motion.p variants={fadeUp} className="text-lg leading-relaxed text-slate-700 font-body">
            Louis Mastrangelo grew up in a big Italian-American family in Cambridge. His father Rocco
            came to Boston from a small hilltop village in southern Italy called Anzano di Puglia in 1914
            as a teenager. Louis's fondest memories are of Sunday afternoons at his grandparents' table,
            the whole family crowded together over homemade pasta, meatballs, cold cuts, and wine that
            never seemed to run out. That love of feeding people never left him. In 1995, he opened
            Alive & Kicking Lobsters, and over thirty years later, every customer who walks through the
            door still gets treated like family.
          </motion.p>
        </motion.div>
      </div>

      {/* Second block: story right, outdoor dining left */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          className="space-y-5 md:order-1"
        >
          <motion.p variants={fadeUp} className="text-lg leading-relaxed text-slate-700 font-body">
            Tucked inside a blue house on a quiet Cambridge side street, Alive & Kicking is part
            seafood market, part neighborhood gathering spot. Grab a seat at one of the outdoor tables,
            order a lobster sandwich on Scali bread, and see why people drive from all over
            Boston to eat here. We sell fresh live lobsters, steamed lobsters, chowders, and seafood
            straight off the boat. It's casual, it's local, and the food speaks for itself.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:order-2"
        >
          <div className="relative">
            <img
              src={seatingImage}
              alt="Outdoor seating at Alive & Kicking"
              className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-black/5"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 md:-bottom-3 md:-left-3 bg-slate-800 text-amber-100 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold tracking-wider uppercase">
              Since 1995
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature badges */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-3 justify-center mt-4"
      >
        {["Family Owned", "Dogs Welcome", "Outdoor Seating", "Fresh Daily"].map((text) => (
          <span
            key={text}
            className="px-5 py-2 rounded-full bg-slate-800 text-amber-50 text-sm font-medium tracking-wide shadow-md"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </Section>
  );
}
