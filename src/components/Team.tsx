import journey1 from "@/assets/journey-1.jpeg";
import journey2 from "@/assets/journey-2.jpeg";
import journey3 from "@/assets/journey-3.jpeg";
import journey4 from "@/assets/journey-4.jpeg";
import journey5 from "@/assets/journey-5.jpeg";
import journey6 from "@/assets/journey-6.jpeg";
import journey7 from "@/assets/journey-7.jpeg";
import journey8 from "@/assets/journey-8.jpeg";
import journey9 from "@/assets/journey-9.jpeg";

const Team = () => {
  const journeyImages = [
    { image: journey1, alt: "Apresentação final do projeto AKSOR" },
    { image: journey2, alt: "Equipe trabalhando no desenvolvimento" },
    { image: journey3, alt: "Demonstração da solução AKSOR" },
    { image: journey4, alt: "Apresentação do projeto" },
    { image: journey5, alt: "Momentos de colaboração da equipe" },
    { image: journey6, alt: "Equipe AKSOR" },
    { image: journey7, alt: "Desenvolvimento e planejamento" },
    { image: journey8, alt: "Demonstração do aplicativo AKSOR" },
    { image: journey9, alt: "Equipe apresentando o projeto" },
  ];

  return (
    <section id="equipe" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Trajetória
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Momentos do desenvolvimento do projeto AKSOR
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {journeyImages.map((item, index) => (
            <div
              key={index}
              className="group animate-fade-in-up overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-primary">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
