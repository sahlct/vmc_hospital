"use client"

import { useEffect, useRef } from "react"
import { Users, Building, Clock, Activity } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const counters = gsap.utils.toArray(".counter")

    counters.forEach((counter) => {
      const el = counter as HTMLElement
      const target = +el.getAttribute("data-target")!
      const gap = +el.getAttribute("data-gap")!

      let obj = { count: 0 }

      gsap.to(obj, {
        count: target,
        duration: 2, // all counters same time
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true, // animate only once
        },
        onUpdate: () => {
          const value = Math.floor(obj.count / gap) * gap
          el.innerText =
            (value >= target ? target : value).toString() + "+"
        },
      })
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#036894] md:py-16 py-12 font-noto"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Users />, target: 20, gap: 1, title: "Expert Doctors" },
            { icon: <Building />, target: 100, gap: 10, title: "Medical Bed's" },
            { icon: <Clock />, target: 24, gap: 2, title: "Hours Working" },
            { icon: <Activity />, target: 500, gap: 100, title: "Weakly Patients" },
          ].map((item, index) => (
            <div key={index} className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <div
                className="text-4xl font-bold mb-2 counter"
                data-target={item.target}
                data-gap={item.gap}
              >
                0
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
