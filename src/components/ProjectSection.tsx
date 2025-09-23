import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive analytics platform leveraging machine learning algorithms to provide real-time business insights and predictive analytics for enterprise clients.",
      technologies: ["Python", "TensorFlow", "React", "GCP"],
      projectUrl: "https://example-project-1.com",
      githubUrl: "https://github.com/example/project-1",
      type: "project"
    },
    {
      id: 2,
      title: "Intelligent Process Automation System",
      description: "Developed an AI agent system that automates complex business processes, reducing manual work by 75% through natural language processing and workflow optimization.",
      technologies: ["Python", "LangChain", "PostgreSQL", "Docker"],
      projectUrl: "https://example-project-2.com",
      githubUrl: "https://github.com/example/project-2",
      type: "project"
    },
    {
      id: 3,
      title: "Computer Vision Quality Control",
      description: "Built a computer vision system for manufacturing quality control, achieving 99.2% accuracy in defect detection using PyTorch and custom CNN architectures.",
      technologies: ["PyTorch", "OpenCV", "Python", "Kubernetes"],
      projectUrl: "https://example-project-3.com",
      githubUrl: "https://github.com/example/project-3",
      type: "project"
    },
    {
      id: 4,
      title: "Natural Language Processing API",
      description: "Created a scalable NLP API service for sentiment analysis and text classification, processing over 1M requests daily with sub-100ms response times.",
      technologies: ["Python", "FastAPI", "Transformers", "Redis"],
      projectUrl: "https://example-project-4.com",
      githubUrl: "https://github.com/example/project-4",
      type: "project"
    },
    {
      id: 5,
      title: "Software Engineer Intern",
      description: "Contributed to the development of machine learning infrastructure and data pipelines. Implemented automated testing frameworks and optimized model deployment processes, resulting in 40% faster iteration cycles.",
      technologies: ["Python", "Terraform", "Git", "CI/CD"],
      projectUrl: "https://company-website.com",
      githubUrl: null,
      type: "experience",
      company: "Tech Innovation Corp"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-4">
            Projects & Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical projects and professional experience in AI engineering and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-hover transition-all duration-300 border border-border hover:border-primary/20 bg-card hover:bg-card-hover"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge 
                      variant={item.type === 'experience' ? 'default' : 'secondary'}
                      className="mb-2"
                    >
                      {item.type === 'experience' ? 'Experience' : 'Project'}
                    </Badge>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    {item.company && (
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="flex-1"
                  >
                    <a 
                      href={item.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-3 w-3" />
                      {item.type === 'experience' ? 'Company' : 'Live Demo'}
                    </a>
                  </Button>
                  {item.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="flex-1"
                    >
                      <a 
                        href={item.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;