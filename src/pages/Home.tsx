import {StarBackground} from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection ";
import { JourneySection } from "../components/JourneySection ";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/FooterSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-backgeround text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
      
        {/* Background Effects */}

        <StarBackground/>

        {/* NavBar */}
        <Navbar/>
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <JourneySection />
          <ProjectsSection />
          <ContactSection />
        </main>
        {/* Footer */}
        <Footer />
    </div>
  );
}