import Image from "next/image";
import { Button, Input, Textarea } from "@/app/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-light text-black mb-6">
              Style.Staged.Sold
            </h1>
            <div className="w-32 h-0.5 bg-black mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/api/placeholder/600/800"
                  alt="Modern Architecture Building"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-left">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Welcome to Dazzle Staging and Design. We handle everything all in one premier
                  fee making every property shine.
                </p>
                <div className="flex gap-4 mb-8">
                  <Button variant="default" size="sm">
                    Learn More
                  </Button>
                  <Button variant="outline" size="sm">
                    View Portfolio
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/api/placeholder/400/300"
                  alt="3D Architecture Wireframe"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg shadow-lg bg-gray-100"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <Image
                    src="/api/placeholder/200/150"
                    alt="Architecture Detail 1"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/api/placeholder/200/150"
                    alt="Architecture Detail 2"
                    width={200}
                    height={150}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <div className="text-center pt-8">
                <Button 
                  className="px-8 py-3 text-sm font-medium tracking-wider"
                  size="lg"
                >
                  EXPLORE MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-4">Explore our Inventory</h2>
          <div className="w-16 h-0.5 bg-gray-800 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item: number) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/api/placeholder/400/300`}
                    alt={`Property ${item}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-20 group-hover:bg-opacity-10 transition duration-300"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-light mb-1 text-white">Modern Residence</h3>
                    <p className="text-gray-300 text-sm">Contemporary Design</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-light mb-6 text-black">Services We Provide</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              
              <div className="space-y-12">
                {[
                  {
                    number: "01",
                    title: "Architectural Design",
                    description: "Complete architectural solutions from concept to construction documentation with meticulous attention to detail."
                  },
                  {
                    number: "02", 
                    title: "Interior Staging",
                    description: "Professional staging services to showcase properties at their finest and maximize market appeal."
                  },
                  {
                    number: "03",
                    title: "3D Visualization",
                    description: "Photorealistic renderings and virtual tours that bring architectural concepts to life."
                  },
                  {
                    number: "04",
                    title: "Project Management", 
                    description: "End-to-end project coordination ensuring timely delivery and exceptional quality standards."
                  },
                  {
                    number: "05",
                    title: "Consultation Services",
                    description: "Expert guidance on design trends, market positioning, and strategic value optimization."
                  },
                  {
                    number: "06",
                    title: "Construction Oversight",
                    description: "Comprehensive quality control and supervision throughout all construction phases."
                  }
                ].map((service: {number: string; title: string; description: string}, index: number) => (
                  <div key={index} className="border-b border-gray-100 pb-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <Image
                          src={`/api/placeholder/120/80`}
                          alt={service.title}
                          width={120}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-2xl font-light text-gray-400">{service.number}</span>
                          <h3 className="text-lg font-medium text-black">{service.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((item: number) => (
                <div key={item}>
                  <Image
                    src={`/api/placeholder/500/120`}
                    alt={`Service ${item}`}
                    width={500}
                    height={120}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image
            src="/api/placeholder/500/400"
            alt="Modern Architecture"
            width={500}
            height={400}
            className="mx-auto mb-12"
          />
          <blockquote className="text-lg mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            &ldquo;Working with the team was transformative. Their vision and expertise brought our
            architectural dreams to life with unparalleled precision and artistic excellence.&rdquo;
          </blockquote>
          <div className="flex justify-center items-center space-x-6">
            <Image
              src="/api/placeholder/50/50"
              alt="Client"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="text-left">
              <p className="font-medium text-sm">ALEX CHEN</p>
              <p className="text-gray-600 text-xs">ARCHITECT & CLIENT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Modern Interior Design"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-6 left-6 bg-white px-4 py-2">
                  <span className="text-xs font-medium tracking-wider">01</span>
                </div>
              </div>
              <div className="pl-8">
                <h3 className="text-xl font-light mb-4 text-black">Contemporary Staging</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Our staging services transform empty spaces into aspirational environments. Each element is meticulously curated to enhance the architectural narrative and emotional connection.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="pl-8">
                <h3 className="text-xl font-light mb-4 text-black">Architectural Innovation</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  From minimalist concepts to bold statements, our design philosophy embraces both functionality and aesthetic excellence. Every project reflects our commitment to timeless design principles.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Architectural Detail"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-6 left-6 bg-white px-4 py-2">
                  <span className="text-xs font-medium tracking-wider">02</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <Image
                src="/api/placeholder/600/500"
                alt="Modern Architectural Space"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-light mb-8">We&apos;re just a short away walk to</h2>
              <h3 className="text-4xl font-light mb-12">our next collaboration</h3>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Name"
                    variant="underline"
                    className="text-gray-700 placeholder-gray-500"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    variant="underline"
                    className="text-gray-700 placeholder-gray-500"
                  />
                  <Input
                    type="text"
                    placeholder="Subject"
                    variant="underline"
                    className="text-gray-700 placeholder-gray-500"
                  />
                  <Textarea
                    placeholder="Message"
                    rows={4}
                    variant="underline"
                    className="text-gray-700 placeholder-gray-500"
                  />
                </div>
                <div className="pt-6">
                  <Button
                    type="submit"
                    variant="outline"
                    className="bg-gray-800 text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-700 border-0"
                    size="lg"
                  >
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}