import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DepartmentsPage() {
  const departments = [
    {
      id: "cardiology",
      name: "Cardiology",
      description:
        "Our Cardiology Department provides comprehensive care for heart conditions with state-of-the-art diagnostic and treatment options.",
      image: "https://kaminenihospitals.com/wp-content/uploads/2023/05/Cardiology-02.jpg",
    },
    {
      id: "neurology",
      name: "Neurology",
      description:
        "The Neurology Department specializes in disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.",
      image: "https://bansalgroup-assets.s3.ap-south-1.amazonaws.com/PRD/Bansal_Hospital/2020/09/Neurology-1.jpg",
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      description:
        "Our Pediatrics Department offers compassionate care for infants, children, and adolescents in a child-friendly environment.",
      image: "https://productimages.withfloats.com/serviceimages/tile/64e781063842003a75af030021",
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      description:
        "This Department treats conditions affecting the musculoskeletal system, bones, joints, ligaments, and muscles.",
      image: "https://api.neohospital.com/uploads/categories/image-1716788447613-429810085-Orthopaedic%20Surgery.jpg",
    },
    {
      id: "dental",
      name: "Dental Care",
      description:
        "Our Dental Care Department provides preventive, restorative, and cosmetic dental services for patients of all ages.",
      image: "https://health.osu.edu/-/media/health/images/stories/2023/07/dental-care.jpg",
    },
    {
      id: "ophthalmology",
      name: "Eye Treatment",
      description:
        "The Ophthalmology Department offers comprehensive eye care, from routine exams to advanced surgical procedures.",
      image: "https://media.istockphoto.com/id/2102535106/photo/mature-woman-undergoing-an-eye-surgery-at-ophthalmology-clinic.jpg?s=612x612&w=0&k=20&c=YcZTFHbqovEgRC3Inj_0aCCREe6x7AVmGdagS7rQ7Sc=",
    },
    {
      id: "childrenCare",
      name: "Children Care",
      description:
        "Our Children Care Department provides specialized healthcare services designed specifically for children's unique needs.",
      image: "https://media.istockphoto.com/id/1515280024/photo/recovery-time.jpg?s=612x612&w=0&k=20&c=jZCuZxA1QFbL3-dgBsIkTjPJ0oAath1gT08ftUS1vrI=",
    },
    {
      id: "traumatology",
      name: "Traumatology",
      description:
        "The Traumatology Department specializes in the treatment of injuries caused by accidents and other traumatic events.",
      image: "https://nadakkavilhospital.com/wp-content/uploads/2022/09/ORTHOPEDICS-TRAUMATOLOGY.webp",
    },
    {
      id: "xray",
      name: "X-ray",
      description:
        "Our Radiology Department provides diagnostic imaging services using the latest technology for accurate diagnosis.",
      image: "https://hospitalcmq.com/wp-content/uploads/2018/08/magneto-2.jpg",
    },
  ]

  return (
    <main className="container mx-auto px-4 md:px-10 md:py-12 py-8">
      <div className="text-center md:mb-12 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Departments</h1>
        <div className="w-16 h-1 bg-[#34b3d4] mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          VMC Hospital offers a wide range of specialized departments to provide comprehensive healthcare services for
          all your medical needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-48">
              <Image src={dept.image || "/placeholder.svg"} alt={dept.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3 text-[#036894]">{dept.name}</h2>
              <p className="text-gray-700 mb-4">{dept.description}</p>
              <Link href={`/departments/${dept.id}`}>
                <Button className="bg-[#036894] hover:bg-[#036894ba] text-white w-full">Learn More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

