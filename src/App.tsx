import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { AboutSection } from "./page/About";
import { HeroSection } from "./page/HeroSection";
import { ProjectsSection } from "./page/Project";
import { StatsSection } from "./page/Stats";
import ContactSection from "./page/Contact";
import { Toaster } from "react-hot-toast";
import Experience from "./page/Experience";
import { Navbar } from "./components/Navbar";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync initial theme from localStorage & apply class 'dark'
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Apply/remove dark class & save preference on toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="bg-[#f3fdf6] text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      {/* <DockDemo isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} /> */}
      <main>
        <HeroSection isDarkMode={isDarkMode} />
        {/* <LinearCard/> */}
        <StatsSection />
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
