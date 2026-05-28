import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "./Reveal";
import coverAntonini from "@/assets/cover-antonini.jpg";
import coverKleb from "@/assets/cover-kleb.jpg";
import coverVitapiu from "@/assets/cover-vitapiu.jpg";
import coverTenuta from "@/assets/cover-tenuta.jpg";
import coverLerici from "@/assets/cover-lerici.jpg";
import coverWhite from "@/assets/cover-white.jpg";
import coverGotv from "@/assets/cover-gotv.jpg";

const progetti = [
  { cover: coverAntonini, nome: "Antonini Navi", settore: "Nautica — Brand & Social", link: "https://www.instagram.com/antonini_navi/" },
  { cover: coverKleb, nome: "Kleb", settore: "Centro Fitness — Social & Shooting", link: "https://www.instagram.com/klebcentrofitness/" },
  { cover: coverVitapiu, nome: "Vita+", settore: "Longevity — Content & Brand", link: "https://www.instagram.com/vitapiu.laspezia/" },
  { cover: coverTenuta, nome: "Tenuta Le Piane", settore: "Vinicola — Shooting & Social", link: "https://www.instagram.com/tenutalepiane/" },
  { cover: coverGotv, nome: "Go TV", settore: "Sky Channel — Riprese & Montaggi", link: "https://www.instagram.com/gotv.channel/" },
  { cover: coverLerici, nome: "Lerici 2026", settore: "Campagna Elettorale — Content", link: "https://www.instagram.com/per_lerici_e_i_suoi_borghi/" },
  { cover: coverWhite, nome: "White", settore: "Studio Dentistico — Social & Brand", link: "https://www.instagram.com/studiodentistico_white/" },
];

const TWEEN_FACTOR = 1.2;

export default function Progetti() {
  const autoplay = useRef(
    Autoplay({ delay: 2600, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: false, containScroll: false },
    [autoplay.current]
  );
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = engine.scrollLooper && true;

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;
      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * TWEEN_FACTOR;
      void slidesInView; void isScrollEvent;
    });
    setTweenValues(styles);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <section id="progetti" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container-v text-center">
        <Reveal>
          <span className="eyebrow">Projects</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-5 leading-[1.02] tracking-tight">
            Our <span className="text-accent">Work</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Una selezione dei progetti che abbiamo seguito.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-16 md:mt-20">
        <div className="relative" style={{ perspective: "1600px" }}>
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="flex py-12" style={{ transformStyle: "preserve-3d" }}>
              {progetti.map((p, i) => {
                const t = tweenValues[i] ?? 0;
                const rotY = Math.max(-35, Math.min(35, t * 28));
                const translateZ = -Math.abs(t) * 80;
                const isHover = hovered === i;
                return (
                  <div
                    key={p.nome}
                    className="shrink-0 grow-0 basis-[55%] sm:basis-[38%] md:basis-[26%] lg:basis-[22%] px-3 md:px-4"
                    style={{ perspective: "1200px" }}
                  >
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                      className="block text-center select-none"
                      style={{
                        transform: isHover
                          ? "rotateY(0deg) translateZ(40px) scale(1.12)"
                          : `rotateY(${rotY}deg) translateZ(${translateZ}px)`,
                        transformStyle: "preserve-3d",
                        transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <div className="mb-4 px-1 min-h-[56px] flex flex-col items-center justify-end">
                        <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground leading-tight">
                          {p.nome}
                        </h3>
                        <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {p.settore}
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-card shadow-2xl shadow-foreground/30 ring-1 ring-border">
                        <div className="aspect-[3/4] relative">
                          <img
                            src={p.cover}
                            alt={`${p.nome} — ${p.settore}`}
                            draggable={false}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                          />
                          <div
                            className="absolute inset-0 bg-background/40 transition-opacity duration-500"
                            style={{ opacity: isHover ? 0 : Math.min(0.55, Math.abs(t) * 0.5) }}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
