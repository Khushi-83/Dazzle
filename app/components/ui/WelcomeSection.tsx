"use client";
import { useRef, useEffect } from "react";
import { ChevronsRight, PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WelcomeSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%", // when section top hits 80% of viewport
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(headingRef.current, { y: 200, opacity: 0, scale:0 })
        .from(videoRef.current, { y: 200, opacity: 0 }, "-=0.5")
        .from(textRef.current, { y: 200, opacity: 0 }, "-=0.5")
        .from(buttonRef.current, { y: 200, opacity: 0 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-20 px-15 min-h-[220vh] flex flex-col justify-between second-section"
    >
      <h2 ref={headingRef} className="text-3xl text-center font-[500]">
        Welcome to Dazzle Staging and Design At Dazzle, we&apos;re your all-in-one
        partner for making every property shine.
      </h2>

      <div className="flex justify-between gap-52">
        {/* video section */}
        <div ref={videoRef} className="flex-1 flex flex-col justify-end">
          <div className="video-outer bg-[#EEEAE5] w-full h-[170px] rounded-md p-2 flex gap-5">
            {/* video section play */}
            <div className="flex-1 rounded-md overflow-hidden relative">
              <Image
                src={"/images/2nd sec.png"}
                width={500}
                height={500}
                className="w-full h-full"
                alt="video-image"
              />
              <PlayCircleIcon
                size={50}
                className="absolute z-30 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            {/* text section */}
            <div
              ref={textRef}
              className="flex-1 flex justify-center items-center"
            >
              <p>Take a glimpse into our world of creativity and innovation.</p>
            </div>
          </div>
        </div>

        {/* about section */}
        <div className="flex-1">
          <div className="flex flex-col gap-10" ref={buttonRef}>
            <p className="text-justify">
              At Dazzle, we&apos;re your all-in-one partner for making every property
              shine. Whether it&apos;s a home for sale, a rental ready for market, an
              Airbnb set to wow guests, or a dream space in need of a fresh new
              look. From strategic home staging to full-scale interior design,
              from furniture sourcing to complete rental setups, we handle it
              all — down to the last throw pillow. Our mission is simple: create
              spaces that inspire, impress, and instantly connect with the
              people who walk through the door. If it involves making a property
              look and feel irresistible, we&apos;ve got it covered.
            </p>

            <div>
              <button className="flex p-1 h-12 w-[250px] items-center gap-4 bg-[var(--button-primary)] rounded-sm">
                <span className="arrow bg-[var(--button-secondery)] inline-flex h-full w-1/6 rounded-sm justify-center items-center">
                  <ChevronsRight size={20} />
                </span>
                <p className="text-white text-md">Know About Us</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;