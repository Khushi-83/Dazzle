"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronsRight, Search, ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="w-full bg-white px-4 sm:px-6 py-2 border-b-1 border-stone-200">
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

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center md:gap-1.5">
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
                        : "text-gray-800 hover:text-gray-900 hover:bg-gray-50"
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
                      onClick={() => {
                        handleNavClick(item.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                        isActive
                          ? "bg-[var(--button-secondery)] "
                          : "text-gray-800 hover:text-gray-900 hover:bg-gray-50"
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

        {/* Desktop Search + Sign In + Cart */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-30 bg-gray-200 text-gray-700 text-sm rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
          <Link href="/cart">
            <button
              aria-label="View cart"
              className="p-2 hover:opacity-80 transition"
            >
              <ShoppingCart className="w-5 h-5 text-black" />
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleNavClick(item.name)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-md ${
                        isActive
                          ? "bg-amber-100 text-amber-800"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link href={item.href}>
                      <button
                        onClick={() => {
                          handleNavClick(item.name);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                          isActive
                            ? "bg-[var(--button-secondery)] text-white"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </button>
                    </Link>
                  )}
                </div>
              );
            })}
            
            {/* Mobile Search + Sign In + Cart */}
            <div className="pt-4 border-t border-gray-200">
              <form onSubmit={handleSearch} className="relative mb-3 px-3">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-100 text-gray-700 text-sm rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <Search className="absolute left-5 top-2.5 w-4 h-4 text-gray-500" />
              </form>
              
              <div className="flex flex-col space-y-3 px-3 pb-3">
                <Link
                  href="/signin"
                  className="w-full text-center px-5 py-2 bg-[#3A2D28] text-white text-sm rounded-md hover:bg-[#3c2d26] transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                
                <Link 
                  href="/cart"
                  className="flex items-center justify-center px-5 py-2 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
