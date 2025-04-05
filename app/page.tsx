import Hero from "@/components/hero"
import PartnerSection from "@/components/partner-section"
import StatsSection from "@/components/stats-section"
import DoctorsSection from "@/components/doctors-section"
import SpecialistsSection from "@/components/specialists-section"
import GallerySection from "@/components/gallery-section"
// import WhyChooseUs from "@/components/why-choose-us"
import AppointmentCTA from "@/components/appointment-cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <PartnerSection />
      <StatsSection />
      <SpecialistsSection />
      <DoctorsSection />
      <GallerySection />
      {/* <WhyChooseUs />/ */}
      <AppointmentCTA />
    </main>
  )
}

