import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABlock from "@/components/sections/CTABlock";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Untapped Revenue is a done-for-you marketing agency exclusively serving class-based fitness studios. Learn about our mission, team, and why we're fitness-first.",
};

const stats = [
  { value: "$46.3M", label: "Generated for clients" },
  { value: "100+", label: "Studios served" },
  { value: "10 yrs", label: "Fitness marketing experience" },
  { value: "9.5/10", label: "Client satisfaction" },
];

const values = [
  {
    icon: "🎯",
    title: "Specificity Over Scale",
    description:
      "We deliberately stay small. One industry. One focus. When you speak to everyone, you speak to no one — and that applies to agencies too. We'll never dilute our expertise by serving outside fitness.",
  },
  {
    icon: "📊",
    title: "Results First, Always",
    description:
      "Every decision we make is driven by what the data says. Our sprint testing system, daily optimization, and weekly reporting exist because guessing is expensive — knowing is not.",
  },
  {
    icon: "🤝",
    title: "Transparency Builds Trust",
    description:
      "We tell you what we don't do before you sign up. We show you our benchmarks and hold ourselves to them publicly. We price fairly. Trust is the only foundation worth building on.",
  },
  {
    icon: "⚙️",
    title: "Systems Over Hustle",
    description:
      "A gym owner shouldn't have to grind for leads. An agency shouldn't either. We build systems that run themselves — for our clients and for ourselves — so results compound without burning anyone out.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Untapped Revenue"
        headline="Fitness-Exclusive. Results-Obsessed. 100% Done-For-You."
        subhead="We didn't build a generalist marketing agency. We built the most specialized member acquisition system in the fitness industry."
      />

      {/* Mission */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
                Our Mission
              </p>
              <h2 className="text-h2 text-white mb-6">
                Help 200 gym owners double their memberships — and give them back their time
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
                Most studio owners are doing the job of five people. They teach classes, manage staff,
                handle billing, and somehow try to market their business too. Our mission is to take
                the marketing completely off their plate — so they can run their business like a real
                company instead of wearing every hat in it.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Stats row */}
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="text-center p-6 bg-[#111118] border border-white/5 rounded-2xl"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-1">
                    {s.value}
                  </div>
                  <div className="text-white/40 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      {/* Founder story */}
      <SectionWrapper className="bg-[#0A0810]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-right">
              <div className="bg-[#111118] border border-white/5 rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-[#E8371B]/15 border border-[#E8371B]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">A</span>
                  </div>
                  <p className="text-white font-bold text-lg">Alec</p>
                  <p className="text-white/40 text-sm">Founder, Untapped Revenue</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div>
                <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
                  The Founder
                </p>
                <h2 className="text-h2 text-white mb-6">8 years. Millions in ad spend. One industry.</h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    Alec spent 8 years managing fitness marketing before founding Untapped Revenue —
                    managing millions of dollars in ad spend across yoga studios, CrossFit affiliates,
                    HIIT studios, and franchise networks.
                  </p>
                  <p>
                    He kept seeing the same problem: gym owners getting burned by generalist agencies
                    who ran recycled weight-loss ads, blamed the algorithm when results dropped, and
                    asked for more budget. The issue wasn&apos;t the budget — it was the strategy.
                  </p>
                  <p>
                    Untapped Revenue was built to fix that. A fitness-exclusive agency with systems
                    engineered specifically for class-based studios — and pricing that makes sense.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </SectionWrapper>

      {/* Why fitness-only */}
      <SectionWrapper>
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#E8371B]/5 via-[#E8371B]/10 to-[#E8371B]/5 border border-[#E8371B]/20 rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-h2 text-white mb-6">Why fitness-only?</h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                A generalist agency serves restaurants, e-commerce, and real estate alongside your
                studio. They&apos;ll never truly understand your seasonality, your membership pricing
                models, your MindBody integrations, or what a 30% trial conversion rate actually
                means for your revenue.
              </p>
              <p className="text-white font-semibold text-xl">
                We built Untapped Revenue to be the deepest, not the biggest.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-[#0A0810]">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
              How We Operate
            </p>
            <h2 className="text-h2 text-white max-w-2xl mx-auto">Our values in practice</h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <AnimateOnScroll key={v.title} delay={i * 80}>
              <div className="bg-[#111118] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="text-white text-h3 mb-3">{v.title}</h3>
                <p className="text-white/50 leading-relaxed">{v.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
              The Team
            </p>
            <h2 className="text-h2 text-white max-w-2xl mx-auto mb-4">
              The people behind the results
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              A lean, specialized team — every person focused exclusively on fitness studio growth.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { role: "Ad Strategy & Management", desc: "Sprint testing, daily optimization, creative development, and campaign scaling across all client accounts." },
            { role: "Client Success", desc: "Onboarding, weekly reporting review, monthly strategy calls, and making sure every client hits their growth targets." },
            { role: "CRM & Automations", desc: "AI follow-up systems, GHL management, integrations, and technical support across all platforms." },
          ].map((member, i) => (
            <AnimateOnScroll key={member.role} delay={i * 80}>
              <div className="bg-[#111118] border border-white/5 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8371B]/10 border border-[#E8371B]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-white font-semibold mb-3">{member.role}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <CTABlock
        headline="Ready to work with the most specialized fitness marketing team?"
        subhead="Book a free strategy call. No pitch, no pressure — just a 30-minute conversation to see if we're the right fit."
      />
    </>
  );
}
