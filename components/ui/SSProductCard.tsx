import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  name: string;
  desc: string;
  price: string;
  img: string;
  stock?: string;
}

export default function SSProductCard({
  name,
  desc,
  price,
  img,
  stock = "In Stock",
}: ProductCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white relative">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={"/images/gallery4.png"}
          alt={name}
          width={400}
          height={300}
          className="object-cover w-full h-64"
        />

        {/* Top-left icons */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          <button className="bg-black/50 hover:bg-black text-white p-2 rounded-md">
            <ShoppingCart size={16} />
          </button>
          <button className="bg-black/50 hover:bg-black text-white p-2 rounded-md">
            <Heart size={16} />
          </button>
        </div>

        {/* Top-right stock badge */}
        <span className="absolute top-2 right-2 bg-white text-red-500 text-xs font-medium px-2 py-1 rounded">
          {stock}
        </span>

        {/* Watermark (optional, bottom-right) */}
        <span className="absolute bottom-2 right-2 text-white/80 text-xs font-medium">
          STYLED BY DAZZLE
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
        <p className="mt-2 font-bold text-lg">{price}</p>
      </div>
    </div>
  );
}
