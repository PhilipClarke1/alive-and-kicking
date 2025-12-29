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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Single compact navigation bar */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img
              src={logo}
              alt="Alive & Kicking Lobsters"
              className="h-10 w-10 rounded-full object-cover border-2 border-red-600"
            />
            <span
              className="text-lg font-bold text-white tracking-wide hidden sm:block"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Alive & Kicking
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    activeSection === link.id
                      ? "text-red-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side - Hours + Call */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-white/60 text-xs">
              {contactInfo.hours.weekday}
            </span>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-red-700 px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-red-600"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </a>
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
