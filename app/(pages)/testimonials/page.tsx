"use client";

import { Star, Play } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    type: "image",
    image: "/modern-bakery-interior.jpg",
    source: "Google Review",
    rating: 5,
    text: "...better than anything I imagined...",
    fullText:
      "When I first walked into my new bakery, I was speechless. The design team turned my vague dreams into a reality that's better than anything I had imagined.",
    author: "Oliver Dempsey",
    location: "Artisan Baker from Portland",
    authorPhoto: "/reviewer-1.jpg",
  },
  {
    id: 2,
    type: "image",
    image: "/modern-minimalist-living-room.jpg",
    source: "Facebook Review",
    rating: 5,
    text: "...they gave me a sanctuary...",
    fullText:
      "My studio is now my favorite place on Earth, thanks to these brilliant designers.",
    author: "Silas Hoffman",
    location: "Photographer in San Francisco",
    authorPhoto: "/reviewer-2.jpg",
  },
  {
    id: 3,
    type: "image",
    image: "/modern-office-space.jpg",
    source: "Live Review",
    rating: 5,
    text: "...It's vibrant, collaborative, and inspiring...",
    fullText:
      "The office space they created for my startup is nothing short of extraordinary.",
    author: "Caleb Sutton",
    location: "Entrepreneur in Chicago",
    authorPhoto: "/reviewer-3.jpg",
  },
  {
    id: 4,
    type: "image",
    image: "/modern-cafe-interior.jpg",
    source: "Live Review",
    rating: 5,
    text: "...they crafted a community hub...",
    fullText:
      "The team didn’t just build a café for me; they crafted a community hub...",
    author: "Wyatt Kingsley",
    location: "Coffee Roaster from Brooklyn",
    authorPhoto: "/reviewer-4.jpg",
  },
  {
    id: 5,
    type: "photo",
    image: "/monroe-silas.jpg",
    author: "Monroe Silas",
    location: "New York",
  },
  {
    id: 6,
    type: "image",
    image: "/luxury-hotel-lobby.jpg",
    source: "Google Review",
    rating: 5,
    text: "...the space feels like a slice of paradise...",
    fullText:
      "I needed a hotel design that felt luxurious but still approachable...",
    author: "Elias Monroe",
    location: "Hotel Owner in Miami",
    authorPhoto: "/reviewer-6.jpg",
  },
  {
    id: 7,
    type: "image",
    image: "/modern-condo.jpg",
    source: "Google Review",
    rating: 5,
    text: "...My condo now feels like a tech haven...",
    fullText:
      "I wanted a home that matched my personality: sleek, modern, and functional...",
    author: "Finn Gallagher",
    location: "Developer in Austin",
    authorPhoto: "/reviewer-7.jpg",
  },
  {
    id: 8,
    type: "video",
    image: "/testimonial-video-1.jpg",
    author: "Aiden Locke",
    location: "Fitness Studio Owner in Phoenix",
  },
  {
    id: 9,
    type: "image",
    image: "/retail-store.jpg",
    source: "Google Review",
    rating: 5,
    text: "...my customers now stay longer and shop more...",
    fullText:
      "The retail store design completely transformed my business...",
    author: "Levi Morgan",
    location: "Retailer in Denver",
    authorPhoto: "/reviewer-9.jpg",
  },
  {
    id: 10,
    type: "image",
    image: "/school-renovation.jpg",
    source: "Google Review",
    rating: 5,
    text: "...they redefined how education can happen...",
    fullText:
      "Our school’s renovation was handled with such care and thoughtfulness...",
    author: "Rowan Blake",
    location: "Educator in Seattle",
    authorPhoto: "/reviewer-10.jpg",
  },
  {
    id: 11,
    type: "video",
    image: "/testimonial-video-2.jpg",
    author: "Hoffman F.",
    location: "Owner, Miami Beach",
  },
  {
    id: 12,
    type: "image",
    image: "/restaurant-interior.jpg",
    source: "Google Review",
    rating: 5,
    text: "...they come for the vibe...",
    fullText:
      "I wanted my restaurant to feel like an extension of myself...",
    author: "Theo Hartman",
    location: "Restaurateur in Dallas",
    authorPhoto: "/reviewer-12.jpg",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  if (t.type === "photo") {
    return (
      <div className="break-inside-avoid bg-[#F5F1ED] rounded-lg shadow-sm border border-gray-200 flex flex-col items-center p-8 text-center">
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
          <Image src={t.image} alt={t.author} width={112} height={112} />
        </div>
        <h3 className="font-serif text-lg text-gray-900">{t.author}</h3>
        <p className="text-sm text-gray-600">{t.location}</p>
      </div>
    );
  }

  if (t.type === "video") {
    return (
      <div className="break-inside-avoid relative rounded-lg overflow-hidden">
        <Image
          src={t.image}
          alt={t.author}
          width={600}
          height={400}
          className="object-cover w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <Play className="w-12 h-12 text-white" />
        </div>
        <div className="bg-[#F5F1ED] p-4 text-center">
          <p className="font-medium text-sm text-gray-800">{t.author}</p>
          <p className="text-xs text-gray-600">{t.location}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="break-inside-avoid bg-[#F5F1ED] rounded-lg overflow-hidden shadow-sm border border-gray-200 flex flex-col">
      <div className="aspect-[4/3] relative">
        <Image src={t.image} alt={t.text} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        {/* Centered Source & Stars */}
        {t.source && (
          <p className="text-xs uppercase tracking-wide text-gray-500 text-center mb-1">
            {t.source}
          </p>
        )}
        {t.rating > 0 && <StarRating rating={t.rating} />}
        {t.text && (
          <blockquote className="text-gray-900 text-lg font-serif text-center leading-snug mb-3">
            {t.text}
          </blockquote>
        )}
        {t.fullText && (
          <p className="text-gray-700 text-sm leading-relaxed text-center mb-5">
            {t.fullText}
          </p>
        )}
        {/* Reviewer info with photo at bottom */}
        <div className="mt-auto flex items-center justify-center gap-3 pt-4 border-t border-gray-200">
          {t.authorPhoto && (
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={t.authorPhoto}
                alt={t.author}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          )}
          <div className="text-left">
            <p className="font-medium text-gray-800 text-sm">{t.author}</p>
            <p className="text-xs text-gray-600">{t.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center pt-16 pb-12 px-4">
        <h1 className="text-5xl font-serif mb-6 text-gray-900">Testimonials</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Our greatest achievements aren’t just our projects—they’re the
          relationships and trust we’ve built along the way.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
