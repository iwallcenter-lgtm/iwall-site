import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  href: string;
  label: string;
  tagline?: string;
  compact?: boolean;
  tone?: "dark" | "light";
};

export function Logo({ href, label, tagline, compact = false, tone = "dark" }: LogoProps) {
  return (
    <Link href={href} className="inline-flex min-w-0 items-start whitespace-nowrap">
      <div className="flex min-w-0 flex-col">
        <span
          className={cn(
            "font-semibold",
            tone === "light" ? "text-white" : "text-ink",
            compact ? "text-sm tracking-[0.24em]" : "text-lg tracking-[0.24em] sm:text-xl"
          )}
        >
          {label}
        </span>
        {tagline ? (
          <span
            className={cn(
              "mt-1 hidden text-[10px] font-light tracking-[0.28em] opacity-70 lg:block",
              tone === "light" ? "text-white" : "text-ink"
            )}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {tagline}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
