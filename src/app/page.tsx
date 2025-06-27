import Features from "@/components/features";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import Inspiration from "@/components/inspiration";
export default function Home() {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <HeroSection />
      <Inspiration />
      <Features />
    </div>
  );
}
