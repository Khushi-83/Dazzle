'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: 'Meet the Team', href: '/meet-the-team' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNavClick = (itemName: string) => {
    if (itemName === 'Services') {
      setIsServicesOpen(!isServicesOpen);
    } else {
      setIsServicesOpen(false);
    }
  };

  return (
    <header className="w-full bg-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            {/* Logo icon - stylized sunburst */}
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" className="w-full h-full text-gray-800">
                <g fill="currentColor">
                  {/* Center circle */}
                  <circle cx="16" cy="16" r="2" />
                  {/* Radiating lines */}
                  <path d="M16 4 L16 8 M16 24 L16 28 M28 16 L24 16 M8 16 L4 16" stroke="currentColor" strokeWidth="1" />
                  <path d="M22.627 9.373 L20.5 11.5 M11.5 20.5 L9.373 22.627 M22.627 22.627 L20.5 20.5 M11.5 11.5 L9.373 9.373" stroke="currentColor" strokeWidth="1" />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 tracking-wide">DAZZLE</h1>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleNavClick(item.name)}
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                      isActive
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                ) : (
                  <Link href={item.href}>
                    <button
                      onClick={() => handleNavClick(item.name)}
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                        isActive
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.name}</span>
                    </button>
                  </Link>
                )}
                
                {/* Services dropdown */}
                
              </div>
            );
          })}
        </nav>

        {/* Book Now Button */}
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors duration-200 flex items-center space-x-2">
          <span className="text-white">»</span>
          <span>Book Now</span>
        </button>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="Open mobile menu"
          title="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};