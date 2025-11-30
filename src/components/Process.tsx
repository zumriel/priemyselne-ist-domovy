import { Phone, Eye, FileText, Sparkles } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Kontakt",
      description: "Zavolajte nám alebo vyplňte kontaktný formulár. Opíšte svoje potreby a my vás budeme okamžite kontaktovať.",
    },
    {
      icon: Eye,
      number: "02",
      title: "Obhliadka",
      description: "Osobne si prezrieme priestory a zhodnotíme rozsah práce. Obhliadka je bezplatná a nezáväzná.",
    },
    {
      icon: FileText,
      number: "03",
      title: "Cenová ponuka",
      description: "Pripravíme pre vás transparentnú cenovú ponuku so špecifikáciou služieb a termínov realizácie.",
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Realizácia",
      description: "Vykonáme upratovanie v dohodnutom termíne s maximálnou precíznosťou a profesionalitou.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Upratovanie prispôsobené<br />vášmu času
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Rozumieme, že každý klient má špecifické potreby. Či už potrebujete
              upratovanie počas nočných zmien, cez víkendy, alebo počas pravidelných
              výrobných prestávok – vždy sa dokážeme prispôsobiť vášmu rozvrhu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connecting Line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary/20 -ml-4" />
                )}

                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Flexibility Highlight */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Maximálna flexibilita
              </h3>
              <p className="text-lg text-muted-foreground">
                Pracujeme <strong className="text-primary">24/7</strong> podľa vášho harmonogramu.
                Prispôsobíme sa výrobným zmenám, víkendovým termínom alebo vášmu osobnému rozvrhu
                tak, aby ste mali upratané presne vtedy, keď to potrebujete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
