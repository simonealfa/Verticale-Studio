import { Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-v py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo light className="text-2xl" />
            <p className="mt-4 text-background/60 max-w-sm font-light">
              Strategia, contenuti, siti e campagne digitali.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold mb-4">Naviga</div>
            <ul className="space-y-2 text-background/80">
              <li><a href="#metodo" className="hover:text-accent transition-colors">Metodo</a></li>
              <li><a href="#servizi" className="hover:text-accent transition-colors">Servizi</a></li>
              <li><a href="#progetti" className="hover:text-accent transition-colors">Progetti</a></li>
              <li><a href="#processo" className="hover:text-accent transition-colors">Processo</a></li>
              <li><a href="#contatti" className="hover:text-accent transition-colors">Contatti</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold mb-4">Contatti</div>
            <a href="mailto:etdcretivestudios@gmail.com" className="block hover:text-accent transition-colors">etdcretivestudios@gmail.com</a>
            <a href="tel:+393347068110" className="block text-background/60 mt-1 font-light">+39 334 706 8110</a>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.instagram.com/etdcreativestudios/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="TikTok" className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors text-xs font-bold">
                TT
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-background/50 font-light">
          <div>© {new Date().getFullYear()} verticale.studio — Tutti i diritti riservati.</div>
          <a href="#" className="hover:text-accent transition-colors">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
