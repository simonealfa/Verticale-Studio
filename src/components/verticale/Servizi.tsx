import { Reveal } from "./Reveal";
import { Film, Palette, Share2, Camera, Rocket } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Content creation",
    text: "Reel, short, video verticali e formati pensati per piattaforma e pubblico.",
  },
  {
    icon: Palette,
    title: "Graphic design",
    text: "Identità visive, sistemi grafici, layout social e materiali coordinati.",
  },
  {
    icon: Share2,
    title: "Social media",
    text: "Strategia, piano editoriale e gestione di Instagram, TikTok e LinkedIn.",
  },
  {
    icon: Camera,
    title: "Shooting",
    text: "Produzioni foto e video on-location: dal concept al delivery finale.",
  },
  {
    icon: Rocket,
    title: "Launch brand",
    text: "Lanci e rebranding: naming, identità, contenuti e go-to-market integrato.",
  },
];

export default function Servizi() {
  return (
    <section id="servizi" className="py-24 md:py-32 bg-background">
      <div className="container-v">
        <Reveal>
          <span className="eyebrow">Services</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-5 max-w-3xl leading-[1.02] tracking-tight">
            Cosa costruiamo per il tuo brand
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <div className="group h-full p-7 bg-background hover:bg-card transition-all duration-300 relative">
                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                <div className="flex items-start justify-between mb-6">
                  <s.icon className="w-6 h-6" strokeWidth={1.5} />
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
