import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/placeholder.svg?height=600&width=1200" alt="Background" fill className="object-cover" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-orange-500/20 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/30 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Join the Hope Revolution Today
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed">
            Be part of a global movement that's transforming lives through education and community support. Together, we
            can create lasting change for generations to come and build a world where every child has the opportunity to
            thrive.
          </p>

          {/* Newsletter Signup */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white text-gray-900 border-0 flex-1 py-4 text-lg"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg font-bold">
              Make a Donation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent px-10 py-4 text-lg font-bold"
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
