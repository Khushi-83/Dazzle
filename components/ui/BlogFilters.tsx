"use client";

type BlogFiltersProps = {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function BlogFilters({
  filters,
  activeFilter,
  onFilterChange,
}: BlogFiltersProps) {
  return (
    <div className="flex items-center gap-3 mb-6 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
          className={cn(
            "px-4 py-2 border rounded-md text-sm font-medium transition",
            activeFilter === filter
              ? "bg-black text-white border-black"
              : "bg-white text-black border-gray-300 hover:bg-gray-100"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
