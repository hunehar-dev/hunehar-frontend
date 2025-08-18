import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyExist from "@/components/WhyExist";
import MapImpact from "@/components/MapImpact";
import DonateCards from "@/components/DonateCards";
import StudentStories from "@/components/StudentStories";
import ImpactStats from "@/components/ImpactStats";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import Footer from "@/components/footer";
import LifeAtHunehar from "@/components/LifeAtHunehar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MapImpact />
      <WhyExist />
      <DonateCards />
      <StudentStories />
      <LifeAtHunehar />
      <ImpactStats />
      <TestimonialsCarousel />
      <FAQAccordion />
      <CTASection />
      <Footer />
    </main>
  );
}
