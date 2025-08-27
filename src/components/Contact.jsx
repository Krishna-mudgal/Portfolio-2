import React, { useContext } from 'react';
import rightArrowWhite from "./../assets/rightArrowWhite.png";
import rightArrowDark from "./../assets/rightArrowDark.png";
import { ThemeContext } from '../App'; 
import { motion } from 'motion/react';

const Contact = () => {
  const [result, setResult] = React.useState("");
  const { isDarkMode } = useContext(ThemeContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e1afd5bd-767a-4fc5-af04-5aa4fe2857fe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        isDarkMode ? "bg-[#11001F] text-white" : "bg-[url('/footer-bg-color-.png')] bg-no-repeat bg-center bg-[length:90%_auto] text-black"
      }`}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1}}
    >
      <motion.h4 className={`text-center mb-2 text-lg mt-10 ${isDarkMode ? "text-gray-100" : "text-gray-700"} `}
      initial={{ y:-20, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{duration: 0.5, delay:0.3}}
      >Connect with me</motion.h4>
      <motion.h2 className="text-center text-5xl"
      initial={{ y:-20, opacity: 0 }}
      whileInView={{ y:0, opacity: 1 }}
      transition={{duration: 0.5, delay:0.5}}
      >Get in touch</motion.h2>

      <motion.p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${isDarkMode ? "text-gray-100" : "text-gray-700"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 0.5, delay:0.7}}
      >
        I'd love to hear from you! If you have questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form className="max-w-2xl mx-auto" onSubmit={onSubmit}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 0.5, delay:0.9}}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode
                ? "bg-[#1f1f2e] border-gray-600 text-white"
                : "bg-white border-gray-400 text-black"
            }`}
            name="name"
            initial={{ x:-50, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{duration: 0.6, delay:1.1}}
          />
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${
              isDarkMode
                ? "bg-[#1f1f2e] border-gray-600 text-white"
                : "bg-white border-gray-400 text-black"
            }`}
            name="email"
            initial={{ x:50, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            transition={{duration: 0.6, delay:1.2}}
          />
        </div>

        <motion.textarea
          name="message"
          placeholder="Enter your message"
          required
          rows={6}
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${
            isDarkMode
              ? "bg-[#1f1f2e] border-gray-600 text-white"
              : "bg-white border-gray-400 text-black"
          }`}
          initial={{ y:100, opacity: 0 }}
          whileInView={{ y:0, opacity: 1 }}
          transition={{duration: 0.6, delay:1.3}}
        ></motion.textarea>

        <motion.button
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-500 ${
            isDarkMode
              ? "bg-[#2a004a] hover:bg-[#3a0066] text-white"
              : "bg-black/80 hover:bg-black text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          transition={{duration: 0.3}}
        >
          Submit Now{" "}
          <img src={isDarkMode ? rightArrowDark : rightArrowWhite} alt="" className="w-4" />
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
