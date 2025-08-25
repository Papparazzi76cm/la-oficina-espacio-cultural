import { Coffee, MapPin, Clock, Phone, MessageCircle, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open("https://wa.me/34123456789?text=Hola, me gustaría hacer una reserva en Café-Bar La Oficina", "_blank");
  };

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=C/+Vega+21,+Valladolid", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-dancing text-xl font-bold">La Oficina</h3>
                <p className="text-sm opacity-80">Café-Bar</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Tu rincón acogedor en Valladolid para disfrutar de un buen café, 
              tapas y un ambiente único desde 2020.
            </p>
          </div>

          {/* Horarios */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Horarios
            </h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex justify-between">
                <span>Lun - Vie</span>
                <span>8:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados</span>
                <span>9:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos</span>
                <span>9:00 - 15:00</span>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contacto
            </h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>C/ Vega 21, Valladolid</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+34 123 456 789</span>
              </div>
              <button 
                onClick={openWhatsApp}
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold flex items-center gap-2">
              <Star className="w-5 h-5" />
              Enlaces
            </h4>
            <div className="space-y-2 text-sm opacity-90">
              <button 
                onClick={openGoogleMaps}
                className="block hover:text-accent transition-colors"
              >
                Ver en Google Maps
              </button>
              <button 
                onClick={() => window.open("https://www.google.com/search?q=Cafe+Bar+La+Oficina+Valladolid+reviews", "_blank")}
                className="block hover:text-accent transition-colors"
              >
                Reseñas en Google
              </button>
              <button 
                onClick={openWhatsApp}
                className="block hover:text-accent transition-colors"
              >
                Hacer Reserva
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} Café-Bar La Oficina. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm opacity-80">
              <span>Valladolid, España</span>
              <span>•</span>
              <span>Café de calidad desde 2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;