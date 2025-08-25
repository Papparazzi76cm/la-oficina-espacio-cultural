import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const GallerySection = () => {
  // Placeholder images - en producción se usarían las imágenes reales del café
  const galleryImages = [
    { id: 1, src: "/api/placeholder/400/300", alt: "Interior acogedor del café", category: "interior" },
    { id: 2, src: "/api/placeholder/400/300", alt: "Barra con productos frescos", category: "barra" },
    { id: 3, src: "/api/placeholder/400/300", alt: "Terraza exterior", category: "terraza" },
    { id: 4, src: "/api/placeholder/400/300", alt: "Café recién hecho", category: "cafe" },
    { id: 5, src: "/api/placeholder/400/300", alt: "Desayuno especial", category: "comida" },
    { id: 6, src: "/api/placeholder/400/300", alt: "Tapas variadas", category: "comida" },
    { id: 7, src: "/api/placeholder/400/300", alt: "Ambiente nocturno", category: "ambiente" },
    { id: 8, src: "/api/placeholder/400/300", alt: "Fachada del local", category: "exterior" }
  ];

  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-5xl font-bold text-primary mb-6">
            Galería
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "Descubre en imágenes el ambiente de La Oficina. Porque una imagen vale más que mil palabras…"
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <Card key={image.id} className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative aspect-square overflow-hidden">
                {/* Placeholder background with icon - en producción se reemplazaría por las imágenes reales */}
                <div className="w-full h-full bg-gradient-to-br from-secondary/60 to-accent/30 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground px-4">{image.alt}</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-accent/10 border-accent/30">
            <div className="p-8">
              <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                ¿Tienes alguna foto especial en La Oficina?
              </h3>
              <p className="text-muted-foreground">
                Nos encanta ver las fotos que nuestros clientes comparten. 
                Etiquétanos en tus redes sociales y podrías aparecer en nuestra galería.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;