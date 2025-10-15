"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import AwardsCarousel from "./AwardsCarousel";

interface Award {
  title: string;
  description: string;
  year?: string;
  role?: string;
}

interface AwardCategory {
  title: string;
  awards: Award[];
}

const AWARDS: Record<string, AwardCategory> = {
  "Academic Awards": {
    title: "Academic Awards",
    awards: [
      { title: "Summa Cum Laude", description: "Graduated with highest honors" },
      { title: "Magna Cum Laude", description: "Graduated with high honors" },
      { title: "Dean's List", description: "5-year consecutive recognition" },
    ]
  },
  "Hackathon Awards": {
    title: "Hackathon Awards",
    awards: [
      { title: "1st Place – MicoHackathon", description: "Front-end developer for NoteSharing application" },
      { title: "2nd Place – Trivia Game Hackathon", description: "Focused on front-end development for trivia game for visually impaired users" },
    ]
  },
  "International Awards": {
    title: "International Awards",
    awards: [
      { title: "SAE Aero – Flight Readiness Inspection", description: "Avionics and software lead for fully autonomous payload aircraft, 4th place" },
      { title: "SAE Aero – Overall Flight Mission Objective", description: "8th place overall" },
    ]
  }
};

const SUB_TABS = Object.keys(AWARDS);

const AwardsTab: React.FC = () => {
    const [activeTab, setActiveTab] = useState(SUB_TABS[0]);

  return (
    <div>
        {/* Top-level navigation */}
        <nav className="flex w-full justify-around items-center flex-nowrap border-b border-gray-300 mb-6 flex">
        {SUB_TABS.map(tab => (
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
        </nav>

        <AwardsCarousel awards={AWARDS[activeTab].awards}/>

      </div>
  )
}

export default AwardsTab
