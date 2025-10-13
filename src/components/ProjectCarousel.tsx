import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    tech: string[];
    image?: string;
    video?: string;
    github?: string
    live?: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => i === 0 ? projects.length - 1 : i - 1);
    const next = () => setIndex((i) => i === projects.length - 1 ? 0 : i + 1);

  return (
    <div className="relative w-full items-center justify-center px-12">
         <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-full shadow hover:bg-cyan-600 transition"
            aria-label="Previous project"
        >
            <ChevronLeft size={20} />
        </button>



        <AnimatePresence mode="wait">
            <motion.div
                key={projects[index].title}
                initial={{ opacity: 0, x: 50}}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full max-w-md flex-shrink-0"
            >
                {/* Preview Image */}
                {projects[index].image ? (
                <div className="relative w-full max-w-md aspect-[16/9] mb-4 rounded-xl overflow-hidden group">
                    <Image
                    src={projects[index].image}
                    alt={projects[index].title}
                    fill
                    style={{ objectFit: 'cover'}}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                ) : projects[index].video ? (
                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden group">
                    <video
                    src={projects[index].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 object-contain md:object-cover rounded-lg mb-4"
                    />
                </div>
                ) : null}


                <h3 className="text-xl font-semibold mb-2 text-cyan-600">
                    {projects[index].title}
                </h3>
                <p className="text-gray-700 mb-2">
                    {projects[index].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {projects[index].tech.map((tech) => (
                        <span key={tech} className="text-xs font-semibold px-2">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    {projects[index].github && (
                        <a 
                            href={projects[index].github} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
                        >
                            GitHub
                        </a>
                        )}
                    {projects[index].live && (
                        <a 
                        href={projects[index].live} 
                        target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
                        >
                            View Site
                        </a>
                        
                    )}
                </div>
            </motion.div>
            
        </AnimatePresence>
        
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

export default ProjectCarousel
