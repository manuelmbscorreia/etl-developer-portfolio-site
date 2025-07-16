import { Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior ETL Developer",
      company: "TechData Solutions",
      location: "Lisboa, Portugal",
      period: "2021 - Presente",
      description: [
        "Desenvolvimento de pipelines ETL complexos para processamento de dados de múltiplas fontes",
        "Implementação de soluções de Data Warehousing usando SQL Server e Azure",
        "Otimização de performance de queries SQL, resultando em 40% de redução no tempo de processamento",
        "Liderança técnica de equipe de 4 desenvolvedores ETL"
      ]
    },
    {
      title: "ETL Developer",
      company: "DataFlow Analytics",
      location: "Porto, Portugal", 
      period: "2019 - 2021",
      description: [
        "Criação de processos ETL para integração de sistemas CRM e ERP",
        "Desenvolvimento de scripts Python para automação de tarefas de dados",
        "Implementação de controles de qualidade de dados e monitorização",
        "Migração de dados legados para novas arquitecturas cloud"
      ]
    },
    {
      title: "Junior Data Developer",
      company: "InfoSystems Ltd",
      location: "Coimbra, Portugal",
      period: "2018 - 2019", 
      description: [
        "Desenvolvimento de relatórios e dashboards em Power BI",
        "Criação de stored procedures e funções SQL",
        "Suporte na manutenção de bases de dados PostgreSQL e MySQL",
        "Participação em projetos de Business Intelligence"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Experiência Profissional</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Histórico de sucesso em desenvolvimento ETL e soluções de dados
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