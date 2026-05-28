import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Prima call conoscitiva", text: "30 minuti per capire chi sei, dove vuoi arrivare e dove possiamo aiutarti davvero." },
  { n: "02", title: "Analisi di ciò che hai già online", text: "Studiamo brand, social, sito e campagne attuali. Punti di forza e cosa migliorare." },
  { n: "03", title: "Proposta strategica e piano operativo", text: "Strategia, attività, tempi e investimento. Tutto trasparente, niente sorprese." },
  { n: "04", title: "Produzione e setup", text: "Shooting, contenuti, sito, brand identity e setup ADV. Partiamo a costruire." },
  { n: "05", title: "Pubblicazione, campagne e report", text: "Andiamo live, monitoriamo i dati e miglioriamo mese dopo mese." },
];

export default function Processo() {
  return (
    <section id="processo" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container-v">
        <Reveal>
          <span className="eyebrow">Process</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-5 max-w-3xl leading-[1.02] tracking-tight">
            Come iniziamo a lavorare insieme
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/40 md:-translate-x-px" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="pl-12 md:pl-0 md:text-right md:pr-12">
                    <span className="font-display text-5xl md:text-7xl font-bold text-accent">{s.n}</span>
                  </div>
                  <div className="pl-12 md:pl-12 mt-2 md:mt-3 relative">
                    <span className="absolute left-2 md:-left-2 top-3 w-3 h-3 bg-accent ring-4 ring-foreground" />
                    <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                    <p className="text-background/60 mt-2 max-w-md leading-relaxed font-light">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-7 h-12 font-semibold"
            >
              <a href="#contatti">
                Prenota una prima call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
