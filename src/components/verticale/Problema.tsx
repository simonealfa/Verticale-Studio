import { AlertCircle, Layers, Compass } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  { icon: Layers, title: "Contenuti senza coerenza", text: "Post belli ma scollegati: ogni uscita parla un linguaggio diverso e l'identità si perde." },
  { icon: Compass, title: "Social senza strategia", text: "Si pubblica per non sparire, non per costruire posizionamento e relazioni reali con il pubblico." },
  { icon: AlertCircle, title: "Siti e adv che non vendono", text: "Pagine confuse e campagne improvvisate che non spiegano davvero il valore del brand." },
];

export default function Problema() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-v">
        <Reveal>
          <span className="eyebrow">Context</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-5 max-w-4xl leading-[1.02] tracking-tight">
            Il problema non è essere online.
            <br />
            <span className="text-muted-foreground font-light">È esserci senza una direzione.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            Oggi tutti pubblicano. Pochi costruiscono un'identità riconoscibile. Senza strategia,
            i contenuti diventano rumore: belli magari, ma scollegati da obiettivi, posizionamento e vendite.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group h-full p-7 bg-card border border-border hover:border-accent transition-all duration-300 relative">
                <span className="absolute left-0 top-7 bottom-7 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <div className="w-11 h-11 border border-border flex items-center justify-center mb-5 group-hover:border-accent group-hover:text-accent transition-colors">
                  <c.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
