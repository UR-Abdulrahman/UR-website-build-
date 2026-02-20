import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description:
    "Book a free 30-minute strategy call with Untapped Revenue. We'll map out exactly what it would take to add 25+ new members to your fitness studio every month.",
};

const BOOKING_URL =
  "https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg";

const stats = [
  { value: "$46.3M", label: "Generated for clients" },
  { value: "100+", label: "Studios served" },
  { value: "17 mos", label: "Track record" },
];

const steps = [
  {
    number: "1",
    title: "Book your 30-minute call",
    description: "Pick a time that works for you. No prep required.",
  },
  {
    number: "2",
    title: "We map out your growth plan",
    description:
      "We'll ask about your studio, your current situation, and your goals — then show you exactly which service tier makes sense and what results you can realistically expect.",
  },
  {
    number: "3",
    title: "You decide if we're a fit",
    description:
      "No pressure. No pitch. If we're right for each other, we'll outline next steps. If we're not, we'll tell you honestly.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0612] to-[#06040A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E8371B]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in">
            Free Strategy Session
          </p>
          <h1 className="text-h1 text-white mb-6 animate-slide-up">
            Let&apos;s Build Your Member Acquisition System
          </h1>
          <p className="text-white/50 text-xl leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            In 30 minutes, we&apos;ll map out exactly what it would take to add 25+ new members
            to your studio every month — starting at $197/month, no long-term contract.
          </p>

          {/* Credibility stats */}
          <div className="flex flex-wrap gap-6 justify-center mb-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                  {s.value}
                </div>
                <div className="text-white/30 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect + calendar */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: What happens */}
          <AnimateOnScroll animation="slide-right">
            <div>
              <h2 className="text-h2 text-white mb-8">What happens on the call</h2>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <div className="w-10 h-10 rounded-full bg-[#E8371B] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-[#E8371B]/20">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[#111118] border border-white/5 rounded-2xl">
                <p className="text-white/60 text-sm leading-relaxed">
                  <span className="text-white font-semibold">Who this call is for:</span>{" "}
                  Class-based fitness studio owners (yoga, Pilates, CrossFit, HIIT, MMA) with 50+
                  members generating $10K+/month who want to grow without running their own
                  marketing.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 text-white/30 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                No long-term contracts — month-to-month on all services
              </div>
              <div className="mt-2 flex items-center gap-3 text-white/30 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Fitness studios only — no generalist strategy
              </div>
              <div className="mt-2 flex items-center gap-3 text-white/30 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                100% done-for-you — you just close trials
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Calendar embed */}
          <AnimateOnScroll>
            <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h3 className="text-white font-semibold">Schedule Your Free Strategy Call</h3>
                <p className="text-white/40 text-sm mt-1">30 minutes · Free · No commitment</p>
              </div>
              <div className="p-2">
                <iframe
                  src={BOOKING_URL}
                  className="w-full min-h-[600px] rounded-xl"
                  title="Book a Strategy Call with Untapped Revenue"
                  frameBorder="0"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>
    </>
  );
}
