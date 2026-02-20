"use client";

import { useRef, useEffect, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

const defaultStats: Stat[] = [
  { value: "$46.3M", label: "Generated for clients" },
  { value: "100+", label: "Studios served" },
  { value: "$3–$6", label: "Average cost per lead" },
  { value: "80%+", label: "Follow-up response rate" },
  { value: "30–40%", label: "Trial-to-member conversion" },
];

export default function StatsBar({ stats = defaultStats }: { stats?: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#111118] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center reveal ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-stat text-white font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs md:text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
