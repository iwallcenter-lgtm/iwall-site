"use client";

import { useState } from "react";
import Link from "next/link";

import type { Locale } from "@/lib/locales";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  locale: Locale;
  links: Array<{ href: string; label: string }>;
  cta: { href: string; label: string };
};

export function MobileMenu({ links, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white"
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <span className="space-y-1.5">
          <span className="block h-0.5 w-5 bg-ink" />
          <span className="block h-0.5 w-5 bg-ink" />
        </span>
      </button>
      <div
        className={cn(
          "absolute inset-x-5 top-full mt-4 rounded-[1.75rem] border border-black/10 bg-white p-5 shadow-panel transition",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-2xl px-4 py-3 text-sm font-medium text-ink hover:bg-fog" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href={cta.href} className="mt-3 rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-white" onClick={() => setOpen(false)}>
            {cta.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
