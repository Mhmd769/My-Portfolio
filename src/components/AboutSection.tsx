import { Briefcase, Code, User } from "lucide-react"
export const AboutSection = () => {
    return(
     <section id="about" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Text Content - Left Column */}
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                        Passionate Full-stack Software Developer
                    </h3>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                       I am a full-stack software developer with strong experience building scalable web applications using React.js, ASP.NET Core, and MVC architecture. 
                       I have a keen interest in clean code principles, microservice architectures, and continuous learning of cutting-edge technologies.
                    </p> 

                    <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                    I hold a Bachelor's degree in Computer Science from Lebanese University and completed an internship where I gained practical experience in full-stack development.
                    I thrive in collaborative teams and proactively solve complex problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                        <a href="#contact" className="cosmic-button text-center w-full sm:w-auto">
                            Get in Touch
                        </a>

                        <a 
                            href="/MhmdMahdiCV.pdf" 
                            download 
                            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center text-sm sm:text-base w-full sm:w-auto"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Skills Cards - Right Column */}
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                    <div className="gradient-border p-4 sm:p-6 card-hover bg-card">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                                    Full-Stack Software Development
                                </h4>
                                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                                    Building scalable web applications with React.js, ASP.NET Core, and MVC architecture.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-4 sm:p-6 card-hover bg-card">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                                    Interactive Dashboards & UI
                                </h4>
                                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                                    Created real-time dashboards and improved UI using Chart.js, Tailwind CSS, and DataTables.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-4 sm:p-6 card-hover bg-card">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                                    Agile Team Collaboration
                                </h4>
                                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                                    Worked in agile teams, contributing to project planning and smooth development cycles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)};
