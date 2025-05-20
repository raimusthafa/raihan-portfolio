import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight-new";

export function HeroSection({ isDarkMode }: { isDarkMode: boolean }) {
  const colors = {
  light: "#ffffff",
  dark: "#0F0F0F",
};

const gradientClass = isDarkMode
  ? "from-teal-400 via-green-400 to-lime-300"
  : "from-red-400 to-green-500";


  return (
    <section className="relative h-[100vh] items-center justify-center overflow-hidden">
     
      <BackgroundBeamsWithCollision className="relative z-0">
        <Spotlight height={3000} isDarkMode={isDarkMode}/>
        {/* isDarkMode={isDarkMode} */}
      </BackgroundBeamsWithCollision>
      <div className="relative z-20 text-center -translate-y-3 md:-translate-y-6">
        <h1 className="mx-2 text-4xl md:text-6xl font-bold text-emerald-600 dark:text-emerald-400">
          Raihan Musthafa Kamal
        </h1>
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] font-semibold text-xl md:text-2xl">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 ${gradientClass} [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Fullstack Developer Frontend-Focused</span>
          </div>
          <div className={`relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r ${gradientClass} py-4`}>
            <span className="">Fullstack Developer Frontend-Focused</span>
          </div>
        </div>


        <div className="w-full max-w-md h-32 sm:h-36 md:h-40 relative mx-auto px-4 mt-2">
          {/* Gradients */}
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

          {/* Core Sparkles */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor={isDarkMode ? colors.light : colors.dark}
          />

          {/* Radial Gradient Mask */}
          <div className="absolute inset-0 w-full h-full bg-[#f3fdf6] dark:bg-gray-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </section>
  );
}
