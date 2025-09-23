import jeremyHeadshot from "@/assets/jeremy-headshot.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-hero font-bold leading-snug lg:leading-tight">
                Building the Future with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Engineering
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-subheading text-muted-foreground leading-relaxed">
                I'm an AI Engineering student at the University of Colorado Boulder, 
                specializing in developing and deploying intelligent AI agents. My work 
                focuses on creating practical solutions for businesses, driven by a deep 
                understanding of core machine learning principles. I'm actively seeking 
                opportunities to apply my skills in a real-world setting to build 
                innovative and impactful products.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <Card className="p-1 shadow-hover bg-card hover:shadow-glow transition-all duration-300 w-fit mx-auto">
              <div className="relative">
                <img
                  src={jeremyHeadshot}
                  alt="Jeremy Phillips - Software Engineer"
                  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;