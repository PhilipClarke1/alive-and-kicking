import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  lobsterPrices,
  freshSeafood,
  frozenSeafood,
  pastaItems,
  freshOffTheBoat,
} from "../data/menu";

function PriceCard({ title, items, accentColor = "#b91c1c", note, rotation = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      className="relative pt-10 h-full"
      style={{ transformOrigin: "top center" }}
    >
      {/* Nail at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        {/* Nail head */}
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 35%, #aaa, #555, #333)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.3)",
          }}
        />
        {/* Rope/twine */}
        <div
          className="w-2 h-8"
          style={{
            background: `
              repeating-linear-gradient(180deg,
                #D4A574 0px,
                #A67C52 2px,
                #8B7355 4px,
                #D4A574 6px
              )
            `,
            borderRadius: "3px",
            boxShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        />
      </div>

      {/* Card - weathered wood sign */}
      <div
        className="rounded-lg p-5 shadow-xl h-full flex flex-col relative overflow-hidden"
        style={{
          background: `
            repeating-linear-gradient(92deg, rgba(139,90,43,0.15) 0px, rgba(160,120,60,0.18) 3px, rgba(139,90,43,0.12) 6px),
            repeating-linear-gradient(88deg, rgba(101,67,33,0.08) 0px, transparent 1px, rgba(101,67,33,0.08) 2px),
            linear-gradient(to bottom, #e8c992, #d4a35a, #b8864a, #a67c52)
          `,
          boxShadow: `
            inset 3px 3px 8px rgba(255,255,255,0.35),
            inset -3px -3px 8px rgba(0,0,0,0.25),
            inset 0 0 20px rgba(139,90,43,0.15),
            0 0 0 4px #8B4513,
            0 0 0 6px #654321,
            0 0 0 8px #4a3520,
            8px 10px 20px rgba(0,0,0,0.45)
          `,
          borderRadius: "6px",
        }}
      >
        {/* Weathered edge effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at top left, rgba(255,255,255,0.15) 0%, transparent 30%),
              radial-gradient(ellipse at bottom right, rgba(0,0,0,0.1) 0%, transparent 30%)
            `,
          }}
        />
        {/* Title bar - painted wood style */}
        <div
          className="mb-4 -mx-5 -mt-5 px-5 py-3 rounded-t-lg relative"
          style={{
            background: `
              repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(0,0,0,0.05) 2px, rgba(255,255,255,0.03) 4px),
              linear-gradient(to bottom, ${accentColor}, ${accentColor}cc)
            `,
            borderBottom: "4px solid rgba(0,0,0,0.3)",
            boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.2)",
          }}
        >
          <h3
            className="text-lg font-bold text-white uppercase tracking-wider text-center relative"
            style={{
              textShadow: "2px 2px 0 rgba(0,0,0,0.4), -1px -1px 0 rgba(255,255,255,0.1)",
              letterSpacing: "0.15em",
            }}
          >
            {title}
          </h3>
        </div>

        <ul className="space-y-2 flex-1">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-baseline text-slate-900 border-b border-amber-800/20 pb-1.5"
            >
              <span className="font-medium text-sm">{item.name}</span>
              <span className="font-bold text-slate-800 ml-2 whitespace-nowrap">
                {item.price}
                {item.unit && (
                  <span className="text-slate-600 text-xs ml-1">{item.unit}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
        {note && (
          <p className="mt-3 text-center text-slate-700 text-xs italic font-medium border-t border-amber-800/20 pt-2">
            {note}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function MarketPrices() {
  return (
    <Section
      id="market"
      title="FRESH FROM THE DOCK"
      className="bg-slate-900"
      titleClassName="text-amber-100"
    >
      {/* Decorative header */}
      <div className="flex items-center justify-center gap-4 -mt-4 mb-8">
        <div className="h-0.5 w-20 bg-amber-500"></div>
        <span className="text-amber-400 text-2xl">&#9733;</span>
        <div className="h-0.5 w-20 bg-amber-500"></div>
      </div>

      {/* Today's Fresh Catch Banner - Chalkboard style */}
      <motion.div
        initial={{ opacity: 0, y: -20, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div
          className="max-w-3xl mx-auto px-6 sm:px-10 py-5 rounded-lg text-center relative overflow-hidden"
          style={{
            background: `
              repeating-linear-gradient(92deg, rgba(255,255,255,0.03) 0px, rgba(0,0,0,0.05) 3px, rgba(255,255,255,0.02) 6px),
              linear-gradient(to bottom, #2d1810, #1a0f0a)
            `,
            boxShadow: `
              inset 3px 3px 10px rgba(255,255,255,0.08),
              inset -3px -3px 10px rgba(0,0,0,0.4),
              0 0 0 6px #8B4513,
              0 0 0 9px #654321,
              0 0 0 11px #4a3520,
              10px 12px 30px rgba(0,0,0,0.6)
            `,
          }}
        >
          {/* Chalk dust effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 40%)",
            }}
          />
          <p
            className="text-lg sm:text-2xl font-bold text-amber-100 uppercase tracking-widest relative"
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              fontFamily: "Georgia, serif",
            }}
          >
            Today's Fresh Catch
          </p>
          <p
            className="text-amber-300 font-medium mt-3 text-sm sm:text-lg relative"
            style={{
              textShadow: "1px 1px 1px rgba(0,0,0,0.4)",
            }}
          >
            {freshOffTheBoat.join("  •  ")}
          </p>
        </div>
      </motion.div>

      {/* Price Cards Grid - Equal height cards */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 lg:gap-10">
        <PriceCard
          title="Live Lobster"
          items={lobsterPrices}
          accentColor="#b91c1c"
          note="Any size lobster can be cooked to order!"
          rotation={-1.5}
        />
        <PriceCard
          title="Fresh Seafood"
          items={freshSeafood}
          accentColor="#1e40af"
          rotation={1}
        />
        <PriceCard
          title="Frozen Seafood"
          items={frozenSeafood}
          accentColor="#0f766e"
          rotation={-0.8}
        />
        <PriceCard
          title="Deano's Pasta"
          items={pastaItems}
          accentColor="#b45309"
          rotation={1.2}
        />
      </div>

      {/* Note */}
      <p className="mt-10 text-center text-amber-200/80 italic">
        Prices change daily based on market conditions. Call ahead for availability.
      </p>
    </Section>
  );
}
