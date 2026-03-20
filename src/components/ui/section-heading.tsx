import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({ eyebrow, title, description, align = "start", tone = "dark" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("mb-4 text-xs font-semibold uppercase tracking-[0.32em]", tone === "light" ? "text-gold" : "text-pine-soft")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-3xl font-semibold tracking-[0.02em] sm:text-4xl", tone === "light" ? "text-white" : "text-pine-deep")}>{title}</h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-7 sm:text-lg", tone === "light" ? "text-white/72" : "text-neutral-600")}>{description}</p>
      ) : null}
    </div>
  );
}
