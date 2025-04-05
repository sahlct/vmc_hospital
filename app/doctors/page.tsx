import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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

  return (
    <main className="container mx-auto px-4 md:px-10 md:py-12 py-8">
      <div className="text-center md:mb-12 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h1>
        <div className="w-16 h-1 bg-[#34b3d4] mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          Meet our team of experienced and dedicated healthcare professionals committed to providing you with the
          highest quality care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
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

