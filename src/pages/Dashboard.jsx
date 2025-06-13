import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DownloadButton from '../components/DownloadButton';
import profile from '../assets/profile.png';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

// Framer Motion Variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

function Dashboard() {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: (
                <FaLinkedin className="text-[#0A66C2] hover:text-[#004182] transition-colors duration-200" />
            ),
            url: 'https://www.linkedin.com/in/your-profile',
        },
        {
            name: 'GitHub',
            icon: (
                <FaGithub className="text-[#333] hover:text-white transition-colors duration-200" />
            ),
            url: 'https://github.com/your-profile',
        },
        {
            name: 'Instagram',
            icon: (
                <FaInstagram className="text-[#E1306C] hover:text-[#C13584] transition-colors duration-200" />
            ),
            url: 'https://www.instagram.com/your-profile',
        },
        {
            name: 'Twitter',
            icon: (
                <FaTwitter className="text-[#1DA1F2] hover:text-[#0d8ddb] transition-colors duration-200" />
            ),
            url: 'https://twitter.com/your-profile',
        },
      ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='flex md:flex-row flex-col-reverse justify-between items-center px-4 mt-30 md:mt-50 gap-10 w-full'
        >
            {/* Left Section */}
            <motion.div variants={containerVariants} className='w-full md:w-1/2'>
                <motion.p
                    variants={itemVariants}
                    className='text-gray-400 text-lg uppercase tracking-wider text-center md:text-start'
                >
                    Hey there 👋
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className='text-4xl md:text-5xl text-white mt-2 text-center md:text-start'
                >
                    I&apos;m{' '}
                    <span className='bg-gradient-to-r text-[#00ff99] bg-clip-text'>
                        Amarjeet Mistri
                    </span>
                </motion.h1>

                <motion.div
                    variants={itemVariants}
                    className='mt-4 text-xl text-gray-300 font-semibold flex gap-2 items-center justify-center md:justify-start'
                >
                    <span className='hidden md:inline-block'>➤</span>
                    <div className='w-fit md:w-full text-start'>
                        <Typewriter
                            words={[
                                'Web Developer',
                                'UI/UX Designer',
                                'Backend Developer',
                                'Full Stack Developer',
                                'Software Engineer'
                            ]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className='text-gray-400 text-base mt-4 text-center md:text-start w-[90%] md:w-full'
                >
                    I am a passionate developer with expertise in various technologies.
                </motion.p>

                {/* Social Media Links */}
                <motion.div
                    variants={itemVariants}
                    className='flex gap-4 mt-6 text-2xl justify-center md:justify-start'
                >
                    {socialLinks.map((link) => (
                        <motion.div key={link.name} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to={link.url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {link.icon}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Download Button */}
                <motion.div
                    variants={itemVariants}
                    className='mt-3 flex justify-center md:justify-start'
                >
                    <DownloadButton />
                </motion.div>
            </motion.div>

            {/* Right Profile Image with Circular Animation */}
            <div className='w-full md:w-1/2 flex justify-center items-center relative transition-all duration-300'>
                {/* Profile Image */}
                <motion.div
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden w-[290px] h-[290px] xl:w-[400px] xl:h-[400px] rounded-full transition-all duration-300'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <img
                        src={profile}
                        alt='Developer'
                        className='w-full h-full object-cover'
                    />
                </motion.div>

                {/* Animated Circular Border */}
                <motion.svg
                    className='w-[300px] xl:w-[406px] h-[300px] xl:h-[406px] z-10'
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </div>
        </motion.div>
    );
}

export default Dashboard;
