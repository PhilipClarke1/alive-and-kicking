import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { contactInfo, heroImage } from "../data/menu";

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Animated Fresh Catch Ticker
function FreshCatchTicker() {
  const catches = ["Fresh Lobsters", "Steamed Clams", "Lobster Bisque", "Twin Lobster Special", "Seafood Chowder"];

  return (
    <motion.div
      className="overflow-hidden whitespace-nowrap py-3 border-t border-b border-white/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-flex gap-8"
      >
        {[...catches, ...catches].map((item, i) => (
          <span key={i} className="text-amber-300/90 text-sm font-medium tracking-wide">
            {item} <span className="mx-4 text-red-400">&#10038;</span>
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

// Established Badge - inline version for use near title
function EstablishedBadge() {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/90 text-slate-900"
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
      }}
    >
      Est. 1995
    </motion.span>
  );
}

// Wave Animation at Bottom (simplified for mobile performance)
function WaveDecoration() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 overflow-hidden pointer-events-none gpu-accelerated">
      <motion.svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200%] h-full gpu-accelerated"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 C2400,100 2640,20 2880,60 L2880,120 L0,120 Z"
          fill="rgba(30, 41, 59, 0.85)"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-[200%] h-full"
        initial={{ x: "-25%" }}
        animate={{ x: "-75%" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M0,80 C240,40 480,100 720,80 C960,40 1200,100 1440,80 C1680,40 1920,100 2160,80 C2400,40 2640,100 2880,80 L2880,120 L0,120 Z"
          fill="rgba(30, 41, 59, 0.6)"
        />
      </motion.svg>
    </div>
  );
}


export function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms - background moves slower than scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToMenu = (e) => {
    e.preventDefault();
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{
        paddingTop: "calc(80px + env(safe-area-inset-top, 0px))",
        minHeight: "100dvh" // Dynamic viewport height for mobile
      }}
    >
      {/* Background Image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      {/* Darker gradient overlay for better text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.6) 100%)
          `,
        }}
      />


      {/* Content with parallax */}
      <motion.div
        className="relative z-10 w-full mx-auto max-w-5xl px-4 pb-28 sm:pb-24 text-center sm:px-6 lg:px-8"
        style={{ y: contentY, opacity: contentOpacity }}
      >

        {/* Rope/Line Decoration */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-0.5 w-12 sm:w-20 bg-amber-400/60" />
          <span className="text-amber-400 text-xl">&#10038;</span>
          <div className="h-0.5 w-12 sm:w-20 bg-amber-400/60" />
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-display"
          style={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)"
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Alive & Kicking
          </motion.span>
          <br />
          <motion.span
            className="text-red-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Lobsters
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-5 max-w-xl text-base sm:text-lg md:text-xl text-white/90 font-medium font-display"
          style={{
            textShadow: "1px 1px 4px rgba(0,0,0,0.5)"
          }}
        >
          {contactInfo.tagline}
        </motion.p>

        {/* Sub-tagline with location and Est badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-3"
        >
          <span
            className="text-white text-sm sm:text-base tracking-wide font-medium"
            style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
          >
            Cambridge, MA
          </span>
          <span className="text-white/40">|</span>
          <EstablishedBadge />
        </motion.div>

        {/* Fresh Catch Ticker */}
        <div className="mt-8 max-w-2xl mx-auto">
          <FreshCatchTicker />
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
            className="relative inline-flex items-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-base font-bold text-white transition-all hover:bg-red-600 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 active:scale-95 uppercase tracking-wide shadow-lg overflow-hidden group"
          >
            <PhoneIcon />
            Call to Order
            {/* Pulsing ring effect */}
            <motion.span
              className="absolute inset-0 rounded-xl border-2 border-red-400/50"
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </a>
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="inline-flex items-center rounded-xl border-2 border-white/70 bg-white/10 px-6 py-3 text-base font-bold text-white transition-all hover:border-white hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-95 uppercase tracking-wide backdrop-blur-sm"
          >
            View Menu
          </a>
        </motion.div>
      </motion.div>

      {/* Wave decoration at bottom */}
      <WaveDecoration />

      {/* Scroll indicator - hidden on mobile, lower on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
