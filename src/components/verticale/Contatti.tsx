import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  nome: z.string().trim().min(2, "Inserisci nome e cognome").max(100),
  azienda: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Email non valida").max(255),
  telefono: z.string().trim().min(6, "Telefono non valido").max(20),
  esigenza: z.string().min(1, "Seleziona un'opzione"),
  messaggio: z.string().trim().min(10, "Scrivi almeno 10 caratteri").max(2000),
  privacy: z.literal(true, { errorMap: () => ({ message: "Accetta la privacy policy" }) }),
});

export default function Contatti() {
  const [esigenza, setEsigenza] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nome: String(fd.get("nome") || ""),
      azienda: String(fd.get("azienda") || ""),
      email: String(fd.get("email") || ""),
      telefono: String(fd.get("telefono") || ""),
      esigenza,
      messaggio: String(fd.get("messaggio") || ""),
      privacy,
    };
    const res = schema.safeParse(data);
    if (!res.success) {
      toast.error(res.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Richiesta inviata. Ti ricontattiamo entro 24h.");
      (e.target as HTMLFormElement).reset();
      setEsigenza("");
      setPrivacy(false);
    }, 700);
  };

  return (
    <section id="contatti" className="py-24 md:py-32 bg-accent text-accent-foreground relative overflow-hidden">
      <div className="absolute top-0 bottom-0 left-[10%] w-px bg-background/15" />
      <div className="absolute top-0 bottom-0 right-[15%] w-px bg-background/15" />

      <div className="container-v grid lg:grid-cols-12 gap-12 relative">
        <Reveal className="lg:col-span-5">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-background">
            <span className="w-6 h-px bg-background" /> Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-5 leading-[1.02] tracking-tight">
            Diamo una direzione alla tua comunicazione.
          </h2>
          <p className="mt-6 text-background/90 leading-relaxed text-lg font-light">
            Raccontaci il tuo brand. Ti aiuteremo a capire cosa serve davvero per renderlo più
            chiaro, riconoscibile e competitivo.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:etdcretivestudios@gmail.com" className="flex items-center gap-4 group">
              <span className="w-11 h-11 border border-background/40 flex items-center justify-center group-hover:bg-background group-hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs text-background/70 uppercase tracking-[0.2em] font-semibold">Email</div>
                <div className="font-medium">etdcretivestudios@gmail.com</div>
              </div>
            </a>
            <a href="tel:+393347068110" className="flex items-center gap-4 group">
              <span className="w-11 h-11 border border-background/40 flex items-center justify-center group-hover:bg-background group-hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
              </span>
              <div>
                <div className="text-xs text-background/70 uppercase tracking-[0.2em] font-semibold">Telefono</div>
                <div className="font-medium">+39 334 706 8110</div>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={150}>
          <form onSubmit={onSubmit} className="bg-background text-foreground p-6 md:p-10 space-y-5 border border-foreground/10">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome e cognome *</Label>
                <Input id="nome" name="nome" required maxLength={100} className="h-11 rounded-none border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="azienda">Azienda / brand</Label>
                <Input id="azienda" name="azienda" maxLength={100} className="h-11 rounded-none border-border" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} className="h-11 rounded-none border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Telefono *</Label>
                <Input id="telefono" name="telefono" type="tel" required maxLength={20} className="h-11 rounded-none border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Di cosa hai bisogno? *</Label>
              <Select value={esigenza} onValueChange={setEsigenza}>
                <SelectTrigger className="h-11 rounded-none border-border"><SelectValue placeholder="Seleziona un'opzione" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="social">Social media</SelectItem>
                  <SelectItem value="sito">Sito web</SelectItem>
                  <SelectItem value="foto-video">Foto/video</SelectItem>
                  <SelectItem value="adv">Advertising</SelectItem>
                  <SelectItem value="strategia">Strategia completa</SelectItem>
                  <SelectItem value="altro">Altro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="messaggio">Messaggio *</Label>
              <Textarea id="messaggio" name="messaggio" rows={4} required maxLength={2000} placeholder="Raccontaci brevemente il tuo progetto..." className="rounded-none border-border" />
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="privacy" checked={privacy} onCheckedChange={(c) => setPrivacy(c === true)} className="mt-1 rounded-none" />
              <Label htmlFor="privacy" className="text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer">
                Ho letto e accetto la privacy policy. Acconsento al trattamento dei dati per essere ricontattato.
              </Label>
            </div>
            <Button type="submit" disabled={loading} size="lg" className="w-full sm:w-auto rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-7 font-semibold">
              {loading ? "Invio..." : <>Richiedi una consulenza <ArrowRight className="ml-2 h-4 w-4" /></>}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
