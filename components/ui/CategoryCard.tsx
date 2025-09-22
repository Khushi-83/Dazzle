import Image from "next/image";
import { ChevronsRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  img: string;
}

export default function CategoryCard({ name, img }: CategoryCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
      {/* Category Image */}
      <Image
        src={img}
        alt={name}
        width={400}
        height={300}
        className="object-cover w-full h-52"
      />

      {/* Overlay button */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[75%]">
        <button className="flex w-full items-center justify-between px-2 py-1.5 bg-white rounded-md shadow-md group-hover:shadow-lg transition">
          <span className="text-gray-900 text-sm font-medium">{name}</span>
          <span className="bg-black flex h-6 w-6 items-center justify-center rounded-md">
            <ChevronsRight size={16} color="#ffffff" />
          </span>
        </button>
      </div>
    </div>
  );
}
