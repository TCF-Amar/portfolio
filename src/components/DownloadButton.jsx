import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'
import resume from '../assets/resume.pdf'

function DownloadButton() {
    return (
        <div className='mt-6 flex '>
            <a href={resume} download>
                <motion.button
                    className='flex  border text-sm py-2 px-6 rounded-full border-[#00ff99] text-[#00ff99] gap-2 items-center justify-center '
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <FaDownload className='text-sm' />
                    <span>Download CV</span>
                </motion.button>
            </a>
        </div>
    )
}

export default DownloadButton
