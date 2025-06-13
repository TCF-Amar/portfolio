import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
    const experiences = [
        {
            time: "Jan 2025 - Mar 2025",
            name: "React.js Intern - Alfido Tech",
            lc: "Remote",
            desc: "Built dynamic frontend interfaces using ReactJS, improved user experience, and contributed to reusable component design using Tailwind CSS."
        },
        {
            time: "April 2025 - Present",
            name: "Full Stack Intern - CodTech IT Solution",
            lc: "Remote",
            desc: "Working on full-stack web applications using Django REST API and ReactJS. Handling scraping logic with Scrapy and database integration with MySQL."
        },
       
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className='text-white'>
            <motion.h2
                className='font-semibold text-2xl mb-2'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
            My Experience
            </motion.h2>

            <motion.p
                className='text-sm text-gray-400 mb-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                A quick overview of my recent internships and freelance work.
            </motion.p>

            <div className='flex flex-col gap-6 '>
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        className='bg-transparent rounded-xl p-5 border border-[#2c2c2e] hover:border-[#00ff99] transition-all duration-300'
                    >
                        <h3 className='text-lg font-semibold text-[#00ff99]'>{item.name}</h3>
                        <p className='text-sm text-gray-400'>{item.lc} • {item.time}</p>
                        <p className='mt-2 text-gray-300 text-sm'>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
