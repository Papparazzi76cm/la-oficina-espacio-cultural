import { Button } from "@/components/ui/button";
import { ArrowDown, Coffee } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden text-white">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/gallery/barra-nueva-la-oficina.png')`,
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />
      {/* Overlay for 60% opacity */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Coffee className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-dancing text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Bienvenido a Café-Bar La Oficina
          </h1>

          {/* Subtitle */}
          <p className="font-playfair text-xl md:text-2xl text-white/90 mb-8 animate-fade-in [animation-delay:0.2s]" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Tu rincón acogedor en Valladolid para disfrutar de un buen café, tapas y un ambiente único.
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:0.4s]">
            <p className="text-lg text-white/80 leading-relaxed" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
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
              className="text-white/70 hover:text-white transition-colors"
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
