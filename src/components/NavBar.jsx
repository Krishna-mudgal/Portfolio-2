
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRef } from 'react'
import headerBgColor from './../assets/headerBgColor.png'
import logo from "./../assets/logo.png"
import logoDark from "./../assets/logoDark.png"
import moonIcon from './../assets/moonIcon.png'
import arrowIcon from './../assets/arrowIcon.png'
import menuBlack from './../assets/menuBlack.png'
import menuWhite from './../assets/menuWhite.png'
import closeBlack from './../assets/closeBlack.png'
import closeWhite from './../assets/closeWhite.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../App'
import sunIcon from '../assets/sunIcon.png'

const NavBar = () => {

    const sideMenuRef = useRef();
    const [isScroll, setIsScroll] = useState(false);
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);

    const toogleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', isDarkMode ? "dark" : "light")    ;
    }

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        // console.log('ScrollY:', window.scrollY);
        const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup function to remove the listener on unmount
        // return () => {
        // window.removeEventListener('scroll', handleScroll);
        // };
    });

    // console.log(isScroll);

      const navBackground = isScroll ? isDarkMode ? 'bg-[#11001F]/90 backdrop-blur-md shadow-sm' : 'bg-white/70 backdrop-blur-md shadow-sm' : '';
    

  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80
        %]'>
            <img src={headerBgColor} alt='' className='w-full' />
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${navBackground}`}>
            <a href="#top">
                <img src={ isDarkMode ? logoDark : logo} className='w-28 cursor-pointer mr-14' alt='' />
            </a>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 border border-gray-500 shadow-sm bg-opacity-50 '>
                <li><Link className='font-merriweather' to="/">Home</Link></li>
                <li><Link className='font-merriweather' to="/about">About me</Link></li>
                <li><Link className='font-merriweather' to="/techstack">Tech Stack</Link></li>
                <li><Link className='font-merriweather' to="/projects">Projects</Link></li>
                <li><Link className='font-merriweather' to="/contact">Contact</Link></li>
            </ul>

            <button onClick={toogleTheme} className={`border border-gray-500 rounded-4xl p-2 flex justify-center items-center hover:scale-105 ${isDarkMode ? 'bg-[#11001F] hover:bg-[#2a004a] hover:shadow-[4px_4px_0_#000]' : 'bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]'}`}>
                <img src={isDarkMode ? sunIcon : moonIcon} alt='' className='w-6' />
            </button>

            <button className='block md:hidden ml-3' onClick={openMenu} >
                <img src={isDarkMode ? menuWhite : menuBlack} alt='' className='w-6' />
            </button>


            {/* -----------mobile menu -----------  */}

            <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen ${isDarkMode ? "bg-[#2a004a]" : "bg-rose-50"} transition duration-500`}>

                <div className='absolute right-6 top-6'>
                    <img src={isDarkMode ? closeWhite : closeBlack} alt='' className='w-5 cursor-pointer' onClick={closeMenu} />
                </div>

                <li><Link className='font-merriweather' onClick={closeMenu} to="/">Home</Link></li>
                <li><Link className='font-merriweather' onClick={closeMenu} to="/about">About me</Link></li>
                <li><Link className='font-merriweather' onClick={closeMenu} to="techstack">Technical Stack</Link></li>
                <li><Link className='font-merriweather' onClick={closeMenu} to="/projects">Projects</Link></li>
                <li><Link className='font-merriweather' onClick={closeMenu} to="/contact">Contact</Link></li>
            </ul>

        </nav> 
    </>
  )
}

export default NavBar
