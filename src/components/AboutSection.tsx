import { Target, Lightbulb, Users, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Focus on data quality and accuracy in ETL processes"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always seeking new technologies and best practices"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Teamwork and clear communication with stakeholders"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Commitment to delivering high-quality solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main text */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am an <span className="text-primary font-semibold">ETL Developer</span> passionate about transforming raw data
                  into valuable assets. With over 3 years of experience, I specialize in building 
                  robust and efficient pipelines that process hundreds of thousands of records daily.
                </p>
                <p>
                  My journey began as a Business Bachelor's student when I quickly discovered my passion for programming
                  while coding a VBA project during an accounting summer internship. 
                  Since then, I have forged a self-taught path with Python, SQL, Linux and even Cloud technologies like GCP.
                </p>
                <p>
                  In my most recent professional experience, I have collaborated with a leading international insurance company, 
                  contributing to the creation, maintenance and optimization of their data processes.
                </p>
                <p>
                  What motivates me is the ability to solve complex problems and see the direct impact 
                  of my work with our client's satisfaction. I believe that well-structured data is the 
                  foundation for the success of any modern organization.
                </p>
              </div>
            </div>
            
            {/* Values and principles */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <Card key={index} className="bg-card shadow-subtle hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Additional statistics */}
          <div className="mt-16 bg-gradient-subtle rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Professional Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500M+</div>
                <div className="text-sm text-muted-foreground">Records Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                <div className="text-sm text-muted-foreground">Pipeline Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Data Sources Integrated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">A++</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;