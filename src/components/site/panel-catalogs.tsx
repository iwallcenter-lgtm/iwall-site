import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

import type { Locale } from "@/lib/locales";
import { productCategories } from "@/lib/products";

export function PanelCatalogs({ locale }: { locale: Locale }) {
  return (
    <div className="panel-catalogs grid gap-4 sm:grid-cols-3">
      {(["dy", "s", "kl"] as const).map((key) => (
        <Link key={key} href={`/${locale}/duvar-panelleri?seri=${key.toUpperCase()}`} className="flex min-h-24 items-center justify-between gap-4 rounded-xl border border-pine/15 bg-white p-6 text-pine-deep transition hover:border-pine/50 hover:bg-fog">
          <h3 className="text-xl font-semibold">{productCategories[key].title[locale]}</h3>
          <FiArrowUpRight className="shrink-0 rtl:-rotate-90" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
