interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tight?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  tight = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${tight ? "py-16 md:py-20" : "py-24 md:py-32"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">{children}</div>
    </section>
  );
}
