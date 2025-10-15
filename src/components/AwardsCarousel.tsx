"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Award {
  title: string;
  description: string;
  year?: string;
  role?: string;
}

interface AwardsCarouselProps {
  awards: Award[];
}

const AwardsCarousel: React.FC<AwardsCarouselProps> = ({ awards }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? awards.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === awards.length - 1 ? 0 : i + 1));

  if (awards.length === 0) return null;

  return (
    <div className="relative flex w-full items-center justify-center px-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={awards[index].title}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full flex-shrink-0"
        >
          <h3 className="text-xl font-semibold text-cyan-600 mb-2">{awards[index].title}</h3>
          <p className="text-gray-700">{awards[index].description}</p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-3 rounded-full shadow hover:bg-cyan-600 transition"
        aria-label="Previous award"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-3 rounded-full shadow hover:bg-cyan-600 transition"
        aria-label="Next award"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default AwardsCarousel;
