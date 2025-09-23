import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Cloud, GitBranch } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      school: "University of Colorado Boulder",
      degree: "M.S., Artificial Intelligence",
      period: "Expected Graduation: December, 2026",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Advanced coursework in machine learning, deep learning, natural language processing, and AI system design."
    },
    {
      school: "Springfield College",
      degree: "B.S., Applied Exercise Science",
      period: "Graduated",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Concentration in Strength and Conditioning with minors in Nutrition and Athletic Coaching."
    }
  ];

  const technologies = [
    {
      category: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "Go"]
    },
    {
      category: "Machine Learning & Data Science",
      icon: <Code className="h-5 w-5" />,
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Google Cloud Platform (GCP)", "Terraform", "LangChain", "LangGraph"]
    },
    {
      category: "Version Control & Development",
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["Git", "GitHub"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading font-bold mb-4">
            Education & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic foundation and technical expertise in AI engineering and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-subheading font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="border border-border hover:shadow-card transition-all duration-300 bg-card">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{edu.school}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary mt-1">
                        {edu.degree}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies */}
          <div className="space-y-6">
            <h3 className="text-subheading font-semibold mb-6 flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Technologies
            </h3>
            
            {technologies.map((category, index) => (
              <Card key={index} className="border border-border hover:shadow-card transition-all duration-300 bg-card">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <div className="text-primary">
                      {category.icon}
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-secondary hover:bg-secondary-hover text-secondary-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;