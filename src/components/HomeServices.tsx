import { Home, Sun, PaintBucket } from "lucide-react";
import homeImage from "@/assets/home-clean.jpg";

const HomeServices = () => {
  const services = [
    {
      icon: Home,
      title: "Komplexné upratovanie bytov a rodinných domov",
      description: "Dôkladné upratovanie všetkých priestorov s industriálnou precíznosťou a pozornosťou k detailom.",
    },
    {
      icon: Sun,
      title: "Sezónne čistenie",
      description: "Umývanie okien, čistenie žalúzií, terás, balkónov a exteriérových priestorov.",
    },
    {
      icon: PaintBucket,
      title: "Upratovanie po rekonštrukcii",
      description: "Odstránenie stavebného prachu, škvŕn od farby a kompletné uvedenie priestorov do prevádzky.",
    },
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Služby pre domácnosti
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Profesionálna úroveň čistoty<br />aj pre váš domov
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Rovnaké štandardy kvality, ktoré vyžadujú priemyselní klienti,
              prinášame aj do bytov a rodinných domov. Diskrétne, spoľahlivo, s plnou zodpovednosťou.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Services List */}
            <div className="space-y-6 order-2 lg:order-1">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 animate-scale-in">
              <img
                src={homeImage}
                alt="Čistý moderný domov - profesionálne upratovanie"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-2">Diskrétnosť</div>
              <p className="text-muted-foreground">Profesionálny prístup s rešpektom k vášmu súkromiu</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl font-bold text-primary mb-2">Spoľahlivosť</div>
              <p className="text-muted-foreground">Vždy na čas, s garantovanou kvalitou služieb</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary mb-2">Detail</div>
              <p className="text-muted-foreground">Precíznosť z priemyslu aj vo vašom domove</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
