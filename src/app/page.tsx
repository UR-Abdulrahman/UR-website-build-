import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ProblemSection from "@/components/sections/ProblemSection";
import DifferentiatorsGrid from "@/components/sections/DifferentiatorsGrid";
import CaseStudyCard from "@/components/sections/CaseStudyCard";
import ProcessSteps from "@/components/sections/ProcessSteps";
import PricingTableSection from "@/components/sections/PricingTable";
import TestimonialCard from "@/components/sections/TestimonialCard";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABlock from "@/components/sections/CTABlock";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Untapped Revenue — Done-For-You Fitness Studio Marketing",
  description:
    "We've generated $46.3M for 100+ fitness studios in 17 months. Done-for-you ads, CRM, and AI follow-up starting at $197/month. Book your free strategy call.",
};

const caseStudies = [
  {
    studio: "Shauna's Yoga Studio",
    type: "Yoga",
    timeframe: "4 months",
    summary:
      "Shauna needed more members without discounting her premium yoga brand. We built hyper-targeted campaigns for her ideal client avatars and automated the entire follow-up process.",
    metrics: [
      { label: "First visits generated", value: "537" },
      { label: "New paying members", value: "+129" },
      { label: "Cost per lead", value: "$5.65" },
      { label: "Google reviews", value: "55 → 180" },
    ],
    slug: "shauna-yoga",
  },
  {
    studio: "Dan's Multi-Location Yoga",
    type: "Yoga",
    timeframe: "11 months",
    summary:
      "Dan ran multiple locations and needed scalable systems that could grow with him. We launched dual-channel campaigns and achieved consistent 50% trial-to-membership conversion.",
    metrics: [
      { label: "First visits from ads", value: "1,800+" },
      { label: "New members added", value: "+227" },
      { label: "Cost per lead", value: "<$6" },
      { label: "Single month trials", value: "163" },
    ],
    slug: "dan-yoga",
  },
  {
    studio: "Haley's Fitness Studio",
    type: "Fitness",
    timeframe: "3 months",
    summary:
      "Haley was stuck at 119 members and couldn't break through. Within 90 days we doubled her new member acquisition rate and grew her studio by 85%.",
    metrics: [
      { label: "First visits (3 months)", value: "189" },
      { label: "New members month 1", value: "30" },
      { label: "Total member growth", value: "119 → 219" },
      { label: "Punch pass sales", value: "68" },
    ],
    slug: "haley-fitness",
  },
];

const testimonials = [
  {
    quote:
      "Before Untapped Revenue I was spending $2,000/month on ads and getting 3–4 leads a week that never showed up. Now we're getting 25+ bookings a month and our cost per lead is under $6. The AI follow-up alone is worth every penny.",
    author: "Shauna M.",
    studio: "Yoga Studio Owner",
    studioType: "Yoga",
    metric: "+129 members",
  },
  {
    quote:
      "I've worked with two other agencies before Untapped Revenue. Both of them ran generic ads, blamed the algorithm when results dropped, and asked for more budget. UR actually knows how to fix the algorithm problem. Results have improved every single month.",
    author: "Dan K.",
    studio: "Multi-Location Yoga",
    studioType: "Yoga",
    metric: "+227 members",
  },
  {
    quote:
      "I was skeptical about the $600/month price point because I'd been burned before. Three months in, I've added 100 members and the system basically runs itself. Best marketing investment I've ever made for my studio.",
    author: "Haley R.",
    studio: "Fitness Studio Owner",
    studioType: "Fitness",
    metric: "119 → 219 members",
  },
];

const homeFAQs = [
  {
    question: "How is Untapped Revenue different from a regular marketing agency?",
    answer:
      "We only work with class-based fitness studios — no exceptions. Every system, script, automation, and ad template we've built is engineered specifically for gym and studio owners. We also operate on a completely different pricing model: $197–$600/month vs. the typical $3,000–$7,000/month most agencies charge.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients start seeing leads within the first 48–72 hours of their ad campaigns launching. Clients typically hit 25+ new bookings per month within their first 60–90 days. Your website build takes 1–2 weeks, and your first campaigns launch shortly after.",
  },
  {
    question: "Do I need to commit to a long-term contract?",
    answer:
      "No. All monthly services are month-to-month with no long-term commitment. The only upfront investment is your one-time website build ($997–$1,500). After that, you can add or remove services each month based on your studio's needs.",
  },
  {
    question: "What do I actually have to do after I sign up?",
    answer:
      "Your only job is to show up to trials and close them into memberships. Everything else — ads, follow-up, appointment booking, reporting, strategy — is handled by our team and AI systems. You'll receive weekly automated reports and monthly strategy calls to stay informed.",
  },
  {
    question: "I've been burned by agencies before. How do I know this is different?",
    answer:
      "We understand the skepticism — it's earned. The proof is in documented results: $46.3M generated for 100+ studios in 17 months. We're so confident in our system that we don't require contracts. If we're not delivering, you can walk. We've also built our pricing to be a fraction of what traditional agencies charge, so your risk is low.",
  },
  {
    question: "Do you run ads on Google or just Facebook?",
    answer:
      "We offer Facebook & Instagram ad management starting at $600/month (all-inclusive). Google Ads is an add-on at +$300/month. We also build your website on GoHighLevel with full on-page SEO for organic lead generation from day one.",
  },
  {
    question: "What types of studios do you work with?",
    answer:
      "We work with yoga, Pilates, CrossFit, HIIT, MMA, kickboxing, barre, dance fitness, and similar class-based formats. Studios must have 50+ members and generate $10,000+ monthly revenue. We don't work with big-box gyms, solo personal trainers, or businesses outside the fitness industry.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <DifferentiatorsGrid />

      {/* Case Study Highlights */}
      <SectionWrapper id="results">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Real Results
            </p>
            <h2 className="text-h2 text-white max-w-3xl mx-auto mb-6">
              $46.3M generated. Here&apos;s exactly how.
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Three studios, three different situations, three transformations. Every
              number is pulled from MindBody accounts, CRM pipelines, and ad dashboards.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <AnimateOnScroll key={cs.studio} delay={i * 100}>
              <CaseStudyCard {...cs} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-10">
            <Button variant="secondary" href="/case-studies">
              See All Case Studies →
            </Button>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      <CTABlock
        headline="Ready to add 25+ members per month?"
        subhead="Book a free 30-minute strategy call. We'll map out exactly which service tier makes sense for your studio — no pressure, no pitch."
        variant="accent"
      />

      <ProcessSteps />
      <PricingTableSection />

      {/* Testimonials */}
      <SectionWrapper id="testimonials" className="bg-[#0A0810]">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              What Studio Owners Say
            </p>
            <h2 className="text-h2 text-white max-w-2xl mx-auto">
              From the studios we serve
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.author} delay={i * 100}>
              <TestimonialCard {...t} />
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <FAQAccordion
        faqs={homeFAQs}
        subtitle="If your question isn't here, book a call and we'll answer it in 30 minutes."
      />

      <CTABlock
        headline="Let's Build Your Member Acquisition System"
        subhead="In 30 minutes, we'll map out exactly what it would take to add 25+ new members to your studio every month. No long-term contracts. Fitness studios only."
        secondaryLabel="See Pricing"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  );
}
