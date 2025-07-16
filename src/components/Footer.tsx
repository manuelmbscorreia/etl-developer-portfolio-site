import { Database, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-lg">ETL Developer</div>
                <div className="text-primary-foreground/70 text-sm">Soluções de Dados Profissionais</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <span>Desenvolvido com</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>em Portugal</span>
            </div>
            
            <div className="text-sm text-primary-foreground/70">
              © 2024 ETL Developer. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;