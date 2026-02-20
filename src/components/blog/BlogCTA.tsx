import Button from "@/components/ui/Button";

const BOOKING_URL =
  "https://link.untapped-revenue.com/widget/booking/wTGfHV6q8ftOpa60t0Mg";

interface BlogCTAProps {
  variant?: "mid" | "end";
}

export default function BlogCTA({ variant = "mid" }: BlogCTAProps) {
  if (variant === "mid") {
    return (
      <div className="my-10 p-6 md:p-8 bg-[#E8371B]/8 border border-[#E8371B]/20 rounded-2xl">
        <p className="text-[#E8371B] text-xs font-semibold uppercase tracking-wider mb-2">
          Free Strategy Call
        </p>
        <h3 className="text-white text-xl font-bold mb-3">
          Want results like these for your studio?
        </h3>
        <p className="text-white/50 text-sm mb-5 leading-relaxed">
          In 30 minutes, we&apos;ll map out exactly what it would take to add 25+ new members
          to your studio every month — starting at $197/month.
        </p>
        <Button variant="primary" size="sm" href={BOOKING_URL} external>
          Book Your Free Strategy Call
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-16 p-10 bg-[#111118] border border-white/5 rounded-2xl text-center">
      <p className="text-[#E8371B] text-xs font-semibold uppercase tracking-wider mb-4">
        Ready to grow?
      </p>
      <h3 className="text-white text-2xl font-bold mb-4">
        Let&apos;s Build Your Member Acquisition System
      </h3>
      <p className="text-white/50 text-base mb-8 max-w-md mx-auto leading-relaxed">
        We&apos;ve generated $46.3M for 100+ fitness studios. Book a free strategy call and
        find out what we can do for yours.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="primary" href={BOOKING_URL} external>
          Book a Free Strategy Call
        </Button>
        <Button variant="secondary" href="/case-studies">
          See Real Results
        </Button>
      </div>
    </div>
  );
}
