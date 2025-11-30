import { Factory, Warehouse, Sparkles, Wrench } from "lucide-react";
import industrialImage from "@/assets/industrial-equipment.jpg";

const IndustrialServices = () => {
  const services = [
    {
      icon: Factory,
      title: "Upratovanie hál a výrobných priestorov",
      description: "Komplexné čistenie výrobných liniek, strojov a podláh v priemyselných halách.",
    },
    {
      icon: Warehouse,
      title: "Upratovanie skladov a logistických centier",
      description: "Udržiavanie čistoty vysokoregálových skladov, expedičných priestorov a rampy.",
    },
    {
      icon: Sparkles,
      title: "Strojné čistenie podláh",
      description: "Profesionálne strojné čistenie betónových, epoxidových a priemyselných podláh.",
    },
    {
      icon: Wrench,
      title: "Hĺbkové čistenie po odstávkach",
      description: "Generálne upratovanie po rekonštrukciách, odstávkach alebo modernizácii prevádzky.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Naša špecializácia
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Priemyselná čistota
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              20 rokov skúseností v najnáročnejších priemyselných podmienkach.
              Spoľahlivosť, precíznosť a flexibilita sú naším štandardom.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="animate-scale-in">
              <img
                src={industrialImage}
                alt="Priemyselné čistiace zariadenie v sklade"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
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
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/20 animate-fade-in">
            <p className="text-center text-lg text-foreground">
              <strong className="text-primary">Priemyselné upratovanie je naša hlavná špecializácia.</strong>
              <br />
              Pracujeme s významnými priemyselnými podnikmi, logistickými centrami
              a výrobnými halami po celom Slovensku.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialServices;
