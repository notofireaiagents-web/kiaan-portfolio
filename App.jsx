import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-[#F8F7F4] dark:bg-[#070B14] text-gray-900 dark:text-white min-h-screen transition-colors duration-500 overflow-x-hidden">
        <CustomCursor />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Achievements />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
