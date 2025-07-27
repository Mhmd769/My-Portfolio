import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return(
     <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl  font-bold text-center mb-12">
                About <span className="text-primary"> Me</span>
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                    
                    <p className="text-muted-foreground">
                        I am a passionate web developer with a keen interest in creating innovative and user-friendly web applications.
                        My journey in tech has been driven by a love for problem-solving and a desire to make technology accessible to everyone.
                    </p> 

                    <p className="text-muted-foreground">
                        With a background in computer science and years of experience in web development, I specialize in building responsive and dynamic websites.
                        I enjoy collaborating with teams to bring ideas to life and continuously strive to improve my skills and knowledge in the ever-evolving tech landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>

                        <a href="Mohammad-Mahdi--resume--.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:text-white transition-colors  duration-300"  >
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">Web Development</h4>
                                <p className="text-muted-foreground">Building responsive and dynamic websites.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold">UI/UX Design</h4>
                                <p className="text-muted-foreground">Designing intutive user interfaces and seamles user experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                  <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">
                                    Leading projects from conception to completion with agile
                                    methodologies.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
)}