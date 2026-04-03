import { Card } from "@/components/ui/card";
import therapySpaceImage from "@/assets/therapy-space.jpg";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Individuální terapie pro dospělé a dospívající od 16 let",
  "Délka sezení: 50 minut",
  "Cena: 800 Kč",
  "Forma: osobně (v případě potřeby i online)",
  "Platba: hotově nebo převodem (možnost QR kódu)",
  "Změna termínu: nejpozději 24 hodin předem",
];

export const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Co charakterizuje moji práci
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bezpečný prostor pro autentické setkání
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-foreground leading-relaxed">
                V terapeutické práci věřím v sílu bezpečného a respektujícího vztahu. Nabízím prostor, kde není třeba se přetvařovat, kde není potřeba výkon, kde můžeš být takový/á, jaký/á jsi právě teď.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                Nesoudím, nenabízím rychlá řešení, ale naslouchám. Sdílím své postřehy a zkušenosti, ale především hledám spolu s klientem jeho vlastní cestu – takovou, která vychází z jeho potřeb, tempa a hodnot.
              </p>

              <Card className="p-6 shadow-card bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Jak pracuji
                </h3>
                <ul className="space-y-3">
                  {principles.map((principle, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{principle}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={therapySpaceImage} 
                  alt="Peaceful therapy office with comfortable seating and natural light"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
