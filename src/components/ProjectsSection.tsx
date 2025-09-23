import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Full Stack Engineer Freelance",
      description: "Built and deployed a full-stack Django web app for a local bakery with dynamic inventory management using MySQL. The project, which was deployed on DigitalOcean and utilized Nginx for static content delivery, established the bakery's online presence.",
      technologies: ["Django", "Nginx", "Gunicorn", "JavaScript"],
      projectUrl: "https://portuguesetastydesserts.com/",
      githubUrl: null,
      type: "experience"
    },
    {
      id: 2,
      title: "Virtual Data Analytic Intern",
      description: "Analyzed large-scale telemetry data using Tableau and Excel to identify and visualize key operational insights and support business decisions. Developed interactive dashboards with calculated fields to provide clear answers to critical business questions.",
      technologies: ["Tableau", "Excel"],
      type: "experience",
      projectUrl: "https://www.deloitte.com/us/en.html",
      githubUrl: null,
      company: "Deloitte"
    },
    {
      id: 3,
      title: "DraftKings Sports Betting Performance Tracker",
      description: "Designed and implemented a six-microservices architecture using RESTful APIs to analyze and display sports betting data. The system, which included services for web scraping, data analysis, and frontend visualization, was hosted on cloud infrastructure for scalability.",
      technologies: ["Terraform", "MySQL", "Python", "RabbitMQ", "Nginx"],
      projectUrl: "https://example-project-3.com",
      githubUrl: "https://github.com/codingadventurestoday/DraftKings_Data_Analyze",
      type: "project"
    },
    {
      id: 4,
      title: "GoLang Cloud Storage Solution with AWS S3",
      description: "Developed a robust, production-ready file storage system using Amazon S3 for secure, scalable, and durable object storage. This backend solution, secured with presigned URLs and private buckets, can handle large assets like video streams with high performance and resiliency.",
      technologies: ["GoLang", "Amazon S3", "AWS CloudFront"],
      projectUrl: null,
      githubUrl: null,
      type: "project"
    },
    {
      id: 5,
      title: "High-Performance Go Web Server & JSON API",
      description: "Built a production-ready JSON API and HTTP web server from scratch using Go, focusing on core backend development principles for a highly performant and secure application. The project incorporated advanced features such as webhooks for enhanced functionality.",
      technologies: ["GoLang", "PostgreSQL", "JSON", "HTTP"],
      projectUrl: null,
      githubUrl: null,
      type: "project",
    },
        {
      id: 6,
      title: "Apprenticeship Open Role Web Crawler",
      description: "Developed a Python web crawler that uses libraries like BeautifulSoup4 and Selenium to find and return information about software engineering apprenticeship openings from various companies.",
      technologies: ["Python", "Web Scrapping", "Selenium", "Git"],
      projectUrl: "https://company-website.com",
      githubUrl: "https://github.com/codingadventurestoday/Automate_Apprenticeship",
      type: "project",
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-4">
            Projects & Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical projects and professional experience in AI engineering and software development.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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