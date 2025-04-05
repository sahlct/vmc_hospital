"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { gsap } from "gsap"

export default function DoctorsPage() {
  const doctors = [
    {
      id: "dr-john",
      name: "Dr. Sudha Mahadevan",
      specialty: "Gynaechology",
      description: "Your Health, Our Priority",
      image: "./images/dr_05.png",
    },
    {
      id: "dr-emily",
      name: "Dr. Anil Prathap",
      specialty: "Pediatrician",
      description: "Your Health, Our Priority",
      image: "./images/dr_04.png",
    },
    {
      id: "dr-alice",
      name: "Dr. Suresh Kumar",
      specialty: "Senior Consultant",
      description: "Your Health, Our Priority",
      image: "./images/dr_06.png",
    },
    {
      id: "dr-michael",
      name: "Dr. Chandrashekar",
      specialty: "Emergency Consultant",
      description: "Your Health, Our Priority",
      image: "./images/dr_07.png",
    },
    {
      id: "dr-sarah",
      name: "Dr. Abdurahiman",
      specialty: "Cardiology",
      description: "Your Health, Our Priority",
      image: "./images/dr_01.png",
    },
    {
      id: "dr-robert",
      name: "Dr. Mohandas",
      specialty: "Orthology",
      description: "Your Health, Our Priority",
      image: "./images/dr_03.png",
    },
  ]

  // GSAP animation effect
  useEffect(() => {
    gsap.fromTo(
      ".doctor-card",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".doctor-grid",
          start: "top 80%",
        },
      }
    )
  }, [])

  return (
    <main className="container mx-auto px-4 md:px-10 md:py-12 py-8 relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="./images/doctors.jpg"
          alt="Doctors background"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-100/80"></div>
      </div>

      <div className="text-center md:mb-12 mb-8 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h1>
        <div className="w-16 h-1 bg-[#34b3d4] mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          Meet our team of experienced and dedicated healthcare professionals committed to providing you with the
          highest quality care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 md:px-5 doctor-grid relative z-10">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-card bg-[#ffffff62] rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative mx-auto mt-8 w-48 h-48 rounded-full overflow-hidden">
              <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold mb-2">{doctor.name}</h2>
              <p className="text-[#036894] mb-2">{doctor.specialty}</p>
              <p className="text-gray-700 mb-4">{doctor.description}</p>
              <Link href={`/doctors/${doctor.id}`}>
                <Button className="bg-[#036894] hover:bg-teal-600 text-white">View Profile</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}