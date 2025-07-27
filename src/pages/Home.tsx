import {StarBackground} from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

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
        </main>
        {/* Footer */}

    </div>
  );
}