"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NotFound() {
  const router = useRouter();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Set initial state for animations
    gsap.set([titleRef.current, textRef.current, buttonRef.current], { 
      y: 50, 
      opacity: 0 
    });

    // Animate elements in sequence
    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2
    });

    gsap.to(buttonRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4
    });
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center"
    >
      <div className="max-w-2xl w-full">
        <h1 
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-9xl font-bold text-[var(--button-primary)] mb-6"
        >
          404
        </h1>
        
        <h2 
          ref={textRef}
          className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-[var(--foreground)]"
        >
          Page Not Found
        </h2>
        
        <p className="text-lg sm:text-xl mb-10 text-[var(--foreground)] opacity-80">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div 
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={goBack}
            className="btn-hover flex p-1 h-12 sm:h-14 w-full sm:w-60 items-center justify-center gap-4 bg-[var(--button-primary)] rounded-sm transition-all duration-300 hover:bg-[var(--button-secondery)]"
          >
            <span className="arrow bg-[var(--button-secondery)] inline-flex h-full w-12 sm:w-14 rounded-sm justify-center items-center">
              ←
            </span>
            <p className="text-white text-base sm:text-lg">Go Back</p>
          </button>
          
          <Link 
            href="/" 
            className="btn-hover flex p-1 h-12 sm:h-14 w-full sm:w-60 items-center justify-center gap-4 bg-[var(--background)] rounded-sm border border-gray-400 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className="arrow bg-[var(--button-primary)] inline-flex h-full w-12 sm:w-14 rounded-sm justify-center items-center">
              ↗
            </span>
            <p className="text-[var(--foreground)] text-base sm:text-lg">Home Page</p>
          </Link>
        </div>
      </div>
    </div>
  );
}