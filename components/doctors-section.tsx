import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
      specialty: "Nephrology",
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

  return (
    <section className="py-10 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[#036894] font-medium mb-2 text-lg">Meet Doctors</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Expert Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
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

