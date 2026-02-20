"use client";

interface TagFilterProps {
  tags: string[];
  activeTag: string;
  onTagChange: (tag: string) => void;
}

export default function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...tags].map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag === "All" ? "" : tag)}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
            (tag === "All" && !activeTag) || tag === activeTag
              ? "bg-[#E8371B] text-white shadow-md shadow-[#E8371B]/20"
              : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
