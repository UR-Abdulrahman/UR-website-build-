"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#E8371B] text-white hover:bg-[#FF4D2B] shadow-lg shadow-[#E8371B]/20 hover:shadow-[#E8371B]/30",
  secondary:
    "border border-[#E8371B] text-[#E8371B] hover:bg-[#E8371B]/10 hover:border-[#FF4D2B]",
  ghost:
    "text-white/80 hover:text-white underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  external = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 cursor-pointer select-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
