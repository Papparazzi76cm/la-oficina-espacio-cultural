import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Coffee, Star } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Ambiente Acogedor",
      description: "Un espacio cálido y familiar donde te sentirás como en casa"
    },
    {
      icon: Users,
      title: "Punto de Encuentro",
      description: "El lugar perfecto para reunirse con amigos y conocer gente nueva"
    },
    {
      icon: Coffee,
      title: "Café de Calidad",
      description: "Le ponemos mucho cuidado y cariño al producto, para ofrecerte el café perfecto"
    },
    {
      icon: Star,
      title: "Experiencia Única",
      description: "Cada visita es especial gracias a nuestro trato cercano y personalizado"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-5xl font-bold text-primary mb-6">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-16">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              En La Oficina creemos que un bar no es solo un lugar para tomar algo, sino un punto de encuentro. 
              Nuestra decoración, ambiente y trato cercano hacen que cada visita sea especial.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Con un estilo que combina tradición y modernidad, ofrecemos una experiencia donde el café, 
              las tapas y las buenas conversaciones van de la mano.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
