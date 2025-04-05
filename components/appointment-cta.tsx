import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AppointmentCTA() {
  return (
    <section className="py-10 md:py-24 bg-[#036894] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold md:mb-6 mb-4 text-start md:text-center">Experience the workflow the best healthcare teams love.</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-start md:text-center">
          Let our team of healthcare professionals take care of your health needs with personalized attention and
          advanced medical care.
        </p>
        <Link href="/appointment">
          <Button className="bg-white text-[#036894] hover:bg-teal-50 px-8 py-6 text-lg">Book an Appointment</Button>
        </Link>
      </div>
    </section>
  )
}

