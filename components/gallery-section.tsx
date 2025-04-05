"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { gsap } from "gsap"

export default function GallerySection() {
  const galleryItems = [
    {
      id: "eye",
      title: "Modern Eye Clinic",
      subtitle: "Modern Eye Clinic",
      image: "https://thumbs.dreamstime.com/b/ai-generator-image-inside-modern-well-lit-ophthalmology-eye-doctor-practice-eye-clinic-medical-equipment-convey-344925186.jpg",
    },
    {
      id: "lab",
      title: "Advanced Lab Testing",
      subtitle: "Advanced Lab Testing",
      image: "https://img.freepik.com/free-photo/research-innovation-items-world-science-day-celebration_23-2151812426.jpg",
    },
  ]

  useEffect(() => {
    // Animate gallery items
    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    )

    // Animate navigation buttons
    gsap.fromTo(
      ".nav-button",
      { scale: 0 },
      { 
        scale: 1, 
        duration: 0.5, 
        delay: 0.8, 
        ease: "back.out(1.7)" 
      }
    )
  }, [])

  return (
    <section className="py-10 md:py-24 font-lato relative">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="./images/polygon.png"
          alt="Background pattern"
          fill
          className="object-cover opacity-20 md:object-cover object-left"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center md:mb-12 mb-8">
          <p className="text-[#036894] font-medium mb-2">The Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Testing Labs</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item relative group overflow-hidden rounded-lg">
              <div className="relative h-[300px]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute border bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl text-[#036894] font-bold">{item.title}</h3>
                  <p className="text-gray-700">{item.subtitle}</p>
                </div>
                <Link href={`/departments/${item.id}`}>
                  <div className="bg-[#036894] text-white p-4 flex items-center justify-center">
                    <Plus className="w-6 h-6" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="nav-button w-10 h-10 flex items-center justify-center border rounded-full mr-4 hover:bg-[#036894] hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="nav-button w-10 h-10 flex items-center justify-center border rounded-full hover:bg-[#036894] hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}