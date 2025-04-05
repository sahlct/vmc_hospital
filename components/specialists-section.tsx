"use client"

import { WormIcon as Virus, TreesIcon as Lungs, Utensils, Brain } from "lucide-react"
import Image from "next/image"
import { useRef, useState, ReactNode, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger)

// Define props interface for SpotlightCard
interface SpotlightCardProps {
  children: ReactNode
  className?: string
  spotlightColor?: string
}

// SpotlightCard Component with TypeScript typing
const SpotlightCard = ({ children, className = "", spotlightColor = "#34b3d470" }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(0.6)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(0.6)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-lg border border-gray-200 bg-white overflow-hidden p-6 transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {/* Spotlight layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out z-0"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {/* Content layer above spotlight */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function SpecialistsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement | null>(null)
  const whyChooseUsRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Animate the cards (bottom to top with stagger)
    const cardElements = cardsRef.current?.children
    if (cardElements && cardElements.length > 0) {
      gsap.fromTo(
        Array.from(cardElements), // Convert HTMLCollection to array
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )
    }

    // Animate "Why Choose Us" section
    const whyChooseUs = whyChooseUsRef.current
    if (!whyChooseUs) return

    // Animate heading
    gsap.fromTo(
      whyChooseUs.querySelector("h2"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyChooseUs,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    // Animate list items with stagger
    gsap.fromTo(
      whyChooseUs.querySelectorAll("li"),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyChooseUs,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    // Animate "Learn More" link
    gsap.fromTo(
      whyChooseUs.querySelector("a"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.5,
        scrollTrigger: {
          trigger: whyChooseUs,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    // Image hover animation
    const imageContainer = imageRef.current
    if (imageContainer) {
      const image = imageContainer.querySelector("img")
      if (image) {
        imageContainer.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
          })
        })
        imageContainer.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          })
        })
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-24 font-noto relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0">
        <Image
          src="https://img.freepik.com/free-photo/flat-lay-medical-desk-with-equipment_23-2148519728.jpg?uid=R160641874&ga=GA1.1.1692626744.1724665044&semt=ais_hybrid&w=740"
          alt="Medical Desk Background"
          fill
          className="object-cover md:object-center object-right opacity-50 blur-[2px]"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <h2 className="md:text-4xl text-3xl text-[#036894] font-bold md:mb-12 mb-8 text-center">
          Our Consulting Specialists
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 with Spotlight */}
          <SpotlightCard>
            <div className="bg-[#34b4d46f] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Virus className="w-8 h-8 text-[#036894]" />
            </div>
            <h3 className="text-xl font-bold text-[#036894] mb-2">Covid-19 Test</h3>
            <p className="text-gray-600">
              Comprehensive testing services with rapid results and expert follow-up care.
            </p>
          </SpotlightCard>

          {/* Card 2 with Spotlight */}
          <SpotlightCard>
            <div className="bg-[#34b4d46f] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Lungs className="w-8 h-8 text-[#036894]" />
            </div>
            <h3 className="text-xl font-bold text-[#036894] mb-2">Heart Lungs</h3>
            <p className="text-gray-600">Advanced cardiac and pulmonary care from our team of experienced specialists.</p>
          </SpotlightCard>

          {/* Card 3 with Spotlight */}
          <SpotlightCard>
            <div className="bg-[#34b4d46f] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Utensils className="w-8 h-8 text-[#036894]" />
            </div>
            <h3 className="text-xl font-bold text-[#036894] mb-2">Supplement</h3>
            <p className="text-gray-600">Nutritional guidance and supplement recommendations for optimal health.</p>
          </SpotlightCard>

          {/* Card 4 with Spotlight */}
          <SpotlightCard>
            <div className="bg-[#34b4d46f] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-[#036894]" />
            </div>
            <h3 className="text-xl font-bold text-[#036894] mb-2">Mental Health</h3>
            <p className="text-gray-600">Compassionate mental health services supporting your emotional wellbeing.</p>
          </SpotlightCard>
        </div>

        <div className="md:mt-20 mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div ref={imageRef} className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://thumbs.dreamstime.com/b/medical-surgeon-doctor-scrubs-face-mask-hospital-staff-working-covid-virus-crisis-health-wellness-263314302.jpg"
              alt="Surgeon in operating room"
              fill
              className="object-cover"
            />
          </div>

          <div ref={whyChooseUsRef}>
            <h2 className="text-3xl font-bold mb-8 text-[#036894] font-noto">Why You Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-800">State-of-the-art facilities with the latest medical technology</p>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-800">Experienced and board-certified medical professionals</p>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-800">Patient-centered approach with personalized care plans</p>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-800">Comprehensive services under one roof for your convenience</p>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-800">24/7 emergency care with rapid response times</p>
              </li>
            </ul>

            <div className="mt-6">
              <a href="#" className="text-[#34b3d4] font-medium flex items-center hover:text-[#036894] transition-colors">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}