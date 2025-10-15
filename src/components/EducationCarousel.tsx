"use client"

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface EducationProps {
    degree: string;
    school: string;
    logo: string;
    gpa: string;
    minor?: string;
    coursework?: string[];
}

interface EducationCarouselProps {
    education: EducationProps[];
}

const EducationCarousel: React.FC<EducationCarouselProps> = ({ education }) => {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => i === 0 ? education.length - 1 : i - 1);
    const next = () => setIndex((i) => i === education.length - 1 ? 0 : i + 1);

    return (
        <div className="relative flex w-full items-center justify-center px-12">
            <AnimatePresence mode="wait">
                {education[index] && (<motion.div
                    key={education[index].school}
                    initial={{ opacity: 0, x: 50}}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full flex-shrink-0"
                >
                    <div className="flex-shrink-0">
                        <Image
                            src={education[index].logo}
                            alt={`${education[index].school} Logo`}
                            width={64}
                            height={64}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-cyan-600">
                            {education[index].degree}
                        </h3>
                        <p className="text-gray-700">
                            {education[index].school}
                        </p>
                        {education[index].minor && <p className="text-gray-500">Minor: {education[index].minor}</p>}
                        <p className="text-gray-500 mb-2">GPA: {education[index].gpa}</p>
                        {education[index].coursework && (
                            <div className="flex flex-wrap gap-2 mt-1">
                                {education[index].coursework.map((course) => (
                                    <span
                                        key={course}
                                        className="text-xs font-semibold px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full"
                                    >
                                        {course}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
                )};
            </AnimatePresence>
                        
            <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-full shadow hover:bg-cyan-600 transition"
                aria-label="Previous project"
            >
                <ChevronLeft size={20} />
            </button>

            <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-full shadow hover:bg-cyan-600 transition"
                aria-label="Next project"
            >
                <ChevronRight size={20} />
            </button>

    </div>
  )
}

export default EducationCarousel
