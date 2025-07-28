import { ArrowUp} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full  border-t border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Copyright and Back to Top - Center */}
          <div className="flex items-center gap-4 order-last md:order-none">
            <p className="text-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} Mhmd.Mahdi. All rights reserved.
            </p>
            <a
              href="#hero"
              className="group text-primary hover:text-primary/80 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};