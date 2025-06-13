import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Framer Motion"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "FastAPI", "Firebase", "REST APIs"]
    },
    {
        title: "Database",
        skills: ["MongoDB", "Firebase Realtime DB", "Firestore", "MySQL"]
    },
    {
        title: "Tools & Others",
        skills: ["GitHub", "Figma", "Postman", "VS Code", "Cloudinary"]
    }
];

function Skills() {
    return (
        <div className='text-white'>
            <motion.h2
                className='text-2xl font-semibold mb-2'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                My Skills
            </motion.h2>

            <motion.p
                className='text-sm text-gray-400 mb-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Here's a categorized overview of the technologies and tools I'm comfortable working with.
            </motion.p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        className=' p-5 rounded-xl border border-[#2c2c2e] hover:border-[#00ff99] transition-all duration-300'
                    >
                        <h3 className='text-lg font-semibold text-[#00ff99] mb-2'>{category.title}</h3>
                        <ul className='flex flex-wrap gap-2'>
                            {category.skills.map((skill, i) => (
                                <li
                                    key={i}
                                    className='bg-[#] px-3 py-1 rounded-full text-sm text-white hover:text-[#00ff99]  transition cursor-default'
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
