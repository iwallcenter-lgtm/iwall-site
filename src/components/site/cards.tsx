import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[1.9rem] border border-pine/10 bg-white p-7 shadow-panel">
      <h3 className="text-lg font-semibold tracking-[0.02em] text-pine-deep">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600">{description}</p>
    </div>
  );
}

export function ProductCard({
  href,
  title,
  description,
  label,
  imageSrc,
  imageAlt,
  action,
  className
}: {
  href: string;
  title: string;
  description: string;
  label: string;
  imageSrc?: string;
  imageAlt?: string;
  action: string;
  className?: string;
}) {
  return (
    <article className={cn("overflow-hidden rounded-[1.9rem] border border-pine/10 bg-white shadow-panel", className)}>
      <MediaPlaceholder label={label} imageSrc={imageSrc} altText={imageAlt} className="h-72" />
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-[0.02em] text-pine-deep">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-neutral-600">{description}</p>
        <ButtonLink href={href} variant="secondary" className="mt-5">
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
  href,
  imageSrc,
  imageAlt
}: {
  title: string;
  description: string;
  action: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="rounded-[1.9rem] border border-pine/10 bg-white p-6 shadow-panel">
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt ?? title} className="catalog-image" />
      ) : (
        <div className="mb-5 flex h-28 items-end rounded-[1.5rem] bg-green-luxury p-5">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white">PDF Placeholder</span>
        </div>
      )}
      <h3 className="text-lg font-semibold tracking-[0.02em] text-pine-deep">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600">{description}</p>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex rounded-full border border-pine/15 px-4 py-2.5 text-sm font-semibold tracking-[0.08em] text-pine transition duration-200 hover:border-gold/40 hover:bg-[#f7faf8]"
      >
        {action}
      </Link>
    </div>
  );
}
