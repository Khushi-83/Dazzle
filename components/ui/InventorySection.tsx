"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InventorySection = () => {
  const products = [
    {
      id: 1,
      title: "Cairo Velvet Sofa",
      description: "Plush 3-seater in deep green, like new",
      price: "$699",
      image: "/images/sofa.png",
      status: "In Stock",
    },
    {
      id: 2,
      title: "Cairo Velvet Sofa",
      description: "Plush 3-seater in deep green, like new",
      price: "$699",
      image: "/images/sofa.png",
      status: "In Stock",
    },
    {
      id: 3,
      title: "Cairo Velvet Sofa",
      description: "Plush 3-seater in deep green, like new",
      price: "$699",
      image: "/images/sofa.png",
      status: "In Stock",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".inventory-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".inventory-card",
          start: "top 80%", // when 80% of viewport hits
        },
      }
    );
  }, []);

  return (
    <section className="bg-[#3d302a] py-16 px-10">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-6xl font-medium text-white">
          Explore our Inventory
        </h2>
        <button className="px-5 py-2 bg-[#dbc2a4] rounded-sm text-[#3d302a] hover:opacity-90 transition">
          See All
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="inventory-card overflow-hidden">
            <div className="relative rounded-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                className="w-full h-[250px] object-cover"
              />
              <span className="absolute top-0 left-0 bg-white text-[#FF2B00] text-xs font-semibold px-3 py-2 rounded-br-lg">
                {product.status}
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {product.title}
              </h3>
              <p className="text-sm text-gray-400">{product.description}</p>
              <p className="mt-3 text-lg text-white">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InventorySection;