import Image from "next/image";

interface MidCategoryCardProps {
  name: string;
  img: string;
}

export default function MidCategoryCard({ name, img }: MidCategoryCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition">
      <Image
        src={img}
        alt={name}
        width={400}
        height={300}
        className="object-cover w-full h-40"
      />
      <div className="p-2 text-center font-medium">{name}</div>
    </div>
  );
}
