"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import SkillCarousel from "./SkillsCarousel";

interface SkillCategoryProps {
    title: string;
    skills: Record<string, string[]>;
}

const SKILLS: Record<string, SkillCategoryProps> = {
    "Embedded Systems": {
        title: "Embedded Systems",
        skills: {
            "Languages": ["C++", "C", "Python", "Assembly"],
            "Tools & Platforms": ["STM32", "ESP32", "Raspberry Pi", "Arduino", "RTOS", "UART/SPI/I²C", "PWM", "Telemetry", "Servo Control"],
            "Frameworks & Libraries": ["YoloV8", "TensorFlow", "OpenCV"],
            "Cloud & DevOps": ["Git", "GitHub", "STM32CubeIDE"],
            "Specialties": ["Embedded systems programming", "Real-time software design", "Sensor fusion", "Control systems"],
        }
    },
    "Full-Stack Applications": {
        title: "Full-Stack Applications",
        skills: {
            "Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS"],
            "Databases": ["MongoDB", "FirebaseDB", "SQL", "SQLite", "PostgreSQL"],
            "Frameworks & Libraries": ["React", "Django", "Node.js/Express", "Next.js", "Tkinter", "PyQt"],
            "Tools & DevOps": ["Git", "GitHub", "AWS Cloud Practitioner", "Figma", "Agile/Scrum"],
            "Specialties": ["Full-stack web development", "REST API design", "Database integration", "Front-end UI/UX", "Cloud architecture"],
        }
    },
    "Data Analysis": {
        title: "Data Analysis",
        skills: {
            "Languages": ["Python"],
            "Databases": ["MongoDB", "FirebaseDB", "SQL", "SQLite"],
            "Frameworks & Libraries": ["NumPy", "Pandas", "Matplotlib", "SciPy", "TensorFlow"],
            "Tools & DevOps": ["Git", "GitHub", "Jupyter Notebook", "Agile/Scrum"],
            "Specialties": ["Data analysis", "Data visualization", "Machine learning"],
        }
    },
    "Machine Learning": {
        title: "Machine Learning",
        skills: {
            "Languages": ["Python"],
            "Frameworks & Libraries": ["TensorFlow", "OpenCV", "NumPy", "Pandas", "Matplotlib", "SciPy"],
            "Tools & DevOps": ["Jupyter Notebook", "Git", "GitHub"],
            "Specialties": ["Computer vision", "Deep learning", "Data preprocessing", "Model evaluation"]
        }
    }
}



const SUB_TABS = Object.keys(SKILLS);

const SkillsTab: React.FC = () => {
    const [activeTab, setActiveTab] = useState(SUB_TABS[0]);

    const skillGroups = Object.entries(SKILLS[activeTab].skills).map(
    ([category, skills]) => ({ category, skills })
  );

  return (
    <div>
    {/* Top level */}
        <nav className="flex border-b border-gray-300 mb-6 no-scrollbar overflow-x-auto">
            <div className="flex flex-nowrap space-x-4 px-2">
            {SUB_TABS.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 font-medium text-lg relative transition-colors ${activeTab === tab ? 'text-cyan-600' : 'text-gray-500 hover:text-cyan-400'}`}
                >
                    {tab}
                    {activeTab === tab && (
                        <motion.div
                            layoutId="underline"
                            className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-cyan-500 rounded-full"
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                    )}
                </button>
            ))}
            </div> 
        </nav>
          
        {/* Skills */}
        <SkillCarousel skillGroups={skillGroups}/>
    </div>
  )
}

export default SkillsTab
