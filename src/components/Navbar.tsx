import { cn } from "../lib/utils";
import { Menu, X, Code2, Sparkles, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experiences", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const ThemeToggle = ({ isMobile = false, className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const storedTheme = window.localStorage?.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const darkMode = storedTheme === 'dark' || (!storedTheme && systemDark);
      setIsDarkMode(darkMode);
      
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    checkDarkMode();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (!window.localStorage?.getItem('theme')) {
        checkDarkMode();
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      if (window.localStorage) {
        window.localStorage.setItem('theme', 'dark');
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (window.localStorage) {
        window.localStorage.setItem('theme', 'light');
      }
    }
  };

  if (isMobile) {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          "flex items-center justify-center p-3 rounded-xl transition-all duration-300",
          "bg-white/10 backdrop-blur-sm border border-white/20",
          "hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30",
          className
        )}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-200" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 p-3 rounded-full transition-all duration-300",
        "bg-white/10 backdrop-blur-md border border-white/20",
        "hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/30",
        "shadow-lg hover:shadow-xl",
        className
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={cn(
            "absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-300",
            isDarkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-50"
          )} 
        />
        <Moon 
          className={cn(
            "absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300",
            !isDarkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-50"
          )} 
        />
      </div>
    </button>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkDarkMode = () => {
      const storedTheme = window.localStorage?.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const darkMode = storedTheme === 'dark' || (!storedTheme && systemDark);
      setIsDarkMode(darkMode);
    };

    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setActiveSection(entry.target.id);
    }
  });
};

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '-50px 0px -50px 0px'
    });

    navItems.forEach(item => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    checkDarkMode();

    const themeObserver = new MutationObserver(handleThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Prevent body scroll on mobile when menu is open
    const handleBodyScroll = () => {
      if (isMenuOpen && window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    };

    handleBodyScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      themeObserver.disconnect();
      // Clean up body styles
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "w-full z-50 transition-all duration-500 ease-out",
          // Fixed positioning only on desktop
          "md:fixed md:top-0 md:left-0",
          // Normal positioning on mobile
          "relative",
          isScrolled 
            ? isDarkMode 
              ? "py-3 bg-gray-900/20 backdrop-blur-xl border-b border-gray-700/30 shadow-2xl shadow-black/30"
              : "py-3 bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-black/10"
            : "py-6 bg-transparent"
        )}
      >
        {/* Prevent body scroll when mobile menu is open */}
      {isMenuOpen && (
        <style>
          {`
            @media (max-width: 768px) {
              body {
                overflow: hidden;
                position: fixed;
                width: 100%;
              }
            }
          `}
        </style>
      )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a
            className="group relative flex items-center space-x-3 text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            href="#home"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <Sparkles className="w-3 h-3 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="relative">
              <span className={cn(
                "font-extrabold tracking-tight",
                isDarkMode ? "text-white" : "text-gray-900"
              )}>
                Mohammad
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mahdi
              </span>
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
                  "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 group",
                  "hover:scale-105 transform-gpu",
                  activeSection === item.href.substring(1) 
                    ? "text-white bg-gradient-to-r from-blue-500/40 to-purple-500/40 shadow-lg shadow-blue-500/25 backdrop-blur-sm" 
                    : cn(
                        "hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-lg",
                        isDarkMode 
                          ? "text-gray-300 hover:text-white hover:shadow-blue-500/20" 
                          : "text-gray-700 hover:text-gray-900 hover:shadow-blue-500/10"
                      )
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
            ))}

            {/* Desktop Theme Toggle */}
            <div>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle isMobile />
            
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={cn(
                "relative p-3 rounded-full transition-all duration-300 z-50",
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/30",
                isMenuOpen && "bg-white/30 scale-110"
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

          {/* Mobile Navigation Menu - Full page overlay */}
          <div
            className={cn(
              "fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            {/* Full page backdrop */}
            <div 
              className={cn(
                "absolute inset-0 transition-all duration-500",
                isDarkMode 
                  ? "bg-gradient-to-br from-gray-900/95 via-blue-900/60 to-purple-900/70"
                  : "bg-gradient-to-br from-white/95 via-blue-100/60 to-purple-100/70",
                "backdrop-blur-xl",
                isMenuOpen ? "opacity-100" : "opacity-0"
              )}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div 
              className={cn(
                "relative flex flex-col items-center justify-center h-full transition-all duration-500 ease-out px-6",
                isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              )}
            >
              <div className="flex flex-col space-y-8 text-center w-full max-w-sm">
                {navItems.map((item, key) => (
                  <a
                    key={key}
                    href={item.href}
                    className={cn(
                      "group relative text-2xl font-bold transition-all duration-300",
                      "px-8 py-4 rounded-2xl",
                      "hover:scale-105 transform-gpu",
                      activeSection === item.href.substring(1)
                        ? cn(
                            "bg-gradient-to-r from-blue-500/30 to-purple-500/30 shadow-2xl",
                            isDarkMode ? "text-white shadow-blue-500/30" : "text-gray-900 shadow-blue-500/20"
                          )
                        : cn(
                            "hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-xl",
                            isDarkMode 
                              ? "text-white/90 hover:text-white hover:shadow-blue-500/30" 
                              : "text-gray-800/90 hover:text-gray-900 hover:shadow-blue-500/20"
                          )
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {activeSection !== item.href.substring(1) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                    <div className="absolute inset-x-0 -bottom-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};