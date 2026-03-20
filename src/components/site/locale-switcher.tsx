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
    <div className="flex flex-wrap items-center gap-1.5 rounded-[1.25rem] border border-black/10 bg-white/85 p-1.5 shadow-sm backdrop-blur">
      {locales.map((locale) => {
        const nextPath = `/${[locale, ...segments.slice(1)].join("/")}`;
        const item = localeLabels[locale];

        return (
          <Link
            key={locale}
            href={nextPath}
            className={cn(
              "inline-flex min-w-[74px] items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition duration-200 sm:min-w-[82px]",
              locale === currentLocale
                ? "bg-ink text-white shadow-sm"
                : "text-neutral-700 hover:bg-black/5 hover:text-ink"
            )}
            aria-label={item.name}
            aria-current={locale === currentLocale ? "page" : undefined}
          >
            <span className="text-sm leading-none" aria-hidden="true">
              {item.flag}
            </span>
            <span>{item.code}</span>
          </Link>
        );
      })}
    </div>
  );
}
