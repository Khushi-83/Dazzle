"use client";
import { useRef, useEffect } from "react";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";

const HeroSection = () => {
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Animate text
    gsap.from(textRef.current, {
      y: 200, // start 50px below
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate buttons with slight delay
    gsap.from(buttonsRef.current, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="min-h-[150vh] md:min-h-[200vh] flex justify-center py-20 relative ">
      <div>
        <h1 ref={textRef} className="font-medium text-7xl space-x-0.5">
          Style. Staged. Sold
        </h1>
        <div
          ref={buttonsRef}
          className="flex py-8 justify-center gap-10 min-w-1/2 my-4 mx-auto"
        >
          <button className="flex p-1 h-12 w-[250px] items-center gap-4 bg-[var(--button-primary)] rounded-sm">
            <span className="arrow bg-[var(--button-secondery)] inline-flex h-full w-1/6 rounded-sm justify-center items-center">
              <ChevronsRight size={20} />
            </span>
            <p className="text-white text-md">Book a Free Consult</p>
          </button>

          <button className="flex p-1 h-12 w-[250px] items-center gap-4 bg-[var(--background)] rounded-sm border border-gray-400">
            <span className="arrow bg-[var(--button-primary)] inline-flex h-full w-1/6 rounded-sm justify-center items-center">
              <ChevronsRight size={20} color="#ffffff" />
            </span>
            <p className="text-[var(--foreground)] text-md">Browse Services</p>
          </button>
        </div>
      </div>

      <div className="bg-image absolute w-full bottom-0 left-0">
        <Image
          src="/images/hero-image.png"
          alt="hero-mage"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;