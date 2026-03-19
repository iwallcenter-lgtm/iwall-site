import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  href: string;
  label: string;
  compact?: boolean;
};

export function Logo({ href, label, compact = false }: LogoProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-3">
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white text-xs font-semibold tracking-[0.35em] text-ink shadow-sm",
          compact ? "h-10 w-10" : "h-11 w-11"
        )}
      >
        IW
      </span>
      <span className="text-sm font-semibold tracking-[0.28em] text-ink">{label}</span>
    </Link>
  );
}
