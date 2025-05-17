import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Spotlight } from "./components/ui/spotlight";
import { AboutSection } from "./page/About";
import { ContactSection } from "./page/Contact";
import { HeroSection } from "./page/HeroSection";
import { ProjectsSection } from "./page/Project";
import { SparklesPreview } from "./page/tes";

function App() {
  return (
    <div className="bg-[#f3fdf6] text-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <SparklesPreview />
      </main>
      <Footer />
  
    </div>
  );
}

export default App;
