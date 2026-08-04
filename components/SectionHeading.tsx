type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignmentClass = align === "left" ? "text-right" : "text-center";

  return (
    <div className={`mx-auto max-w-3xl ${alignmentClass}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{description}</p>
    </div>
  );
}
