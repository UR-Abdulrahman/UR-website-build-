"use client";

import { useEffect, useState } from "react";

const JOTFORM_SCRIPT = "https://form.jotform.com/jsform/252446531988064";
const DISMISSED_KEY = "ur_popup_dismissed";

export default function PopupForm() {
  const [show, setShow] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const dismiss = () => {
    setShow(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) return;
    } catch {
      // ignore
    }

    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setShow(true);
    };

    // 1. Time delay — 30 seconds
    const timer = setTimeout(trigger, 30000);

    // 2. Exit intent (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    // 3. Scroll depth — 50%
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 50) trigger();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Load JotForm script once popup is shown
  useEffect(() => {
    if (!show || scriptLoaded) return;
    const script = document.createElement("script");
    script.src = JOTFORM_SCRIPT;
    script.type = "text/javascript";
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [show, scriptLoaded]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={dismiss}
      />
      {/* Modal */}
      <div className="relative bg-[#111118] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div>
            <p className="text-[#E8371B] text-xs font-semibold uppercase tracking-wider mb-1">
              Free Strategy Session
            </p>
            <h2 className="text-white text-xl font-bold">
              Add 25+ Members This Month
            </h2>
          </div>
          <button
            onClick={dismiss}
            aria-label="Close"
            className="text-white/40 hover:text-white transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        {/* Form container */}
        <div className="p-6" id="jotform-container">
          {!scriptLoaded && (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-[#E8371B] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
