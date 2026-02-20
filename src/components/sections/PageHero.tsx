import Button from "@/components/ui/Button";

const BOOKING_URL =
  "https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg";

interface PageHeroProps {
  label?: string;
  headline: string;
  subhead?: string;
  cta?: boolean;
  ctaLabel?: string;
}

export default function PageHero({
  label,
  headline,
  subhead,
  cta = true,
  ctaLabel = "Book Your Free Strategy Call",
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0612] to-[#06040A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E8371B]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
        {label && (
          <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-5 animate-fade-in">
            {label}
          </p>
        )}
        <h1 className="text-h1 text-white max-w-4xl mx-auto mb-6 animate-slide-up">
          {headline}
        </h1>
        {subhead && (
          <p
            className="text-white/50 text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {subhead}
          </p>
        )}
        {cta && (
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="primary" size="lg" href={BOOKING_URL} external>
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#06040A] to-transparent pointer-events-none" />
    </section>
  );
}
