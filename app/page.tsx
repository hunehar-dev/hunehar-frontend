import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import WhyExist from '@/components/WhyExist'
import MapImpact from '@/components/MapImpact'
import DonateCards from '@/components/DonateCards'
import StudentStories from '@/components/StudentStories'
import ImpactStats from '@/components/ImpactStats'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

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
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Life at Hunehar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={`/placeholder.svg?height=250&width=250`}
                  alt={`Life at Hunehar ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImpactStats />
      <TestimonialsCarousel />
      <FAQAccordion />
      <CTASection />
      <Footer />
    </main>
  )
}
