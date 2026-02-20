interface BadgeProps {
  label: string;
  variant?: "accent" | "muted" | "navy" | "outline";
  className?: string;
}

const variantClasses = {
  accent: "bg-[#E8371B]/15 text-[#E8371B] border border-[#E8371B]/30",
  muted: "bg-white/5 text-white/60 border border-white/10",
  navy: "bg-[#1E3A5F]/40 text-blue-300 border border-blue-800/50",
  outline: "border border-white/20 text-white/70",
};

export default function Badge({ label, variant = "muted", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
