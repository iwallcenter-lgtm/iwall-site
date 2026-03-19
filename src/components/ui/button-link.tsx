import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200",
        variant === "primary" && "bg-ink text-white hover:bg-neutral-800",
        variant === "secondary" && "border border-black/10 bg-white text-ink hover:border-black/20 hover:bg-fog",
        variant === "ghost" && "text-ink hover:bg-black/5",
        className
      )}
    >
      {children}
    </Link>
  );
}
