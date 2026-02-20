import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface Metric {
  label: string;
  value: string;
}

interface CaseStudyCardProps {
  studio: string;
  type: string;
  timeframe: string;
  summary: string;
  metrics: Metric[];
  slug?: string;
  featured?: boolean;
}

export default function CaseStudyCard({
  studio,
  type,
  timeframe,
  summary,
  metrics,
  slug,
  featured = false,
}: CaseStudyCardProps) {
  const content = (
    <div
      className={`bg-[#111118] border border-l-4 border-l-[#E8371B] border-y-white/5 border-r-white/5 rounded-2xl p-8 h-full flex flex-col group hover:bg-[#141420] transition-all duration-300 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-white text-xl font-bold mb-1">{studio}</h3>
          <div className="flex items-center gap-2">
            <Badge label={type} variant="navy" />
            <span className="text-white/30 text-xs">{timeframe}</span>
          </div>
        </div>
        {slug && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-white/20 group-hover:text-[#E8371B] group-hover:translate-x-1 -translate-y-1 transition-all duration-200 flex-shrink-0"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>

      {/* Summary */}
      <p className="text-white/50 text-sm leading-relaxed mb-6">{summary}</p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mt-auto">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white/3 rounded-xl p-4 border border-white/5">
            <div className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-0.5">
              {m.value}
            </div>
            <div className="text-white/40 text-xs">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (slug) {
    return <Link href={`/case-studies#${slug}`} className="block h-full">{content}</Link>;
  }
  return content;
}
