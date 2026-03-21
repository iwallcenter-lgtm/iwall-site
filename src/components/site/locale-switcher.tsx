"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { languages, localeLabels, type Locale } from "@/lib/locales";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  currentLocale: Locale;
  className?: string;
};

export function LocaleSwitcher({ currentLocale, className }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 overflow-x-auto rounded-[1.25rem] border border-white/10 bg-white/10 p-1.5 shadow-sm backdrop-blur",
        "scrollbar-none lg:flex-nowrap",
        className
      )}
    >
      {languages.map((language) => {
        const nextPath = `/${[language.code, ...segments.slice(1)].join("/")}`;
        const item = localeLabels[language.code];

        return (
          <Link
            key={language.code}
            href={nextPath}
            className={cn(
              "inline-flex shrink-0 min-w-[74px] items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition duration-200 sm:min-w-[82px]",
              language.code === currentLocale
                ? "bg-white text-pine shadow-sm"
                : "text-white/84 hover:bg-white/12 hover:text-white"
            )}
            aria-label={item.name}
            aria-current={language.code === currentLocale ? "page" : undefined}
          >
            <span
              className="inline-flex h-4 w-5 shrink-0 items-center justify-center overflow-visible text-base leading-none tracking-normal normal-case"
              aria-hidden="true"
              style={{ fontFamily: '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif' }}
            >
              {language.flag}
            </span>
            <span className="shrink-0">{language.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
