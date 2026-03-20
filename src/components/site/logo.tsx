import Image from "next/image";
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
    <Link href={href} className="inline-flex items-center gap-3">
      <span
        className={cn(
          "relative overflow-hidden rounded-2xl shadow-sm",
          tone === "light" ? "border border-white/14 bg-white/10 backdrop-blur" : "border border-black/10 bg-white",
          compact ? "h-10 w-10" : "h-12 w-12 sm:h-14 sm:w-14"
        )}
      >
        <Image src="/logo.png" alt={label} fill sizes={compact ? "40px" : "56px"} className="object-contain p-1.5" priority />
      </span>
      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            "truncate font-semibold",
            tone === "light" ? "text-white" : "text-ink",
            compact ? "text-sm tracking-[0.24em]" : "text-base tracking-[0.28em] sm:text-lg"
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "mt-0.5 truncate font-medium",
            tone === "light" ? "text-white/68" : "text-neutral-500",
            compact ? "text-[10px] tracking-[0.05em]" : "text-[11px] tracking-[0.08em] sm:text-xs"
          )}
        >
          Yaşam Alanlarınıza Değer Katar
        </span>
      </span>
    </Link>
  );
}
