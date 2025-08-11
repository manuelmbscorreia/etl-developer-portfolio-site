import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
   {
      degree: "Postgraduate Diploma in Computer Engineering",
      specialization: "Computer Engineering",
      institution: "University of Évora",
      location: "Remote, Portugal",
      period: "2021 - 2024",
      description:
        "The Master's in Computer Engineering at the University of Évora provides advanced training in software development, distributed systems, artificial intelligence, databases, and systems engineering. The program prepares professionals to design, implement, and manage innovative technological solutions.",
      highlights: [
        "Software Development",
        "Artificial Intelligence",
        "Databases",
        "Data Warehousing",
        "Systems Engineering",
        "Python Programming",
        "Data Mining"
      ]
    },
    {
      degree: "Bachelor's Degree in Business",
      specialization: "Finance",
      institution: "Universidade de Évora",
      location: "Évora, Portugal", 
      period: "2018 - 2021",
      description: "Comprehensive training in management, economics, accounting, and finance, with a strong focus on analytical and decision-making skills. Final project involved developing a business strategy for a real-world company.",
      highlights: [
        "Financial Analysis",
        "Strategic Planning",
        "Business Communication",
        "Project Management",
        "Leadership",
        "Problem Solving",
        "Teamwork",
        "Critical Thinking"
      ]
    }
  ];

  const certifications = [
    {
      name: "Learning Path - Cloud",
      issuer: "Aubay",
      year: "2025",
      credentialId: "None"
    },
  ];

  return (
    <section id="educacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic background and professional certifications that underpin my expertise in data engineering.
            </p>
          </div>

          <div className="space-y-12">
            {/* Academic Education */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Academic Background
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-card shadow-subtle">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-foreground">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-primary font-medium mt-1">
                            {edu.specialization}
                          </CardDescription>
                          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <GraduationCap className="h-4 w-4" />
                              {edu.institution}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {edu.period}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <Badge key={highlightIndex} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <Badge className="h-6 w-6 text-primary bg-transparent p-0" />
                Professional Certifications
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-card shadow-subtle hover:shadow-elegant transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {cert.name}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {cert.issuer}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Ano:</span>
                          <span className="font-medium">{cert.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ID:</span>
                          <span className="font-mono text-xs">{cert.credentialId}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;