"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SkillGroup {
  category: string;
  skills: string[];
}

interface SkillCarouselProps {
  skillGroups: SkillGroup[];
}

const SkillCarousel: React.FC<SkillCarouselProps> = ({ skillGroups }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? skillGroups.length - 1 : i - 1));
  const next = () => setIndex(i => (i === skillGroups.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full items-center justify-center px-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={skillGroups[index].category}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full max-w-md flex-shrink-0"
        >
          <h3 className="text-xl font-semibold text-cyan-600 mb-4">
            {skillGroups[index].category}
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillGroups[index].skills.map(skill => (
              <span
                key={skill}
                className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-full shadow hover:bg-cyan-600 transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-full shadow hover:bg-cyan-600 transition"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default SkillCarousel;
