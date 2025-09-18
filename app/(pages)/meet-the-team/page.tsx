'use client'

import React, { useState } from "react"
import { Linkedin, Facebook, Twitter } from "lucide-react"

export default function MeetTheTeamPage() {
  const teamMembers = [
    {
      name: "Farhana Sheriff",
      title: "Founder and Owner",
      image: "/team/farhana.jpg",
      achievements: [
        "Two time REIA Award winner",
        "Background in home building and renovations",
        "Started a staging business after creating emotional connections",
        "Goal: Make every home warm, inviting, unforgettable, and feel home for top dollar"
      ]
    },
    {
      name: "Sun Sandhu",
      title: "Co-Stager and Business Operations Manager",
      image: "/team/sun.jpg", 
      achievements: [
        "Realtor and co-stager with 15+ years real estate experience",
        "Focus on making properties stand out."
      ]
    }
  ];

  const coreValues = [
    {
      number: 1,
      title: "Integrity",
      description: "We believe in honesty, transparency, and always doing the right thing, even when no one is looking."
    },
    {
      number: 2,
      title: "Customer-Centric Service", 
      description: "Your needs come first. We are dedicated to delivering exceptional service, tailored to your unique situation."
    },
    {
      number: 3,
      title: "Creativity & Innovation",
      description: "We bring fresh ideas and creative solutions to every project, helping you achieve your vision while maximizing value."
    },
    {
      number: 4,
      title: "Collaboration",
      description: "We work closely with you, whether you're a homeowner, realtor, or investor to ensure your goals are met with professionalism and care."
    },
    {
      number: 5,
      title: "Excellence",
      description: "From staging to marketing, we aim for the highest standards in every detail, ensuring outstanding results every time."
    },
    {
      number: 6,
      title: "Sustainability",
      description: "We are committed to using eco-friendly staging materials and practices where possible, making a positive impact on the environment."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header spacing to account for fixed navigation */}
      <div className="pt-8">
        
        {/* Main heading */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">Meet the Team</h1>
        </div>

        {/* Team Members Section */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* Left Column - Profile Image, Name, Title, Social Icons */}
                <div className="w-32 flex-shrink-0">
                  {/* Profile Image */}
                  <div className="w-32 h-32 mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">👤</span>
                    </div>
                  </div>
                  
                  {/* Name, Title and Social Icons */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{member.title}</p>
                    
                    {/* Social Icons - Right of Name */}
                    <div className="flex justify-center space-x-3 mt-3">
                      <a href="#" className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors" title="LinkedIn">
                        <Linkedin className="w-4 h-4 text-gray-800" />
                      </a>
                      <a href="#" className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors" title="Facebook">
                        <Facebook className="w-4 h-4 text-gray-800" />
                      </a>
                      <a href="#" className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors" title="X (Twitter)">
                        <Twitter className="w-4 h-4 text-gray-800" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Achievements List */}
                <div className="flex-1">
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Philosophy Section */}
        <div className="py-16 mt-16" style={{backgroundColor: '#3A2D28'}}>
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-8 text-white">Team Philosophy</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Quality, experience, real estate market knowledge, expert staging strategies, attention to detail, 
              exceptional customer service for homeowners, realtors, investors.
            </p>
          </div>
        </div>

        {/* Our Core Values Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Image placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-6xl text-gray-400">🏠</span>
              </div>
            </div>

            {/* Right side - Core Values */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Core Values</h2>
              <div className="space-y-8">
                {coreValues.map((value) => (
                  <div key={value.number} className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {value.number}. {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}