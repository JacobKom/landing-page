import { Card } from "@/components/ui/card";
import { Brain, Users, Sparkles, Shield, Heart, AlertCircle, Star, TrendingUp, Smartphone, MoreHorizontal } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Krizové události v životě",
    description: "Podpora v náročných životních situacích a během krizových momentů.",
  },
  {
    icon: Sparkles,
    title: "Adaptace na změny",
    description: "Pomoc při zvládání změn a náročných období v životě.",
  },
  {
    icon: Users,
    title: "Doprovázení pečujících osob",
    description: "Podpora pro pečující osoby v náročné situaci dlouhodobé péče o blízké.",
  },
  {
    icon: Shield,
    title: "Vztahy a komunikace",
    description: "Práce s vztahovými problémy a obtížnou komunikací.",
  },
  {
    icon: Heart,
    title: "Úzkosti, stres, napětí",
    description: "Pomoc při zvládání úzkostných stavů, stresu a vnitřního napětí.",
  },
  {
    icon: AlertCircle,
    title: "Šikana nebo vyloučení",
    description: "Podpora při řešení situací spojených se šikanou nebo sociálním vyloučením.",
  },
  {
    icon: Star,
    title: "Nízké sebevědomí a sebehodnota",
    description: "Práce na posílení sebevědomí a zdravého vnímání vlastní hodnoty.",
  },
  {
    icon: TrendingUp,
    title: "Seberozvoj",
    description: "Podpora osobního růstu a rozvoje vašeho potenciálu.",
  },
  {
    icon: Smartphone,
    title: "Poradenství v oblasti nelátkových závislostí",
    description: "Pomoc s digitálními závislostmi, hraním, sociálními sítěmi a dalšími.",
  },
  {
    icon: MoreHorizontal,
    title: "A další",
    description: "Nabízím podporu i v dalších oblastech podle vašich individuálních potřeb.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              S čím pracuji
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Témata, kterým se nejčastěji věnuji v terapeutické práci
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 shadow-card hover:shadow-gentle transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="p-4 bg-gradient-calm rounded-xl">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
