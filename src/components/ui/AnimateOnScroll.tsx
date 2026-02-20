"use client";

import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "slide-up" | "slide-right";
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const animClass =
    animation === "slide-right" ? "reveal-right" : "reveal";

  return (
    <div ref={ref} className={`${animClass} ${className}`}>
      {children}
    </div>
  );
}
