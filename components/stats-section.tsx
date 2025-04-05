import { Users, Building, Clock, Activity } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="bg-[#036894] md:py-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center text-white">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-4xl font-bold mb-2">20+</div>
            <div>Expert Doctors</div>
          </div>

          <div className="text-center text-white">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8" />
            </div>
            <div className="text-4xl font-bold mb-2">100+</div>
            <div>Medical Bed's</div>
          </div>

          <div className="text-center text-white">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <div className="text-4xl font-bold mb-2">24*7</div>
            <div>Hours Working</div>
          </div>

          <div className="text-center text-white">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8" />
            </div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div>Weakly Patiants</div>
          </div>
        </div>
      </div>
    </section>
  )
}

