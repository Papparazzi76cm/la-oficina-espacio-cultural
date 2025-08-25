import { useState } from "react";
import { Menu, X, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLaOficina from "@/assets/logo-bar-la-oficina.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoLaOficina} 
              alt="Café-Bar La Oficina Logo" 
              className="h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('carta')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Nuestra Carta
            </button>
            <button 
              onClick={() => scrollToSection('horarios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Horarios
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>C/ Vega 21, Valladolid</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('sobre-nosotros')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted"
              >
                Sobre Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('carta')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted"
              >
                Nuestra Carta
              </button>
              <button 
                onClick={() => scrollToSection('horarios')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted"
              >
                Horarios
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
