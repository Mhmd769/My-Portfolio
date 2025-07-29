import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection ";
import { JourneySection } from "../components/JourneySection ";
import { Footer } from "../components/FooterSection";
import { ContactSection } from "../components/ContactSection";
import { SectionWrapper } from "../components/SectionWrapper ";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main>
          <HeroSection />

        <SectionWrapper>
          <AboutSection />
        </SectionWrapper>

        <SectionWrapper>
          <SkillsSection />
        </SectionWrapper>

        <SectionWrapper>
          <JourneySection />
        </SectionWrapper>

          <ProjectsSection />

        <SectionWrapper>
          <ContactSection />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};
