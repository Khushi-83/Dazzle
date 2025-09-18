import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Linkedin, Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" strokeWidth="0.5">
            {/* Enhanced architectural wireframe pattern with more detailed building structures */}
            <path d="M0 400L200 200L400 300L600 100L800 250L1000 150L1200 300" />
            <path d="M0 600L150 450L350 550L550 350L750 500L950 400L1200 550" />
            <path d="M100 200L300 150L500 250L700 180L900 220L1100 170" />
            <path d="M50 500L250 400L450 480L650 420L850 460L1050 410L1200 450" />

            {/* Building structures */}
            <rect x="100" y="150" width="200" height="150" />
            <rect x="120" y="170" width="40" height="60" />
            <rect x="180" y="170" width="40" height="60" />
            <rect x="240" y="170" width="40" height="60" />

            <rect x="400" y="250" width="180" height="120" />
            <rect x="420" y="270" width="35" height="50" />
            <rect x="470" y="270" width="35" height="50" />
            <rect x="520" y="270" width="35" height="50" />

            <rect x="700" y="100" width="220" height="180" />
            <rect x="720" y="120" width="45" height="70" />
            <rect x="780" y="120" width="45" height="70" />
            <rect x="840" y="120" width="45" height="70" />

            {/* Additional architectural elements */}
            <polygon points="100,150 200,120 300,150 300,300 100,300" />
            <polygon points="700,100 820,70 920,100 920,280 700,280" />

            {/* Grid lines */}
            <line x1="0" y1="0" x2="1200" y2="800" />
            <line x1="0" y1="800" x2="1200" y2="0" />
            <line x1="0" y1="200" x2="1200" y2="200" />
            <line x1="0" y1="400" x2="1200" y2="400" />
            <line x1="0" y1="600" x2="1200" y2="600" />
            <line x1="200" y1="0" x2="200" y2="800" />
            <line x1="400" y1="0" x2="400" y2="800" />
            <line x1="600" y1="0" x2="600" y2="800" />
            <line x1="800" y1="0" x2="800" y2="800" />
            <line x1="1000" y1="0" x2="1000" y2="800" />

            {/* Circular elements */}
            <circle cx="300" cy="300" r="50" />
            <circle cx="800" cy="500" r="70" />
            <circle cx="150" cy="150" r="30" />
            <circle cx="950" cy="200" r="40" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-300 text-base leading-relaxed max-w-lg font-light">
                The #1 architecture firm in Texas turning dreams into beautiful, functional spaces: from cozy homes to
                innovative designs, we bring your vision to life—one detail at a time. lets create something amazing
                together!
              </p>
            </div>

            {/* Combined Contact Information and Navigation */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-gray-400 font-light text-sm tracking-wider uppercase">PHONE</p>
                </div>
                <p className="text-white text-base">(217) 555-0134</p>
                <p className="text-white text-base">(217) 444-0134</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-400 font-light text-sm tracking-wider uppercase">EMAIL</p>
                </div>
                <p className="text-white text-base">Farhana@dazzlestaging.com</p>
                <p className="text-white text-base">realtywithsun@gmail.com</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  <p className="text-gray-400 font-light text-sm tracking-wider uppercase">ADDRESS</p>
                </div>
                <p className="text-white text-base">123 Main Street, Suite 200, Austin, TX 78701</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  <p className="text-gray-400 font-light text-sm tracking-wider uppercase">OPENING HOURS</p>
                </div>
                <p className="text-white text-base">Mon to Sat: 9.00am - 8.30pm</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <nav className="flex flex-col">
              <a
                href="#"
                className="text-white hover:text-[#cbad8d] transition-colors text-lg font-light flex items-center justify-between group min-w-[180px] py-3 border-b border-gray-700/50"
              >
                Home
                <span className="text-[#cbad8d] opacity-100 text-xl">→</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#cbad8d] transition-colors text-lg font-light flex items-center justify-between group min-w-[180px] py-3 border-b border-gray-700/50"
              >
                Meet the team
                <span className="text-[#cbad8d] opacity-100 text-xl">→</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#cbad8d] transition-colors text-lg font-light flex items-center justify-between group min-w-[180px] py-3 border-b border-gray-700/50"
              >
                Services
                <span className="text-[#cbad8d] opacity-100 text-xl">→</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#cbad8d] transition-colors text-lg font-light flex items-center justify-between group min-w-[180px] py-3 border-b border-gray-700/50"
              >
                Gallery
                <span className="text-[#cbad8d] opacity-100 text-xl">→</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#cbad8d] transition-colors text-lg font-light flex items-center justify-between group min-w-[180px] py-3 border-b border-gray-700/50"
              >
                Testimonials
                <span className="text-[#cbad8d] opacity-100 text-xl">→</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#cbad8d] transition-colors text-lg font-light flex items-center justify-between group min-w-[180px] py-3"
              >
                Contact
                <span className="text-[#cbad8d] opacity-100 text-xl">→</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-16">
          <h3 className="text-white text-xl font-light mb-6">Subscribe to the newsletter</h3>
          <div className="flex gap-4 max-w-md">
            <Input
              type="email"
              placeholder="jane@framer.com"
              className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 focus:border-[#cbad8d] h-12 text-base"
            />
            <Button className="bg-[#cbad8d] hover:bg-[#b8996f] text-black px-8 h-12 text-base font-medium">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-6 mb-20 max-w-3xl">
          <a
            href="#"
            className="flex items-center justify-between text-white hover:text-[#cbad8d] transition-colors group"
          >
            <span className="text-lg font-light">LinkedIn</span>
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              <Linkedin className="w-4 h-4" />
            </div>
          </a>
          <a
            href="#"
            className="flex items-center justify-between text-white hover:text-[#cbad8d] transition-colors group"
          >
            <span className="text-lg font-light">Facebook</span>
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              <Facebook className="w-4 h-4" />
            </div>
          </a>
          <a
            href="#"
            className="flex items-center justify-between text-white hover:text-[#cbad8d] transition-colors group"
          >
            <span className="text-lg font-light">Twitter/X</span>
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              <Twitter className="w-4 h-4" />
            </div>
          </a>
          <a
            href="#"
            className="flex items-center justify-between text-white hover:text-[#cbad8d] transition-colors group"
          >
            <span className="text-lg font-light">Youtube</span>
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              <Youtube className="w-4 h-4" />
            </div>
          </a>
          <a
            href="#"
            className="flex items-center justify-between text-white hover:text-[#cbad8d] transition-colors group"
          >
            <span className="text-lg font-light">Instagram</span>
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              <Instagram className="w-4 h-4" />
            </div>
          </a>
          <a
            href="#"
            className="flex items-center justify-between text-white hover:text-[#cbad8d] transition-colors group"
          >
            <span className="text-lg font-light">Pinterest</span>
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.803 1.604.803 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.003-4.625 4.137 0 .695.366 1.56.949 1.836.096-.083.129-.224.095-.345-.025-.09-.259-1.026-.259-1.026-.087-.36-.018-.808.403-.808 1.171 0 1.961 1.212 1.961 2.706 0 1.719-.937 2.915-2.24 2.915-.777 0-1.33-.47-1.33-1.112 0-.857.675-1.681.675-2.607 0-.601-.32-1.106-.985-1.106-.782 0-1.41.809-1.41 1.892 0 .689.233 1.156.233 1.156s-.793 3.353-.938 3.977c-.161.691-.024 1.627.013 1.712z" />
              </svg>
            </div>
          </a>
        </div>

        {/* Large DAZZLE Branding */}
        <div className="text-center mb-12">
          <h1 className="text-white text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-light tracking-[0.1em] leading-none overflow-hidden">
            DAZZLE
          </h1>
        </div>

        {/* Bottom Links */}
        <div className="flex justify-start space-x-8 text-base">
          <a href="#" className="text-gray-400 hover:text-white transition-colors font-light">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors font-light">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
