import Image from "next/image";
import { FileText } from "lucide-react";

export default function VacantHomeStagingPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-12">
      {/* Quote Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Quote Icon */}
          <div className="text-[#d4af37] lg:-mt-8">
            
          </div>
          
          
          {/* Right Quote Icon */}
          <div className="text-[#d4af37] lg:-mt-8">
            
          </div>
        </div>
      </div>

      {/* Title and Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Sidebar */}
        <div>
          <h1 className="text-2xl mb-6">Vacant Home Staging</h1>
          <div className="bg-[#3A2D28] text-white rounded-md p-6 mt-10 shadow-sm w-fit">
            <h2 className="text-xl mb-4">Explore Services</h2>
            <ul className="space-y-2 text-base">
              <li className="flex items-center border-b border-neutral-500 pb-2">
                <FileText className="w-4 h-4 mr-2 text-white" />
                <span>Vacant Home Staging Page</span>
              </li>
              <li className="border-b border-neutral-500 pb-2">
                Occupied Home Staging Page
              </li>
              <li className="border-b border-neutral-500 pb-2">
                Rental Home Staging Page
              </li>
              <li className="border-b border-neutral-500 pb-2">
                Airbnb Home Furnishing Page
              </li>
              <li className="border-b border-neutral-500 pb-2">
                Commercial Staging Page
              </li>
              <li>Interior Design Page</li>
            </ul>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <Image
            src="/images/gallery4.png"
            alt="Vacant Home Staging"
            width={700}
            height={500}
            className="rounded-xl object-cover w-full"
          />
        </div>
      </div>

      {/* Restructured Section - Process on right, Main description and Contact text on left */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Contact Text */}
        <div>
          
        </div>

        {/* Right Side - Main Description and Process Section */}
        <div>
          <div className="max-w-xl mb-8">
            <p className="text-lg leading-relaxed">
              Turn an empty house into a stunning, move-in-ready dream home! We bring in
              stylish furniture and décor to create warmth, character, and a space buyers
              can&#39;t resist. With expert design, we help potential buyers emotionally
              connect, leading to faster sales and higher offers.
            </p>
          </div>
          
          <div className="bg-[#D1C7BD] p-8 rounded-xl">
            <h2 className="text-xl mb-6">Our Vacant Staging Process</h2>
            <p className="text-sm leading-relaxed mb-4">
              At Dazzle Staging and Design, we make home staging seamless and stress-free
              with our proven step-by-step process designed to maximize your home&#39;s appeal
              and value.
            </p>
            <ol className="list-decimal list-inside space-y-4 text-sm leading-relaxed">
              <li>
                <span className="font-medium">Consultation &amp; Assessment:</span> We start
                with a FREE detailed consultation, where we assess your space, discuss
                your goals, and provide expert recommendations on how to enhance your
                home&#39;s marketability.
              </li>
              <li>
                <span className="font-medium">Proposal &amp; Contract:</span> After the
                consultation, we present a custom staging plan tailored to your property
                and target buyers. Once approved, we finalize the contract and schedule
                your staging date.
              </li>
              <li>
                <span className="font-medium">Design &amp; Selection:</span> Our team carefully
                selects furniture, décor, and accessories to highlight your home&#39;s best
                features, ensuring it feels warm, inviting, and irresistible to buyers.
              </li>
              <li>
                <span className="font-medium">Staging Day:</span> We bring in our curated
                pieces and transform your home, setting up each space strategically to
                create a lasting impression that attracts serious buyers.
              </li>
              <li>
                <span className="font-medium">Listing &amp; Showings:</span> With your staged
                home professionally photographed and listed, it&#39;s now ready for showings.
                Our staging helps potential buyers connect emotionally and see themselves
                living in the space.
              </li>
              <li>
                <span className="font-medium">De-Staging &amp; Wrap-Up:</span> Once your home
                sells or your staging term ends, we carefully remove all rented furniture
                and décor, leaving the space as it was—or ready for the next step in your
                journey.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Contact Section - Restructured with image as background of form on right side */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Empty white space */}
        <div className="bg-white min-h-[800px]"></div>

        {/* Right Side - Background image with form on top */}
        <div className="relative min-h-[600px]">
          {/* Background Image - Full container */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Image
              src="/images/service 2.png"
              alt="Staging Contact"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Contact Form - Positioned on top of image, smaller than image */}
          <div className="absolute top-16 left-16 w-2/3">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We&#39;re just a form away—send us your question, and we&#39;ll be happy to help!
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-md p-3 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded-md p-3 text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md p-3 text-sm"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-3 text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D1B9A3] text-black py-3 rounded-md font-medium hover:bg-[#c2a892] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}