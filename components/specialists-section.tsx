import { WormIcon as Virus, TreesIcon as Lungs, Utensils, Brain } from "lucide-react"
import Image from "next/image"

export default function SpecialistsSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="md:text-4xl text-3xl text-[#036894] font-bold md:mb-12 mb-8 text-center">Our Consulting Specialists</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
            <div className="bg-[#34b4d46f] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Virus className="w-8 h-8 text-[#036894]" />
            </div>
            <h3 className="text-xl font-bold text-[#036894] mb-2">Covid-19 Test</h3>
            <p className="text-gray-600">
              Comprehensive testing services with rapid results and expert follow-up care.
            </p>
          </div>

          <div className="border rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
            <div className="bg-[#34b4d46f] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Lungs className="w-8 h-8 text-[#036894]" />
            </div>
            <h3 className="text-xl font-bold text-[#036894] mb-2">Heart Lungs</h3>
            <p>Advanced cardiac and pulmonary care from our team of experienced specialists.</p>
          </div>

          <div className="border rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
            <div className="bg-[#34b4d46f] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Utensils className="w-8 h-8 text-[#036894]" />
            </div>
            <h3 className="text-xl font-bold text-[#036894] mb-2">Supplement</h3>
            <p className="text-gray-600">Nutritional guidance and supplement recommendations for optimal health.</p>
          </div>

          <div className="border rounded-lg p-6 transition-all duration-300 hover:shadow-lg">
            <div className="bg-[#34b4d46f] w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-[#036894]" />
            </div>
            <h3 className="text-xl font-bold text-[#036894] mb-2">Mental Health</h3>
            <p className="text-gray-600">Compassionate mental health services supporting your emotional wellbeing.</p>
          </div>
        </div>

        <div className="md:mt-20 mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://thumbs.dreamstime.com/b/medical-surgeon-doctor-scrubs-face-mask-hospital-staff-working-covid-virus-crisis-health-wellness-263314302.jpg"
              alt="Surgeon in operating room"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#036894]">Why You Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">State-of-the-art facilities with the latest medical technology</p>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Experienced and board-certified medical professionals</p>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Patient-centered approach with personalized care plans</p>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Comprehensive services under one roof for your convenience</p>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#34b3d4] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">24/7 emergency care with rapid response times</p>
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

