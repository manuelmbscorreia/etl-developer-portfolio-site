import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Monitoring of ETL Applications",
      description: "Keeping a constant engagement with clients to respond to business needs. Communication is the key, technical abilties come in second, despite being fundamental to understand how each project work.",
      technologies: ["TWS", "Excel VBA", "English (B2)", "Outlook", "SQL"]
    },
    {
      title: "Development of ETL Processes",
      description: "Discussion of specifications, communicating the technology's limits, developing with precision and testing with rigor.",
      technologies: ["Informatica PowerCenter", "UNIX", "Korn Shell", "Oracle SQL Developer"]
    },
    {
      title: "Creation of UDM and sFTP Transfers",
      description: "A bridge between OPS Team and the Business, organization and request of transfer settings, information and requirements to allow feasible movement of files between different machines.",
      technologies: ["UDM"]
    },
    {
      title: "Incident Management",
      description: "Swift action to solve process errors in Production. Clear and goal-oriented communication is essential as the expertise in the context of the team's technical needs.",
      technologies: ["TWS", "Excel VBA", "English (B2)", "Outlook", "Excel", "SQL", "Oracle SQL Developer", "Informatica PowerCenter", "Korn Shell", "UNIX"]
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
              Some of the most significant roles I've practiced, demonstrating expertise in ETL Development, 
              Support Engineering and Incident Resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card shadow-subtle hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
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

export default ProjectsSection;