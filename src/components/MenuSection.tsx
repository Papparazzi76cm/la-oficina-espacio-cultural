import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Coffee, Utensils, Wine } from "lucide-react";

const MenuSection = () => {
  const breakfastMenu = [
    { name: "El Andaluz", description: "Tosta de tomate y aceite (Con o sin ajo)", price: "3.40€" },
    { name: "Ibérico", description: "Tosta de jamón, tomate y aceite", price: "3.70€" },
    { name: "Español", description: "Pincho de tortilla", price: "3.20€" },
    { name: "Español Rellena", description: "Pincho de tortilla rellena", price: "3.50€" },
    { name: "Ligh", description: "Tosta con pavo, Philadelphia y guacamole", price: "3.70€" },
    { name: "Esquimal", description: "Tosta con salmón ahumado, queso crema y guacamole", price: "4.00€" },
    { name: "Dulce", description: "Tosta con mermelada y mantequilla", price: "3.20€" },
    { name: "Bollería", description: "Croissant, magdalenas, napolitanas", price: "3.00€" },
    { name: "Parisino", description: "Croissant a la plancha con mantequilla y mermelada", price: "3.20€" },
    { name: "La Oficina", description: "Plato de huevos con beicon", price: "4.50€" }
  ];

  const tapasMenu = [
    { name: "Tortilla Casera", description: "Tortilla española tradicional", price: "4.50€" },
    { name: "Croquetas Variadas", description: "Jamón, pollo, bacalao", price: "5.20€" },
    { name: "Ensaladilla Rusa", description: "Con atún y huevo", price: "4.80€" },
    { name: "Tabla de Quesos", description: "Queso curado manchego", price: "6.50€" },
    { name: "Tabla de Embutidos", description: "Jamón, chorizo, lomo", price: "7.00€" },
    { name: "Patatas Bravas", description: "Con salsa brava casera", price: "4.20€" }
  ];

  const drinksMenu = [
    { name: "Café Solo", description: "Espresso intenso", price: "1.20€" },
    { name: "Café con Leche", description: "Con leche vaporizada", price: "1.50€" },
    { name: "Capuccino", description: "Con espuma de leche", price: "1.80€" },
    { name: "Cerveza Nacional", description: "Mahou, Estrella Galicia", price: "2.20€" },
    { name: "Vino Ribera del Duero", description: "Copa de tinto", price: "3.50€" },
    { name: "Gin-Tonic Premium", description: "Con ginebras premium", price: "7.50€" }
  ];

  return (
    <section id="carta" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-5xl font-bold text-primary mb-6">
            Nuestra Carta
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de cafés, desayunos, tapas y bebidas. 
            Todos nuestros productos están elaborados con ingredientes frescos y de calidad.
          </p>
        </div>

        <Tabs defaultValue="desayunos" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="desayunos" className="flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              Cafés y Desayunos
            </TabsTrigger>
            <TabsTrigger value="tapas" className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              Tapas y Raciones
            </TabsTrigger>
            <TabsTrigger value="bebidas" className="flex items-center gap-2">
              <Wine className="w-4 h-4" />
              Bebidas y Copas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="desayunos">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-primary flex items-center gap-2">
                  <Coffee className="w-6 h-6" />
                  Desayunos Café-Bar La Oficina
                </CardTitle>
                <p className="text-muted-foreground">
                  Todos los desayunos incluyen café, té o colacao y zumo.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {breakfastMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge className="ml-4 text-accent-foreground bg-accent">
                        {item.price}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tapas">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-primary flex items-center gap-2">
                  <Utensils className="w-6 h-6" />
                  Tapas y Raciones
                </CardTitle>
                <p className="text-muted-foreground">
                  Sabores tradicionales con un toque moderno.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tapasMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge className="ml-4 text-accent-foreground bg-accent">
                        {item.price}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bebidas">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-primary flex items-center gap-2">
                  <Wine className="w-6 h-6" />
                  Bebidas y Copas
                </CardTitle>
                <p className="text-muted-foreground">
                  Desde el mejor café hasta cócteles premium.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {drinksMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-start p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge className="ml-4 text-accent-foreground bg-accent">
                        {item.price}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
