import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AppCarousel from "@/components/AppCarousel";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Transforme filas em cliques com o{" "}
              <span className="text-accent">AKSOR</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Elimine o papel, as filas e a burocracia. Valide presenças com QR Code e relatórios automáticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("sobre")}
                className="bg-accent hover:bg-accent-dark text-lg px-8 py-6 group"
              >
                Saiba Mais
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-up">
            <AppCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
