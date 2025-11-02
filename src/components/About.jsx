import React, { useState, useContext } from 'react';
import user from "./../assets/user.png";
import { ThemeContext } from '../App';
import { motion } from "motion/react";
import leetCode from "./../assets/leetcode1.png";
import github from "./../assets/github.png";
import gmail from "./../assets/gmail.png";
import phoneCall from "./../assets/phoneCall.png";
import linkedin from "./../assets/linkedin.png";

const educationList = [
  {
    title: "Bachelor of Technology in Artifical Intelligence and Machine Learning",
    school: "Madhav Institute of Technology and Science, Gwalior (M.P.)",
    result: "Pursuing",
    year: "2022 – Present"
  },
  {
    title: "Higher Secondary Education",
    school: "Sarvodaya H.S. School",
    result: "82.8%",
    year: "2022"
  },
  {
    title: "Secondary Education",
    school: "Kendriya Vidyalaya",
    result: "82.1%",
    year: "2020"
  }
];

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div className='w-full px-[12%] py-10 scroll-mt-20 flex justify-center items-center flex-col' id='about'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className={`text-center mb-2 text-lg mt-10 ${isDarkMode ? "text-gray-100" : ""} `}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >Introduction</motion.h4>
      <motion.h2 className='text-center text-5xl'
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >About Me</motion.h2>

      <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={user}
            alt='user'
            className={`w-full rounded-3xl transition-filter duration-500 ${isLoading ? 'blur-sm' : 'blur-0'}`}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        </motion.div>

        <motion.div className='flex-1'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className={`mb-10 max-w-2xl text-base sm:text-lg leading-relaxed ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
            I'm Krishna Mudgal, a passionate developer who blends creativity with code. From building dynamic user interfaces with React to exploring the depths of AI and machine learning, I enjoy turning ideas into impactful digital experiences.
            <br />
            Currently diving deeper into AI and Full-Stack Development, I'm passionate about writing clean, efficient code and building scalable solutions that solve real problems.

            Let’s collaborate and create something awesome!
          </p>
          <motion.div className="flex flex-wrap gap-6 mt-6 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <motion.a whileHover={{ scale: 1.1 }} href="mailto:krishnamudgal44@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={gmail} alt="Email" className="w-8 hover:scale-110 transition-transform duration-300" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/Krishna-mudgal" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="w-8 hover:scale-110 transition-transform duration-300" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/krishna-mudgal-127a44283" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-8 hover:scale-110 transition-transform duration-300" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.1 }} href="https://leetcode.com/u/Krishna_mudgal/" target="_blank" rel="noopener noreferrer">
              <img src={leetCode} alt="LeetCode" className="w-8 hover:scale-110 transition-transform duration-300" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.1 }} href="tel:+918103231898">
              <img src={phoneCall} alt="Phone" className="w-8 hover:scale-110 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.ul className='flex flex-wrap justify-center gap-6 w-full max-w-6xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {educationList.map(({ title, school, result, year }, index) => (
          <motion.li
            key={index}
            className={`w-full sm:w-[48%] lg:w-[30%] border rounded-xl p-6 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1
            ${isDarkMode
                ? 'bg-[#11001F] border-gray-600 hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#000]'
                : 'bg-white border-gray-400 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]'}
          `}
            whileInView={{ scale: 1.05 }}
          >
            <h3 className={`mb-3 font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}>{title}</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}><strong>School:</strong> {school}</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}><strong>Result:</strong> {result}</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}><strong>Year:</strong> {year}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default About;
