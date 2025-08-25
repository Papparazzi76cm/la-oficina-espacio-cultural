import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Star, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const openWhatsApp = () => {
    // En producción se usaría el número real del café
    window.open("https://wa.me/34123456789?text=Hola, me gustaría hacer una reserva en Café-Bar La Oficina", "_blank");
  };

  const openGoogleReviews = () => {
    // En producción se usaría el enlace real a las reseñas de Google
    window.open("https://www.google.com/search?q=Cafe+Bar+La+Oficina+Valladolid+reviews", "_blank");
  };

  const callPhone = () => {
    window.location.href = "tel:+34983840380";
  };

  return (
    <section id="contacto" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-5xl font-bold text-primary mb-6">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer una reserva? ¡Estamos aquí para ayudarte!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="space-y-6">
            <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-primary flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  Dirección
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium mb-2">C/ Vega 21</p>
                <p className="text-foreground font-medium mb-4">47004 Valladolid</p>
                <p className="text-muted-foreground text-sm">
                  En pleno centro de Valladolid, junto a la Plaza España y zonas comerciales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-primary flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  onClick={callPhone}
                  className="w-full justify-start"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +34 123 456 789
                </Button>
                <p className="text-muted-foreground text-sm mt-2">
                  Llámanos para reservas o cualquier consulta
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-primary flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Escribir por WhatsApp
                </Button>
                <p className="text-muted-foreground text-sm mt-2">
                  Respuesta rápida para reservas y consultas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Reseñas y CTA */}
          <div className="space-y-6">
            <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-primary flex items-center gap-3">
                  <Star className="w-5 h-5" />
                  Tu Opinión Nos Importa
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  ¿Has visitado La Oficina? Nos encantaría conocer tu experiencia. 
                  Tu opinión nos ayuda a mejorar cada día.
                </p>
                <Button 
                  variant="outline" 
                  onClick={openGoogleReviews}
                  className="w-full"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Déjanos tu reseña en Google
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/30 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-primary text-center">
                  ¿Listo para Visitarnos?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-foreground">
                  Te esperamos en C/ Vega 21 para disfrutar juntos de un ambiente único, 
                  café de calidad y las mejores tapas de Valladolid.
                </p>
                <Button 
                  size="lg"
                  onClick={openWhatsApp}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                >
                  👉 Reserva tu mesa ahora
                </Button>
                <p className="text-sm text-muted-foreground">
                  O simplemente ven cuando quieras, ¡siempre hay sitio para ti!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
