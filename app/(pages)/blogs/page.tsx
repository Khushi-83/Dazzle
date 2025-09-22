"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import api from "@/lib/api";
import BlogFilters from "@/components/ui/BlogFilters";
import BlogCard from "@/components/ui/BlogCard";

type Blog = {
  id: string;
  title: string;
  featuredImage: string;
  content: object;
  author: string;
  createdAt: string;
  updatedAt: string;
};

export default function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filters: string[] = [
    "All",
    "Featured",
    "Design & Inspiration",
    "Tips",
    "Industry Insights",
  ];

  // Fetch blogs from API using axios
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await api.get('/blogs');
        setBlogs(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message || 'Failed to fetch blogs');
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on active filter
  const filteredBlogs = blogs.filter(() => {
    if (activeFilter === "All") return true;
    // You can add more filtering logic here based on your needs
    return true;
  });

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-serif text-center mb-10">Blogs</h1>

      <BlogFilters
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {loading && (
        <div className="text-center py-8">
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-8">
          <p className="text-red-600">Error: {error}</p>
        </div>
      )}

      {!loading && !error && filteredBlogs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No blogs found.</p>
        </div>
      )}

      {!loading && !error && filteredBlogs.length > 0 && (
        <div className="space-y-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      )}
    </main>
  );
}
