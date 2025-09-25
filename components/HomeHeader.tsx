"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronsRight, Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Meet the Team", href: "/meet-the-team" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blogs", href: "/blogs" },
    { name: "StoreFront", href: "/storefront" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (itemName: string) => {
    if (itemName === "Services") {
      setIsServicesOpen(!isServicesOpen);
    } else {
      setIsServicesOpen(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // TODO: Add your actual search logic here
  };

  return (
    <header className="w-full bg-white px-6 py-2 border-b-1 border-stone-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" className="w-full h-full text-gray-800">
                <g fill="currentColor">
                  <circle cx="16" cy="16" r="2" />
                  <path
                    d="M16 4 L16 8 M16 24 L16 28 M28 16 L24 16 M8 16 L4 16"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M22.627 9.373 L20.5 11.5 M11.5 20.5 L9.373 22.627 M22.627 22.627 L20.5 20.5 M11.5 11.5 L9.373 9.373"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 tracking-wide">
                DAZZLE
              </h1>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center md:gap-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <div key={item.name} className="relative ">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleNavClick(item.name)}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                      isActive
                        ? "bg-amber-100 text-amber-800 border border-amber-200"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link href={item.href}>
                    <button
                      onClick={() => handleNavClick(item.name)}
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                        isActive
                          ? "bg-[var(--button-secondery)] "
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.name}</span>
                    </button>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Search + Sign In + Cart */}
<div className="hidden md:flex items-center gap-4">
  {/* Search Bar */}
  <form onSubmit={handleSearch} className="relative">
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-50 bg-gray-200 text-gray-700 text-sm rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
    />
    <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-600" />
  </form>

  {/* Sign In Button */}
  <Link
    href="/signin"
    className="px-5 py-2 bg-[#3A2D28] text-white text-sm rounded-md hover:bg-[#3c2d26] transition"
  >
    Sign in
  </Link>

  {/* Cart Icon */}
  <button
    aria-label="View cart"
    className="p-2 hover:opacity-80 transition"
  >
    <ShoppingCart className="w-5 h-5 text-black" />
  </button>
</div>

      </div>
    </header>
  );
}
