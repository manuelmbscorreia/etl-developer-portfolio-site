import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Mestrado em Engenharia Informática",
      specialization: "Sistemas de Informação e Data Science",
      institution: "Universidade do Porto",
      location: "Porto, Portugal",
      period: "2019 - 2021",
      description: "Especialização em arquiteturas de dados, machine learning e desenvolvimento de sistemas distribuídos. Dissertação focada em otimização de pipelines ETL para big data.",
      highlights: ["Big Data Analytics", "Machine Learning", "Distributed Systems", "Data Mining"]
    },
    {
      degree: "Licenciatura em Engenharia Informática",
      specialization: "Sistemas de Informação",
      institution: "Instituto Superior de Engenharia do Porto",
      location: "Porto, Portugal", 
      period: "2015 - 2019",
      description: "Formação sólida em programação, bases de dados, algoritmos e estruturas de dados. Projeto final desenvolvido em Python para análise de dados financeiros.",
      highlights: ["Programação", "Bases de Dados", "Algoritmos", "Desenvolvimento Web"]
    }
  ];

  const certifications = [
    {
      name: "Microsoft Certified: Azure Data Engineer Associate",
      issuer: "Microsoft",
      year: "2023",
      credentialId: "AZ-104-2023"
    },
    {
      name: "AWS Certified Data Analytics - Specialty",
      issuer: "Amazon Web Services",
      year: "2022",
      credentialId: "AWS-DAS-2022"
    },
    {
      name: "Snowflake SnowPro Core Certification",
      issuer: "Snowflake",
      year: "2022",
      credentialId: "SNOW-CORE-2022"
    }
  ];

  return (
    <section id="educacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Formação académica e certificações profissionais que fundamentam 
              a minha expertise em engenharia de dados.
            </p>
          </div>

          <div className="space-y-12">
            {/* Academic Education */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Formação Académica
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
                Certificações Profissionais
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