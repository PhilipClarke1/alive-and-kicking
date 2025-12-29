import { motion } from "framer-motion";
import { Section } from "./Section";

const ratings = {
  google: { score: 4.6, reviews: 1289 },
  yelp: { score: 4.5, reviews: 1032 },
  tripadvisor: { score: 4.4, reviews: 200 },
};

const reviews = [
  {
    id: 1,
    reviewer: "Justin",
    source: "Google",
    rating: 5,
    quote: "Best lobster ever!!! Food: 5 Service: 5 Atmosphere: 5",
  },
  {
    id: 2,
    reviewer: "Anonymous",
    source: "TripAdvisor",
    rating: 5,
    quote: "The lobster was easily the freshest and most delicious in all of Boston, and comes on a perfectly simple sandwich. We're still dreaming of it!",
  },
  {
    id: 3,
    reviewer: "Anonymous",
    source: "Yelp",
    rating: 5,
    quote: "One of the better lobster rolls (I mean sandwiches) in the Boston area. Tiny little hole in the wall spot with casual outdoor seating. Lobster is fresh and delicious!",
  },
  {
    id: 4,
    reviewer: "Anonymous",
    source: "Roadfood",
    rating: 5,
    quote: "The lobster was as fresh and tender as they come, with not a bit of the rubbery-ness that can ruin an otherwise enjoyable lobster-eating experience.",
  },
  {
    id: 5,
    reviewer: "Anonymous",
    source: "Google",
    rating: 5,
    quote: "A hidden gem in Cambridge! The lobster sandwich is absolutely incredible - generous portions of sweet, succulent lobster on fresh bread. Worth every penny!",
  },
  {
    id: 6,
    reviewer: "Anonymous",
    source: "Yelp",
    rating: 5,
    quote: "Hands down the best lobster I've ever had! The staff is friendly, the atmosphere is charming, and the seafood is unbelievably fresh. A must-visit!",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" title="WHAT FOLKS ARE SAYING" className="bg-slate-800" titleClassName="text-amber-100">
      {/* Decorative header */}
      <div className="flex items-center justify-center gap-4 -mt-4 mb-8">
        <div className="h-0.5 w-20 bg-amber-500"></div>
        <span className="text-amber-400 text-2xl">&#9733;</span>
        <div className="h-0.5 w-20 bg-amber-500"></div>
      </div>

      {/* Rating Summary Cards */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.entries(ratings).map(([platform, data]) => (
          <motion.div
            key={platform}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-4 rounded-xl text-center"
            style={{
              background: `
                repeating-linear-gradient(90deg, rgba(139,90,43,0.1) 0px, rgba(160,120,60,0.12) 2px, rgba(139,90,43,0.1) 4px),
                linear-gradient(to bottom, #c4a35a, #a67c52)
              `,
              boxShadow: `
                inset 2px 2px 6px rgba(255,255,255,0.3),
                inset -2px -2px 6px rgba(0,0,0,0.2),
                4px 4px 12px rgba(0,0,0,0.4)
              `,
            }}
          >
            <div className="text-3xl font-bold text-slate-900">{data.score}</div>
            <div className="flex justify-center my-1">
              <StarRating rating={Math.round(data.score)} />
            </div>
            <div className="text-sm text-slate-700 font-medium capitalize">{platform}</div>
            <div className="text-xs text-slate-600">{data.reviews.toLocaleString()} reviews</div>
          </motion.div>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900 rounded-xl p-6 shadow-lg border border-amber-900/30 relative"
          >
            {/* Quote mark */}
            <div className="absolute top-4 left-4 text-5xl sm:text-6xl text-amber-700/20 font-serif leading-none">
              "
            </div>

            <div className="relative">
              <StarRating rating={review.rating} />
              <p className="mt-4 text-amber-100 italic leading-relaxed">
                "{review.quote}"
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-amber-300 font-medium">— {review.reviewer}</span>
                <span className="text-amber-200/60 text-sm">{review.source}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-10 text-center">
        <p className="text-amber-200 mb-4">Love your experience? Let others know!</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.google.com/search?q=Alive+and+Kicking+Lobsters+Cambridge+MA+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-500 transition-colors"
          >
            Review on Google
          </a>
          <a
            href="https://www.yelp.com/biz/alive-and-kicking-lobsters-cambridge"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-500 transition-colors"
          >
            Review on Yelp
          </a>
        </div>
      </div>
    </Section>
  );
}
