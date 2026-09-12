"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`whitespace-nowrap border-b py-3 text-sm font-medium transition hover:text-gold ${active ? "border-gold text-gold" : "border-transparent text-white/90"}`}
    >
      {children}
    </Link>
  );
}
