import { Button } from "@/components/ui/button";
import { ArrowDown, Coffee } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Coffee className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-dancing text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
            Bienvenido a Café-Bar La Oficina
          </h1>

          {/* Subtitle */}
          <p className="font-playfair text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
            Tu rincón acogedor en Valladolid para disfrutar de un buen café, tapas y un ambiente único.
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:0.4s]">
            <p className="text-lg text-foreground leading-relaxed">
              En pleno corazón de Valladolid, en C/ Vega 21, te espera un espacio pensado para desconectar, 
              reunirte con amigos o disfrutar de un café de calidad. Ven a descubrir nuestra carta de cafés, 
              desayunos, tapas y copas en un ambiente cálido y cercano.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in [animation-delay:0.6s]">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('carta')}
            >
              👉 Ver nuestra carta
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;