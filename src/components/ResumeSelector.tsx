"use client"

import { useState } from "react"

const ResumeSelector = () => {
    const [selectedResume, setSelectedResume] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const url = e.target.value;

        if (url) {
            window.open(url, "_blank");
            setSelectedResume(""); // reset
        }
    };

  return (
    <div className="flex flex-col items-center gap-2 mt-2">
                <select
                    value={selectedResume}
                    onChange={handleChange}
                    className="px-2 py-1 rounded-lg border border-gray-400 bg-gray-50 text-gray-700 text-sm cursor-pointer transition"
                >
                    <option value="" disabled>Download Resume</option>
                    <option value="/resume_embedded.pdf">Embedded</option>
                    <option value="/resume_fullstack.pdf">Full Stack</option>
                    <option value="/resume_datasci.pdf">Data Science</option>
                </select>
            </div>
  )
}

export default ResumeSelector
