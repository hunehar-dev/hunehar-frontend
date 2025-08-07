import { Button } from "@/components/ui/button"

interface ImpactStatProps {
  value: string
  label: string
  description: string
}

function ImpactStat({ value, label, description }: ImpactStatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4">{value}</div>
      <div className="text-xl font-bold text-gray-900 mb-3">{label}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  )
}

export default function ImpactSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Impact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          <ImpactStat value="85%" label="Graduation Rate" description="Students completing our programs successfully" />
          <ImpactStat value="1000+" label="Lives Changed" description="Children and families supported annually" />
          <ImpactStat
            value="95%"
            label="Community Satisfaction"
            description="Positive feedback from local communities"
          />
          <ImpactStat
            value="200+"
            label="Partner Organizations"
            description="Global network of collaborative partners"
          />
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
            View Full Report
          </Button>
        </div>
      </div>
    </section>
  )
}
