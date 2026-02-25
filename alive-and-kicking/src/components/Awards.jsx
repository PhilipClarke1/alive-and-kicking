import { motion } from "framer-motion";
import phantomGourmetLogo from "../assets/logos/phantom-gourmet.png";
import roadfoodLogo from "../assets/logos/roadfood.svg";

const awards = [
  {
    name: "Best Lobster Roll",
    org: "Boston Magazine",
    year: "2014",
  },
  {
    name: "Secret Eats with Adam Richman",
    org: "Travel Channel",
    year: "2015",
  },
  {
    name: "Featured Restaurant",
    org: "Phantom Gourmet",
    year: "2011",
  },
  {
    name: "Top Seafood in Boston",
    org: "Tasting Table",
    year: "2024",
  },
  {
    name: "Best Lobster Rolls",
    org: "The Infatuation",
    year: "2022",
  },
  {
    name: "Worth a Detour",
    org: "Roadfood",
    year: "2023",
  },
];

// Inline SVG logos
function BostonMagLogo({ className }) {
  return (
    <svg className={className} viewBox="88 163 385 72" xmlns="http://www.w3.org/2000/svg">
      <path d="m470 231.805h-34.394v-3.187h1.194c3.12 0 5.246-1.293 5.246-5.909v-29.349c0-5.211-1.804-7.768-6.706-7.768-5.495 0-8.536 2.67-10.69 5.046v31.672c0 4.605 2.238 6.308 5.18 6.308h1.194v3.187h-36.122v-3.187h1.196c3.322 0 6.706-1.567 6.706-5.577v-35.192c0-3.193-1.812-4.847-5.378-4.847h-1.062v-3.187h27.689v6.043h.53c3.49-3.343 10.91-9.031 18.858-9.031 12.849 0 20.119 6.934 20.119 17.13v29.217c0 4.314 2.793 5.444 5.245 5.444h1.195zm-134.856-7.371c-1.793.863-3.832 1.395-5.577 1.395-4.679 0-9.03-1.524-9.03-6.574v-35.39h12.482v-4.117h-12.482v-12.948h-4.515c-6.175 10.159-14.21 12.615-24.701 13.678v3.387h6.575v34.858c0 8.632 4.846 14.41 17.594 14.41 9.695 0 16.192-3.069 21.115-5.446zm-42.628-9.561c0-9.964-5.618-15.417-17.728-19.455l-7.371-2.457c-5.309-1.77-8.566-2.988-8.566-6.64 0-3.718 3.687-5.51 9.629-5.51 11.552 0 15.271 4.117 17.396 11.354h2.988v-11.62c-4.98-2.058-12.085-3.918-20.583-3.918-14.21 0-27.954 5.843-27.954 18.525 0 9.562 5.579 13.984 15.272 17.264l8.631 2.922c5.885 1.991 9.827 3.519 9.827 7.769 0 3.718-4.183 5.909-11.288 5.909-11.951 0-18.194-4.514-20.451-14.143h-3.187v13.547c5.844 2.788 11.421 4.713 24.435 4.713 17.994 0 28.95-5.643 28.95-18.26m82.004-10.69c0 15.596-3.533 25.497-10.293 25.497-6.535 0-9.761-9-9.761-25.564 0-14.11 3.144-24.036 9.827-24.036 5.868 0 10.227 8.285 10.227 24.103m23.239 0c0-19.312-16.984-28.021-33.399-28.021-17.761 0-33.332 10.071-33.332 27.821 0 18.662 14.738 29.217 32.935 29.217 20.218 0 33.796-13.787 33.796-29.017m-183.261 0c0 15.596-3.399 25.497-10.159 25.497-6.535 0-9.893-9-9.893-25.564 0-14.11 3.076-24.036 9.76-24.036 5.87 0 10.292 8.285 10.292 24.103m23.24 0c0-19.312-16.983-28.021-33.399-28.021-17.763 0-33.398 10.071-33.398 27.821 0 18.662 14.803 29.217 33.001 29.217 20.216 0 33.796-13.787 33.796-29.017m-96.014 9.097c0 8.021-3.519 14.341-13.876 14.341h-4.782v-27.224h4.782c10.524 0 13.876 4.416 13.876 12.883m-.597-29.548c0 7.131-3.816 12.417-13.545 12.417h-4.516v-25.033h4.383c9.429 0 13.678 4.743 13.678 12.616m28.02 28.817c0-10.695-9.156-14.803-22.376-15.471v-.731c10.62-1.484 18.593-5.378 18.593-14.939 0-10.205-14.588-14.608-31.674-14.608h-43.69v2.789h1.196c3.044 0 6.175.81 6.175 4.449v49.6c0 3.862-2.834 4.979-6.175 4.979h-1.196v3.188h47.807c20.053 0 31.34-8.338 31.34-19.256" fill="#131313"/>
    </svg>
  );
}

function TravelChannelLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 369.3 96.5" xmlns="http://www.w3.org/2000/svg">
      <path fill="#00B3E3" d="M184.7 0c-26.7 0-48.3 21.6-48.3 48.3s21.6 48.3 48.3 48.3 48.3-21.6 48.3-48.3S211.3 0 184.7 0zm22.2 62.8h-9.5V40.3h-12.7v22.5h-9.5V40.3h-12.7v22.5h-9.5V31.2h53.9v31.6z"/>
      <path fill="#131313" d="M0 31.2h19.1v31.6h9.5V31.2h19.1v-9.1H0zM67.9 33.5c3.7 0 7.2 1.5 9.8 4.1l6.7-6.7c-4.3-4.3-10.2-7-16.5-7-12.9 0-23.3 10.4-23.3 23.3s10.4 23.3 23.3 23.3c6.3 0 12.2-2.7 16.5-7l-6.7-6.7c-2.6 2.6-6.1 4.1-9.8 4.1-7.6 0-13.8-6.2-13.8-13.8s6.2-13.6 13.8-13.6z"/>
      <path fill="#131313" d="M282.8 22.1v19.1h-19.1V22.1h-9.5v40.7h9.5V50.3h19.1v12.5h9.5V22.1zM316.1 53.7h-14.3l7.2-17.2 7.1 17.2zm2.8-31.6l-20.8 40.7h10.2l3.2-7.7h18.8l3.2 7.7h10.2l-20.8-40.7h-4zM369.3 53.7v9.1h-31.6V22.1h9.5v31.6z"/>
      <path fill="#131313" d="M105.3 38.1V22.1H95.8v40.7h9.5V47.2h4.6l11.6 15.6h11.6l-13.3-17.1c5.4-2.4 9.1-7.5 9.1-14.3v-.5c0-9-6.5-13.8-16.1-13.8h-7.5zm0-7.5h5c4 0 7 1.8 7 5.6v.5c0 3.5-2.8 5.6-7 5.6h-5V30.6z"/>
    </svg>
  );
}

function TastingTableLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 220 24" xmlns="http://www.w3.org/2000/svg">
      <text x="110" y="18" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="400" fontSize="16" letterSpacing="4" fill="#131313">TASTING TABLE</text>
    </svg>
  );
}

function InfatuationLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 320 40" xmlns="http://www.w3.org/2000/svg">
      <text x="160" y="28" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif" fontWeight="700" fontSize="20" letterSpacing="2" fill="#131313">THE INFATUATION</text>
    </svg>
  );
}

const logoComponents = {
  "Boston Magazine": BostonMagLogo,
  "Travel Channel": TravelChannelLogo,
  "Tasting Table": TastingTableLogo,
  "The Infatuation": InfatuationLogo,
};

const logoImages = {
  "Phantom Gourmet": phantomGourmetLogo,
  "Roadfood": roadfoodLogo,
};

function AwardCard({ award }) {
  const LogoComponent = logoComponents[award.org];
  const logoSrc = logoImages[award.org];

  return (
    <div className="flex-shrink-0 flex flex-col items-center text-center gap-3 w-48 px-4">
      <div className="h-12 flex items-center justify-center">
        {LogoComponent ? (
          <LogoComponent className="h-10 w-auto max-w-[160px]" />
        ) : logoSrc ? (
          <img
            src={logoSrc}
            alt={award.org}
            className="max-h-10 max-w-[160px] object-contain"
          />
        ) : null}
      </div>
      <div>
        <p className="text-slate-800 text-sm font-bold leading-tight whitespace-nowrap">
          {award.name}
        </p>
        {award.year && (
          <p className="text-slate-500 text-xs mt-1">{award.year}</p>
        )}
      </div>
    </div>
  );
}

export function Awards() {
  // Double the awards array for seamless looping
  const doubled = [...awards, ...awards];

  return (
    <section className="py-12 bg-white border-y border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base md:text-lg font-bold uppercase tracking-[0.25em] text-slate-500 mb-8">
          As Featured In & Recognized By
        </p>
      </div>
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {doubled.map((award, i) => (
          <AwardCard key={`${award.name}-${i}`} award={award} />
        ))}
      </motion.div>
    </section>
  );
}
