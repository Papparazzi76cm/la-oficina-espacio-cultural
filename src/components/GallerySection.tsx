import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const GallerySection = () => {
  const galleryImages = [
    { id: 1, src: "/gallery/barra-nueva-la-oficina.png", alt: "Barra del Café-Bar La Oficina" },
    { id: 2, src: "/gallery/barra-tapas-la-oficina.webp", alt: "Barra con una selección de pinchos y bollería" },
    { id: 3, src: "/gallery/cafe-choco.jpg", alt: "Café con chocolate" },
    { id: 4, src: "/gallery/cafe-la-oficina.jpg", alt: "Taza de café con leche y espuma" },
    { id: 5, src: "/gallery/desayunoi-con-tortilla-la-oficina.jpg", alt: "Desayuno completo con pincho de tortilla, café y zumo" },
    { id: 6, src: "/gallery/pincho-tortilla-la-oficina.jpg", alt: "Primer plano de un pincho de tortilla jugoso" },
    { id: 7, src: "/gallery/sandwich-vegetal-la-oficina.jpg", alt: "Sándwich vegetal tostado servido en un plato" },
    { id: 8, src: "/gallery/cafe-para-llevar-la-oficina.jpg", alt: "Cartel promocional de café para llevar" },
    { id: 9, src: "/gallery/fachada-bar-la-oficina.jpg", alt: "Fachada exterior del Café-Bar La Oficina" },    
       
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
          {galleryImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
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
