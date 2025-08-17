import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialProps {
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

function TestimonialCard({ name, role, content, rating, avatar }: TestimonialProps) {
  return (
    <Card className="h-full border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl">
      <CardContent className="p-8">
        {/* Rating Stars */}
        <div className="flex items-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
          ))}
        </div>

        {/* Testimonial Content */}
        <p className="text-gray-600 mb-8 leading-relaxed text-lg italic">"{content}"</p>

        {/* User Info */}
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
            {avatar ? (
              <Image
                src={avatar || "/placeholder.svg"}
                alt={name}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
              </div>
            )}
          </div>
          <div>
            <div className="font-bold text-gray-900 text-lg">{name}</div>
            <div className="text-gray-600">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content:
        "This organization has completely transformed my daughter's life. The educational support and mentorship she received opened doors we never thought possible. She's now thriving in university and has a bright future ahead.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Teacher",
      content:
        "Working with Hunehar has been the most rewarding experience of my career. Their commitment to educational excellence and community development is truly inspiring and makes a real, lasting difference in children's lives.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Community Leader",
      content:
        "The impact in our community has been remarkable. Children are not just learning, they're thriving and dreaming big. Families are building better futures, and hope has returned to our neighborhood in ways we never imagined.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Volunteer",
      content:
        "Being part of this mission has been life-changing for me too. Seeing the direct impact of our work, watching children grow and succeed, motivates me every single day to do more and give back to these amazing communities.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Donor",
      content:
        "I'm constantly amazed by the transparency and effectiveness of this organization. Every dollar I donate truly makes a difference, and I can see the real impact in the regular updates and stories I receive from the field.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      role: "Program Graduate",
      content:
        "This program gave me the tools, confidence, and support to pursue my dreams when everything seemed impossible. I'm now studying engineering at university and working to give back to my community. Forever grateful for this opportunity.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tighter">What People Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
