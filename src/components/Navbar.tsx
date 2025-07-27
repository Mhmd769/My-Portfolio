import { cn } from "../lib/utils";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check for dark mode from localStorage or system preference
    const checkDarkMode = () => {
      const storedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const darkMode = storedTheme === 'dark' || (!storedTheme && systemDark);
      setIsDarkMode(darkMode);
    };

    // Listen for theme changes
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    window.addEventListener("scroll", handleScroll);
    checkDarkMode();
    
    // Create a MutationObserver to watch for class changes on html element
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out",
          isScrolled 
            ? isDarkMode 
              ? "py-3 bg-gray-900/10 backdrop-blur-xl border-b border-gray-700/20 shadow-2xl shadow-black/20"
              : "py-3 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/5"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a
            className="group relative flex items-center space-x-2 text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            href="#home"
          >
            <div className="relative">
              <Code2 className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
              <Sparkles className="w-3 h-3 text-purple-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="relative text-primary">
              Mhmd <span className="text-gradient">Mahdi</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group",
                  "hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20",
                  "hover:shadow-lg hover:shadow-blue-500/25 hover:backdrop-blur-sm",
                  "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500 before:to-purple-500",
                  "before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
                  activeSection === item.href.substring(1) 
                    ? "text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30 shadow-lg shadow-blue-500/20" 
                    : isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
            ))}
            
            {/* CTA Button */}
            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <a
                href="#contact"
                className="relative px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 group overflow-hidden"
              >
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={cn(
                "relative p-2.5 rounded-full transition-all duration-300 z-50",
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "hover:bg-white/20 hover:scale-110",
                isMenuOpen && "bg-white/20 scale-110"
              )}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={cn(
                    "absolute inset-0 w-6 h-6 transition-all duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800",
                    isMenuOpen ? "opacity-0 rotate-180 scale-50" : "opacity-100 rotate-0 scale-100"
                  )} 
                />
                <X 
                  className={cn(
                    "absolute inset-0 w-6 h-6 transition-all duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800",
                    isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-50"
                  )} 
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={cn(
              "fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            {/* Backdrop */}
            <div 
              className={cn(
                "absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/20 to-purple-900/40 backdrop-blur-xl transition-all duration-500",
                isMenuOpen ? "opacity-100" : "opacity-0"
              )}
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Menu Content */}
            <div 
              className={cn(
                "relative flex flex-col items-center justify-center h-full transition-all duration-500 ease-out",
                isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              )}
            >
              <div className="flex flex-col space-y-6 text-center">
                {navItems.map((item, key) => (
                  <a
                    key={key}
                    href={item.href}
                    className={cn(
                      "group relative text-2xl font-semibold transition-all duration-300",
                      "text-white/90 hover:text-white hover:scale-110",
                      "px-8 py-3 rounded-2xl",
                      "hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </a>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-6 mt-6 border-t border-white/20">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/40 hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Let's Connect</span>
                    <Sparkles className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Theme Toggle Component - positioned outside navbar */}
      <ThemeToggle />
    </>
  );
};