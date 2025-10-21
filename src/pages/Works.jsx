import React, { useState } from 'react';
import { FaGithub, FaArrowUpRightFromSquare, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"

const Works = () => {
    const projects = [
        {
            id: 1,
            project_name: "E-Commerce Website (static website)",
            project_img: image1,
            description: "A frontend based e-commerce website with product listings, shopping cart. ",
            tech: "React.js, Zustand, Tailwind CSS",
            live: "https://myshop-eight-green.vercel.app/",
        },
      
        {
            id: 2,
            project_name: "Weather Forecast App",
            project_img: image2,
            description: "Real-time weather forecasting app using OpenWeather API and location-based search.",
            tech: "React, API Integration, Tailwind CSS",
            live: "https://check-weather-blush.vercel.app/",
            // github: "https://github.com/TCF-Amar/Check-Weather"
        },
        {
            id: 3,
            project_name: "Real-time Chat Application",
            project_img: image3,
            description: "A web-based chat application with real-time messaging and user presence indicators.",
            tech: "React.js, Socket.io, Node.js, Express, Tailwind CSS",
            live: "https://rt-chat-79zw.vercel.app",
            // github: "https://github.com/TCF-Amar/Chat-App"
        },

    
  
    ];

    const [current, setCurrent] = useState(0);
    const currentProject = projects[current];

    const scrollScreen = () => {
        window.scroll({
            top: 0,
            behavior:"smooth"
        })
    }

    const nextProject = () => {
        setCurrent((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleNext = () => {
        scrollScreen();
        nextProject()
    }
    const handlePrev = () => {
        scrollScreen();
        prevProject()
    }

    return (
        <div className="flex flex-col md:flex-row px-6 my-30 gap-6 items-center justify-center text-white ">
            {/* Left Side */}
            <div className="md:w-1/2 space-y-4">
                <h1
                    className="text-5xl font-bold text-transparent"
                    style={{ WebkitTextStroke: "1px #fff" }}
                >
                    {currentProject.id < 10 ? `0${currentProject.id}` : currentProject.id}
                </h1>

                <h2 className="text-3xl font-semibold">{currentProject.project_name}</h2>
                <p className="text-gray-400 max-w-md leading-relaxed">
                    {currentProject.description}
                </p>
                <p className="text-green-400 font-mono border-green-400 inline-block pb-1">
                    {currentProject.tech}
                </p>

                <div className='w-full border border-gray-600'></div>
                <div className="flex space-x-4 mt-6">
                    <a href={currentProject.live} target="_blank" rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
                        <FaArrowUpRightFromSquare />
                    </a>
                   
                    {
                        currentProject.github && (
                            <a href={currentProject.github} target="_blank" rel="noopener noreferrer"
                                className={`p-3 bg-white/10 rounded-full hover:bg-white/20 transition `}>
                                <FaGithub />
                            </a>
                        )
                    }
                  
                </div>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 relative flex  flex-col items-center space-y-2">
                <div>

                    <motion.img
                        src={currentProject.project_img}
                        alt={currentProject.project_name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    />

                </div>
                {/* Navigation Arrows */}
                <div className="w-full flex justify-end space-x-2">
                    <button
                        onClick={handlePrev}
                        className="bg-green-500 p-2 text-white  hover:bg-green-600 transition"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-green-500 p-2 text-white  hover:bg-green-600 transition"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Works;