import React from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
    return (
        <motion.div
            className="text-white max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
                Hello! I'm Amarjeet Mistri, a passionate full-stack developer with experience in building scalable web applications using modern technologies like React, Node.js, and Firebase.
                I love solving complex problems and continuously improving my skills. When I'm not coding, I enjoy exploring new tools, contributing to open source, and sharing knowledge through tutorials.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mt-4">
                I believe in clean, maintainable code and efficient collaboration. My goal is to build impactful software that makes a difference.
            </p>
        </motion.div>
    );
}

export default AboutMe;
