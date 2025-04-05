"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger)

export default function PartnerSection() {
  const color = "#036894"
  const sectionRef = useRef<HTMLDivElement | null>(null) // Explicitly type the ref

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return // Add null check to prevent errors

    // Animate the first image (top image)
    gsap.fromTo(
      section.querySelector(".top-image"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    // Animate the second image (bottom-right image)
    gsap.fromTo(
      section.querySelector(".bottom-image"),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    // Animate the heartbeat icon
    gsap.fromTo(
      section.querySelector(".heartbeat-icon"),
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        delay: 0.6,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    // Animate the text content (staggered entrance)
    gsap.fromTo(
      section.querySelectorAll(".text-content > *"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    // Animate the stats (care count)
    gsap.fromTo(
      section.querySelector(".stats"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )
  }, []) // Empty dependency array ensures this runs once on mount

  return (
    <section ref={sectionRef} className="py-16 md:py-24 font-noto">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid md:grid-cols-2 md:gap-12 gap-16 items-center">
          <div className="relative">
            <div className="relative z-0 top-image">
              <Image
                src="https://t4.ftcdn.net/jpg/02/11/04/53/360_F_211045328_HnemU2NVFNwDWnQtDi5JHeHVhMV1jTOr.jpg"
                alt="Doctor with smartphone"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 right-24 transform translate-x-1/4 translate-y-1/4 z-10 bottom-image">
              <Image
                src="https://www.shutterstock.com/image-photo/digital-tablet-collaboration-team-doctors-600nw-2267533135.jpg"
                alt="Medical equipment"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffffbb] rounded-full p-6 shadow-lg z-20 heartbeat-icon">
              <div className="w-20 h-20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-heartbeat"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
                  <path d="M3 13h2l2 3l2 -6l1 3h3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-content">
            <p className="bg-[#34b3d4] w-fit px-6 text-white py-1 font-medium">YOUR HEALTH, OUR PRIORITY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#036894] font-lato">
              Your Partner In Lifelong Health
            </h2>
            <p className="text-gray-700 text-lg">
              VMC is committed to providing exceptional healthcare services with compassion, innovation, and integrity.
              Your well-being is our priority, always ensuring personalized and effective treatments.healthcare services with compassion, always ensuring personalized and effective treatments.healthcare services with compassion. some movements or next steps are just innovation, and integrity.
            </p>
            <div className="pt-6 stats">
              <div className="flex items-center">
                <span className="text-6xl font-bold text-[#036894]">20+</span>
                <span className="ml-4 text-xl">Care's</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}