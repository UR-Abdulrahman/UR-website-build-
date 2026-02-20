"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`text-base font-medium transition-colors ${open ? "text-white" : "text-white/70 group-hover:text-white"}`}>
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center transition-all duration-200 ${
            open ? "bg-[#E8371B] border-[#E8371B] rotate-45" : "bg-transparent group-hover:border-white/20"
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-white/50 leading-relaxed text-sm md:text-base">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion({ faqs, title, subtitle }: FAQAccordionProps) {
  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-[#E8371B] text-sm font-semibold uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="text-h2 text-white mb-4">
              {title ?? "Common questions answered"}
            </h2>
            {subtitle && (
              <p className="text-white/50 text-lg">{subtitle}</p>
            )}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="bg-[#111118] border border-white/5 rounded-2xl px-6 md:px-10">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
