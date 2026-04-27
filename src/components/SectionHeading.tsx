type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center" | "right";
  tone?: "dark" | "light";
  showTitleStroke?: boolean;
  isArabic?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  showTitleStroke = false,
  isArabic = false,
}: SectionHeadingProps) {
  const eyebrowClass = tone === "light"
    ? "text-[#00f5ff] drop-shadow-[0_0_8px_rgba(0,245,255,0.4)]"
    : "text-[#0ea5e9]";
  const titleClass = tone === "light" 
    ? "text-white" 
    : "bg-gradient-to-br from-[#0ea5e9] via-[#00f5ff] to-[#0ea5e9] bg-clip-text text-transparent";

  const descriptionClass = tone === "light" ? "text-[#94a3b8]" : "text-slate-600";

  const alignmentClass =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : align === "right"
        ? "ml-auto max-w-3xl text-right"
        : "mr-auto max-w-3xl text-left";

  return (
    <div className={alignmentClass}>
      <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-pretty text-2xl font-black leading-tight sm:text-3xl lg:text-4xl pb-2 ${titleClass} ${isArabic ? "" : "tracking-tight"}`}
      >
        {title}
      </h2>
      {showTitleStroke ? (
        <div className={`mt-3 ${align === "center" ? "mx-auto w-28" : "w-24"}`}>
          <svg viewBox="0 0 120 24" className="h-3.5 w-full" aria-hidden="true">
            <path
              d="M8 16c20-4 36-5 52-3 16 2 32 1 52-4"
              fill="none"
              stroke="#00f5ff"
              strokeLinecap="round"
              strokeWidth="4"
              className="drop-shadow-[0_0_5px_rgba(0,245,255,0.5)]"
            />
          </svg>
        </div>
      ) : null}
      <p className={`mt-4 max-w-2xl text-base leading-8 sm:text-lg ${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}
