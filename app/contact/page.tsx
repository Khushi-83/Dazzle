"use client"

import React, { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredContact: "",
    userType: "",
    propertyType: "",
    propertyAddress: "",
    budget: "",
    timeline: "",
    startDate: "",
    completionDate: "",
    hearAbout: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="aspect-video bg-stone-300 rounded-lg flex items-center justify-center shadow-sm">
              <div className="text-stone-500 text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Location Image</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-stone-800 mb-4">Contact Us</h2>
                <p className="text-stone-600 leading-relaxed">
                  Your perfect project won&apos;t build itself but we can help! Contact us today and let&apos;s bring your vision to life.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-stone-600" />
                  <span className="text-stone-800 font-medium">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-stone-600" />
                  <span className="text-stone-800 font-medium">(555) 124-2784</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-stone-600" />
                <div className="space-y-1">
                  <div className="text-stone-800 font-medium">Farhan@dazzledesign.com</div>
                  <div className="text-stone-800 font-medium">realtywithsarah@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-stone-600 mt-1" />
                <div className="text-stone-800 font-medium">
                  256 Eastern Street, Beside TNT Bridge,
                  <br />
                  Stateburg, Texas, 7384
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-stone-800">Social Media</h3>
                <div className="space-y-2 text-stone-600">
                  <div>X •</div>
                  <div>LinkedIn {'>>'}</div>
                  <div>Facebook {'>>'}</div>
                  <div>Instagram {'>>'}</div>
                  <div>Youtube {'>>'}</div>
                  <div>Pinterest {'>>'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg">
            <div className="p-6">
              <p className="text-stone-600 leading-relaxed mb-6">
                Got big plans but not sure where to start? Don&apos;t worry, just share what&apos;s on your mind, and we&apos;ll handle the rest!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-stone-700 font-medium text-sm">Name</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("name", e.target.value)}
                      className="bg-[#F5F1ED] border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-stone-700 font-medium text-sm">Phone</label>
                    <Input
                      id="phone"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
                      className="bg-[#F5F1ED] border-gray-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-stone-700 font-medium text-sm">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                    className="bg-[#F5F1ED] border-gray-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-stone-700 font-medium text-sm">Preferred Contact Method</label>
                  <select 
                    className="flex h-9 w-full rounded-md border border-gray-200 bg-[#F5F1ED] px-3 py-1 text-sm shadow-sm focus:border-black focus:outline-none text-gray-900"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange("preferredContact", e.target.value)}
                    value={formData.preferredContact}
                    aria-label="Preferred Contact Method"
                  >
                    <option value="">Select preferred method</option>
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-stone-700 font-medium text-sm">User Type</label>
                  <select 
                    className="flex h-9 w-full rounded-md border border-gray-200 bg-[#F5F1ED] px-3 py-1 text-sm shadow-sm focus:border-black focus:outline-none text-gray-900"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange("userType", e.target.value)}
                    value={formData.userType}
                    aria-label="User Type"
                  >
                    <option value="">Select user type</option>
                    <option value="homeowner">Homeowner</option>
                    <option value="contractor">Contractor</option>
                    <option value="realtor">Real Estate Agent</option>
                    <option value="investor">Property Investor</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-stone-700 font-medium text-sm">Property Type</label>
                  <select 
                    className="flex h-9 w-full rounded-md border border-gray-200 bg-[#F5F1ED] px-3 py-1 text-sm shadow-sm focus:border-black focus:outline-none text-gray-900"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange("propertyType", e.target.value)}
                    value={formData.propertyType}
                    aria-label="Property Type"
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="mixed-use">Mixed Use</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="propertyAddress" className="text-stone-700 font-medium text-sm">Property Address</label>
                  <Input
                    id="propertyAddress"
                    placeholder="Enter your property address"
                    value={formData.propertyAddress}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("propertyAddress", e.target.value)}
                    className="bg-[#F5F1ED] border-gray-200"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-stone-700 font-medium text-sm">Budget</label>
                    <Input
                      id="budget"
                      placeholder="Enter your budget"
                      value={formData.budget}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("budget", e.target.value)}
                      className="bg-[#F5F1ED] border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-stone-700 font-medium text-sm">Timeline</label>
                    <Input
                      id="timeline"
                      placeholder="e.g., 3 months"
                      value={formData.timeline}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("timeline", e.target.value)}
                      className="bg-[#F5F1ED] border-gray-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="startDate" className="text-stone-700 font-medium text-sm">Preferred Start Date</label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("startDate", e.target.value)}
                      className="bg-[#F5F1ED] border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="completionDate" className="text-stone-700 font-medium text-sm">Desired Completion Date</label>
                    <Input
                      id="completionDate"
                      type="date"
                      value={formData.completionDate}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("completionDate", e.target.value)}
                      className="bg-[#F5F1ED] border-gray-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-stone-700 font-medium text-sm">How Did You Hear About Us</label>
                  <select 
                    className="flex h-9 w-full rounded-md border border-gray-200 bg-[#F5F1ED] px-3 py-1 text-sm shadow-sm focus:border-black focus:outline-none text-gray-900"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange("hearAbout", e.target.value)}
                    value={formData.hearAbout}
                    aria-label="How Did You Hear About Us"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-stone-700 font-medium text-sm">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("message", e.target.value)}
                    className="bg-stone-50 border-stone-200 min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-stone-800 hover:bg-stone-700 text-white py-3 text-lg font-medium">
                  Request Free Estimate
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 bg-stone-200 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd7754422!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Business Location Map"
        />
      </div>
    </div>
  )
}