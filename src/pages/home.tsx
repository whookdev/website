import CTA from "@/components/cta";
import Features from "@/components/features";
import FuturisticBackground from "@/components/futuristic-background";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
//import Screenshots from "@/components/screenshots";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <FuturisticBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          {/*<Screenshots />*/}
          <CTA />
        </main>
      </div>
    </div>
  );
}
