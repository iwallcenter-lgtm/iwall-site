import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  href: string;
  label: string;
  compact?: boolean;
  tone?: "dark" | "light";
};

export function Logo({ href, label, compact = false, tone = "dark" }: LogoProps) {
  return (
    <Link href={href} className="inline-flex min-w-0 items-center">
      <span
        className={cn(
          "truncate font-semibold",
          tone === "light" ? "text-white" : "text-ink",
          compact ? "text-sm tracking-[0.24em]" : "text-lg tracking-[0.24em] sm:text-xl"
        )}
      >
        {label}
      </span>
    </Link>
  );
}
