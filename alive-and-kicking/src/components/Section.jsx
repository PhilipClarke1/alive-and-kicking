import { motion } from "framer-motion";

export function Section({ id, title, children, className = "", titleClassName = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className={`mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl font-display ${titleClassName || 'text-slate-900'}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}
