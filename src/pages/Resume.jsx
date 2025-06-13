import React, { useState } from 'react';
import Experience from '../components/Experience';
import { motion, AnimatePresence } from 'framer-motion';
import Education from '../components/Education';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';

function Resume() {
    const [activeSection, setActiveSection] = useState('experience');

    const resumeBtns = [
        { name: 'experience', content: <Experience /> },
        { name: 'education', content: <Education /> },
        { name: 'skills', content: <Skills /> },
        { name: 'about me', content: <AboutMe /> }
    ];

    const activeContent = resumeBtns.find(rb => rb.name === activeSection)?.content;

    return (
        <div className='flex flex-col md:flex-row gap-4 mt-30 md:mt-40  justify-center  w-[80%] mx-auto'>
            <div className='w-full md:w-[35%] flex flex-col gap-5'>
                <h2 className='font-semibold text-2xl'>Why hire me?</h2>
                <p className='text-sm text-gray-400'>
                    I am a highly motivated full-stack developer with a passion for clean code and problem solving.
                </p>

                <div className='flex flex-col items-center gap-4'>
                    {resumeBtns.map((rb) => (
                        <button
                            key={rb.name}
                            onClick={() => setActiveSection(rb.name)}
                            className={`w-full text-center text-[12px] p-2 capitalize rounded transition-all duration-300 ${activeSection === rb.name ? 'bg-[#00ff99] text-black/80 font-semibold scale-105' : 'bg-[#262e37] text-white/80 hover:bg-[#333b45]'}`}
                        >
                            {rb.name}
                        </button>
                    ))}
                </div>
            </div>
            <hr className='' />
            <div className='flex-1 border-gray-600 px- text-white'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeContent}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Resume;
