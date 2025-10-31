import { GraduationCap, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre Nós
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 space-y-8 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Nossa Origem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Somos um grupo de acadêmicos do <span className="font-semibold text-foreground">Centro Universitário Descomplica Uniamérica</span>, 
                  do curso de <span className="font-semibold text-foreground">Engenharia de Software</span>.
                </p>
                <p className="text-muted-foreground text-sm mt-3 mb-2">
                  Acadêmicos responsáveis pelo projeto:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Jhonatan Oliveira", "Lilian Castanha", "Fabiano da Silva Santos", "Pedro Soares", "Matheus Coutinho", "Marcelo Villalba"].map((name) => (
                    <span key={name} className="px-3 py-1 bg-primary/10 text-foreground rounded-full text-sm font-medium">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Target className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Nosso Propósito</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolvemos o <span className="font-semibold text-foreground">AKSOR</span> com o propósito de 
                  simplificar a validação de presenças em eventos acadêmicos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso sistema substitui processos manuais por tecnologia eficiente, 
                  garantindo <span className="font-semibold text-foreground">rapidez</span>, {" "}
                  <span className="font-semibold text-foreground">precisão</span> e {" "}
                  <span className="font-semibold text-foreground">menos papel</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
