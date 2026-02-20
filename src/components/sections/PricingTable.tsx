import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const BOOKING_URL =
  "https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg";

interface Tier {
  name: string;
  price: string;
  priceCAD?: string;
  tag?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Base Service",
    price: "$197/mo",
    priceCAD: "$297 CAD",
    description: "Website & CRM management — your digital foundation.",
    features: [
      "GoHighLevel website + CRM",
      "Unlimited website changes",
      "Monthly performance reports",
      "Technical GHL support",
      "Website hosting & maintenance",
    ],
  },
  {
    name: "+ AI Follow-Up",
    price: "$297/mo",
    priceCAD: "$447 CAD",
    description: "Add AI-powered lead follow-up to your foundation.",
    features: [
      "Everything in Base",
      "1-minute AI response time",
      "24/7 lead coverage",
      "Appointment booking automations",
      "Lead nurturing sequences",
    ],
  },
  {
    name: "FB/IG Ads",
    price: "$600/mo",
    priceCAD: "$700 CAD",
    tag: "Most Popular",
    description: "The complete Self-Sustaining AI Member Accelerator — all-inclusive.",
    features: [
      "Everything above (all-inclusive)",
      "Full ad strategy + execution",
      "Daily ad optimization",
      "Creative development (Canva)",
      "Sprint testing system",
      "Weekly automated reports",
      "Monthly strategy calls (Loom/Zoom)",
    ],
    highlighted: true,
  },
  {
    name: "+ Google Ads",
    price: "$900/mo",
    priceCAD: "$1,100 CAD",
    description: "Dominate both social and search in your local market.",
    features: [
      "Everything in FB/IG Ads",
      "Google search + display campaigns",
      "Keyword research & targeting",
      "Daily campaign optimization",
      "Performance tracking & reporting",
    ],
  },
];

export function PricingTableSection() {
  return (
    <SectionWrapper id="pricing" className="bg-[#0A0810]">
      <AnimateOnScroll>
        <div className="text-center mb-6">
          <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
            Simple, Transparent Pricing
          </p>
          <h2 className="text-h2 text-white max-w-3xl mx-auto mb-4">
            The Costco model for fitness marketing
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Pay one-time for your website build ($997–$1,500) to unlock wholesale
            monthly pricing. No long-term contracts. Add or remove services anytime.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Entry point */}
      <AnimateOnScroll>
        <div className="mb-10 p-6 md:p-8 bg-[#1A1A24] border border-[#E8371B]/20 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div>
            <div className="text-[#E8371B] text-xs font-semibold uppercase tracking-wider mb-2">Required Entry Point</div>
            <h3 className="text-white text-xl font-bold mb-1">Website Build — One-Time Investment</h3>
            <p className="text-white/50 text-sm">Full GoHighLevel site, SEO, mobile-responsive, CRM integrated, automations, A2P setup.</p>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">$997</div>
            <div className="text-white/40 text-sm">— $1,500 one-time</div>
          </div>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((tier, i) => (
          <AnimateOnScroll key={tier.name} delay={i * 80}>
            <div
              className={`rounded-2xl p-6 h-full flex flex-col relative border transition-all duration-300 ${
                tier.highlighted
                  ? "bg-[#1A0A08] border-[#E8371B]/40 shadow-xl shadow-[#E8371B]/10"
                  : "bg-[#111118] border-white/5 hover:border-white/10"
              }`}
            >
              {tier.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E8371B] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-[#E8371B]/30">
                    {tier.tag}
                  </span>
                </div>
              )}
              <div className="mb-4 pt-2">
                <h3 className={`text-sm font-semibold mb-2 ${tier.highlighted ? "text-[#E8371B]" : "text-white/60"}`}>
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                  {tier.price}
                </div>
                {tier.priceCAD && (
                  <div className="text-white/30 text-xs mt-1">{tier.priceCAD}</div>
                )}
              </div>
              <p className="text-white/40 text-sm mb-5 leading-relaxed">{tier.description}</p>
              <ul className="space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  variant={tier.highlighted ? "primary" : "secondary"}
                  size="sm"
                  href={BOOKING_URL}
                  external
                  className="w-full justify-center"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll>
        <p className="text-center text-white/30 text-sm mt-8">
          Not ready yet?{" "}
          <a href="/services" className="text-white/50 hover:text-white underline underline-offset-2 transition-colors">
            See the full service comparison →
          </a>
        </p>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}

export default PricingTableSection;
