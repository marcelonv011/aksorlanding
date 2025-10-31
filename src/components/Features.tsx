import { QrCode, Smartphone, Monitor, FileDown, Shield } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const Features = () => {
  const features = [
    {
      icon: QrCode,
      title: "Criação de Evento e QR Code",
      description: "Gere QR Codes únicos para eventos e palestras.",
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Leitura via Celular",
      description: "O aluno escaneia o código e confirma presença em segundos.",
      color: "accent",
    },
    {
      icon: Monitor,
      title: "Painel ao Vivo",
      description: "Organizadores acompanham presenças em tempo real.",
      color: "primary",
    },
    {
      icon: FileDown,
      title: "Exportar Relatórios",
      description: "Baixe relatórios prontos em PDF ou CSV.",
      color: "accent",
    },
    {
      icon: Shield,
      title: "Controle Antifraude",
      description: "Uma presença por aluno, sem duplicidade.",
      color: "primary",
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Funcionalidades
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia moderna para simplificar a gestão de presenças
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-2 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-${feature.color}`} size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
