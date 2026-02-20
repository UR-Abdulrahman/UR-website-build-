interface TestimonialCardProps {
  quote: string;
  author: string;
  studio: string;
  studioType: string;
  metric?: string;
}

export default function TestimonialCard({
  quote,
  author,
  studio,
  studioType,
  metric,
}: TestimonialCardProps) {
  return (
    <div className="bg-[#1A1A24] border border-white/5 rounded-2xl p-8 flex flex-col">
      {/* Quote mark */}
      <div className="text-[#E8371B] text-5xl font-serif leading-none mb-4 opacity-60">&ldquo;</div>
      <p className="text-white/70 leading-relaxed flex-1 mb-6 text-sm md:text-base">
        {quote}
      </p>
      <div className="flex items-center justify-between border-t border-white/5 pt-5">
        <div>
          <div className="text-white font-semibold text-sm">{author}</div>
          <div className="text-white/40 text-xs mt-0.5">
            {studio} · {studioType}
          </div>
        </div>
        {metric && (
          <div className="text-right">
            <div className="text-[#E8371B] font-bold text-lg font-[family-name:var(--font-space-grotesk)]">
              {metric}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
