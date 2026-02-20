import { motion, useInView } from "framer-motion";
import { Section } from "./Section";
import { useRef, useEffect, useState } from "react";

function useCountUp(end, duration = 1.5, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!startOnView || !isInView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(progress * end);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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

function StarRating({ rating, animated = false }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <motion.svg
          key={star}
          initial={animated ? { scale: 0, rotate: -180 } : false}
          animate={animated ? { scale: 1, rotate: 0 } : false}
          transition={animated ? { delay: index * 0.1, type: "spring", stiffness: 300 } : undefined}
          className={`w-5 h-5 ${star <= rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
}

function AnimatedRatingCard({ platform, data }) {
  const { count: scoreCount, ref: scoreRef } = useCountUp(data.score, 1.2);
  const { count: reviewCount, ref: reviewRef } = useCountUp(data.reviews, 1.5);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      className="px-6 py-4 rounded-2xl text-center bg-white shadow-lg ring-1 ring-black/5 cursor-default"
    >
      <div ref={scoreRef} className="text-3xl font-bold text-slate-800">
        {scoreCount.toFixed(1)}
      </div>
      <div className="flex justify-center my-1">
        <StarRating rating={Math.round(data.score)} animated />
      </div>
      <div className="text-sm text-slate-600 font-medium capitalize">{platform}</div>
      <div ref={reviewRef} className="text-xs text-slate-400">
        {Math.round(reviewCount).toLocaleString()} reviews
      </div>
    </motion.div>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" title="WHAT FOLKS ARE SAYING" className="bg-gradient-to-b from-[#f5efe6] to-[#ede4d4]" titleClassName="text-slate-800">
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-4 -mt-4 mb-8">
        <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-slate-400" />
        <span className="text-red-700 text-2xl">&#9733;</span>
        <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-slate-400" />
      </div>

      {/* Rating Summary Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {Object.entries(ratings).map(([platform, data]) => (
          <AnimatedRatingCard key={platform} platform={platform} data={data} />
        ))}
      </motion.div>

      {/* Reviews Grid */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            variants={cardVariants}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-black/5 relative group cursor-default"
          >
            {/* Quote mark */}
            <div className="absolute top-4 left-4 text-5xl sm:text-6xl text-slate-200 font-serif leading-none">
              "
            </div>

            {/* Left accent bar */}
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-red-700/20 rounded-full group-hover:bg-red-700/40 transition-colors duration-300" />

            <div className="relative pl-2">
              <StarRating rating={review.rating} />
              <p className="mt-4 text-slate-700 italic leading-relaxed">
                "{review.quote}"
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-slate-800 font-medium">— {review.reviewer}</span>
                <span className="text-slate-400 text-sm px-2 py-0.5 rounded-full bg-slate-100">{review.source}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to action */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-slate-600 mb-4">Love your experience? Let others know!</p>
        <div className="flex flex-wrap justify-center gap-3">
          <motion.a
            href="https://www.google.com/search?q=Alive+and+Kicking+Lobsters+Cambridge+MA+reviews"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-slate-800 text-amber-50 rounded-full font-medium shadow-md transition-all hover:bg-slate-700"
          >
            Review on Google
          </motion.a>
          <motion.a
            href="https://www.yelp.com/biz/alive-and-kicking-lobsters-cambridge"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-red-700 text-white rounded-full font-medium shadow-md transition-all hover:bg-red-600"
          >
            Review on Yelp
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
}
