import Button from "@/components/ui/Button";

const BOOKING_URL =
  "https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0612] via-[#06040A] to-[#06040A]" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8371B]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#1E3A5F]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-24 text-center">
        {/* Proof badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/70 text-sm font-medium">
            $46.3M Generated · 100+ Studios · 17 Months
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-hero text-white mb-6 max-w-5xl mx-auto animate-slide-up">
          The{" "}
          <span className="gradient-text">Done-For-You</span>{" "}
          Marketing System Built{" "}
          <em className="not-italic text-[#E8371B]">Exclusively</em>{" "}
          for Fitness Studios
        </h1>

        {/* Subhead */}
        <p
          className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          We handle your ads, CRM, and AI follow-up — so you show up, close trials,
          and grow. Starting at{" "}
          <span className="text-white font-semibold">$197/month.</span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Button variant="primary" size="lg" href={BOOKING_URL} external>
            Book Your Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-1">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <Button variant="secondary" size="lg" href="/case-studies">
            See Real Results
          </Button>
        </div>

        {/* Trust signals */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mt-14 text-white/40 text-sm animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {["No long-term contracts", "Month-to-month", "Fitness studios only", "100% done-for-you"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06040A] to-transparent pointer-events-none" />
    </section>
  );
}
