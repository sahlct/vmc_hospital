"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AppointmentPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Book an Appointment</h1>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-700">
          Schedule an appointment with our healthcare professionals. We're here to provide you with the care you need.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="bg-teal-500 p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p>123 Health Street</p>
                <p>City, State</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p>555-123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p>info@amchospital.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Working Hours</h3>
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Emergency Only</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Appointment Request</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input id="name" placeholder="Your full name" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email address" required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <Input id="phone" placeholder="Your phone number" required />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="dental">Dental Care</SelectItem>
                    <SelectItem value="ophthalmology">Eye Treatment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <div className="flex items-center">
                  <Input id="date" type="date" className="w-full" required />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Please describe your symptoms or reason for appointment" rows={4} />
              </div>

              <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                Request Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

