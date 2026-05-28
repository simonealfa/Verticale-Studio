import { Reveal } from "./Reveal";

const points = [
  "Direzione creativa prima della produzione",
  "Contenuti pensati per il pubblico reale",
  "Formati ottimizzati per Instagram, TikTok, sito e adv",
  "Analisi e miglioramento continuo",
];

export default function Differenziante() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 bottom-0 left-[8%] w-px bg-background/10" />
      <div className="absolute top-0 bottom-0 right-[8%] w-px bg-accent/40" />

      <div className="container-v grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative">
        <Reveal>
          <span className="eyebrow">Difference</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-5 leading-[1.02] tracking-tight">
            Non creiamo solo contenuti.
            <br />
            Costruiamo <span className="text-accent">direzione</span>.
          </h2>
          <p className="mt-6 text-lg text-background/70 leading-relaxed font-light">
            Ogni contenuto deve avere un ruolo: attrarre, spiegare, creare fiducia o convertire.
            Per questo partiamo dalla strategia e trasformiamo il posizionamento del brand in
            contenuti, pagine e campagne coerenti tra loro.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-2 w-3 h-[2px] bg-accent shrink-0" />
                <span className="text-background/90 font-light">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative h-[520px]">
            <div className="absolute top-0 left-0 w-[48%] aspect-[9/16] bg-background/[0.06] border border-background/15 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
              <div className="absolute top-4 left-5 text-[10px] uppercase tracking-[0.2em] text-background/60 font-semibold">Reel · brand format</div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="h-2 bg-background/30 w-2/3 mb-2" />
                <div className="h-2 bg-background/15 w-1/2" />
              </div>
            </div>
            <div className="absolute top-12 right-0 w-[48%] aspect-[9/16] bg-accent overflow-hidden">
              <div className="absolute top-4 left-5 text-[10px] uppercase tracking-[0.2em] text-background font-semibold">TikTok · UGC</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-5xl font-bold text-background">▶</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-background/90 text-xs font-semibold">
                verticale.studio
              </div>
            </div>
            <div className="absolute bottom-0 left-6 right-6 bg-background text-foreground border border-background/10 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Sito + ADV</span>
                <span className="text-[10px] text-accent-foreground bg-accent px-2 py-0.5 font-bold uppercase tracking-wider">live</span>
              </div>
              <div className="h-2 w-2/3 bg-foreground/80 mb-2" />
              <div className="h-2 w-1/2 bg-foreground/20 mb-4" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-14 bg-secondary" />
                <div className="h-14 bg-secondary" />
                <div className="h-14 bg-accent" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
