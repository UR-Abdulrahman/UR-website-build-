import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const problems = [
  {
    icon: "🎯",
    title: "Generic 'weight loss' ads that attract broke leads",
    description:
      "Most agencies run the same recycled playbook: broad ads targeting everyone in your city. The result? Low-quality leads who never show up and never convert.",
  },
  {
    icon: "📉",
    title: "The algorithmic death spiral",
    description:
      "Every low-quality click trains Facebook to find more people just like them. Within weeks, your ad account is broken — and most agencies have no idea it's happening.",
  },
  {
    icon: "🤷",
    title: "Agencies who don't know fitness",
    description:
      "Generalist agencies serving 12 different industries will never understand your seasonality, membership models, MindBody integrations, or trial conversion benchmarks.",
  },
  {
    icon: "💸",
    title: "Paying $3K–$7K/month for junior account managers",
    description:
      "Traditional agencies charge premium prices and deliver a generic strategy managed by someone who's never set foot in a fitness studio.",
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
            The Real Problem
          </p>
          <h2 className="text-h2 text-white max-w-3xl mx-auto mb-6">
            Why generic agencies keep burning gym owners
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            You&apos;ve probably been burned before. Here&apos;s exactly why — and why
            it&apos;s not your fault.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <AnimateOnScroll key={p.title} delay={i * 100}>
            <div className="bg-[#111118] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors duration-300">
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="text-white text-h3 mb-3">{p.title}</h3>
              <p className="text-white/50 leading-relaxed">{p.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Bridge */}
      <AnimateOnScroll>
        <div className="mt-16 text-center p-8 md:p-12 bg-gradient-to-r from-[#E8371B]/5 via-[#E8371B]/10 to-[#E8371B]/5 border border-[#E8371B]/20 rounded-2xl">
          <p className="text-white/60 text-lg italic mb-2">
            &ldquo;When you speak to everyone, you speak to no one.&rdquo;
          </p>
          <p className="text-white font-semibold text-xl">
            That&apos;s why Untapped Revenue was built fitness-first — and fitness only.
          </p>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
