import React, { useEffect, useState, useContext } from 'react';
import handIcon from "./../assets/handIcon.png";
import profile from "./../assets/profile.png";
import downloadIcon from "./../assets/downloadIcon.png";
import rightArrowWhite from "./../assets/rightArrowWhite.png";
import rightArrowDark from "./../assets/rightArrowDark.png";
import TypeWriterText from './TypeWriterText';
import { ThemeContext } from '../App';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';

const tags = ["Frontend Developer", "AIML Engineer"];

const Header = () => {

  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);

  // console.log(isDarkMode);
  

  return (
    <div
      className={`w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 
        ${isDarkMode ? 'bg-[#11001F] text-white' :'text-black'}`}
    >
      <div className='flex flex-col items-center justify-center gap-4 mt-5'>

        <motion.div  
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{duration: 0.8, type: "spring", stiffness: 100}}
        >
          <img src={profile} alt='' className='rounded-full w-32' />
        </motion.div>

        <motion.h3 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{duration: 0.6, delay: 0.3}} className={`flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>
          Hi! I'm Krishna Mudgal
          <img
            src={handIcon}
            alt='hand icon'
            className='w-6'
          />
        </motion.h3>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{duration: 0.8, delay: 0.5}}
         className='text-3xl sm:text-6xl lg:text-[66px]'>
          <TypeWriterText tags={tags} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{duration: 0.6, delay: 0.7}}
         className={`max-w-xl px-4 ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>
          As a BTech student specializing in AI and ML, I have developed impactful projects such as PulsePoint, a doctor consultation platform powered by AI and human action detection. I bring a strong foundation in problem-solving, data structures, and algorithms, which enables me to develop efficient, scalable solutions. Beyond technical skills, I am highly adaptable, with strong communication and teamwork abilities, making me an effective collaborator in cross-functional teams.
        </motion.p>

        <div className='flex items-center justify-center gap-2'>
          <motion.div
            initial={{ y:30, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{duration: 0.6, delay: 1}}
          >
            <Link
              to="/contact"
              className={`px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 ${isDarkMode ? "text-gray-100" : "bg-black text-white"}`}
            >
              Connect with me <img src={ isDarkMode ? rightArrowDark : rightArrowWhite} alt='' className='w-4' />
            </Link>
          </motion.div>

          <motion.div
            initial={{ y:30, opacity: 0 }}
            whileInView={{ y:0, opacity: 1 }}
            transition={{duration: 0.6, delay: 1.2}}
          >
            <a
              href="https://drive.google.com/file/d/1ZKL_6v93aYJ1NpN1QYSxHTanPRd0K56G/view?usp=sharing"
              download={true}
              className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 ${isDarkMode ? "bg-white text-gray-800" : ""}`}
            >
              my resume
              <img src={downloadIcon} alt='' className='w-4' />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
