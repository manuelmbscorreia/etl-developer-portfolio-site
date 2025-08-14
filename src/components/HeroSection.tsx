import { Database, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-dark rounded-full flex items-center justify-center shadow-elegant">
                <Database className="h-16 w-16 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            ETL Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialist in <span className="text-primary font-semibold">Extract, Transform and Load</span> with broad experience 
            in communication with clients, following the entire lifecycle of products, Informatica PowerCenter workflow 
            and mapping creation, and engineering solutions with Korn shell and UNIX.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={scrollToContact} className="min-w-[200px]">
              <TrendingUp className="h-5 w-5 mr-2" />
              Let's Talk
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Projects
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card rounded-lg p-6 shadow-subtle">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-subtle">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">ETL Projects</div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-subtle">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;