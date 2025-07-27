import React from 'react';
import { Code, Server, Database, Settings } from 'lucide-react';

type SkillCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
  iconColor?: string;
};

const SkillCard = ({ icon: Icon, title, description, skills, iconColor = "text-blue-400" }: SkillCardProps) => {
  return (
    <div className="relative bg-card backdrop-blur-sm rounded-xl p-6 border card-hover shadow-lg">
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg bg-background mr-4 border border-border/50`}>
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      
      <p className="text-foreground/70 mb-4 text-sm">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-background text-foreground/80 rounded-full text-sm border border-border hover:border-primary/50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      description: "Building interactive UIs with modern frameworks and styling.",
      iconColor: "text-cyan-400",
      skills: ["Tailwind CSS", "CSS", "Html", "Javascript", "React.js","TypeScript"]
    },
    {
      icon: Server,
      title: "Backend",
      description: "Robust server-side logic, APIs, and business processes.",
      iconColor: "text-purple-400",
      skills: ["ASP.NET Core", "C#", "ASP.NET Core MVC", "Restful API", "xUnit"]
    },
    {
      icon: Database,
      title: "Databases",
      description: "Designing and managing relational and cloud databases.",
      iconColor: "text-green-400",
      skills: ["Firebase", "MS SQL SERVER", "SQLite", "PostgreSQL"]
    },
    {
      icon: Settings,
      title: "Dev Tools & Architecture",
      description: "Modern development, version control, and deployment tools.",
      iconColor: "text-pink-400",
      skills: ["Git/GitHub", "CMS","Clean Architecture" ,"Microservices" ]
    }
  ];

  return (
    <section id="skills" className="py-20">      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My{' '}
            <span className="text-primary">
              Skills
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <SkillCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};