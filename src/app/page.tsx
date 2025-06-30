import About from "@/components/about";
import EarlyAccessCTA from "@/components/early-access-cta";
import Features from "@/components/features";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Inspiration from "@/components/inspiration";
import Pricing from "@/components/pricing";
export default function Home() {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <HeroSection />
      <Inspiration />
      <Features />
      <Pricing />
      <About />
      <EarlyAccessCTA />
    </div>
  );
}
