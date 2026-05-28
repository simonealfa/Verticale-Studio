import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Analisi del brand e del mercato", text: "Capiamo chi sei, dove sei, contro chi compete il tuo brand e cosa il tuo pubblico cerca davvero." },
  { n: "02", title: "Posizionamento e messaggio chiave", text: "Definiamo il punto di vista del brand: cosa promettere, come dirlo, in che modo distinguerti." },
  { n: "03", title: "Direzione creativa e piano contenuti", text: "Costruiamo un linguaggio visivo e una piattaforma editoriale coerente su tutti i canali." },
  { n: "04", title: "Produzione foto, video, copy e sito", text: "Shooting, riprese, montaggi, grafiche, testi e pagine web realizzati in modo professionale." },
  { n: "05", title: "Pubblicazione, advertising e ottimizzazione", text: "Distribuiamo contenuti, lanciamo campagne ADV e miglioriamo i risultati dato dopo dato." },
];

export default function Metodo() {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container-v">
        <Reveal>
          <span className="eyebrow">Method</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-5">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight">
              Il Metodo <span className="text-accent">Verticale</span>
            </h2>
            <p className="text-background/60 max-w-md text-lg font-light">
              Un sistema semplice: capire, posizionare, creare, distribuire, migliorare.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 border-t border-l border-background/15">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="h-full border-r border-b border-background/15 p-7 hover:bg-background/[0.03] transition-colors min-h-[260px] flex flex-col group">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-4xl font-bold text-accent">{s.n}</span>
                  <span className="w-8 h-px bg-background/30 group-hover:bg-accent transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold leading-tight mb-3">{s.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed mt-auto font-light">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
