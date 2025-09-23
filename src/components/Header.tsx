import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Jeremy Phillips
            </h1>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <p className="hidden sm:block text-muted-foreground">Software Engineer</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/jeremy-phillips-swe" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              asChild
            >
              <a 
                href="https://github.com/codingadventurestoday/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              asChild
            >
              <a 
                href="mailto:jeremy.phillips.engineering@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 transition-colors rounded-md"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 transition-colors rounded-md"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 transition-colors rounded-md"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 transition-colors rounded-md"
              >
                Contact
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-2 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  size="sm"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/jeremy-phillips-swe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  asChild
                >
                  <a 
                    href="https://github.com/codingadventurestoday/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  asChild
                >
                  <a 
                    href="mailto:jeremy.phillips.engineering@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;