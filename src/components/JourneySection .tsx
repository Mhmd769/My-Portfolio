import { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp, Briefcase, Star, Award, Building2 } from 'lucide-react';

type ExperienceProps = {
  title: string;
  company: string;
  year: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  achievements: string[];
  index: number;
};

const ExperienceCard = ({ title, company, year, location, type, description, skills, achievements, index }: ExperienceProps) => {
  const [showAchievements, setShowAchievements] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setSkillsAnimated(true), 500);
          }, index * 150);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Card */}
      <div className="mb-6 flex justify-center sm:justify-start">
        <div className="group bg-card backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-border card-hover shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 w-full max-w-md sm:max-w-full">
          {/* Header */}
          <div className="text-left mb-3 sm:mb-4">
            <div className="flex flex-wrap items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary transition-colors duration-300" />
              </div>

              {/* Title + Company */}
              <div className="flex-1 min-w-[150px]">
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-all duration-500 text-glow">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-primary font-semibold group-hover:opacity-80 transition-opacity duration-300">
                  @{company}
                </p>
              </div>

              {/* Type Badge */}
              <div className="cosmic-button text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5 mt-2 sm:mt-0">
                {type}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-foreground/70 mt-2">
              <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{year}</span>
              </div>
              <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-3 sm:mb-4">
            <p className="text-sm sm:text-sm md:text-base text-foreground/80 leading-relaxed text-left">
              {description}
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`px-2 sm:px-3 py-1.5 bg-primary/10 text-foreground rounded-lg text-[10px] sm:text-xs md:text-sm font-medium hover:bg-primary/20 hover:text-primary hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm border border-primary/20 ${
                  skillsAnimated ? 'animate-fade-in' : 'opacity-0 translate-y-2'
                }`}
                style={{
                  transitionDelay: `${skillIndex * 100}ms`,
                  animationDelay: `${skillIndex * 100}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Achievements Toggle */}
          <button
            onClick={() => setShowAchievements(!showAchievements)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 text-xs sm:text-sm font-medium group/btn hover:bg-primary/5 px-2 sm:px-3 py-1.5 rounded-lg hover:scale-105"
          >
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
            <span>{showAchievements ? 'Hide achievements' : 'Show achievements'}</span>
            {showAchievements ? (
              <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:scale-125 group-hover/btn:-translate-y-1 transition-all duration-300" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:scale-125 group-hover/btn:translate-y-1 transition-all duration-300" />
            )}
          </button>

          {/* Achievements List */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-out ${
              showAchievements ? 'max-h-96 opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-3 sm:p-4 bg-primary/5 rounded-xl border border-primary/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse-subtle" />
                <h4 className="text-foreground font-semibold text-xs sm:text-sm">Key Achievements</h4>
              </div>
              <ul className="text-left space-y-2 sm:space-y-3">
                {achievements.map((achievement, achievementIndex) => (
                  <li
                    key={achievementIndex}
                    className={`flex items-start gap-2 sm:gap-3 text-foreground/80 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-500 hover:translate-x-2 hover:text-primary ${
                      showAchievements ? 'animate-fade-in' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ animationDelay: `${achievementIndex * 150}ms` }}
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 animate-pulse-subtle"></div>
                    <span className="hover:font-medium transition-all duration-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const JourneySection = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [, setTitleAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          setTimeout(() => setTitleAnimated(true), 300);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Full Stack Web Developer Intern',
      company: 'Diraya',
      year: '2025',
      location: 'Beirut, Lebanon',
      type: 'Internship',
      description:
        'Contributing as a full stack web developer intern in a collaborative team environment to design, develop, and maintain a comprehensive e-commerce platform. Engaged in both frontend and backend development using ASP.NET Core MVC, JavaScript, HTML, CSS, and SQL Server, with a focus on performance optimization and seamless integration.',
      skills: ['ASP.NET Core MVC', 'HTML', 'CSS', 'Javascript', 'SQL Server'],
      achievements: [
        'Developed responsive and user-friendly features, improving overall user experience.',
        'Optimized SQL queries and frontend code, resulting in a 25% reduction in page load times.',
        'Ensured smooth integration between frontend and backend components for reliable platform functionality.',
        'Gained practical experience with real-world development workflows and best practices under mentorship from senior developers.',
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="journey" className="py-10 sm:py-16 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-12 sm:top-20 right-8 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-12 sm:bottom-20 left-8 sm:left-20 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-full blur-xl animate-pulse-subtle"></div>
      <div className="absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            sectionVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto px-2 sm:px-4">
            A timeline of my professional experiences, growth, and the impact I've made along the way
          </p>
        </div>

        {/* Experience cards */}
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} index={index} />
        ))}

        {/* Timeline end dot */}
        <div className="absolute left-1/2 sm:left-2 bottom-0 -translate-x-1/2 sm:translate-x-0 w-3 h-3 bg-primary rounded-full border-2 border-card shadow-lg animate-pulse-subtle">
          <div className="absolute inset-0 bg-primary/60 rounded-full animate-float"></div>
        </div>
      </div>

      {/* CTA */}
      <div
        className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-500 ${
          sectionVisible ? 'animate-fade-in-delay-2' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 sm:gap-3 cosmic-button group cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg">
          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>Ready for new opportunities</span>
        </div>
      </div>
    </section>
  );
};
