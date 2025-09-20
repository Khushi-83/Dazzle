"use client";
import { useRef, useEffect } from "react";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";

const HeroSection = () => {
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
    
  useEffect(() => {
    // Set initial state (prevents hydration mismatch)
    gsap.set(textRef.current, { y: 200, opacity: 0 });
    gsap.set(buttonsRef.current, { y: 200, opacity: 0 });

    // Animate after
    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(buttonsRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="min-h-[150vh] md:min-h-[130vh] flex justify-center  relative py-20 items-center">
      <div >
        <h1 ref={textRef} className="font-medium text-8xl space-x-0.5">
          Style. Staged. Sold
        </h1>
        <div
          ref={buttonsRef}
          className="flex py-8 justify-center gap-10 min-w-1/2 my-4 mx-auto"
        >
          <button className="btn-hover flex p-1 h-12 w-[220px] items-center gap-4 bg-[var(--button-primary)] rounded-sm">
            <span className="arrow bg-[var(--button-secondery)] inline-flex h-full w-1/5 rounded-sm justify-center items-center">
              <ChevronsRight size={20} />
            </span>
            <p className="text-white text-md">Book a Free Consult</p>
          </button>

          <button className=" btn-hover flex p-1 h-12 w-[220px] items-center gap-4 bg-[var(--background)] rounded-sm border border-gray-400">
            <span className="arrow bg-[var(--button-primary)] inline-flex h-full w-1/5 rounded-sm justify-center items-center">
              <ChevronsRight size={20} color="#ffffff" />
            </span>
            <p className="text-[var(--foreground)] text-md">Browse Services</p>
          </button>
        </div>
      </div>

      <div className=" absolute w-full h-full top-0 left-0 -z-1">
        <video
          className="h-full w-full object-cover"
          src="/videos/hero-video.mp4"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
};

export default HeroSection;
