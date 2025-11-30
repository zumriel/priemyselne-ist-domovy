import { Award, Shield, Users, CheckCircle2 } from "lucide-react";

const Expertise = () => {
  const features = [
    {
      icon: Award,
      title: "20 rokov v priemysle",
      description: "Dve dekády výhradne v priemyselnom sektore nám dali bezkonkurenčné skúsenosti.",
    },
    {
      icon: Shield,
      title: "Dôveryhodnosť",
      description: "Naši klienti nám zveria svoje výrobné priestory aj počas prestávok a nočných zmien.",
    },
    {
      icon: Users,
      title: "Expertný tím",
      description: "Vyškolení profesionáli s hlbokým porozumením pre detail a bezpečnosť.",
    },
    {
      icon: CheckCircle2,
      title: "Vysoké štandardy",
      description: "Industriálne kritériá kvality aplikujeme na každý projekt bez výnimky.",
    },
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Záruka kvality založená<br />na dvoch dekádach
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Dvadsať rokov sme sa špecializovali výhradne na priemyselné upratovanie –
            haly, sklady, logistické centrá, výrobné priestory. To nám dalo jedinečnú
            expertízu v oblasti detailu, bezpečnosti a efektivity. Teraz tieto
            priemyselné štandardy prinášame aj do domácností, kancelárií a menších
            priestorov.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
