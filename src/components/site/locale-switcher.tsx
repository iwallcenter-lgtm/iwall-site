"use client";

import { usePathname, useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { languages, type Locale } from "@/lib/locales";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ currentLocale, className }: { currentLocale: Locale; className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className={cn("relative shrink-0", className)}>
      <select
        aria-label="Dil / Language"
        value={currentLocale}
        className="h-11 w-[72px] cursor-pointer appearance-none rounded-full border border-white/25 bg-transparent pe-7 ps-4 text-sm font-medium text-white"
        onChange={(event) => {
          const segments = pathname.split("/").filter(Boolean);
          router.push(`/${[event.target.value, ...segments.slice(1)].join("/")}`);
        }}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code} lang={language.code} className="bg-white text-pine-deep">{language.label}</option>
        ))}
      </select>
      <FiChevronDown aria-hidden="true" className="pointer-events-none absolute end-3 top-4 h-3 w-3" />
    </div>
  );
}
