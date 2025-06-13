import React from 'react';
import { motion } from "framer-motion"

function Footer() {
    return (
        <>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='bg-gradient-to-r from-[#1D232A] via-[#00ff99] to-[#1D232A] h-[2px]'
            />
            <footer className=" py-6 flex justify-center ">
               
                    <div className="text-sm text-center md:text-left mb-4 md:mb-0">
                        © {new Date().getFullYear()} Amarjeet Mistri. All rights reserved.
                    </div>


               
            </footer>
        </>
    );
}

export default Footer;
