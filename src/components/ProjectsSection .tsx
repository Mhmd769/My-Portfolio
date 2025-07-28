import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ECommerce Microservices",
    description: "Built a scalable eCommerce system using .NET 8, ASP.NET Web API, Ocelot API Gateway, and SQL Server…",
    image: "/public/ecommerce-microservices-architecture.webp",
    tags: ["ASP.NET", "Web API", " Ocelot API Gateway" , "SQL Server"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mhmd769/Ecommerce-Microservices-.git",
  },
  {
    id: 2,
    title: "Resume-AI Generator",
    description:
      "Created an AI-powered resume builder with React.js and Strapi, enabling users to easily generate, edit, and securely share resumes…",
    image: "/public/ai.jpg",
    tags: ["React.js", "Tailwind CSS", "PostgreSQL", "Strapi CMS","Gemini API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mhmd769/Resume_AI.git",
  },
  {
    id: 3,
    title: "HR Leave Management System",
    description:
      "Developed using ASP.NET Core with SOLID principles and Clean Architecture for maintainable and scalable code. Utilized...",
    image: "/public/Leave.png",
    tags: ["ASP.NET Core", "Clean Architecture", "JWT" , "XUnit"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mhmd769/Clean-Architecture-LeaveMangement.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative" // ✅ Added relative
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 pb-12"> {/* Added bottom padding so icon won't overlap */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>

              {/* ✅ GitHub icon pinned to bottom-right */}
              <div className="absolute bottom-3 right-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Mhmd769"
          >
            Check My Github +10 <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};