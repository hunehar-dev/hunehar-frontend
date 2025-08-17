import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, GraduationCap } from "lucide-react"

interface ActionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  buttonText: string
  buttonVariant?: "default" | "outline"
  iconBgColor?: string
}

function ActionCard({
  icon,
  title,
  description,
  buttonText,
  buttonVariant = "default",
  iconBgColor = "bg-blue-100",
}: ActionCardProps) {
  return (
    <Card className="h-full border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl">
      <CardHeader className="pb-6">
        <div className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mb-6`}>{icon}</div>
        <CardTitle className="text-2xl text-gray-900 font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">{description}</p>
        <Button
          size="lg"
          className={
            buttonVariant === "outline"
              ? "border-2 border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent px-8 py-4 font-semibold"
              : "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold"
          }
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}

export default function ActionCardsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tighter">Make a Difference Today</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <ActionCard
            icon={<Heart className="w-8 h-8 text-blue-600" />}
            title="Sponsor a Child"
            description="Provide comprehensive support including education, healthcare, and mentorship to help a child reach their full potential and build a brighter future."
            buttonText="Sponsor Now"
            iconBgColor="bg-blue-100"
          />
          <ActionCard
            icon={<GraduationCap className="w-8 h-8 text-orange-500" />}
            title="Support a Teacher"
            description="Help us train and support dedicated teachers who are making a difference in their communities every day, creating lasting educational impact for generations."
            buttonText="Support Teacher"
            buttonVariant="outline"
            iconBgColor="bg-orange-100"
          />
        </div>
      </div>
    </section>
  )
}
