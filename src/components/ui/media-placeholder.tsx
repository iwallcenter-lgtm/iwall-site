import Image from "next/image";

import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label: string;
  imageSrc?: string;
  backgroundImageSrc?: string;
  altText?: string;
  className?: string;
};

export function MediaPlaceholder({ label, imageSrc, backgroundImageSrc, altText, className }: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-green-luxury",
        !imageSrc && !backgroundImageSrc && "before:absolute before:inset-0 before:bg-grid-fade before:bg-[size:28px_28px] before:opacity-50",
        !imageSrc && !backgroundImageSrc && "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_45%)]",
        className
      )}
    >
      {backgroundImageSrc ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImageSrc}')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,16,0.12)_0%,rgba(8,19,16,0.28)_52%,rgba(8,19,16,0.72)_100%)]" />
        </>
      ) : null}
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={altText ?? label}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,16,0.12)_0%,rgba(8,19,16,0.28)_52%,rgba(8,19,16,0.72)_100%)]" />
        </>
      ) : null}
      <div className="absolute inset-x-6 bottom-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-white/78 backdrop-blur">
        {label}
      </div>
    </div>
  );
}
