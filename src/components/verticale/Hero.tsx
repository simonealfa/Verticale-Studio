import { ArrowRight, Play, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden bg-foreground text-background"
    >
      {/* vertical red lines bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, hsl(var(--background)) 0 1px, transparent 1px 120px)",
          }}
        />
        <div className="absolute top-0 bottom-0 left-[12%] w-px bg-accent/70" />
        <div className="absolute top-0 bottom-0 right-[18%] w-px bg-accent/30" />
      </div>

      <div className="container-v relative grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <Logo light className="text-sm md:text-base mb-8 inline-block" />

          <h1 className="font-display font-bold text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl tracking-tight">
            We build brands that stand <span className="text-accent">vertical</span>.
          </h1>

          <p className="mt-7 text-lg md:text-xl text-background/70 max-w-2xl leading-relaxed font-light">
            Strategia, contenuti e direzione digitale per brand che vogliono farsi capire,
            ricordare e scegliere.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-7 h-12 text-base font-semibold"
            >
              <a href="#contatti">
                Parla con noi <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 text-base bg-transparent border-background/40 text-background hover:bg-background hover:text-foreground"
            >
              <a href="#metodo">Scopri il metodo</a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-background/50 max-w-xl font-light">
            Per attività locali, brand, professionisti e aziende che vogliono comunicare meglio,
            non semplicemente pubblicare di più.
          </p>
        </div>

        {/* Visual cluster — vertical frames */}
        <div className="lg:col-span-5 relative h-[520px] md:h-[600px]">
          {/* Reel frame */}
          <div className="absolute left-0 top-4 w-[58%] aspect-[9/16] rounded-2xl bg-background shadow-2xl overflow-hidden border border-background/10 animate-float-slow">
            <div className="absolute inset-0 bg-foreground" />
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-accent/30 to-transparent" />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-background/90 text-xs">
              <span className="font-semibold">verticale.studio</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-blink" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-background/95 flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
              </div>
            </div>
            <div className="absolute right-3 bottom-20 flex flex-col gap-4 text-background">
              <Heart className="w-5 h-5" />
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="absolute left-4 right-12 bottom-5 text-background text-[13px] leading-snug">
              <p className="font-semibold">
                Brand <span className="text-accent">verticali</span> → contenuti che convertono.
              </p>
              <p className="text-background/60 text-[11px] mt-1 font-light">Reel · 0:23</p>
            </div>
          </div>

          {/* Site mockup */}
          <div className="absolute right-0 top-0 w-[55%] aspect-[4/5] rounded-xl bg-background border border-background/10 shadow-xl overflow-hidden">
            <div className="h-7 bg-secondary flex items-center gap-1.5 px-3 border-b border-border">
              <span className="w-2 h-2 rounded-full bg-foreground/20" />
              <span className="w-2 h-2 rounded-full bg-foreground/20" />
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <div className="p-4 space-y-2.5 text-foreground">
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold text-[11px]">verticale.</span>
                <span className="text-foreground font-bold text-[11px]">studio</span>
              </div>
              <div className="h-2 w-2/3 rounded bg-foreground/80 mt-1" />
              <div className="h-2 w-1/2 rounded bg-foreground/20" />
              <div className="h-20 mt-3 rounded bg-foreground relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="h-12 rounded bg-secondary" />
                <div className="h-12 rounded bg-secondary" />
              </div>
              <div className="h-6 w-24 rounded-full bg-accent mt-2" />
            </div>
          </div>

          {/* Stat card */}
          <div className="absolute right-4 bottom-2 w-[60%] rounded-xl bg-background border border-background/10 shadow-xl p-4 text-foreground">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                Meta Ads · ROAS
              </span>
              <span className="w-1.5 h-4 bg-accent rounded-sm" />
            </div>
            <div className="text-3xl font-display font-bold">
              4.8<span className="text-accent">×</span>
            </div>
            <div className="flex items-end gap-1 h-10 mt-3">
              {[40, 55, 35, 70, 50, 80, 65, 95].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === 7 ? "bg-accent" : "bg-foreground/80"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
