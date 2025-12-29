import { motion } from "framer-motion";
import { Section } from "./Section";
import { seatingImage } from "../data/menu";

export function About() {
  return (
    <Section id="about" title="Our Story" className="bg-amber-100" titleClassName="text-slate-800">
      {/* Decorative header */}
      <div className="flex items-center justify-center gap-4 -mt-4 mb-8">
        <div className="h-0.5 w-20 bg-red-700"></div>
        <span className="text-red-700 text-2xl">&#9733;</span>
        <div className="h-0.5 w-20 bg-red-700"></div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="rounded-xl overflow-hidden shadow-2xl"
            style={{
              boxShadow: `
                0 0 0 4px #5c3d2e,
                0 0 0 6px #3d2817,
                8px 8px 20px rgba(0,0,0,0.4)
              `,
            }}
          >
            <img
              src={seatingImage}
              alt="Outdoor seating at Alive & Kicking"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative badge */}
          <div
            className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg shadow-lg transform rotate-3"
            style={{
              background: `
                repeating-linear-gradient(90deg, rgba(139,90,43,0.1) 0px, rgba(160,120,60,0.12) 2px, rgba(139,90,43,0.1) 4px),
                linear-gradient(to bottom, #c4a35a, #a67c52)
              `,
              boxShadow: `
                inset 2px 2px 4px rgba(255,255,255,0.3),
                inset -2px -2px 4px rgba(0,0,0,0.2),
                4px 4px 10px rgba(0,0,0,0.3)
              `,
            }}
          >
            <span className="font-bold text-slate-900 uppercase tracking-wide text-sm">Since 1995</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div
            className="rounded-xl p-6 shadow-xl"
            style={{
              background: `
                repeating-linear-gradient(90deg, rgba(139,90,43,0.08) 0px, rgba(160,120,60,0.1) 2px, rgba(139,90,43,0.08) 4px),
                linear-gradient(to bottom, #3d2817, #2a1a0f)
              `,
              boxShadow: `
                inset 2px 2px 8px rgba(255,255,255,0.1),
                inset -2px -2px 8px rgba(0,0,0,0.3),
                0 0 0 4px #5c3d2e,
                6px 6px 15px rgba(0,0,0,0.3)
              `,
            }}
          >
            <p className="text-lg leading-relaxed text-amber-100 font-display">
              Hidden in a blue house on a quiet Cambridge street, Alive & Kicking
              Lobsters has been serving the neighborhood since 1995. We're a
              no-frills fish market and lobster shack—just lobster tanks, fresh
              seafood on ice, and the best lobster sandwich in Boston.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-amber-100 font-display">
              Grab a seat at our outdoor picnic tables, order at the counter, and
              enjoy lobster the way it's meant to be—fresh, simple, and straight
              from the ocean.
            </p>
          </div>

          {/* Feature badges - Wood style */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {[
              { text: "Cash or Card", color: "from-slate-700 to-slate-800" },
              { text: "Dogs Welcome", color: "from-blue-800 to-blue-900" },
              { text: "Outdoor Seating", color: "from-amber-700 to-amber-800" },
              { text: "Fresh Daily", color: "from-red-700 to-red-800" },
            ].map((badge, i) => (
              <div
                key={badge.text}
                className="px-4 py-2 rounded-lg shadow-lg"
                style={{
                  background: `
                    repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.05) 4px),
                    linear-gradient(to bottom, ${badge.color.includes('slate') ? '#475569, #334155' :
                      badge.color.includes('blue') ? '#1e40af, #1e3a8a' :
                      badge.color.includes('amber') ? '#b45309, #92400e' : '#b91c1c, #991b1b'})
                  `,
                  boxShadow: `
                    inset 1px 1px 3px rgba(255,255,255,0.2),
                    inset -1px -1px 3px rgba(0,0,0,0.3),
                    3px 3px 8px rgba(0,0,0,0.3)
                  `,
                  transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)`,
                }}
              >
                <span className="font-bold text-white uppercase tracking-wide text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
