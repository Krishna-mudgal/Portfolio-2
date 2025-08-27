import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import { useEffect, useState } from "react";
import { createContext, useContext } from 'react';

export const ThemeContext = createContext();

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Header /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Projects /> },
      { path: "techstack", element: <TechStack /> }
    ]
  }
]);

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState("light");

  return (
    <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}} >
      <div className={`min-h-screen ${isDarkMode ? "bg-[#11001F] text-white" : "bg-white text-black" }`}>
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  )
}

// export {ThemeContext}
