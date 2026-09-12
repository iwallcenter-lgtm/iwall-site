"use client";

import { useState } from "react";
import Link from "next/link";

import type { Locale } from "@/lib/locales";
import { lambiriCopy } from "@/lib/lambiri";

type MobileMenuProps = {
  locale: Locale;
  links: Array<{ href: string; label: string }>;
  cta: { href: string; label: string };
};

export function MobileMenu({ locale, links, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white"
        aria-expanded={open}
        aria-label={lambiriCopy[locale].menu}
        aria-controls="mobile-navigation"
      >
        <span className="space-y-1.5">
          <span className="block h-0.5 w-5 bg-ink" />
          <span className="block h-0.5 w-5 bg-ink" />
        </span>
      </button>
      <div
        id="mobile-navigation"
        hidden={!open}
        className="absolute inset-x-5 top-full mt-2 max-h-[calc(100dvh-100px)] overflow-y-auto rounded-2xl border border-black/10 bg-white p-4 shadow-panel"
      >
        <nav aria-label={lambiriCopy[locale].menu} className="flex flex-col gap-2">
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
