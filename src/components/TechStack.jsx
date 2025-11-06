import React from 'react';
import python from './../assets/python.svg';
import numpy from './../assets/numpy.svg';
import pandas from './../assets/pandas.svg';
import matplotlib from './../assets/matplotlib.svg';
import scikitLearn from './../assets/scikitLearn.svg';

import cpp from './../assets/cpp.svg';
import html from './../assets/html5.svg';
import css from './../assets/css3.svg';
import javascript from './../assets/javaScript.svg';
import reactIcon from './../assets/react.svg';
import tailwind from './../assets/tailwind.svg';
import github from './../assets/gitHub.svg';
import nodejs from "./../assets/nodejsStackedDark.svg";
import expressjs from "./../assets/express.png"

import problemSolving from './../assets/problemSolving.png';
import projectManagement from './../assets/projectManagement.png';
import consistency from './../assets/consistency.png';
import communication from './../assets/communication.png';
import adaptability from './../assets/adaptability.png';
import teamWork from './../assets/teamWork.png';

import { ThemeContext } from '../App';
import { useContext } from 'react';
import { motion } from 'motion/react';

const TechStack = () => {

  const { isDarkMode } = useContext(ThemeContext);

  const SkillCard = ({ icon, label, index }) => (
    <motion.div
      className={`w-32 h-32 flex flex-col items-center justify-center border-[0.5px] rounded-xl p-6 cursor-pointer transition duration-500
    hover:-translate-y-1 hover:scale-105
    ${isDarkMode
          ? 'bg-[#11001F] border-gray-600 hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#000] text-gray-100'
          : 'bg-white border-gray-400 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] text-gray-700'}
  `}
      initial={{ opacity: 0, z: -200, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        z: 0,
        scale: 1
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
        scale: { type: "spring", stiffness: 70 },
        z: { type: "spring", stiffness: 70 }
      }}
    >
      <img
        src={icon}
        alt={label}
        className={`w-12 h-12 mb-2 mt-3 ${(isDarkMode && label === "GitHub") ? "bg-white" : ""} 
    animate-[float_3s_ease-in-out_infinite]`}
        style={{
          animation: "float 3s ease-in-out infinite"
        }}
      />
      <p className={`my-4 font-semibold text-sm text-center ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}>
        {label}
      </p>
    </motion.div>
  );

  return (
    <motion.div className="min-h-screen px-4 py-12 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className={`text-center text-lg mb-2 mt-8 ${isDarkMode ? "text-gray-100" : "text-gray-700"} `}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >What I Use</motion.h4>
      <motion.h2 className="text-center text-5xl mb-10"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >Tech Stack</motion.h2>

      {/* AI/ML */}
      <motion.section className="mb-12 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>AI / ML</h2>
        <div className="flex flex-wrap gap-6">
          <SkillCard icon={python} label="Python" index={0} />
          <SkillCard icon={numpy} label="NumPy" index={1} />
          <SkillCard icon={pandas} label="Pandas" index={2} />
          <SkillCard icon={matplotlib} label="Matplotlib" index={3} />
          <SkillCard icon={scikitLearn} label="Scikit Learn" index={4} />
        </div>
      </motion.section>

      {/* Development Skills */}
      <motion.section className="mb-12 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>Development Skills</h2>
        <div className="flex flex-wrap gap-6">
          <SkillCard icon={cpp} label="C++" index={0} />
          <SkillCard icon={html} label="HTML" index={1} />
          <SkillCard icon={css} label="CSS" index={2} />
          <SkillCard icon={javascript} label="JavaScript" index={3} />
          <SkillCard icon={reactIcon} label="React" index={4} />
          <SkillCard icon={tailwind} label="TailwindCSS" index={5} />
          <SkillCard icon={github} label="GitHub" index={6} />
          <SkillCard icon={nodejs} label="Node.js" index={7} />
          <SkillCard icon={expressjs} label="Express" index={8} />
        </div>
      </motion.section>

      {/* Soft Skills */}
      <motion.section className="mb-12 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h2 className={`text-2xl font-semibold mb-4 flex flex-col items-center justify-center ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>Soft Skills</h2>
        <div className="flex flex-wrap gap-6">
          <SkillCard icon={teamWork} label="Teamwork" index={0} />
          <SkillCard icon={projectManagement} label="Project Management" index={1} />
          <SkillCard icon={communication} label="Communication" index={2} />
          <SkillCard icon={problemSolving} label="Problem Solving" index={3} />
          <SkillCard icon={adaptability} label="Adaptability" index={4} />
          <SkillCard icon={consistency} label="Consistency" index={5} />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TechStack;
