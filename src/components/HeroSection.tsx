import { ArrowDown } from "lucide-react";

// Hero Section Component - Fixed for proper responsiveness
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Fixed the heading structure */}
          <h1 className="font-bold tracking-tight leading-tight">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-0 animate-fade-in">
              Hi, I'm
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary opacity-0 animate-fade-in-delay-1 mt-2">
              Mohammad
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-2 mt-2">
              Mahdi
            </div>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed px-4">
            Fullstack Web Developer skilled in React.js and ASP.NET Core. I focus on creating scalable,
            efficient, and user-centric applications with clean, maintainable code.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-block">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground/60 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
