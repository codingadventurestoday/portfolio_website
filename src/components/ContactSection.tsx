import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, 
            and collaboration in AI engineering. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border border-border bg-gradient-subtle shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-xl flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Get In Touch
              </CardTitle>
              <CardDescription>
                Ready to discuss your next project or explore opportunities together?
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-auto p-4 sm:p-6 flex flex-col items-center gap-3 hover:shadow-card transition-all duration-300 hover:border-primary/50"
                  asChild
                >
                  <a href="mailto:jeremy.phillips.engineering@gmail.com">
                    <Mail className="h-6 w-6 text-primary" />
                    <div className="text-center">
                      <p className="font-medium">Email</p>
                      <p className="text-xs sm:text-sm text-muted-foreground break-all">Direct Communication</p>
                    </div>
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-auto p-4 sm:p-6 flex flex-col items-center gap-3 hover:shadow-card transition-all duration-300 hover:border-primary/50"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/jeremy-phillips-swe" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <div className="text-center">
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Professional Network</p>
                    </div>
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-auto p-4 sm:p-6 flex flex-col items-center gap-3 hover:shadow-card transition-all duration-300 hover:border-primary/50"
                  asChild
                >
                  <a href="https://github.com/codingadventurestoday/" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 text-primary" />
                    <div className="text-center">
                      <p className="font-medium">GitHub</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Code Repository</p>
                    </div>
                  </a>
                </Button>
              </div>

              <div className="text-center pt-6 border-t border-border">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow"
                  asChild
                >
                  <a href="mailto:jeremy.phillips.engineering@gmail.com">
                    Start a Conversation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved to{" "}
            <a 
              href="https://github.com/codingadventurestoday/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              codingadventurestoday
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;