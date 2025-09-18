import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomeGallery = () => {
  return (
    <section className=" py-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Image grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <Image
                src="/images/gallery.png"
                alt="Contemporary apartment building"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Large image with stats overlay */}
            <div className=" relative col-span-2">
              <Image
                src="/images/gallery 2.png"
                alt="Modern residential building"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 pr-16">
                <div className="text-3xl font-bold text-stone-900">800+</div>
                <div className="text-sm text-stone-600">Project images</div>
              </div>
            </div>

            {/* Two smaller images */}
            <div className="relative">
              <Image
                src="/images/gallery 3.png"
                alt="Contemporary apartment building"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/gallery4.png"
                alt="Luxury residential building"
                width={400}
                height={300}
                className="w-full h-38 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 px-6">
            <div className="flex items-center gap-2 text-stone-600 text-sm uppercase tracking-wide">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              Gallery
            </div>

            <h2 className="text-4xl font-medium text-stone-900 leading-tight">
              Do not just take our word for it—see how we turn ideas into
              stunning spaces. Our gallery is full of inspiration for your next
              big project!
            </h2>

            <button className="flex p-1 h-12 w-[200px] items-center gap-4 bg-[var(--button-primary)] rounded-sm">
              <span className="arrow bg-[var(--button-secondery)] inline-flex h-full w-1/6 rounded-sm justify-center items-center">
                <ChevronsRight size={20} />
              </span>
              <p className="text-white text-md">Browse Gallery</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
