import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I will get back to you soon.",
    });
  };

  const handleDownloadCV = () => {
    // Simular download do CV
    toast({
      title: "Download started",
      description: "The CV is being downloaded...",
    });
    fetch("/resume.pdf")
      .then(response => response.blob())
      .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating? Get in touch with me to discuss opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card shadow-subtle">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">manuelmbscorreia@gmail.com</div>
                </div>
                </div>
                
                <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">+351 967 910 307</div>
                </div>
                </div>
                
                <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Lisbon, Portugal</div>
                </div>
                </div>
              </CardContent>
              </Card>
              
              {/* Social Links and CV */}
              <Card className="bg-card shadow-subtle">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Professional Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="https://www.linkedin.com/in/manuel-correia-54b752b3/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href="https://github.com/manuelmbscorreia/" target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                  </a>
                </Button>
                </div>
                
                <Button 
                className="w-full" 
                size="lg"
                onClick={handleDownloadCV}
                >
                <Download className="h-5 w-5 mr-2" />
                Download CV (PDF)
                </Button>
              </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-card shadow-subtle">
              <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                  </label>
                  <Input 
                  placeholder="Your name" 
                  required 
                  className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                  </label>
                  <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required 
                  className="bg-background"
                  />
                </div>
                </div>
                
                <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="Job Opportunity" 
                  required 
                  className="bg-background"
                />
                </div>
                
                <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Describe your project or opportunity..."
                  className="min-h-[120px] bg-background"
                  required
                />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                <Mail className="h-5 w-5 mr-2" />
                Send Message
                </Button>
              </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
