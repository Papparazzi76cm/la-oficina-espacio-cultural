import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    // En producción se usaría el número real del café
    window.open("https://wa.me/34123456789?text=Hola, me gustaría hacer una consulta sobre Café-Bar La Oficina", "_blank");
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      size="icon"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default WhatsAppButton;