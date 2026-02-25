import { Section } from "./Section";
import {
  lobsterPrices,
  freshSeafood,
  frozenSeafood,
  pastaItems,
  freshOffTheBoat,
} from "../data/menu";

export function MarketPrices() {
  return (
    <Section
      id="market"
      title="FRESH FROM THE DOCK"
      className="bg-amber-50"
      titleClassName="text-slate-800"
    >
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 -mt-4 mb-8">
        <div className="h-0.5 w-16 bg-red-700"></div>
        <span className="text-red-700">&#9733;</span>
        <div className="h-0.5 w-16 bg-red-700"></div>
      </div>

      {/* Today's Fresh Catch */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg font-bold text-slate-800 uppercase tracking-widest font-display">
          Today's Fresh Catch
        </p>
        <p className="text-slate-500 font-medium mt-3 text-base">
          {freshOffTheBoat.join("  \u2022  ")}
        </p>
      </div>

      {/* Market items — minimalist two-column layout */}
      <div className="max-w-4xl mx-auto">
        {[
          { label: "Live Lobster Prices", items: lobsterPrices },
          { label: "Fresh Seafood", items: freshSeafood },
          { label: "Frozen Seafood", items: frozenSeafood },
          { label: "Deano's Homemade Pasta", items: pastaItems },
        ].map((section) => (
          <div key={section.label} className="mb-10">
            <h4 className="text-center text-lg md:text-xl font-bold font-display uppercase tracking-[0.2em] text-slate-800 mb-6">
              {section.label}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {section.items.map((item) => (
                <div key={item.name} className="py-3 border-b border-slate-300/60">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="text-slate-800 font-semibold uppercase tracking-wide text-base">
                      {item.name}
                    </span>
                    <span className="flex-shrink-0 text-slate-800 font-semibold text-base">
                      {item.price}
                      {item.unit ? <span className="text-slate-400 font-normal text-sm ml-1">{item.unit}</span> : null}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="mt-8 text-center text-slate-500 text-sm italic">
        Prices do not include tax. Prices change daily based on market conditions. Call ahead for availability.
      </p>
    </Section>
  );
}
