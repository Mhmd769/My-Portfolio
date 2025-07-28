import { useState } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

type ExperienceProps = {
  title: string;
  company: string;
  year: string;
  location: string;
  type: string;
  description: string;
  skills: string[];
  achievements: string[];
};

const ExperienceCard = ({ title, company, year, location, type, description, skills, achievements }: ExperienceProps) => {
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <div className="relative bg-card backdrop-blur-sm rounded-xl p-6 border border-border card-hover shadow-lg mb-8">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-primary"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
              <p className="text-left text-primary font-medium">@{company}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-foreground/60 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{year}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
          {type}
        </div>
      </div>

      <p className=" text-left text-foreground/80 mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        onClick={() => setShowAchievements(!showAchievements)}
        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
      >
        {showAchievements ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {showAchievements ? 'Hide achievements' : 'Show achievements'}
      </button>

      {showAchievements && (
        <div className="mt-4 p-4 bg-background rounded-lg border border-border/50 animate-fade-in">
          <h4 className="text-foreground font-semibold mb-3">Key Achievements</h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground/80 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const JourneySection = () => {
  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      company: "Diraya",
      year: "2025",
      location: "Beirut, Lebanon",
      type: "Internship",
      description: "Contributing as a full stack web developer intern in a collaborative team environment to design, develop, and maintain a comprehensive e-commerce platform. Engaged in both frontend and backend development using ASP.NET Core MVC, JavaScript, HTML, CSS, and SQL Server, with a focus on performance optimization and seamless integration.",
      skills: ["ASP.NET Core MVC", "HTML", "CSS", "Javascript", "SQL Server"],
      achievements: [
        "Developed responsive and user-friendly features, improving overall user experience.",
        "Optimized SQL queries and frontend code, resulting in a 25% reduction in page load times.",
        "Ensured smooth integration between frontend and backend components for reliable platform functionality.",
        "Gained practical experience with real-world development workflows and best practices under mentorship from senior developers."
      ]
    }
    // Add more experiences here
  ];

  return (
    <section id="journey" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My{' '}
            <span className="text-primary">
              Experiences 
            </span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A timeline of my professional experiences and growth
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ExperienceCard {...experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};