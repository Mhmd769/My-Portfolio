import { ArrowRight, Github } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const projects = [
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
    githubUrl:
      "https://github.com/Mhmd769/Clean-Architecture-LeaveMangement.git",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Click any card to view more
          details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 pb-12">
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
                  {project.description.substring(0, 80)}...
                </p>
              </div>

              {/* GitHub icon pinned */}
              <div className="absolute bottom-3 right-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()} // prevent opening modal
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog */}
        <Dialog.Root open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card p-6 rounded-lg shadow-lg w-[90%] max-w-2xl z-50">
              {selectedProject && (
                <>
                  <Dialog.Title className="text-2xl font-bold mb-4">
                    {selectedProject.title}
                  </Dialog.Title>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-muted-foreground mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      className="bg-muted px-4 py-2 rounded-md flex items-center gap-2 hover:bg-muted/80"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </>
              )}
              <Dialog.Close className=" absolute top-3 right-3 text-white bg-black/30 rounded-full px-2 py-1 hover:bg-black/50">
                ✕
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

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
