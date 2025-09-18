"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServicesInfoSection = () => {
  const stepsButtons = [
    "Consultation & Assesment",
    "Proposal & Contract",
    "Designing & Selection",
    "Staging Day",
    "Listing & Showing",
    "Destaging & Wrapup",
  ];

  const stepsData = [
    {
      title: "Consultation & Assessment",
      desc:
        "We start with a FREE detailed consultation, where we assess your space, discuss your goals, and provide expert recommendations on how to enhance your home's marketability.",
      img: "/images/services.png",
    },
    {
      title: "Proposal & Contract",
      desc:
        "We create a customized proposal outlining the scope, timeline, and cost. Once approved, we sign the contract and lock in your project details.",
      img: "/images/services.png",
    },
    {
      title: "Designing & Selection",
      desc:
        "Our design team curates furniture, accessories, and layouts tailored to highlight your property’s strengths.",
      img: "/images/service 2.png",
    },
    {
      title: "Staging Day",
      desc:
        "We bring in all selected items and professionally stage your property to make a stunning first impression.",
      img: "/images/service 3.png",
    },
    {
      title: "Listing & Showing",
      desc:
        "With staging complete, your property is ready to shine in photos, online listings, and during showings.",
      img: "/images/service 4.png",
    },
    {
      title: "Destaging & Wrap-up",
      desc:
        "Once your property is sold or rental terms are complete, we carefully remove all items and leave the home as we found it.",
      img: "/images/services 5.png",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading & paragraph
    gsap.fromTo(
      ".services-heading, .services-subtext",
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 90%",
        },
      }
    );

    // Animate step cards
    gsap.fromTo(
      ".step-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".step-card",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="py-20 px-15 min-h-[220vh] flex relative">
      {/* text section */}
      <div className="flex-1">
        <h2 className="services-heading text-6xl text-black">
          Services We Provide
        </h2>
        <div className="mt-8 sticky top-0">
          <p className="services-subtext interFont font-medium text-4xl mb-4">
            Let’s turn your big ideas into a masterpiece with a clear and fun
            process
          </p>
          {/* buttons */}
          <div className="flex justify-start gap-2">
            {stepsButtons.map((item, index) => (
              <button
                key={index}
                className="stepsButtonHover px-5 py-4 border-1 rounded-md"
              >
                <span>{index + 1}</span> <span>{item}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* steps card section */}
      <div className="flex-1 pt-32">
        <div className="flex items-center relative flex-col gap-10">
          {stepsData.map((item, index) => (
            <div
              className="step-card bg-[#EEEAE5] rounded-lg overflow-hidden max-w-md p-2 sticky top-0"
              key={index}
            >
              {/* Image Section with Overlay */}
              <div className="relative h-64 rounded-md px-10">
                <Image
                  src={item.img}
                  alt="Consultation scene"
                  fill
                  className="object-cover rounded-md"
                />
                {/* Step Number and Title */}
                <div className="absolute bottom-4 left-4 text-white py-2 backdrop-blur-sm w-100 rounded-lg px-5 flex gap-2">
                  <div className="text-sm font-medium opacity-90 mb-1">
                    STEP
                  </div>
                  <div className="flex  items-start gap-3 ">
                    <div className="text-6xl font-bold leading-none interFont">
                      0{index + 1}
                    </div>
                    <div className="text-xl pb-2 interFont mb-auto flex flex-col gap-2 ">
                      <span className="border-t-1 border-t-white w-full inline-block"></span>
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
              {/* Description Section */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesInfoSection;
