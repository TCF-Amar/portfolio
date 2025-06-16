import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import TickMarks from "./TickMarks";




function Clock() {
  const [time, setTime] = useState(new Date());
  const digitHeight = 32; // px height of each digit (must match your Tailwind li height)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const isPM = hours >= 12;
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (<>
  <div className="fixed top-0 bottom-0 right-0 left-0 z-[9999] bg-[#C7C7C7] flex gap-6  text-center text-gray-700 font-semibold justify-center items-baseline pt-[40vh]">
  <Link to="/" className="fixed flex gap-1 text-gray-700 cursor-pointer hover:text-gray-500 items-center top-4 left-4">
            <FaTimes/>
            Back</Link>
    <p>This clock is not responsive from small screens </p>
    </div>
  
    <div className="hidden fixed top-0 bottom-0 right-0 left-0 z-[9999] bg-[#C7C7C7] md:flex gap-6  text-center text-gray-700 font-semibold justify-center items-baseline pt-[40vh]">
        <Link to="/" className="fixed flex gap-1 text-gray-700 cursor-pointer hover:text-gray-500 items-center top-4 left-4">
            <FaTimes/>
            Back</Link>
      {/* Hours */}
      <div className="flex gap-4 relative">
      <motion.div className="ss w-12 h-fit overflow-hidden relative"  animate={{ y: -parseInt(formattedHours[0]) * digitHeight }}
            transition={{ type: "tween", duration: 0.3 }}>
          <motion.ul
           
            className="flex flex-col py-4   "
          >
            {[...Array(2)].map((_, i) => (
              <li key={i} className="h-[32px] flex items-center justify-center">
                {i}
              </li>
            ))}
          </motion.ul>
          <TickMarks end={64}/>
        </motion.div>

        {/* Minutes - 2 */}
        <motion.div className="ss w-12  overflow-hidden" animate={{ y: -parseInt(formattedHours[1]) * digitHeight }}
            transition={{ type: "tween", duration: 0.3 }}>
          <motion.ul
            
            className="flex flex-col py-4"
          >
            {[...Array(10)].map((_, i) => (
              <li key={i} className="flex h-[32px] items-center justify-center">
                {i}
              </li>
            ))}
          </motion.ul>
          <TickMarks end={320}/>
        </motion.div>
        <div className="absolute top-[16px] left-0 bg-black/5 w-12 h-[32px]"></div>
        <div className="absolute top-[16px] right-0 bg-black/5 w-12 h-[32px]"></div>
      </div>

      <span className="text-2xl font-bold">:</span>

      {/* Minutes */}
      <div className="flex gap-4 relative">
      <motion.div className="ss w-12 h-fit overflow-hidden relative"  animate={{ y: -parseInt(minutes[0]) * digitHeight }}
            transition={{ type: "tween", duration: 0.3 }}>
          <motion.ul
           
            className="flex flex-col py-4"
          >
            {[...Array(6)].map((_, i) => (
              <li key={i} className="h-[32px] flex items-center justify-center">
                {i}
              </li>
            ))}
          </motion.ul>
        <TickMarks end={192}/>
        </motion.div>

        {/* Minutes - 2 */}
        <motion.div className="ss w-12  overflow-hidden relative" animate={{ y: -parseInt(minutes[1]) * digitHeight }}
            transition={{ type: "tween", duration: 0.3 }}>
          <motion.ul
            
            className="flex flex-col py-4"
          >
            {[...Array(10)].map((_, i) => (
              <li key={i} className="flex h-[32px] items-center justify-center">
                {i}
              </li>
            ))}
          </motion.ul>
          <TickMarks end={320}/>
        </motion.div>
        <div className="absolute top-[16px] left-0 bg-black/5 w-12 h-[32px]"></div>
        <div className="absolute top-[16px] right-0 bg-black/5 w-12 h-[32px]"></div>
      </div>

      <span className="text-2xl font-bold">:</span>

      {/* Seconds with scroll animation */}
      <div className="flex gap-4 py-4 relative">
        {/* Second - 1 */}
        <motion.div className="ss w-12 h-fit overflow-hidden relative"  animate={{ y: -parseInt(seconds[0]) * digitHeight }}
            transition={{ type: "tween", duration: 0.3 }}>
          <motion.ul
           
            className="flex flex-col py-4"
          >
            {[...Array( 6)].map((_, i) => (
              <li key={i} className="h-[32px] flex items-center justify-center ">
                {i}
              </li>
            ))}
          </motion.ul>
         <TickMarks end={192}/>
        </motion.div>

        {/* Second  - 2 */}
        <motion.div className="ss w-12  overflow-hidden relative" animate={{ y: -parseInt(seconds[1]) * digitHeight }}
            transition={{ type: "tween", duration: 0.3 }}>
          <motion.ul
            
            className="flex flex-col py-4"
          >
            {[...Array(10)].map((_, i) => (
              <li key={i} className="flex h-[32px] items-center justify-center">
                {i}
              </li>
            ))}
          </motion.ul>
         <TickMarks end={320}/>
        </motion.div>
         <div className="absolute top-[32px] left-0 bg-black/5 w-12 h-[32px]"></div>
         <div className="absolute top-[32px] right-0 bg-black/5 w-12 h-[32px]"></div>

      </div>
      <span className={`ss p-2 ${isPM ? "-translate-y-[32px]" : "translate-y-[0]"}`}>
        {["AM","PM"].map((item,index)=>{
            return(
                <motion.div key={index} className="flex items-center justify-center h-[32px]" >
                    {item}
                </motion.div>
            )
        })}
      </span>
    </div>






    </>
  );
}

export default Clock;
