import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Zpráva přijata",
      description: "Děkuji za vaši zprávu. Ozvu se vám do 24 hodin."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Začněte svou cestu
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ozvěte se ještě dnes a objednejte si svou první konzultaci
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-in">
              <Card className="p-6 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Vaše jméno" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} required className="bg-background" />
                  </div>
                  <div>
                    <Input type="email" placeholder="E-mailová adresa" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} required className="bg-background" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Telefonní číslo (volitelné)" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} className="bg-background" />
                  </div>
                  <div>
                    <Textarea placeholder="Řekněte mi trochu o tom, co vás sem přivádí..." value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} required rows={5} className="bg-background" />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Odeslat zprávu
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in">
              <Card className="p-6 shadow-card hover:shadow-gentle transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+420 776 347 655</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-gentle transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground">hana.komarkova@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-gentle transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Adresa</h3>
                    <p className="text-muted-foreground">Masarykovo náměstí 15
Jihlava, 586 01<br />San Francisco, CA 94102</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-gentle transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Ordinační hodiny</h3>
                    <p className="text-muted-foreground">Pondělí - Pátek: 9:00 - 17:00
Sobota: Zavřeno
Neděle: Zavřeno<br />
                      Sobota: 10:00 - 14:00<br />
                      Neděle: Zavřeno
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};