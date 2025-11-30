import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Meno je povinné" }).max(100),
  email: z.string().trim().email({ message: "Neplatná emailová adresa" }).max(255),
  phone: z.string().trim().min(1, { message: "Telefón je povinný" }).max(20),
  serviceType: z.enum(["industrial", "home"], { message: "Vyberte typ priestoru" }),
  message: z.string().trim().min(10, { message: "Správa musí mať aspoň 10 znakov" }).max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "industrial" as "industrial" | "home",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      contactSchema.parse(formData);

      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Správa bola úspešne odoslaná!", {
        description: "Čoskoro vás budeme kontaktovať.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "industrial",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Nastala chyba pri odosielaní správy. Skúste to prosím znova.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Získajte nadštandardnú čistotu.<br />Kontaktujte nás dnes.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Vyplňte formulár alebo nás kontaktujte priamo. Radi vám pripravíme
              cenovú ponuku na mieru.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border animate-scale-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">Telefón</h3>
                    <a href="tel:+421123456789" className="text-muted-foreground hover:text-primary transition-colors">
                      +421 123 456 789
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">Email</h3>
                    <a href="mailto:info@cleanitservis.sk" className="text-muted-foreground hover:text-primary transition-colors break-all">
                      info@cleanitservis.sk
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">Pôsobnosť</h3>
                    <p className="text-muted-foreground">
                      Celé Slovensko
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border shadow-lg animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Meno *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Vaše meno"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vas@email.sk"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefón *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+421 XXX XXX XXX"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Typ priestoru *</Label>
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as "industrial" | "home" })}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="industrial">Priemyselný priestor</option>
                        <option value="home">Domácnosť (byt/dom)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Správa *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Popíšte vaše požiadavky..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Odosiela sa..." : "Odoslať žiadosť"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
