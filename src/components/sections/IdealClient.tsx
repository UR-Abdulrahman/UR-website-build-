import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const workWith = [
  "Class-based fitness studios: yoga, Pilates, CrossFit, HIIT, MMA, kickboxing, barre, dance fitness",
  "Studios charging $100+/month for membership (premium positioning)",
  "Generating $10,000+ in monthly revenue",
  "50+ active members — established, not brand-new start-ups",
  "Owners too busy running their business to run their marketing",
  "Owners burned by generic agencies with no fitness expertise",
];

const dontWorkWith = [
  "Brand-new studios with fewer than 50 members or under $10K monthly revenue",
  "Big-box gyms and franchises with in-house marketing teams",
  "Personal trainers or solo operators without a physical studio",
  "Any fitness business outside the class-based studio model",
];

export default function IdealClient() {
  return (
    <SectionWrapper id="who-we-work-with">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
            Who This Is For
          </p>
          <h2 className="text-h2 text-white max-w-3xl mx-auto">
            We&apos;re selective — and that&apos;s a good thing
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Work with */}
        <AnimateOnScroll>
          <div className="bg-[#111118] border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-400">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold">Who We Work With</h3>
            </div>
            <ul className="space-y-3">
              {workWith.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-green-400 flex-shrink-0 mt-0.5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Don't work with */}
        <AnimateOnScroll delay={100}>
          <div className="bg-[#111118] border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/15 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-red-400">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold">Who We Don&apos;t Work With</h3>
            </div>
            <ul className="space-y-3">
              {dontWorkWith.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-red-400 flex-shrink-0 mt-0.5">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/3 rounded-xl border border-white/5">
              <p className="text-white/40 text-xs leading-relaxed">
                This specificity is how we deliver results. We only take on studios where
                we&apos;re confident we can generate 25+ new bookings per month.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
