"use client";

interface BlogSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="relative">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <input
        type="text"
        placeholder="Search posts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#111118] border border-white/10 rounded-full pl-11 pr-5 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#E8371B]/50 transition-colors"
      />
    </div>
  );
}
