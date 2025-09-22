import { ChevronDown } from "lucide-react";

export default function FilterSidebar() {
  const filters = [
    "Categories",
    "Material",
    "Price",
    "Discount",
    "Color",
    "Vibe",
    "Sort by",
  ];

  return (
    <aside className="w-64 hidden md:block">
      <h3 className="font-semibold mb-4 text-lg">Filters</h3>
      <div className="divide-y">
        {filters.map((filter, i) => (
          <button
            key={i}
            className="w-full flex items-center justify-between py-3 text-left hover:bg-gray-50"
          >
            <span>{filter}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        ))}
      </div>
    </aside>
  );
}
