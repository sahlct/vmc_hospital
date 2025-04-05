"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion" // Updated import
import { useEffect, useRef } from "react"

// BoxReveal Component
interface BoxRevealProps {
  children: any
  width?: "fit-content" | "100%"
  boxColor?: string
  duration?: number
}

const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "#34b3d4", 
  duration,
}: BoxRevealProps) => {
  const mainControls = useAnimation()
  const slideControls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible")
      mainControls.start("visible")
    } else {
      slideControls.start("hidden")
      mainControls.start("hidden")
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration || 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration || 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
        }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative h-[600px] min-h-screen md:h-[700px] bg-gray-900 text-white overflow-hidden md:px-10">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://t3.ftcdn.net/jpg/09/32/26/74/360_F_932267458_Zqtzmc9EIfMjenziYeSO5FLwC8ryfhHy.jpg"
          alt="Medical professional in laboratory"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-gray-900/50"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl space-y-6">
          <BoxReveal boxColor="#ffff" duration={0.7}>
            <p className="text-[#036894] w-fit px-5 text-lg bg-cyan-50 font-noto">COMPREHENCIVE CARE</p>
          </BoxReveal>

          <BoxReveal boxColor="#ffff" duration={0.7}>
            <h1 className="text-4xl md:text-7xl font-bold font-noto">
              Dedicated to,
              <br />
              Your Health
            </h1>
          </BoxReveal>

          <Link href="/appointment">
            <Button className="bg-teal-500 mt-5 font-noto hover:bg-teal-600 text-white px-8 md:py-6 py-2 md:text-lg text-md">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}