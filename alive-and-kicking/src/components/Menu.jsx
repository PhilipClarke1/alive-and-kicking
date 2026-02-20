import { motion } from "framer-motion";
import { Section } from "./Section";
import { menuItems, categories, featuredItems, menuImage, menuImageSrcSet } from "../data/menu";
// PNG fallback for older browsers without WebP support
import menuImagePng from "../assets/menu.png";
import { useUIStore } from "../store/useUIStore";

// Keep unused animation variants to avoid HMR issues
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
const featuredCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Menu() {
  const menuFilter = useUIStore((state) => state.menuFilter);
  const setMenuFilter = useUIStore((state) => state.setMenuFilter);

  const filteredItems =
    menuFilter === "all"
      ? menuItems
      : menuItems.filter((item) =>
          Array.isArray(item.category)
            ? item.category.includes(menuFilter)
            : item.category === menuFilter
        );

  return (
    <section id="menu" className="py-16 md:py-24 bg-amber-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl font-display text-slate-800">
          WHAT'S COOKIN'
        </h2>

        {/* Decorative header */}
        <div className="flex items-center justify-center gap-4 -mt-4 mb-8">
          <div className="h-0.5 w-20 bg-red-700"></div>
          <span className="text-red-700 text-2xl">&#9733;</span>
          <div className="h-0.5 w-20 bg-red-700"></div>
        </div>

        {/* Featured Items — alternating image/description blocks */}
        <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 mb-12">
          {featuredItems.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
                <div className={`overflow-hidden ${isReversed ? "md:order-2" : ""}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 md:h-[400px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 md:h-[400px] ${
                    isReversed
                      ? "md:order-1 bg-slate-800 text-white"
                      : "bg-white text-slate-800"
                  }`}
                >
                  <div className={`h-px w-12 mb-6 ${isReversed ? "bg-amber-400" : "bg-red-700"}`} />
                  <h3
                    className={`text-2xl md:text-3xl font-bold font-display uppercase tracking-wide mb-4 ${
                      isReversed ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`text-base md:text-lg leading-relaxed mb-6 font-body ${
                      isReversed ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-2xl md:text-3xl font-bold font-display ${
                        isReversed ? "text-amber-400" : "text-red-700"
                      }`}
                    >
                      {item.price}
                    </span>
                    {item.priceToGo && (
                      <span className={`text-sm ${isReversed ? "text-slate-400" : "text-slate-500"}`}>
                        To Go: {item.priceToGo}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Menu Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 font-display uppercase tracking-wide">
            Full Menu
          </h3>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-0.5 w-16 bg-red-700"></div>
            <span className="text-red-700">&#9733;</span>
            <div className="h-0.5 w-16 bg-red-700"></div>
          </div>
        </div>

        {/* Menu List — grouped by category, minimalist two-column layout */}
        <div className="max-w-4xl mx-auto">
          {categories
            .filter((cat) => cat.id !== "all")
            .map((category) => {
              const items = menuItems.filter((item) =>
                Array.isArray(item.category)
                  ? item.category.includes(category.id)
                  : item.category === category.id
              );
              if (items.length === 0) return null;
              return (
                <div key={category.id} className="mb-10">
                  <h4 className="text-center text-lg md:text-xl font-bold font-display uppercase tracking-[0.2em] text-slate-800 mb-6">
                    {category.label}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
                    {items.map((item) => (
                      <div key={item.id} className="py-3 border-b border-slate-300/60">
                        <div className="flex justify-between items-baseline gap-4">
                          <span className="text-slate-800 font-semibold uppercase tracking-wide text-base">
                            {item.name}
                          </span>
                          <span className="flex-shrink-0 text-slate-800 font-semibold text-base">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        {item.priceToGo && (
                          <p className="text-slate-400 text-xs mt-0.5 italic">
                            To Go: {item.priceToGo}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 text-sm italic">
            Fresh seafood daily. Menu items may sell out. Cash preferred, cards accepted.
          </p>
        </div>
      </div>
    </section>
  );
}
