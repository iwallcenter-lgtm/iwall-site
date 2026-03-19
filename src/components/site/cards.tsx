import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600">{description}</p>
    </div>
  );
}

export function ProductCard({
  href,
  title,
  description,
  label,
  action,
  className
}: {
  href: string;
  title: string;
  description: string;
  label: string;
  action: string;
  className?: string;
}) {
  return (
    <article className={cn("overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm", className)}>
      <MediaPlaceholder label={label} className="h-72" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-neutral-600">{description}</p>
        <ButtonLink href={href} variant="ghost" className="mt-5 px-0">
          {action}
        </ButtonLink>
      </div>
    </article>
  );
}

export function ResourceCard({
  title,
  description,
  action,
  href
}: {
  title: string;
  description: string;
  action: string;
  href: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-28 items-end rounded-[1.5rem] bg-[#ddd2c1] p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">PDF Placeholder</span>
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600">{description}</p>
      <Link href={href} className="mt-5 inline-flex text-sm font-medium text-ink">
        {action}
      </Link>
    </div>
  );
}
