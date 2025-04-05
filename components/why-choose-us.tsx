import Image from "next/image"
import { Check } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    "State-of-the-art medical facilities and equipment",
    "Experienced and board-certified medical professionals",
    "Comprehensive care under one roof",
    "Patient-centered approach with personalized treatment plans",
    "24/7 emergency services with rapid response times",
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Medical professional"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-teal-500" />
                  </div>
                  <p className="ml-3 text-gray-700">{reason}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

