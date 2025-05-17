import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSection({ isDarkMode }: { isDarkMode: boolean }) {
  const colors = {
  light: "#ffffff",
  dark: "#0F0F0F",
};

  return (
    <section className="relative h-[100vh] items-center justify-center overflow-hidden">
     
      <BackgroundBeamsWithCollision className="relative z-0">
        <Spotlight className="absolute inset-0 z-0 opacity-20" isDarkMode={isDarkMode}/>
      </BackgroundBeamsWithCollision>
      <div className="relative z-20 text-center -translate-y-3 md:-translate-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-emerald-800 dark:text-emerald-400">
          Raihan Musthafa Kamal
        </h1>
        <p className="mt-4 text-lg md:text-xl text-emerald-600 dark:text-emerald-300">
          Frontend-Focused Fullstack Developer
        </p>

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
