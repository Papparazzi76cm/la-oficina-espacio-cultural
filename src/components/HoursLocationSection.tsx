import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, ExternalLink } from "lucide-react";

const HoursLocationSection = () => {
  const schedule = [
    { day: "Lunes a Viernes", hours: "8:00 – 23:00", isToday: false },
    { day: "Sábados", hours: "9:00 – 00:00", isToday: false },
    { day: "Domingos", hours: "9:00 – 15:00", isToday: false }
  ];

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=C/+Vega+21,+Valladolid", "_blank");
  };

  return (
    <section id="horarios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-5xl font-bold text-primary mb-6">
            Horarios y Ubicación
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Horarios */}
          <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-primary flex items-center gap-3">
                <Clock className="w-6 h-6" />
                Horarios de Apertura
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${
                  item.isToday ? 'bg-accent/20 border border-accent/30' : 'bg-muted/30'
                }`}>
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className={`font-semibold ${
                    item.isToday ? 'text-accent-foreground' : 'text-primary'
                  }`}>
                    {item.hours}
                  </span>
                </div>
              ))}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-primary font-medium text-center">
                  ¡Te esperamos todos los días para disfrutar juntos!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ubicación */}
          <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-primary flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Nuestra Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                  Café-Bar La Oficina
                </h3>
                <p className="text-lg text-foreground font-medium mb-1">
                  C/ Vega 21
                </p>
                <p className="text-lg text-foreground font-medium mb-4">
                  47003 Valladolid
                </p>
                <p className="text-muted-foreground mb-6">
                  En pleno centro de Valladolid, fácil acceso y ambiente acogedor.
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={openGoogleMaps}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver en Google Maps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                
                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Transporte público cercano • Zona peatonal • Ambiente tranquilo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HoursLocationSection;