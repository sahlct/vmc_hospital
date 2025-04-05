import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
        <div className="max-w-3xl">
          <p className="text-[#036894] w-fit px-5 mb-4 text-lg bg-cyan-50">COMPREHENCIVE CARE</p>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Dedicated to,
            <br />
            Your Health
          </h1>
          <Link href="/appointment">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 md:py-6 py-2 md:text-lg text-md">Book Now</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

