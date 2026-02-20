import Button from "@/components/ui/Button";

const BOOKING_URL =
  "https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg";

interface ServiceCardProps {
  name: string;
  price: string;
  priceCAD?: string;
  tag?: string;
  description: string;
  features: string[];
  bestFor: string;
  highlighted?: boolean;
}

export default function ServiceCard({
  name,
  price,
  priceCAD,
  tag,
  description,
  features,
  bestFor,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col h-full border transition-all duration-300 ${
        highlighted
          ? "bg-[#1A0A08] border-[#E8371B]/50 shadow-2xl shadow-[#E8371B]/10"
          : "bg-[#111118] border-white/5 hover:border-white/15"
      }`}
    >
      {tag && (
        <div className="absolute -top-3.5 left-8">
          <span className="bg-[#E8371B] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-[#E8371B]/30">
            {tag}
          </span>
        </div>
      )}

      <div className="mb-5 pt-2">
        <h3 className={`text-lg font-bold mb-2 ${highlighted ? "text-[#E8371B]" : "text-white"}`}>
          {name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
            {price}
          </span>
        </div>
        {priceCAD && <div className="text-white/30 text-xs mt-1">{priceCAD}</div>}
      </div>

      <p className="text-white/40 text-sm leading-relaxed mb-6">{description}</p>

      <ul className="space-y-3 flex-1 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0 mt-0.5">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <div className="p-4 bg-white/3 rounded-xl border border-white/5 mb-6">
        <p className="text-white/40 text-xs">
          <span className="text-white/60 font-medium">Best for: </span>
          {bestFor}
        </p>
      </div>

      <Button
        variant={highlighted ? "primary" : "secondary"}
        size="md"
        href={BOOKING_URL}
        external
        className="w-full justify-center"
      >
        Get Started
      </Button>
    </div>
  );
}
