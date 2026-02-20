import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import StatsBar from "@/components/sections/StatsBar";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import KPIBenchmarks from "@/components/sections/KPIBenchmarks";
import CTABlock from "@/components/sections/CTABlock";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Case Studies & Results",
  description:
    "$46.3M generated for 100+ fitness studios in 17 months. Real results from real studios — yoga, CrossFit, HIIT, and more.",
};

const aggregateStats = [
  { value: "$46.3M", label: "Revenue generated in 17 months" },
  { value: "100+", label: "Studios served" },
  { value: "1,800+", label: "Show-ups in one campaign" },
  { value: "$5.65", label: "Avg cost per lead (Shauna)" },
  { value: "47%", label: "Membership conversion (Dan's organic)" },
];

const caseStudies = [
  {
    id: "shauna-yoga",
    studio: "Shauna's Yoga Studio",
    location: "Canada",
    type: "Yoga",
    timeframe: "4 Months",
    problem:
      "Shauna had a premium yoga studio stuck at 146 members. She'd tried running her own Facebook ads but got low-quality leads who never showed up.",
    solution:
      "We built hyper-targeted campaigns for her ideal client avatars — postpartum moms, women 35–55 seeking community, and beginners wanting a non-intimidating space. Our AI follow-up handled every lead conversation from opt-in to booked class.",
    results: [
      { label: "First visits generated", value: "537" },
      { label: "New paying members", value: "+129" },
      { label: "Member count", value: "146 → 275" },
      { label: "Avg cost per lead", value: "$5.65" },
      { label: "Google reviews", value: "55 → 180" },
      { label: "Timeframe", value: "4 months" },
    ],
  },
  {
    id: "dan-yoga",
    studio: "Dan's Multi-Location Yoga",
    location: "Canada",
    type: "Yoga",
    timeframe: "11 Months",
    problem:
      "Dan ran multiple yoga locations and needed a scalable system that could grow with him without adding operational overhead. Previous agencies ran generic ads with inconsistent results.",
    solution:
      "Dual-channel strategy: paid ads with sprint-tested offers + full SEO-optimized websites that generated compounding organic traffic. AI follow-up handled over 1,000 organic leads with near-perfect response rates.",
    results: [
      { label: "First visits from ads", value: "1,800+" },
      { label: "New members added", value: "+227" },
      { label: "Member count", value: "200 → 427" },
      { label: "Cost per lead", value: "<$6" },
      { label: "Trials in one month", value: "163" },
      { label: "Trial-to-member conv.", value: "50%" },
      { label: "Organic leads (11 months)", value: "1,100" },
      { label: "Organic booking rate", value: "85%" },
      { label: "Organic show-up rate", value: "98%" },
      { label: "Organic membership conv.", value: "47%" },
      { label: "Google reviews", value: "22 → 161" },
      { label: "Punch pass purchases", value: "256" },
    ],
  },
  {
    id: "haley-fitness",
    studio: "Haley's Fitness Studio",
    location: "Canada",
    type: "Fitness",
    timeframe: "3 Months",
    problem:
      "Haley was stuck at 119 members and couldn't break through a growth plateau. She needed a proven system to accelerate member acquisition without discounting.",
    solution:
      "Sprint testing identified the winning offer for her local market within 72 hours. AI-powered follow-up booked 30 new members in her very first month. Full hands-off execution meant Haley only needed to show up and close.",
    results: [
      { label: "First visits (3 months)", value: "189" },
      { label: "New members in month 1", value: "30" },
      { label: "Member count", value: "119 → 219" },
      { label: "Punch pass purchases", value: "68" },
      { label: "Growth rate", value: "+84%" },
      { label: "Timeframe", value: "3 months" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Real Results"
        headline="$46.3M Generated. 100+ Studios Served. See the Proof."
        subhead="Every number is pulled from MindBody accounts, CRM pipelines, and ad dashboards. No projections. No estimates. Documented results only."
      />

      <StatsBar stats={aggregateStats} />

      {/* Case Study Highlights */}
      <SectionWrapper id="highlights">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
              Featured Case Studies
            </p>
            <h2 className="text-h2 text-white max-w-3xl mx-auto">
              Three studios. Three transformations.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { studio: "Shauna's Yoga Studio", type: "Yoga", timeframe: "4 months", summary: "From 146 to 275 members. 537 first visits. $5.65 per lead.", metrics: [{ label: "New members", value: "+129" }, { label: "Cost per lead", value: "$5.65" }, { label: "First visits", value: "537" }, { label: "Google reviews", value: "3.3×" }], slug: "shauna-yoga" },
            { studio: "Dan's Multi-Location Yoga", type: "Yoga", timeframe: "11 months", summary: "From 200 to 427 members. 1,800+ show-ups. 47% organic membership conversion.", metrics: [{ label: "New members", value: "+227" }, { label: "First visits", value: "1,800+" }, { label: "Organic leads", value: "1,100" }, { label: "Organic conv.", value: "47%" }], slug: "dan-yoga" },
            { studio: "Haley's Fitness Studio", type: "Fitness", timeframe: "3 months", summary: "From 119 to 219 members. 30 new members in month one alone.", metrics: [{ label: "New members", value: "+100" }, { label: "Month 1 members", value: "30" }, { label: "Growth rate", value: "+84%" }, { label: "First visits", value: "189" }], slug: "haley-fitness" },
          ].map((cs, i) => (
            <AnimateOnScroll key={cs.studio} delay={i * 100}>
              <CaseStudyCard {...cs} />
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <CTABlock
        headline="Ready to be our next case study?"
        subhead="Book a free strategy call. We'll tell you exactly what we'd do for your studio — and what results you can realistically expect."
        variant="accent"
      />

      {/* Detailed case studies */}
      <SectionWrapper>
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-h2 text-white">Detailed Breakdowns</h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-10">
          {caseStudies.map((cs, i) => (
            <AnimateOnScroll key={cs.id} delay={i * 80}>
              <div id={cs.id} className="bg-[#111118] border border-white/5 rounded-2xl p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <h3 className="text-white text-2xl font-bold">{cs.studio}</h3>
                  <Badge label={cs.type} variant="navy" />
                  <Badge label={cs.location} variant="muted" />
                  <Badge label={cs.timeframe} variant="accent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <p className="text-[#E8371B] text-xs font-semibold uppercase tracking-wider mb-2">
                      The Problem
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <p className="text-[#E8371B] text-xs font-semibold uppercase tracking-wider mb-2">
                      Our Solution
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <p className="text-[#E8371B] text-xs font-semibold uppercase tracking-wider mb-3">
                      Key Results
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {cs.results.map((r) => (
                        <div key={r.label} className="bg-white/3 border border-white/5 rounded-xl p-3">
                          <div className="text-white font-bold text-base font-[family-name:var(--font-space-grotesk)]">
                            {r.value}
                          </div>
                          <div className="text-white/40 text-xs mt-0.5">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <KPIBenchmarks />

      {/* Video testimonials placeholder */}
      <SectionWrapper className="bg-[#0A0810]">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
              Video Testimonials
            </p>
            <h2 className="text-h2 text-white max-w-2xl mx-auto">
              Hear it directly from studio owners
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <AnimateOnScroll key={n} delay={n * 80}>
              <div className="bg-[#111118] border border-white/5 rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:border-white/15 transition-colors">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#E8371B]/15 border border-[#E8371B]/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#E8371B]/25 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#E8371B] ml-1">
                      <path d="M8 5.14v14l11-7-11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white/30 text-xs">Studio Owner Testimonial {n}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll>
          <p className="text-center text-white/20 text-sm mt-6">
            Video testimonials coming soon — visit{" "}
            <a
              href="https://untapped-revenue.com/case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 underline underline-offset-2 transition-colors"
            >
              untapped-revenue.com/case-studies
            </a>{" "}
            for our full video library.
          </p>
        </AnimateOnScroll>
      </SectionWrapper>

      <CTABlock />
    </>
  );
}
