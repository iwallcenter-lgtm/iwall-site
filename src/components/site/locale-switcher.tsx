"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeLabels, locales, type Locale } from "@/lib/locales";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  currentLocale: Locale;
};

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/85 p-1 backdrop-blur">
      {locales.map((locale) => {
        const nextPath = `/${[locale, ...segments.slice(1)].join("/")}`;
        const item = localeLabels[locale];

        return (
          <Link
            key={locale}
            href={nextPath}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition",
              locale === currentLocale ? "bg-ink text-white" : "text-neutral-600 hover:bg-black/5 hover:text-ink"
            )}
            aria-label={item.name}
          >
            <span className="text-[10px]">{item.flag}</span>
            <span>{item.code}</span>
          </Link>
        );
      })}
    </div>
  );
}
