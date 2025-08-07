import Image from "next/image"

interface PhotoGridSectionProps {
  title: string
  images: string[]
  gridCols?: string
  backgroundColor?: string
}

export default function PhotoGridSection({
  title,
  images,
  gridCols = "grid-cols-2 md:grid-cols-4",
  backgroundColor = "bg-gray-50",
}: PhotoGridSectionProps) {
  return (
    <section className={`py-20 lg:py-32 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">{title}</h2>

        <div className={`grid ${gridCols} gap-6`}>
          {images.map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src={src || "/placeholder.svg"}
                alt={`${title} ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
