import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import appScreen1 from "@/assets/app-screen-1.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";
import appScreen4 from "@/assets/app-screen-4.png";
import appScreen5 from "@/assets/app-screen-5.png";
import appScreen6 from "@/assets/app-screen-6.png";
import { useState } from "react";

const images = [
  { src: appScreen1, alt: "AKSOR - Sistema Inteligente de Presença" },
  { src: appScreen2, alt: "AKSOR - Login" },
  { src: appScreen3, alt: "AKSOR - Eventos" },
  { src: appScreen4, alt: "AKSOR - Criar Evento" },
  { src: appScreen5, alt: "AKSOR - QR Code" },
  { src: appScreen6, alt: "AKSOR - Relatórios" },
];

const AppCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Auto-play
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    // Update current slide
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4">
              <div className="relative flex items-center justify-center p-4">
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full max-w-[280px] md:max-w-[340px] object-cover transition-all duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-background/90 backdrop-blur-md border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg" />
        <CarouselNext className="right-2 bg-background/90 backdrop-blur-md border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg" />
      </Carousel>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${
              current === index
                ? "w-8 bg-accent shadow-lg shadow-accent/50"
                : "w-2 bg-primary/30 hover:bg-primary/60 hover:w-4"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AppCarousel;
