import Image from "next/image";
import React from "react";

const TestimonialSecton = () => {
  return (
    <section className="bg-stone-800 py-16 px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* House Image */}
        <div className="mb-8">
          <div className="relative w-64 h-40 mx-auto rounded-lg overflow-hidden">
            <Image
              src="/images/modernhouse.png"
              alt="Modern luxury home"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-white text-lg leading-relaxed mb-8 font-light">
          "We came in with a Pinterest board full of ideas and left with home of
          our dreams! The team made everything so easy, listening to every
          little detail and turning our scattered thoughts into something
          magical."
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-md bg-gray-300 border-2 border-white overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="Client photo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-md bg-gray-300 border-2 border-white overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="Client photo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-md bg-gray-300 border-2 border-white overflow-hidden">
              <Image
                src="/images/hero-image.png"
                alt="Client photo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSecton;
