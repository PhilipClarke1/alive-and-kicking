import { motion } from "framer-motion";
import { contactInfo, heroImage } from "../data/menu";

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export function Hero() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background Image - shifted slightly right on mobile for logo centering */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat sm:bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "45% 50%",
          WebkitBackgroundSize: "cover",
        }}
      />

      {/* Radial gradient overlay - stronger for better text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 45%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.45) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            fontFamily: "Georgia, serif",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)"
          }}
        >
          Alive & Kicking
          <br />
          <span className="text-red-400">Lobsters</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-base sm:text-lg md:text-xl text-white/90 font-medium"
          style={{
            fontFamily: "Georgia, serif",
            textShadow: "1px 1px 4px rgba(0,0,0,0.5)"
          }}
        >
          {contactInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-base font-bold text-white transition-all hover:bg-red-600 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 active:scale-95 uppercase tracking-wide shadow-lg"
          >
            <PhoneIcon />
            Call to Order
          </a>
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="inline-flex items-center rounded-xl border-2 border-white/70 bg-white/10 px-6 py-3 text-base font-bold text-white transition-all hover:border-white hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:-translate-y-1 active:scale-95 uppercase tracking-wide backdrop-blur-sm"
          >
            View Menu
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
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
      </div>
    </section>
  );
}
