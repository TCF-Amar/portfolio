import React from 'react';
import { motion } from 'framer-motion';

function Education() {
    const educationList = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institute: "Vindhaya Institute of Management and Science",
            year: "2022 - 2025",
            location: "Satna, Madhya Pradesh",
            desc: "Focused on core subjects like Data Structures, Web Development, Java, Python, and Cloud Computing. Participated in workshops and internships."
        },
        {
            degree: "Higher Secondary Education (12th)",
            institute: "Higher Secondary Excellence Govt. School ",
            year: "2018 - 2019",
            location: "Nagod Satna, Madhya Pradesh",
           
        }
    ];

    return (
        <div className="text-white">
            <motion.h2
                className="text-2xl font-semibold mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                My Education
            </motion.h2>

            <motion.p
                className="text-sm text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Here's an overview of my academic background and learning journey.
            </motion.p>

            <div className="flex flex-col gap-6">
                {educationList.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        className=" p-5 rounded-xl border border-[#2c2c2e] hover:border-[#00ff99] transition-all duration-300"
                    >
                        <h3 className="text-lg font-semibold text-[#00ff99]">{edu?.degree}</h3>
                        <p className="text-sm text-gray-400">{edu?.institute} • {edu?.year}</p>
                        <p className="text-sm text-gray-400">{edu?.location}</p>
                        <p className="mt-2 text-sm text-gray-300">{edu?.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Education;
