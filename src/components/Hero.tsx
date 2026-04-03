import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-background/70" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Vaše cesta ke <span className="block bg-gradient-calm bg-clip-text text-transparent">
              uzdravení a růstu
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">Prostor pro respektující a bezpečný terapeutický vztah</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button variant="hero" size="lg" onClick={() => scrollToSection('contact')} className="text-lg">
              Objednat konzultaci
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('about')} className="text-lg border-primary hover:bg-primary/10">
              Zjistit více
            </Button>
          </div>
        </div>
      </div>
    </section>;
};