import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

export function ButtonLink({ href, children, variant = "primary", className, target, rel }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.08em] transition duration-200",
        variant === "primary" && "bg-pine text-white shadow-luxury hover:bg-pine-soft hover:shadow-[0_0_24px_rgba(212,175,55,0.18)]",
        variant === "secondary" && "border border-pine/15 bg-white text-pine hover:border-gold/40 hover:bg-[#f7faf8]",
        variant === "ghost" && "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/18",
        className
      )}
    >
      {children}
    </Link>
  );
}
