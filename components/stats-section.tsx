interface StatItemProps {
  value: string
  label: string
  description?: string
}

function StatItem({ value, label, description }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-3">{value}</div>
      <div className="text-gray-700 font-semibold text-lg">{label}</div>
      {description && <div className="text-sm text-gray-500 mt-2">{description}</div>}
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-white relative">
      {/* Blue background extension from hero */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 -mt-16 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <StatItem value="$1M+" label="Total Donations Raised" />
            <StatItem value="500+" label="Children Supported" />
            <StatItem value="100%" label="Transparency Rate" />
          </div>
        </div>
      </div>
    </section>
  )
}
