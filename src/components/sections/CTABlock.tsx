import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const BOOKING_URL =
  "https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg";

interface CTABlockProps {
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "accent" | "subtle";
}

export default function CTABlock({
  headline = "Let's Build Your Member Acquisition System",
  subhead = "In 30 minutes, we'll map out exactly what it would take to add 25+ new members to your studio every month.",
  primaryLabel = "Book Your Free Strategy Call",
  secondaryLabel,
  secondaryHref,
  variant = "dark",
}: CTABlockProps) {
  const bg = {
    dark: "bg-[#111118] border border-white/5",
    accent: "bg-gradient-to-r from-[#E8371B]/10 via-[#E8371B]/15 to-[#E8371B]/10 border border-[#E8371B]/25",
    subtle: "bg-[#0D0810] border border-white/5",
  }[variant];

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className={`${bg} rounded-3xl p-10 md:p-16 text-center relative overflow-hidden`}>
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E8371B]/10 rounded-full blur-[60px] pointer-events-none" />

            {/* Proof badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 text-xs text-white/50 font-medium">
              $46.3M generated · 100+ studios · No long-term contract
            </div>

            <h2 className="text-h2 text-white mb-5 relative">{headline}</h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto relative leading-relaxed">
              {subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
              <Button variant="primary" size="lg" href={BOOKING_URL} external>
                {primaryLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button variant="ghost" href={secondaryHref}>
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
