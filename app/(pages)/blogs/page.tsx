"use client";

import { useState } from "react";
import BlogFilters from "@/components/ui/BlogFilters";
import BlogCard from "@/components/ui/BlogCard";

export default function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters: string[] = [
    "All",
    "Featured",
    "Design & Inspiration",
    "Tips",
    "Industry Insights",
  ];

  const blogs = Array.from({ length: 8 }).map((_, i) => ({
    title: "Turning Spaces into Stories: How We Create Meaningful Architecture",
    category: "Commercial – Office",
    author: `James Miller${i > 0 ? ` ${i + 1}` : ""}`,
    location: "Central Business District",
    year: String(2022 + (i % 3)),
    image: "/blog-sample.jpg",
  }));

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-serif text-center mb-10">Blogs</h1>

      <BlogFilters
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}

      <p className="text-sm text-gray-500 mt-6">
        NOTE: Place a sample image at <code>/public/blog-sample.jpg</code> so the
        preview images render correctly.
      </p>
    </main>
  );
}
