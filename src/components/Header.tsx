import { Download, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="h-6 w-6" />
            <span className="text-xl font-bold">ETL Developer</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Experiência
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Competências
            </button>
            <button 
              onClick={() => scrollToSection('educacao')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Educação
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="h-4 w-4 mr-2" />
              Contactar
            </Button>
            <Button 
              size="sm"
              onClick={() => {
                // Simular download do CV
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'CV_ETL_Developer.pdf';
                link.click();
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;