import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Priemyselné upratovanie - čisté logistické centrum"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/90 via-primary/85 to-trust/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="CleanIT Servis Logo" 
              className="h-24 md:h-32 w-auto animate-scale-in"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight animate-slide-up">
            20 Rokov Skúseností.<br />
            Industriálna Presnosť<br />
            pre Váš Domov.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Dve dekády v priemyselnom upratovaní nám dávajú jedinečné know-how.
            Túto úroveň presnosti, detailu a profesionality prinášame aj do vašej domácnosti.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="cta"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 h-auto"
            >
              Vyžiadať si cenovú ponuku
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-primary"
            >
              Naše služby
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-white/90">Rokov skúseností</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90">Spokojnosť klientov</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/90">Flexibilný servis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
