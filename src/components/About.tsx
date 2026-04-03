import { Card } from "@/components/ui/card";
import portraitImage from "@/assets/psychologist-portrait.jpg";
import { Award, GraduationCap, Heart } from "lucide-react";
export const About = () => {
  return <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">O mně</h2>
            <p className="text-xl text-muted-foreground">
              Terapeutka a speciální pedagožka
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img src={portraitImage} alt="Dr. Sarah Mitchell - Clinical Psychologist" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-foreground leading-relaxed">
                Mám vystudovaný obor speciální pedagogiky na Masarykově univerzitě, součástí mého tohoto vysokoškolského vzdělání byla i státní zkouška z psychologie. V současnosti jsem frekventantkou 5. ročníku integrativního výcviku „Life Dynamic" (Elio z.s.).
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Absolvovala jsem Komplexní výcvik v krizové intervenci (pro dospělé, děti a mládež), Motivační rozhovory (I+II), Úzkostí a stresem u dětí, Možnosti intervence v dětské skupině zasažené úmrtím blízkého (Vigvam), Základní výcvik v krizové intervenci (Remedium), Krize a sebevražedné jednání (Diecézní charita), Recovery, Cesta hrdiny.
              </p>

              <div className="grid gap-4 pt-6">
                <Card className="p-6 shadow-card hover:shadow-gentle transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">Vzdělání</h3>
                      <p className="text-muted-foreground">Mgr. v oboru speciální pedagogiky na Masarykově univerzitě, kde součástí byla i státní zkouška z psychologie </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-card hover:shadow-gentle transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">Pracovní zkušenosti</h3>
                      <p className="text-muted-foreground">
                        Lektorka programů prevence, sociální pracovník u lidí s duševním onemocněním a sluchovým postižením, pedagog ve speciálním školství, terapeutka v adiktologické ambulanci
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-card hover:shadow-gentle transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">Etika</h3>
                      <p className="text-muted-foreground">Ve své práci se řídím Etickým kodexem České asociace pro psychoterapii (ČAP)</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};