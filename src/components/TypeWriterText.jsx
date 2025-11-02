import React, { useEffect, useRef, useState, useContext } from 'react'
import "./TypeWriter.css"
import {ThemeContext} from "./../App"

const TypeWriterText = ({tags}) => {

  //   const [text, setText] = useState("Frontend Developer");
  //   const textRef = useRef();
  //   const i = useRef(0);

  //   const changeText = () => {
  //       const ele = textRef.current;

  //       ele.classList.remove("text");

  //       void ele.offsetWidth;

  //       i.current = (i.current + 1) % tags.length;
  //       setText(tags[i.current]);

  //       ele.classList.add("text");
  //   }

  //   useEffect(() => {
  //       textRef.current.addEventListener("animationend", changeText);
  //   }, [])

  // return (
  //   <span ref={textRef} className='text'>
  //     {text}
  //   </span>
  // )


  const {isDarkMode} = useContext(ThemeContext)

  return (
    <div className="wrapper">
      <div className="dynamic-txt">
        <ul>
          <li className={`${isDarkMode ? "darkMode" : "lightMode"}`}><span>FullStack Developer</span></li>
          <li className={`${isDarkMode ? "darkMode" : "lightMode"}`}><span>AIML Engineer</span></li>
        </ul>
      </div>
    </div>
  )
}

export default TypeWriterText
