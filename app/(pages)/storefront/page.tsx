"use client";

import HeroBanner from "@/components/ui/SSHeroBanner";
import CategoryCard from "@/components/ui/CategoryCard";
import MidCategoryCard from "@/components/ui/MidCategoryCard";
import ProductCard from "@/components/ui/SSProductCard";
import FilterSidebar from "@/components/ui/FilterSidebar";

const categories = [
  { name: "Sofas", img: "/images/gallery4.png" },
  { name: "Benches", img: "/images/gallery4.png" },
  { name: "Consoles", img: "/images/gallery4.png" },
  { name: "Side tables", img: "/images/gallery4.png" },
  { name: "Night stands", img: "/images/gallery4.png" },
  { name: "Bedframes", img: "/images/gallery4.png" },
  { name: "Rugs", img: "/images/gallery4.png" },
  { name: "Decor", img: "/images/gallery4.png" },
  { name: "Trees", img: "/images/gallery4.png" },
  { name: "Arm chairs", img: "/images/gallery4.png" },
  { name: "Desks", img: "/images/gallery4.png" },
  { name: "Bar stools", img: "/images/gallery4.png" },
];

const midCategories = [
  { name: "Coffee tables", img: "/images/gallery4.png" },
  { name: "Dining tables", img: "/images/gallery4.png" },
  { name: "Dining chairs", img: "/images/gallery4.png" },
  { name: "Bar tables", img: "/images/gallery4.png" },
];

const products = Array(12).fill({
  name: "Cairo Velvet Sofa",
  desc: "Plush 3-seater in deep green, like new",
  price: "$699",
  img: "/images/sofa-product.jpg",
});

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Categories */}
      <section className="py-10">
        <h2 className="text-center text-3xl font-semibold mb-8">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <CategoryCard key={i} {...cat} />
          ))}
        </div>
      </section>

      {/* Mid Section */}
      <section className="relative bg-gray-100 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
          {midCategories.map((cat, i) => (
            <MidCategoryCard key={i} {...cat} />
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="flex gap-6 max-w-7xl mx-auto px-6 py-12">
        {/* Sidebar */}
        <FilterSidebar />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
}

