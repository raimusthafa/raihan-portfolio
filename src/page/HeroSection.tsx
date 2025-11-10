import BlurText from "@/components/BlurText/BlurText";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight-new";
import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection({ isDarkMode }: { isDarkMode: boolean }) {
  const colors = {
  light: "#ffffff",
  dark: "#0F0F0F",
};

const gradientClass = isDarkMode
  ? "from-teal-400 via-green-400 to-lime-300"
  : "from-teal-400 via-green-500 to-lime-600/80";

// New state to trigger animation on mount
const [animate, setAnimate] = useState(false);

useEffect(() => {
  setAnimate(true);
}, []);

  return (
    <section className="relative h-[100vh] items-center justify-center overflow-hidden">
     
      <BackgroundBeamsWithCollision className="relative z-0">
        <Spotlight height={3000} isDarkMode={isDarkMode}/>
        {/* isDarkMode={isDarkMode} */}
      
      <div className="relative z-20 text-center mt-16 md:mt-32">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-lime-500 animate-spin-slow blur-md"></div>
          <img
            src="/me2.jpg"
            alt="Raihan Musthafa Kamal"
            className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
          />
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg whitespace-nowrap flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Available for Work
          </motion.div>
        </motion.div>

        <BlurText
  text="Raihan Musthafa Kamal"
  delay={150}
  animateBy="words"
  direction="top"
  className="mx-2 text-3xl md:text-6xl font-bold text-emerald-600 dark:text-emerald-400"
/>
        <div
          className={`relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] font-semibold text-xl md:text-2xl transition-opacity duration-[3000ms] ease-in-out ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r pb-3 md:pb-4 pt-1 md:pt-4 ${gradientClass} [text-shadow:0_0_rgba(0,0,0,0.1)]`}>
            <span className="">Fullstack Developer</span>
          </div>
          <div className={`relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r ${gradientClass} pb-3 md:pb-4 pt-1 md:pt-4`}>
            <span className="">Fullstack Developer</span>
          </div>
        </div>

        


        <div className="w-full max-w-md h-32 sm:h-36 md:h-40 relative mx-auto mt-2">
          {/* Gradients */}
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

          {/* Core Sparkles */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full mx-auto"
            particleColor={isDarkMode ? colors.light : colors.dark}
          />

          {/* Radial Gradient Mask */}
          <div className="absolute inset-0 w-full h-full bg-[#f3fdf6] dark:bg-gray-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center gap-4 mt-6"
        >
          <a
            href="https://github.com/raimusthafa"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
          >
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/raihan-musthafa-kamal"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
          >
            <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
          </a>
          <a
            href="https://instagram.com/mk.raihan_"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
          >
            <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
          </a>
        </motion.div>
      </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
