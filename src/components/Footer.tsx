import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-deep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <img src={logo} alt="CleanIT Servis" className="h-16 w-auto mb-4" />
              <p className="text-white/80 text-sm leading-relaxed">
                20 rokov skúseností v priemyselnom upratovaní.
                Industriálna presnosť pre váš domov.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Rýchle odkazy</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">
                    Priemyselné služby
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">
                    Služby pre domácnosti
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Kontakt</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-white/80">
                  <strong className="text-white">Telefón:</strong> +421 123 456 789
                </li>
                <li className="text-white/80">
                  <strong className="text-white">Email:</strong> info@cleanitservis.sk
                </li>
                <li className="text-white/80">
                  <strong className="text-white">Pôsobnosť:</strong> Celé Slovensko
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} CleanIT Servis. Všetky práva vyhradené.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
