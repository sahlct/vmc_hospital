import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <div className="w-12 h-1 bg-[#036894] mb-6"></div>
            <p className="text-gray-600 mb-6">
              VMC: Delivering exceptional healthcare through advanced technology and compassionate, patient-centered
              service.
            </p>
            <Link href="/appointment">
              <Button className="bg-[#036894] hover:bg-[#34b3d4] text-white">Book Now</Button>
            </Link>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Get Us :</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#036894] transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#036894] transition-colors">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#036894] transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Department</h3>
            <div className="w-12 h-1 bg-[#036894] mb-6"></div>
            <ul className="space-y-3">
              <li>
                <Link href="/departments/medicine" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Medicine and Health
                </Link>
              </li>
              <li>
                <Link href="/departments/dental" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Dental Care
                </Link>
              </li>
              <li>
                <Link href="/departments/eye" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Eye Treatment
                </Link>
              </li>
              <li>
                <Link href="/departments/children" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Children Care
                </Link>
              </li>
              <li>
                <Link href="/departments/traumatology" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Traumatology
                </Link>
              </li>
              <li>
                <Link href="/departments/xray" className="text-gray-600 hover:text-[#036894] transition-colors">
                  X-ray
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <div className="w-12 h-1 bg-[#036894] mb-6"></div>
            <ul className="space-y-3">
              <li>
                <Link href="/services/ambulance" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Ambulance
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Emergency
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#036894] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#036894] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Branches</h3>
            <div className="w-12 h-1 bg-[#036894] mb-6"></div>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">VMC Hospital:</h4>
                <p className="text-gray-600">Parappanangadi Road,</p>
                <p className="text-gray-600">Vengara, Malappuram.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Central Hospital:</h4>
                <p className="text-gray-600">Malappuram, Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">
            &copy;{new Date().getFullYear()} VMC Hospital. All rights reserved
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-[#036894] transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-[#036894] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

