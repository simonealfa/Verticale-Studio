import { Reveal } from "./Reveal";

const stats = [
  { v: "+50", l: "progetti seguiti" },
  { v: "100%", l: "contenuti per social, siti e campagne" },
  { v: "1:1", l: "strategie su misura per attività e aziende" },
];

const testi = [
  { name: "Marco R.", role: "Ristoratore", text: "Hanno trasformato il nostro Instagram in uno strumento che porta davvero gente al locale. Direzione chiara, numeri reali." },
  { name: "Giulia P.", role: "Founder beauty brand", text: "Finalmente un'agenzia che parte dalla strategia. I contenuti hanno un senso, non sono più solo post belli." },
  { name: "Andrea M.", role: "Immobiliare", text: "Sito nuovo, video di presentazione e campagne ADV. In tre mesi i contatti qualificati sono raddoppiati." },
];

export default function Numeri() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-v">
        <div className="grid md:grid-cols-3 border-t border-l border-border">
          {stats.map((s) => (
            <Reveal key={s.v}>
              <div className="bg-background p-8 md:p-10 h-full border-r border-b border-border relative">
                <span className="absolute top-0 left-0 w-12 h-[3px] bg-accent" />
                <div className="font-display text-5xl md:text-6xl font-bold tracking-tight">{s.v}</div>
                <div className="text-muted-foreground mt-2 font-light">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <span className="eyebrow mt-20 block">Voices</span>
          <h3 className="font-display text-3xl md:text-5xl font-bold mt-5 max-w-3xl tracking-tight leading-[1.05]">
            Cosa dicono i brand con cui lavoriamo
          </h3>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {testi.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="h-full p-7 bg-card border border-border relative">
                <span className="absolute left-0 top-7 bottom-7 w-[3px] bg-accent" />
                <p className="text-foreground/90 leading-relaxed font-light">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground font-light">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
