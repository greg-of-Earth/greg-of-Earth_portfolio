"use client"

import { useRef, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import ProjectsTab from "./ProjectsTab";
import EducationTab from "./EducationTab";
import SkillsTab from "./SkillsTab";
import AwardsTab from "./AwardsTab";

interface MainContentProps {
    className?: string;
}

const TABS = ["About", "Projects", "Education", "Skills", "Awards"];


const MainContent: React.FC<MainContentProps> = ( { className }) => {
    const [activeTab, setActiveTab] = useState('About');

    // animations variants
    const variants = {
        hidden: { opacity: 0, y: 10 },
        enter: { opacity: 1, y: 0},
        exit: { opacity: 0, y: -10},
    };

  return (
    <main className="flex-1 flex flex-col items-center justify-start md:justify-center w-full px-4 sm:px-6 bg-gray-50 text-slate-800 mt-[6px]">
        <nav className="w-full border-b border-gray-300 mb-6 mt-[6vh] overflow-x-auto no-scrollbar">
            <div className="flex justify-evenly w-full">
            {TABS.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative text-center relative pb-2 text-sm sm:text-base md:text-lg font-medium transition-colors ${activeTab === tab ? "text-cyan-600" : "text-gray-500 hover:text-cyan-400"}`}
                >
                    <span className="relative z-10">{tab}</span>
                    {activeTab === tab && (
                        <motion.div
                            layoutId="underline"
                            className="absolute left-1/2 -translate-x-1/2 -bottom-[1px] w-2/3 h-[3px] bg-cyan-500 rounded-full"
                            // animate={{ opacity: activeTab === tab ? 1 : 0 }}
                            transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.6 }}
                        />
                    )}
                </button>
            ))}
            </div>
        </nav>

        {/* animation */}
        <div className="relative">
            <AnimatePresence mode="wait">
                <motion.section
                    key={activeTab}
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut"}}
                    className="bg-white rounded-2xl shadow p-4 sm:p-6 md:p-8 w-full max-w-6xl mx-auto"
                >
      
                {/* tab content */}
        
                {activeTab === 'About' && (
                    <div>
                        <h1 className="text-2xl font-semibold mb-4 text-cyan-600">
                            About Me
                        </h1>
                        <p className="text-slate-700 leading-relaxed">
                            I&apos;m Gregory Calderon, a software enthusiast and current Master’s student at California State University, Northridge. I’m passionate about exploring Machine Learning and Artificial Intelligence, and I have hands-on experience across Embedded and Autonomous Systems, Full-Stack Application Development, and Data Analysis.
                        </p>
                    </div>
                )}

                {activeTab === "Projects" && <ProjectsTab />}

                {activeTab === "Education" && <EducationTab />}

                {activeTab === "Skills" && <SkillsTab />}

                {activeTab === "Awards" && <AwardsTab />}
     
                </motion.section>
            </AnimatePresence>
        </div>
    </main>
  )
}

export default MainContent
