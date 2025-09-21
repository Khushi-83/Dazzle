"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type BlogCardProps = {
  id: string;
  title: string;
  featuredImage: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  content: object;
};

export default function BlogCard({
  id,
  title,
  featuredImage,
  author,
  createdAt,
}: BlogCardProps) {
  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <article className="flex flex-col md:flex-row border rounded-lg overflow-hidden mb-6 shadow-sm">
      <div className="bg-[#3a2f29] text-white p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-300 mb-4">Interior Design Blog</p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span aria-hidden>👤</span>
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden>📅</span>
            <span>{formatDate(createdAt)}</span>
          </div>
          <div className="mt-4">
            <Link href={`/blogs/${id}`}>
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-[#3a2f29] border-white hover:bg-gray-100"
                aria-label={`Read full blog post: ${title}`}
              >
                Open Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 relative h-72 md:h-auto">
        <Image
          src={featuredImage || "/modern-minimalist-living-room-with-dark-wood-and-n.jpg"}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/modern-minimalist-living-room-with-dark-wood-and-n.jpg";
          }}
        />
      </div>
    </article>
  );
}