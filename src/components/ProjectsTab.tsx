"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCarousel from "./ProjectCarousel";

const SUB_TABS = ["Embedded Systems", "Full-Stack Applications", "Data Analysis"];

const PROJECTS: Record<string, { title: string; description: string; tech: string[]; image?: string; video?: string; live?: string; github?: string }[]> = {
    "Embedded Systems": [
        {
            title: "Autonomous Delivery Drone",
            description: "Software lead in the development of a fully autonomous VTOL and conventional flight capable delivery and recovery RC drone",
            video: "/aero2.MP4",
            tech: ["STM32", "Python", "OpenCV", "RTOS", "Sensors"],
            github: "https://github.com/yourusername/drone-project"
        },
        {
            title: "Motion Sensor Alarm",
            description: "ESP32 Mini Motion Alarm: A compact motion detection system using ultrasonic and infrared sensors. Triggers buzzer and LED alerts when movement is detected. Demonstrates embedded programming, sensor integration, and real-time event handling.",
            video: "/alarm.MP4",
            tech: ["ESP32", "C++", "Shift Register", "RTOS", "Sensors"],
            github: "https://github.com/greg-of-Earth/motionAlarm"
        }
    ],
    "Full-Stack Applications": [
        {
            title: "Social Network Clone",
            description: "A Twitter-like application with authentication, posts, and comments.",
            image: "/twitter.png",
            tech: ["Next.js", "React", "Typescript", "Prisma", "MongoDB"],
            live: "https://socialnetter.netlify.app",
            github: "https://github.com/greg-of-Earth/socialNet"
        },
        {
            title: "Space Fun",
            description: "An interactive space application focusing on key UI/UX methods that allows the user to explore the solar system and test their skills.",
            video: "/spaceFun.MP4",
            tech: ["Vanilla JS", "Chart.js", "HTML5", "FirebaseDB"],
            live: "https://funspacefacts.netlify.app",
            github: "https://github.com/greg-of-Earth/spaceFun"
        },
        {
            title: "Task Manager",
            description: "A task manager application. Add, mark complete and delete tasks using local storage. CRUD application.",
            tech: ["React", "Javascript", "HTML5", "CSS"],
            video: "/todo.MP4",
            live: "https://chorechecker.netlify.app",
            github: "https://github.com/greg-of-Earth/taskManager"
        },
        {
            title: "Hotel Reservation",
            description: "Desktop application that allows hotel staff or administrators to manage room bookings, guest information, check-ins, and check-outs efficiently through an intuitive desktop interface.",
            tech: ["Python3", "PyQt5", "MySQL"],
            github: "https://github.com/greg-of-Earth/COMP440_PROJ1"
        },
                {
            title: "ADA Trivia Game",
            description: "An accessible version of the classic Who Wants to Be a Millionaire quiz game, designed specifically for visually impaired users. It integrates ADA-compliant accessibility features to ensure that all users, regardless of visual ability, can fully engage with the game experience.",
            tech: ["React", "Typescript", "HTML5", "CSS"],
            github: "https://github.com/greg-of-Earth/TriviaGame"
        }
    ],
    "Data Analysis": [
        {
            title: "Exo-Stellar Debris Field Identification",
            description: "A research project conducted with NASA's JPL and the STEM Department at Los Angeles Mission College that analyzes data from several space-based telescopes including Spitzer and Gaia.",
            image: "/starDisk.png",
            tech: ["Jupyter Notebook", "Python", "Pandas", "Numpy", "Matplotlib"],
            github: "https://github.com/greg-of-Earth/StarDisk"
        },
        {
            title: "Instacart Market Basket Analysis",
            description: "Market Basket Analysis of Instacart data using Python to uncover product trends, department insights, and associations between items. Demonstrates data cleaning, exploratory analysis, and machine learning techniques for real-world retail data.",
            image: "/instaCart1.png",
            tech: ["Jupyter Notebook", "Python3", "Pandas", "Numpy", "Matplotlib", "Seaborn", "SciPy", "MLxtend"],
            github: "https://github.com/greg-of-Earth/insta-ml-analysis"
        }
    ]
}

const ProjectsTab: React.FC = () => {
    const [activeSubTab, setActiveSubTab] = useState("Embedded Systems");

  return (
    <div>
      <nav className="flex space-x-8 border-b border-gray-300 mb-6">
        {SUB_TABS.map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`pb-2 font-medium text-lg relative transition-colors ${activeSubTab === tab ? 'text-cyan-600' : 'text-gray-500 hover:text-cyan-400'}`}
            >
                {tab}
                {activeSubTab === tab && (
                    <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-cyan-500 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                )}
            </button>
        ))}
      </nav>

        <AnimatePresence mode="wait">
            <motion.div
                key={activeSubTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
            >

                <ProjectCarousel projects={PROJECTS[activeSubTab]} />
                
            </motion.div>

        </AnimatePresence>

    </div>
  )
}

export default ProjectsTab
