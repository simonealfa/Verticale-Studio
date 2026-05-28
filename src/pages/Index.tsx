import Navbar from "@/components/verticale/Navbar";
import Hero from "@/components/verticale/Hero";
import Problema from "@/components/verticale/Problema";
import Metodo from "@/components/verticale/Metodo";
import Servizi from "@/components/verticale/Servizi";
import Differenziante from "@/components/verticale/Differenziante";
import Progetti from "@/components/verticale/Progetti";
import Processo from "@/components/verticale/Processo";
import Numeri from "@/components/verticale/Numeri";
import Contatti from "@/components/verticale/Contatti";
import Footer from "@/components/verticale/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problema />
      <Metodo />
      <Servizi />
      <Differenziante />
      <Progetti />
      <Processo />
      <Numeri />
      <Contatti />
      <Footer />
    </main>
  );
};

export default Index;
