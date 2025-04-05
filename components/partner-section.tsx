import Image from "next/image"

export default function PartnerSection() {
  const color = "#036894";
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid md:grid-cols-2 md:gap-12 gap-16 items-center">
          <div className="relative">
            <div className="relative z-0">
              <Image
                src="https://t4.ftcdn.net/jpg/02/11/04/53/360_F_211045328_HnemU2NVFNwDWnQtDi5JHeHVhMV1jTOr.jpg"
                alt="Doctor with smartphone"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 right-24 transform translate-x-1/4 translate-y-1/4 z-10">
              <Image
                src="https://www.shutterstock.com/image-photo/digital-tablet-collaboration-team-doctors-600nw-2267533135.jpg"
                alt="Medical equipment"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffffbb] rounded-full p-6 shadow-lg z-20">
              <div className="w-20 h-20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heartbeat"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" /><path d="M3 13h2l2 3l2 -6l1 3h3" /></svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="bg-[#34b3d4] w-fit px-6 text-gray-100 py-1 font-medium">YOUR HEALTH, OUR PRIORITY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#036894]">Your Partner In Lifelong Health</h2>
            <p className="text-gray-700 text-lg">
              VMC is committed to providing exceptional healthcare services with compassion, innovation, and integrity.
              Your well-being is our priority, always ensuring personalized and effective treatments.healthcare services with compassion, always ensuring personalized and effective treatments.healthcare services with compassion. some movements or next steps are just innovation, and integrity.
            </p>
            <div className="pt-6">
              <div className="flex items-center">
                <span className="text-6xl font-bold text-[#036894]">20+</span>
                <span className="ml-4 text-xl">Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

