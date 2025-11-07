import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
