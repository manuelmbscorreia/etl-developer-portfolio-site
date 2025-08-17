import { Database, Code, Handshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL", "Korn Shell", "VBA"]
    },
    {
      title: "Software",
      icon: Database,
      skills: ["Excel", "Informatica PowerCenter", "UNIX", "Putty", "WinSCP", "Oracle SQL Developer", "Citrix", "ServiceNow", "UDM (with Azure and AWS)", "Outlook"]
    },
    {
      title: "Other Skills",
      icon: Handshake,
      skills: ["Communication in English (A1)", "Worldwide Context", "Cross-Team Collaboration", "Agile Methodology"]
    }
  ];

  const proficiencyLevels = [
    { name: "Python", level: 50 },
    { name: "SQL", level: 60 },
    { name: "Informatica PowerCenter", level: 80 },
    { name: "UNIX", level: 70 },
    { name: "Excel", level: 85 },
    { name: "Korn Shell Scripting", level: 75 }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Technical Competencies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I master to create robust ETL solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card shadow-subtle hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 shadow-subtle">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Proficiency Level</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proficiencyLevels.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;