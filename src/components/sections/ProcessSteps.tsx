import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Book a Free Strategy Call",
    description:
      "We learn about your studio, current member count, goals, and what's worked or hasn't. If we're a fit, we map out exactly which service tier makes sense for your situation.",
  },
  {
    number: "02",
    title: "Website Build & System Setup (Days 1–14)",
    description:
      "We build your GoHighLevel website from scratch — fully branded, SEO-optimized, and integrated with your CRM and follow-up automations. You review, approve, and go live.",
  },
  {
    number: "03",
    title: "Sprint Testing & Ad Launch",
    description:
      "15–20 color-block offer variations tested simultaneously for ~$30 total. Within 48–72 hours we know exactly which offer your local market responds to. That winner becomes your campaign.",
  },
  {
    number: "04",
    title: "AI Follow-Up Handles Everything",
    description:
      "The moment a lead opts in, our AI responds within 60 seconds — asking qualifying questions, handling objections, and booking appointments directly into your calendar.",
  },
  {
    number: "05",
    title: "Weekly Reports. You Show Up & Close.",
    description:
      "Every week you receive an automated performance report tracking leads, responses, bookings, show-ups, and conversions. Monthly strategy calls keep you in the loop. Everything else is handled.",
  },
  {
    number: "06",
    title: "Scale What's Working",
    description:
      "Once your campaign consistently hits 25+ bookings per month, we scale ad spend by 20–30% every 3 days — growing volume without disrupting the algorithm. Most clients hit their targets within 60–90 days.",
  },
];

export default function ProcessSteps() {
  return (
    <SectionWrapper id="how-it-works">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-h2 text-white max-w-3xl mx-auto mb-6">
            From sign-up to 25+ bookings per month
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Most clients hit their revenue targets within 60–90 days. Here&apos;s exactly
            how we get there.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="relative">
        {/* Vertical line (desktop) */}
        <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-white/5" />

        <div className="space-y-8">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimateOnScroll key={step.number} delay={i * 80} animation={isEven ? "slide-right" : "slide-up"}>
                <div className={`flex flex-col lg:flex-row gap-6 lg:gap-12 items-start ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className="lg:w-1/2 bg-[#111118] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                    <div className="text-[#E8371B]/40 text-sm font-mono font-bold mb-2">{step.number}</div>
                    <h3 className="text-white text-h3 mb-3">{step.title}</h3>
                    <p className="text-white/50 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Center number dot */}
                  <div className="hidden lg:flex w-12 flex-col items-center justify-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#E8371B] flex items-center justify-center text-white text-xs font-bold font-[family-name:var(--font-space-grotesk)] shadow-lg shadow-[#E8371B]/30">
                      {i + 1}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
