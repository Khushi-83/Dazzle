"use client";

import Image from "next/image";

type BlogCardProps = {
  title: string;
  category: string;
  author: string;
  image?: string;
};

export default function BlogCard({
  title,
  category,
  author,
  image,
}: BlogCardProps) {
  return (
    <article className="flex flex-col md:flex-row border rounded-lg overflow-hidden mb-6 shadow-sm">
      <div className="bg-[#3a2f29] text-white p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-300 mb-4">{category}</p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span aria-hidden>👤</span>
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden>📍</span>
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden>📅</span>
            <span>{year}</span>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 relative h-72 md:h-auto">
        <Image
          src={image || "/blog-sample.jpg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </article>
  );
}
