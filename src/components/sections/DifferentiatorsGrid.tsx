import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const differentiators = [
  {
    icon: "🎯",
    title: "Hyper-Specific Audience Targeting",
    description:
      "We build campaigns targeting specific avatars — postpartum moms, men 35–55, Silver Sneakers, busy professionals — with messaging that speaks directly to each group's pain points. Higher intent leads, better algorithm training.",
    stat: "5–8× better lead quality",
  },
  {
    icon: "🔧",
    title: "Algorithmic Bias Solution",
    description:
      "Facebook secretly optimizes your account toward whoever clicks — including low-quality leads. Our Conversion API setup, hyper-specific offers, and lead form filtration reverse this and improve results every single month.",
    stat: "Results improve over time",
  },
  {
    icon: "⚡",
    title: "Sprint Testing System",
    description:
      "We test 15–20 offer variations simultaneously for approximately $30 total — vs. $200–$400 per test with traditional methods. We know what works before we scale, not after burning your budget.",
    stat: "~$30 to find your winner",
  },
  {
    icon: "📡",
    title: "Dual-Channel: Paid + Organic",
    description:
      "Paid ads generate immediate leads while building branded search volume. Organic leads — people who find you through Google — convert 15–25% better than cold ad traffic. We build both simultaneously.",
    stat: "15–25% better organic conversion",
  },
  {
    icon: "🤖",
    title: "100% Hands-Off Execution",
    description:
      "The moment a lead opts in, our AI responds within 60 seconds — asking qualifying questions, handling objections, and booking appointments. Weekly automated reports. Monthly strategy calls. You just close trials.",
    stat: "60-second AI response time",
  },
  {
    icon: "🏋️",
    title: "Fitness-Exclusive Expertise",
    description:
      "We don't serve restaurants, e-commerce, or real estate. Every system, script, automation, and reporting framework is built around one industry. We know your seasonality, pricing models, and MindBody integrations cold.",
    stat: "$46.3M generated in 17 months",
  },
];

export default function DifferentiatorsGrid() {
  return (
    <SectionWrapper id="why-us" className="bg-[#0A0810]">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
            Why Untapped Revenue
          </p>
          <h2 className="text-h2 text-white max-w-3xl mx-auto mb-6">
            The system that gets stronger every month
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Other agencies watch their results collapse after 4–6 weeks. Ours improve
            — and here&apos;s exactly why.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {differentiators.map((d, i) => (
          <AnimateOnScroll key={d.title} delay={i * 80}>
            <div className="bg-[#111118] border border-white/5 rounded-2xl p-8 h-full flex flex-col group hover:border-[#E8371B]/30 transition-all duration-300">
              <span className="text-3xl mb-5">{d.icon}</span>
              <h3 className="text-white text-h3 mb-3 group-hover:text-[#E8371B] transition-colors duration-200">
                {d.title}
              </h3>
              <p className="text-white/50 leading-relaxed mb-6 flex-1">{d.description}</p>
              <div className="mt-auto pt-4 border-t border-white/5">
                <span className="text-[#E8371B] text-sm font-semibold">{d.stat}</span>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
