import { Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "ETL Informatica PowerCenter Developer",
      company: "Aubay",
      location: "Lisboa, Portugal",
      period: "2022 - Present",
      description: [
        "ETL & Data Engineering for Global Operations: Designed, developed, and optimized ETL processes using Informatica PowerCenter to integrate and transform large datasets efficiently. Ensured compliance with business requirements, continuously updating existing processes to meet evolving needs. Worked with teams across France, China, United Kingdom, Ireland, Switzerland, Spain, etc.",
        "Scripting & Process Automation: Created and maintained Korn Shell scripts to automate tasks, improving workflow efficiency and system performance. Maintained scripts to automate Excel VBA reporting, reducing manual work. And developed SQL queries to automate monthly reports.",
        "Incident Management & Troubleshooting: Led critical incident resolution efforts, quickly identifying root causes and implementing solutions to minimize downtime.",
        "Documentation & Knowledge Sharing: Developed comprehensive documentation for ETL processes, enabling efficient knowledge transfer and future system maintenance.",
        "Cloud & On-Premises Data Transfers: Managed and optimized server connections across multiple machines, ensuring minimal incidents in data transfer. Using technologies like UDM with AWS and Azure.",
        "Quality Assurance & Testing: Conducted rigorous testing to identify and resolve potential bugs before deployment. Colaborated with external teams to define testing requirements and deliver error-free solutions.",
        "Monitoring of Informatica PowerCenter Processes: Regularly monitored Informatica PowerCenter ETL processes to ensure smooth data flow, identifying potential bottlenecks, optimizing performance, and ensuring data quality across multiple platforms.",
        "Testing of ETL Applications: Participated in the end-to-end testing of ETL applications to ensure data transformation processes were functioning as expected.",
        "Training and Skill Enhancement: Completed around 300 hours of targeted training to deepen expertise in key technologies such as Informatica PowerCenter, UNIX, and scripting, as well as enhancing problem-solving skills and gaining a broader understanding of data integration best practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track record of success in ETL development and data solutions
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card shadow-subtle hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;