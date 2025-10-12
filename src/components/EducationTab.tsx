"use client"

import EducationCarousel from "./EducationCarousel";

interface EducationProps {
    degree: string;
    school: string;
    logo: string;
    gpa: string;
    minor?: string;
    coursework?: string[];
}

const EDUCATION: EducationProps[] = [
    {
        degree: "Bachelor of Science in Computer Science",
        school: "California State University, Northridge",
        logo: "/csun.png",
        gpa: "3.88",
        minor: "Physics",
        coursework: ["Algorithms", "Machine Learning", "Embedded Systems"]
    },
    {
        degree: "Associates in Mathematics & Computer Science",
        school: "Los Angeles Mission College",
        logo: "/lamc.png",
        gpa: "3.90",
        coursework: ["Discrete Math", "Data Structures", "Object-Oriented Programming"]
    }
]

const EducationTab: React.FC = () => {
  return <EducationCarousel education={EDUCATION} />
};

export default EducationTab;
