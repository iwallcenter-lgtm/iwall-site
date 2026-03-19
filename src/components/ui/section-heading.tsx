import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "start" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-bronze">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
