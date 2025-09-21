"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronsRight } from "lucide-react";

export default function HomeHeader() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isStickyNav, setStickyNav] = useState<boolean>(false)

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Meet the Team", href: "/meet-the-team" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (itemName: string) => {
    if (itemName === "Services") {
      setIsServicesOpen(!isServicesOpen);
    } else {
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={!isStickyNav ? "w-full absolute t-0  px-6 py-2 border-b-1 border-stone-200 z-50 bg-transparent h-16" : "bg-white min-h-16 fixed w-full px-6 py-4 z-50 transition-all ease-in-out duration-300 border"}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            {/* Logo icon */}
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 32 32" className="w-full h-full text-gray-800">
                <g fill="currentColor">
                  {/* Center circle */}
                  <circle cx="16" cy="16" r="2" />
                  {/* Radiating lines */}
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
        <nav className="hidden md:flex items-center  md:gap-2">
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
                      className={`flex items-center  px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                        isActive
                          ? "bg-[var(--button-secondery)] "
                        : " hover:text-gray-900 hover:bg-[var(--button-secondery)]/20"
                      }`}
                    >
                      <span className={isStickyNav ? "text-amber-900" : "text-white"}>{item.name}</span>
                    </button>
                  </Link>
                )}


              </div>
            );
          })}
        </nav>

        {/* Book Now Button */}
        <button className="flex p-1 h-10 w-auto min-w-[160px] items-center gap-4 bg-[var(--background)] rounded-sm border border-gray-400">
          <span className="arrow bg-[var(--button-primary)] inline-flex h-full w-1/4 rounded-sm justify-center items-center">
            <ChevronsRight size={20} color="#ffffff" />
          </span>
          <p className="text-[var(--foreground)] text-md">Book Now</p>
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="Open mobile menu"
          title="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
