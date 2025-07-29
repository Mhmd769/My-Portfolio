import { ArrowRight, Github, X } from "lucide-react";
import { useState } from "react";

// Define project type
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "ECommerce Microservices",
    description:
      "Built a scalable eCommerce platform using .NET 8, ASP.NET Web API, Ocelot API Gateway, and SQL Server. Designed microservices for Product, Order, and Authentication based on Clean Architecture with JWT authentication. Configured Ocelot for routing, authentication, and rate limiting, and implemented caching and retry policies to ensure performance and resilience. Conducted thorough unit and integration testing with xUnit.",
    image: "/ecommerce-microservices-architecture.webp",
    tags: ["ASP.NET", "Web API", "Ocelot API Gateway", "SQL Server"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mhmd769/Ecommerce-Microservices-.git",
  },
  {
    id: 2,
    title: "Resume-AI Generator",
    description:
      "Developed an AI-powered resume builder using React.js, Tailwind CSS, and Clerk for secure user authentication. The backend is built with Strapi CMS and PostgreSQL, integrating Google Gemini API to generate dynamic, personalized content. Key features include creating, editing, AI content generation, secure sharing, and downloading resumes.",
    image: "/ai.jpg",
    tags: ["React.js", "Tailwind CSS", "PostgreSQL", "Strapi CMS", "Gemini API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mhmd769/Resume_AI.git",
  },
  {
    id: 3,
    title: "Leave Management System",
    description:
      "Developed using ASP.NET Core with SOLID principles and Clean Architecture for maintainable and scalable code. Utilized MediatR, Automapper, and Fluent API for streamlined operations and efficient workflows. Implemented the CQRS pattern and secured the API with Identity and JWT for user authentication and authorization. Conducted comprehensive unit testing with xUnit to ensure system reliability and robustness.",
    image: "/Leave.png",
    tags: ["ASP.NET Core", "Clean Architecture", "JWT", "XUnit"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mhmd769/Clean-Architecture-LeaveMangement.git",
  },
];

export const ProjectsSection = () => {
  // ✅ Fix: Union type
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
            Here are some of my recent projects. Click any card to view more details.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover relative cursor-pointer border border-border"
            >
              <div className="h-40 sm:h-48 lg:h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 sm:p-5 lg:p-6 pb-12 sm:pb-14">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <h3 className="text-left text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-left  text-foreground/70 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.description.length > 100
                    ? `${project.description.substring(0, 100)}...`
                    : project.description}
                </p>
              </div>

              <div className="flex justify-end items-center p-2">
                  <div className="flex space-x-3 ">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <div className="relative bg-card rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-10 p-2 text-foreground/60 hover:text-foreground bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="p-4 sm:p-6">
                <h2 className="text-left text-xl sm:text-2xl font-bold mb-4 pr-10">{selectedProject.title}</h2>
                <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden mb-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-left text-foreground/80 text-sm sm:text-base leading-relaxed mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  {selectedProject.demoUrl !== "#" && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 cosmic-button text-sm"
                    >
                      <ArrowRight className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8 sm:mt-12">
          <a
            className="cosmic-button inline-flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mhmd769"
          >
            Check My Github +10
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
