import { motion } from "framer-motion";
import { Section } from "./Section";
import { menuItems, categories, featuredItems, menuImage, menuImageSrcSet } from "../data/menu";
// PNG fallback for older browsers without WebP support
import menuImagePng from "../assets/menu.png";
import { useUIStore } from "../store/useUIStore";

// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const featuredCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
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
    <Section id="menu" title="WHAT'S COOKIN'" className="bg-amber-50" titleClassName="text-slate-800">
      {/* Decorative header */}
      <div className="flex items-center justify-center gap-4 -mt-4 mb-8">
        <div className="h-0.5 w-20 bg-red-700"></div>
        <span className="text-red-700 text-2xl">&#9733;</span>
        <div className="h-0.5 w-20 bg-red-700"></div>
      </div>

      {/* Featured Items - Two Hero Images with stagger */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {featuredItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={featuredCardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-xl shadow-2xl group cursor-pointer"
            style={{
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            {/* Overlay with enhanced hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
            {/* Content with slide-up effect */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
              <h3 className="text-2xl font-bold mb-1 font-display">
                {item.name}
              </h3>
              <p className="text-amber-200 text-sm mb-2 transition-colors duration-300 group-hover:text-amber-100">{item.description}</p>
              <div className="flex items-center gap-3">
                <motion.span
                  className="text-2xl font-bold text-amber-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.price}
                </motion.span>
                {item.priceToGo && (
                  <span className="text-sm text-amber-100/80">To Go: {item.priceToGo}</span>
                )}
              </div>
            </div>
            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 30px rgba(251, 191, 36, 0.15)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Filter Chips with animation */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setMenuFilter(category.id)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all relative overflow-hidden ${
              menuFilter === category.id
                ? "bg-red-700 text-white shadow-lg"
                : "bg-white text-slate-700 border-2 border-amber-300 hover:border-red-400 hover:text-red-700"
            }`}
            style={{
              boxShadow: menuFilter === category.id
                ? "0 4px 15px rgba(185, 28, 28, 0.4)"
                : "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {category.label}
            {/* Animated underline for active state */}
            {menuFilter === category.id && (
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Text-Only Menu List */}
      <div
        className="rounded-xl p-6 md:p-8 shadow-xl"
        style={{
          background: `
            repeating-linear-gradient(90deg, rgba(139,90,43,0.08) 0px, rgba(160,120,60,0.1) 2px, rgba(139,90,43,0.08) 4px),
            linear-gradient(to bottom, #3d2817, #2a1a0f)
          `,
          boxShadow: `
            inset 2px 2px 8px rgba(255,255,255,0.1),
            inset -2px -2px 8px rgba(0,0,0,0.3),
            0 0 0 4px #5c3d2e,
            0 0 0 6px #3d2817,
            8px 8px 20px rgba(0,0,0,0.4)
          `,
        }}
      >
        <motion.div
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={menuFilter} // Re-animate on filter change
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              variants={itemVariants}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.08)",
                x: 4,
                transition: { duration: 0.2 },
              }}
              className="flex justify-between items-baseline py-2 px-3 rounded-lg transition-colors border-b border-amber-900/30 cursor-default"
            >
              <div>
                <span className="text-amber-100 font-medium">{item.name}</span>
                {item.description && (
                  <span className="block text-amber-300/60 text-xs mt-0.5">{item.description}</span>
                )}
              </div>
              <div className="ml-4 text-right flex-shrink-0">
                <span className="text-amber-300 font-bold">{item.price}</span>
                {item.priceToGo && (
                  <span className="block text-amber-200/60 text-xs">To Go: {item.priceToGo}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full Menu Image - Full width with proper framing */}
      <div className="mt-12">
        <p className="text-slate-600 mb-6 font-medium text-center text-lg">Our Complete Menu Board</p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-2xl"
          style={{
            boxShadow: `
              0 0 0 6px #5c3d2e,
              0 0 0 10px #3d2817,
              0 0 0 12px #2a1a0f,
              12px 12px 40px rgba(0,0,0,0.5)
            `,
          }}
        >
          <picture>
            {/* WebP sources for modern browsers */}
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={menuImageSrcSet.small}
            />
            <source
              type="image/webp"
              media="(max-width: 1024px)"
              srcSet={menuImageSrcSet.medium}
            />
            <source
              type="image/webp"
              srcSet={menuImage}
            />
            {/* PNG fallback for older browsers */}
            <img
              src={menuImagePng}
              alt="Full Menu Board"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </motion.div>
      </div>

      {/* Note */}
      <div className="mt-8 text-center">
        <p className="text-slate-600 text-sm italic">
          Fresh seafood daily. Menu items may sell out. Cash preferred, cards accepted.
        </p>
      </div>
    </Section>
  );
}
