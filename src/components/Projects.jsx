import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { motion } from 'motion/react';

const projectList = [
  {
    title: "Pulse Point",
    overview: "AI-powered healthcare platform connecting patients with doctors.",
    link: "https://pulsepoint-5d568.web.app/",
    points: [
      "Smart chat assistant suggests doctors based on symptoms.",
      "Verified doctors manage availability & appointments.",
      "Email notifications on booking confirmation.",
    ],
  },
  {
    title: "Human Action Recognition",
    overview: "Deep learning-based video classification using ConvLSTM and LRCN.",
    link: "https://github.com/Krishna-mudgal/Human_Action_recognition-",
    points: [
      "Analyzes real-time activities using video sequences.",
      "Trained on UCF50 dataset with 50 action categories.",
      "Applies CNN and LSTM for spatiotemporal understanding.",
    ],
  },
  {
    title: "Portfolio Website",
    overview: "Personal portfolio to showcase projects, skills & resume.",
    link: "https://yourportfolio.com",
    points: [
      "Fully responsive dark-mode design.",
      "Downloadable resume integration.",
      "Clean, modern UI with multiple sections.",
    ],
  },
  {
    title: "Movie Recommendation System",
    overview: "Intelligent system suggesting personalized movies using machine learning.",
    link: "https://github.com/Krishna-mudgal/Movie-Recommender-system",
    points: [
      "Implemented content-based filtering and collaborative filtering using SVM and other ML algorithms.",
      "Processed large datasets of movie metadata and user ratings for accurate predictions.",
      "Enhanced user engagement by delivering relevant recommendations based on preferences.",
    ],
  },
];

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <motion.div className="py-16 px-[8%]" id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className={`text-center text-lg mb-2 mt-5 ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I've built
      </motion.h4>
      <motion.h2
        className="text-center text-5xl mb-10"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Projects
      </motion.h2>

      <div className="flex flex-col gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            className={`p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 border-[0.5px] rounded-xl ${
              isDarkMode
                ? "bg-[#11001F] border-gray-600 hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#000] text-gray-100"
                : "bg-white border-gray-400 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] text-gray-700"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className={`text-xl font-bold ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}>
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm underline hover:text-blue-500 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  🔗 View
                </a>
              )}
            </div>

            <p className={`mb-4 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
              <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Overview:</span>{" "}
              {project.overview}
            </p>

            <ul className={`list-disc list-inside space-y-1 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
              {project.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
