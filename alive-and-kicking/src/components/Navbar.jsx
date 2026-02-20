import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "../store/useUIStore";
import { contactInfo, logo } from "../data/menu";

const navLinks = [
  { id: "menu", label: "Menu" },
  { id: "market", label: "Market" },
  { id: "about", label: "About" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Find Us" },
];

export function Navbar() {
  const activeSection = useUIStore((state) => state.activeSection);
  const isMobileNavOpen = useUIStore((state) => state.isMobileNavOpen);
  const toggleMobileNav = useUIStore((state) => state.toggleMobileNav);
  const closeMobileNav = useUIStore((state) => state.closeMobileNav);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    closeMobileNav();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      {/* Single compact navigation bar */}
      <nav className="bg-slate-800/85 backdrop-blur-md relative">
        {/* Gradient fade at bottom edge */}
        <div
          className="absolute left-0 right-0 top-full h-8 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(30,41,59,0.6) 0%, rgba(30,41,59,0) 100%)'
          }}
        />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          {/* Logo with hover effect */}
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img
              src={logo}
              alt="Alive & Kicking Lobsters"
              className="h-14 w-14 object-contain brightness-110"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
            <span
              className="text-lg font-bold text-white tracking-wide hidden sm:block font-display"
            >
              Alive & Kicking
            </span>
          </motion.a>

          {/* Desktop Navigation with animated underlines */}
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                    activeSection === link.id
                      ? "text-red-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-400 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeSection === link.id ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side - Hours + Social + Call */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-white/70 text-sm font-medium tracking-wide">
              {contactInfo.hours.weekday}
            </span>
            <div className="flex items-center gap-2">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full text-white/70 transition-all hover:text-white hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full text-white/70 transition-all hover:text-white hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <motion.a
              href={`tel:${contactInfo.phone}`}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-red-700 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-600"
              style={{
                boxShadow: "0 2px 10px rgba(185, 28, 28, 0.3)",
              }}
            >
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                whileHover={{ rotate: 15 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </motion.svg>
              Call
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileNav}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileNavOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMobileNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/10 bg-slate-900/95 lg:hidden"
            >
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 },
                  },
                }}
                className="px-4 py-3"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.id}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: -10 },
                    }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`block py-2.5 text-base font-medium tracking-wide transition-colors ${
                        activeSection === link.id
                          ? "text-red-400"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                {/* Mobile call button */}
                <motion.li
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 },
                  }}
                  className="pt-3 mt-2 border-t border-white/10"
                >
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-2 text-amber-400 font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {contactInfo.phone}
                  </a>
                  <p className="text-white/50 text-sm mt-1">{contactInfo.hours.weekday}</p>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
