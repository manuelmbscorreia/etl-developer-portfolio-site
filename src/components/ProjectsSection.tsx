import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Data Pipeline Automation",
      description: "Automated ETL pipeline for processing real-time sales data, integrating multiple data sources and providing insights through interactive dashboards.",
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "Power BI"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Data Warehouse Migration",
      description: "Complete migration of legacy data warehouse to modern cloud architecture, improving performance by 300% and reducing operational costs.",
      technologies: ["SQL Server", "Azure", "Snowflake", "Python", "Terraform"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Real-time Analytics Platform",
      description: "Real-time analytics platform for e-commerce, processing millions of daily events and providing instant insights for business decisions.",
      technologies: ["Apache Kafka", "Spark", "Elasticsearch", "Kibana", "Python"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Main Responsibilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Some of the most significant roles I've practiced, demonstrating expertise in ETL, 
              Support Engineering and Incident Resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card shadow-subtle hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
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

export default ProjectsSection;