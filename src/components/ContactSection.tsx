import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out! I'll get back to you soon."
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative bg-primary/5"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? Feel free to reach out!
            I'm always open to discussing new opportunities, collaborations,
            or just having a chat about tech.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-sm sm:text-base mb-1">Email</h4>
                  <a
                    href="mailto:mhmdmahdi058@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base break-all"
                  >
                    mhmdmahdi058@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-sm sm:text-base mb-1">Phone</h4>
                  <a
                    href="tel:+96176931179"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    +961 76 931 179
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-sm sm:text-base mb-1">Location</h4>
                  <span className="text-foreground/70 text-sm sm:text-base">
                    Beirut, Lebanon
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 sm:pt-8">
              <h4 className="font-medium mb-4 text-sm sm:text-base">Connect With Me</h4>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://linkedin.com/in/mhmdmahdi20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                >
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/Mhmd769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors group"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm border border-border"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send a Message</h3>

            <div className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base transition-colors"
                  placeholder="Mohammad Mahdi......"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base transition-colors"
                  placeholder="hello@gmail.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base transition-colors"
                  placeholder="Hello, I would like to discuss..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 text-sm sm:text-base py-2.5 sm:py-3",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
