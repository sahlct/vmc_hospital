"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import { gsap } from "gsap"

export default function AboutPage() {
  useEffect(() => {
    // Animate header
    gsap.fromTo(
      ".header-section",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    // Animate mission section
    gsap.fromTo(
      ".mission-section",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    )

    // Animate mission image
    gsap.fromTo(
      ".mission-image",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.7 }
    )

    // Animate value cards
    gsap.fromTo(
      ".value-card",
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out", 
        delay: 1 
      }
    )

    // Animate timeline items
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out", 
        delay: 1.5 
      }
    )
  }, [])

  return (
    <main className="container mx-auto px-4 md:px-10 md:py-12 py-8 relative font-lato">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://img.freepik.com/free-vector/clean-medical-background-vector_53876-140865.jpg?uid=R160641874&ga=GA1.1.1692626744.1724665044&semt=ais_hybrid&w=740"
          alt="Medical background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="header-section text-center md:mb-12 mb-8">
        <h1 className="text-3xl text-[#036894] md:text-4xl font-bold mb-4">About VMC Hospital</h1>
        <div className="w-16 h-1 bg-[#34b3d4] mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-12 gap-8 items-center mb-16">
        <div className="mission-section space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#036894]">Our Mission</h2>
          <p className="text-gray-700 !mt-4 md:mt-5">
            VMC Hospital is committed to delivering exceptional healthcare through advanced technology and
            compassionate, patient-centered service. We strive to improve the health and wellbeing of the communities we
            serve with integrity, respect, and excellence.
          </p>
          <p className="text-gray-700">
            Our team of dedicated healthcare professionals works tirelessly to provide the highest quality care in a
            healing environment that puts patients first.
          </p>
          <Link href="/appointment">
            <Button className="bg-[#036894] mt-5 hover:bg-[#34b3d4] text-white">Book an Appointment</Button>
          </Link>
        </div>
        <div className="mission-image relative h-[370px] rounded-lg overflow-hidden shadow-lg">
          <Image 
            src="https://www.cgarchitect.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBenNMQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--aabdb578a7c815ec97e29bcd09518c17023a7cb6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9VY21WemFYcGxYM1J2WDJ4cGJXbDBXd2RwQWxZRk1Eb0tjMkYyWlhKN0Jqb01jWFZoYkdsMGVXbGsiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--a140f81341e053a34b77dbf5e04e777cacb11aff/001b51b4.jpg" 
            alt="Hospital building" 
            fill 
            className="object-cover" 
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="value-card bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
          <h3 className="text-xl font-bold mb-3 text-[#036894]">Our Vision</h3>
          <p className="text-gray-700">
            To be the healthcare provider of choice, recognized for excellence in patient care, innovation, and
            community service.
          </p>
        </div>
        <div className="value-card bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
          <h3 className="text-xl font-bold mb-3 text-[#036894]">Our Values</h3>
          <p className="text-gray-700">
            Compassion, integrity, excellence, teamwork, and innovation guide everything we do at VMC Hospital.
          </p>
        </div>
        <div className="value-card bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
          <h3 className="text-xl font-bold mb-3 text-[#036894]">Our Commitment</h3>
          <p className="text-gray-700">
            We are committed to providing personalized care that respects the unique needs of each patient and their
            families.
          </p>
        </div>
      </div>

      <div className="bg-[#03689416] md:p-8 px-2 py-4 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#036894] text-center">Our History</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-12 w-1 h-full bg-[#036894]"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            <div className="timeline-item relative flex items-start">
              <div className="absolute left-3.5 md:left-[50px] transform -translate-x-1/2 w-4 h-4 bg-[#34b3d4] rounded-full mt-2"></div>
              <div className="pl-12 md:pl-24">
                <h3 className="text-lg font-semibold text-[#036894]">1985</h3>
                <p className="text-gray-900">Founded as a small community clinic with 10 beds</p>
              </div>
            </div>

            <div className="timeline-item relative flex items-start">
              <div className="absolute left-3.5 md:left-[50px] transform -translate-x-1/2 w-4 h-4 bg-[#34b3d4] rounded-full mt-2"></div>
              <div className="pl-12 md:pl-24">
                <h3 className="text-lg font-semibold text-[#036894]">1990s</h3>
                <p className="text-gray-900">Expanded to a full-service hospital with multiple departments</p>
              </div>
            </div>

            <div className="timeline-item relative flex items-start">
              <div className="absolute left-3.5 md:left-[50px] transform -translate-x-1/2 w-4 h-4 bg-[#34b3d4] rounded-full mt-2"></div>
              <div className="pl-12 md:pl-24">
                <h3 className="text-lg font-semibold text-[#036894]">2000</h3>
                <p className="text-gray-900">Introduced cutting-edge medical technology and specialized care units</p>
              </div>
            </div>

            <div className="timeline-item relative flex items-start">
              <div className="absolute left-3.5 md:left-[50px] transform -translate-x-1/2 w-4 h-4 bg-[#34b3d4] rounded-full mt-2"></div>
              <div className="pl-12 md:pl-24">
                <h3 className="text-lg font-semibold text-[#036894]">2010</h3>
                <p className="text-gray-900">Opened first additional branch to serve growing community needs</p>
              </div>
            </div>

            <div className="timeline-item relative flex items-start">
              <div className="absolute left-3.5 md:left-[50px] transform -translate-x-1/2 w-4 h-4 bg-[#34b3d4] rounded-full mt-2"></div>
              <div className="pl-12 md:pl-24">
                <h3 className="text-lg font-semibold text-[#036894]">Today</h3>
                <p className="text-gray-900">Operates multiple branches across the region, offering comprehensive medical specialties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}