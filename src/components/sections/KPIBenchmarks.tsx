import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const kpis = [
  { metric: "Lead Response Speed", target: "1–10 minutes", note: "Industry average: 24+ hours" },
  { metric: "Follow-Up Response Rate", target: "80%+", note: "Most studios get < 30%" },
  { metric: "Booking Rate", target: "65%+", note: "From lead opt-in to booked appointment" },
  { metric: "Show-Up Rate", target: "80%+", note: "From booked appointment to showing up" },
  { metric: "Trial-to-Membership Conversion", target: "30–40%", note: "Industry average: 20–25%" },
  { metric: "Cost Per Lead", target: "$3–$6", note: "Industry average: $15–$30" },
  { metric: "New Bookings Per Month (Goal)", target: "25+", note: "Typically reached within 60 days" },
];

export default function KPIBenchmarks() {
  return (
    <SectionWrapper className="bg-[#0A0810]">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
            Performance Benchmarks
          </p>
          <h2 className="text-h2 text-white max-w-2xl mx-auto">
            What we hold ourselves to
          </h2>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden">
          <div className="hidden md:grid grid-cols-3 px-8 py-4 border-b border-white/5 text-white/30 text-xs font-semibold uppercase tracking-wider">
            <span>Metric</span>
            <span>Our Target</span>
            <span>Benchmark Note</span>
          </div>
          {kpis.map((kpi, i) => (
            <div
              key={kpi.metric}
              className={`flex flex-col md:grid md:grid-cols-3 gap-1 md:gap-0 px-6 md:px-8 py-5 md:py-4 ${
                i % 2 === 0 ? "" : "bg-white/[0.02]"
              } border-b border-white/5 last:border-0`}
            >
              <div className="text-white/70 text-sm">{kpi.metric}</div>
              <div className="text-[#E8371B] font-bold text-base md:text-sm font-[family-name:var(--font-space-grotesk)]">
                {kpi.target}
              </div>
              <div className="text-white/30 text-xs">{kpi.note}</div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
