"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger)

export default function DoctorsSection() {
  const doctors = [
    {
      id: "dr-AbduRahiman",
      name: "Dr. AbduRahiman",
      specialty: "Cardiology",
      description: "Your Health, Our Priority",
      image: "./images/dr_01.png",
    },
    {
      id: "dr-MohandasKP",
      name: "Dr. Mohandas KP",
      specialty: "Pulmonology",
      description: "Your Health, Our Priority",
      image: "./images/dr_03.png",
    },
    {
      id: "dr-AbduRahimanAmbadi",
      name: "Dr. AbduRahiman Ambadi",
      specialty: "Orthology",
      description: "Your Health, Our Priority",
      image: "./images/dr_02.png",
    },
  ]

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cardElements = cardsRef.current?.children
    if (cardElements && cardElements.length > 0) {
      gsap.fromTo(
        Array.from(cardElements), // Convert HTMLCollection to array
        { opacity: 0, y: 60 }, // Start state: invisible and below
        {
          opacity: 1,
          y: 0, // End state: fully visible and in position
          duration: 0.8,
          ease: "power3.out", // Smooth easing
          stagger: 0.25, // 0.25s gap between each card
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when section top is at 80% of viewport
            toggleActions: "play none none none", // Play once when entering viewport
          },
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-10 md:py-24 bg-gray-50 font-lato relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0">
        <Image
          src="./images/stethoscope.png"
          alt="Stethoscope Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#036894] font-medium mb-2 text-lg">Meet Doctors</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Expert Team</h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 md:gap-14 gap-8 md:px-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-[#ffffff84] rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden mb-6">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                </div>
                <div className="text-center">
                  <Link href={`/doctors/${doctor.id}`}>
                    <Button className="bg-[#036894] hover:bg-[#34b3d4] text-white mb-6">View All</Button>
                  </Link>
                  <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                  <p className="text-[#036894] mb-2">{doctor.specialty}</p>
                  <p className="text-gray-700">{doctor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}