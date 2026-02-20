import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServiceCard from "@/components/sections/ServiceCard";
import IdealClient from "@/components/sections/IdealClient";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABlock from "@/components/sections/CTABlock";
import TestimonialCard from "@/components/sections/TestimonialCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Done-for-you fitness studio marketing starting at $197/month. Facebook ads, AI follow-up, CRM, and more — all-inclusive with no long-term contracts.",
};

const services = [
  {
    name: "Base Service",
    price: "$197/mo",
    priceCAD: "$297/mo CAD",
    description: "Website & CRM management — your digital foundation.",
    features: [
      "GoHighLevel website + CRM",
      "Unlimited website changes",
      "Monthly performance reports",
      "Technical GHL support",
      "Website hosting & maintenance",
      "Form and automation management",
    ],
    bestFor:
      "Studios that handle their own lead follow-up and advertising but need a professional website and CRM system.",
  },
  {
    name: "+ AI Follow-Up",
    price: "$297/mo",
    priceCAD: "$447/mo CAD",
    description: "Add AI-powered lead response to your foundation.",
    features: [
      "Everything in Base",
      "1-minute AI response time",
      "24/7 lead coverage",
      "Appointment booking automations",
      "Lead nurturing sequences",
      "Response rate tracking & optimization",
    ],
    bestFor:
      "Studios running their own ads who need professional follow-up to maximize conversions.",
  },
  {
    name: "FB/IG Ads",
    price: "$600/mo",
    priceCAD: "$700/mo CAD",
    tag: "Most Popular",
    description:
      "The complete Self-Sustaining AI Member Accelerator — all-inclusive.",
    features: [
      "Everything in Base + AI Follow-Up",
      "Full ad strategy & execution",
      "Sprint testing (15–20 offers, ~$30 total)",
      "Daily ad optimization",
      "Creative development (Canva)",
      "Reactivation campaigns",
      "Weekly automated performance reports",
      "Monthly Loom/Zoom strategy calls",
    ],
    bestFor:
      "Studios that want completely hands-off marketing and a self-sustaining member acquisition machine.",
    highlighted: true,
  },
  {
    name: "+ Google Ads",
    price: "$900/mo",
    priceCAD: "$1,100/mo CAD",
    description: "Dominate both social and search in your local market.",
    features: [
      "Everything in FB/IG Ads tier",
      "Google search + display campaigns",
      "Keyword research & targeting",
      "Daily campaign optimization",
      "High-intent local search capture",
      "Full reporting & tracking",
    ],
    bestFor:
      "Established studios ready to dominate their local market with both social and search advertising.",
  },
];

const dontDo = [
  "Multiple offers running simultaneously — one powerful, tested offer runs at a time",
  "Custom creative editing beyond Canva templates",
  "Landing page funnels (available as a $300 one-time add-on)",
  "Email sequence writing",
  "Social media content posting or management",
  "Communication with active members or trialers — that relationship is yours",
  "Mindbody/Zenplanner integration management (available on franchise plans)",
];

const comparisonFeatures = [
  { feature: "Monthly Cost (USD)", base: "$197", ai: "$297", fb: "$600", google: "$900" },
  { feature: "Website & GHL Access", base: "✓", ai: "✓", fb: "✓", google: "✓" },
  { feature: "Unlimited Website Changes", base: "✓", ai: "✓", fb: "✓", google: "✓" },
  { feature: "Monthly Reports", base: "✓", ai: "✓", fb: "✓", google: "✓" },
  { feature: "AI Follow-Up System", base: "✗", ai: "✓", fb: "✓", google: "✓" },
  { feature: "24/7 Lead Management", base: "✗", ai: "✓", fb: "✓", google: "✓" },
  { feature: "Facebook/Instagram Ads", base: "✗", ai: "✗", fb: "✓", google: "✓" },
  { feature: "Sprint Testing System", base: "✗", ai: "✗", fb: "✓", google: "✓" },
  { feature: "Creative Development", base: "✗", ai: "✗", fb: "✓", google: "✓" },
  { feature: "Daily Ad Optimization", base: "✗", ai: "✗", fb: "✓", google: "✓" },
  { feature: "Monthly Strategy Calls", base: "✗", ai: "✗", fb: "✓", google: "✓" },
  { feature: "Google Ads Management", base: "✗", ai: "✗", fb: "✗", google: "✓" },
];

const servicesFAQs = [
  {
    question: "Is the website build truly required?",
    answer:
      "Yes — and here's why it matters. Our GoHighLevel website is the foundation that connects your ads, CRM, AI follow-up, and reporting into a single integrated system. Without it, we can't guarantee the results our clients achieve. Think of it like Costco: you pay once for the membership that unlocks wholesale pricing on everything else.",
  },
  {
    question: "How long does the website build take?",
    answer:
      "Typically 7–14 business days. We build it, you review it, we revise until you're satisfied, then we go live. Unlimited adjustments are included during the build process.",
  },
  {
    question: "Can I start with the base plan and add services later?",
    answer:
      "Absolutely. The base plan ($197/month) is designed as your entry point. You can add AI Follow-Up, Facebook Ads, or Google Ads at any time — on a month-to-month basis. Most clients upgrade to the FB/IG Ads tier within their first 1–2 months.",
  },
  {
    question: "What's the contract length?",
    answer:
      "All monthly services are month-to-month. No long-term contracts. The only upfront investment is your website build. After that, you can add, remove, or cancel services any month.",
  },
  {
    question: "Do you manage ad spend directly, or do I need to pay separately?",
    answer:
      "Our management fees cover strategy, execution, optimization, and reporting. Your ad spend (the money Facebook or Google actually charges you) is separate and goes directly to those platforms from your account. Most clients start with $500–$1,500/month in ad spend.",
  },
  {
    question: "What happens if my ads aren't performing?",
    answer:
      "We optimize daily. If an ad or audience isn't performing, we shut it off and test something new — that's what our sprint testing system is built for. On monthly strategy calls, we review everything together and adjust the plan. Our results improve over time, not decline.",
  },
];

const testimonials = [
  {
    quote:
      "I started with just the base plan to test the waters. Within 6 weeks I upgraded to the full ads package. Now I'm getting 30+ new bookings a month and the AI handles all my lead follow-up. It's completely changed how I run my studio.",
    author: "Marcus T.",
    studio: "CrossFit Affiliate Owner",
    studioType: "CrossFit",
    metric: "30+ bookings/month",
  },
  {
    quote:
      "The pricing model makes so much sense. I was paying $4,000/month to an agency that was running the same ads for every client. For $600 all-in, Untapped Revenue has outperformed them in every metric.",
    author: "Lisa P.",
    studio: "HIIT Studio Owner",
    studioType: "HIIT",
    metric: "6.5× ROI",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services & Pricing"
        headline="Done-For-You Marketing, Built For Fitness Studios"
        subhead="No generalist strategies. No junior account managers. Just the exact system that's generated $46.3M for 100+ studios — packaged for maximum flexibility."
      />

      {/* Costco Framing */}
      <SectionWrapper>
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
              How It Works
            </p>
            <h2 className="text-h2 text-white mb-6">The Costco Model for Fitness Marketing</h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Pay a one-time entry fee (your website build at{" "}
              <span className="text-white font-semibold">$997–$1,500 USD</span>) to unlock access
              to our entire suite of services at wholesale pricing. Once you&apos;re in the system,
              you pay only for what you need — and you can add or remove services month to month
              with no long-term contract.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Entry Point */}
        <AnimateOnScroll>
          <div className="mt-12 p-8 md:p-10 bg-[#1A1A24] border border-[#E8371B]/20 rounded-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
              <div className="flex-1">
                <div className="text-[#E8371B] text-xs font-semibold uppercase tracking-wider mb-3">
                  Required Entry Point
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">
                  Website Build — One-Time Investment
                </h3>
                <ul className="space-y-2">
                  {[
                    "Complete website built in GoHighLevel",
                    "On-page SEO optimization from day one",
                    "Full CRM setup, form setup & automation configuration",
                    "A2P 10DLC phone registration",
                    "Mobile-responsive design",
                    "Google Analytics + Search Console setup",
                    "Unlimited adjustments during build",
                    "Integration-ready for all UR systems",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-white/60 text-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 text-center bg-[#06040A] border border-white/10 rounded-2xl p-8">
                <div className="text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-1">
                  $997
                </div>
                <div className="text-white/40 text-sm mb-1">to $1,500 one-time</div>
                <div className="text-[#E8371B] text-xs font-semibold mt-3">
                  Unlocks wholesale monthly pricing
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Service Tier Cards */}
      <SectionWrapper className="bg-[#0A0810]">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
              Monthly Services
            </p>
            <h2 className="text-h2 text-white max-w-2xl mx-auto">
              Choose what you need, add more as you grow
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.name} delay={i * 80}>
              <ServiceCard {...s} />
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper>
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <h2 className="text-h2 text-white mb-4">Full Feature Comparison</h2>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="overflow-x-auto">
            <table className="w-full bg-[#111118] border border-white/5 rounded-2xl overflow-hidden text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-6 py-4 text-white/40 font-medium">Feature</th>
                  {["Base $197", "AI $297", "FB/IG $600", "+ Google $900"].map((h) => (
                    <th key={h} className="px-4 py-4 text-center text-white/60 font-semibold text-xs">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                    <td className="px-6 py-3.5 text-white/60">{row.feature}</td>
                    {[row.base, row.ai, row.fb, row.google].map((val, j) => (
                      <td key={j} className="px-4 py-3.5 text-center">
                        {val === "✓" ? (
                          <span className="text-green-400 font-bold">✓</span>
                        ) : val === "✗" ? (
                          <span className="text-white/20">—</span>
                        ) : (
                          <span className={`font-bold ${j === 2 ? "text-[#E8371B]" : "text-white"}`}>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      <IdealClient />

      {/* What we don't do */}
      <SectionWrapper className="bg-[#0A0810]">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
                Transparency
              </p>
              <h2 className="text-h2 text-white mb-4">What We Don&apos;t Do</h2>
              <p className="text-white/50 text-lg">
                We&apos;d rather tell you upfront than overpromise and underdeliver.
              </p>
            </div>
            <div className="bg-[#111118] border border-white/5 rounded-2xl p-8">
              <ul className="space-y-4">
                {dontDo.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/20 flex-shrink-0 mt-0.5">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <h2 className="text-h2 text-white">What clients say about the pricing</h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.author} delay={i * 100}>
              <TestimonialCard {...t} />
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <FAQAccordion
        faqs={servicesFAQs}
        title="Services FAQ"
        subtitle="Everything you need to know about how our service model works."
      />

      <CTABlock />
    </>
  );
}
