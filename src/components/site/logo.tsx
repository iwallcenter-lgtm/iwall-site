import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  href: string;
  label: string;
  compact?: boolean;
  tone?: "dark" | "light";
};

export function Logo({ href, label, compact = false }: LogoProps) {
  return (
    <Link href={href} className="inline-flex shrink-0 items-center rounded-full" aria-label={label}>
      <Image src="/images/iwall-logo.webp" alt={label} width={compact ? 56 : 64} height={compact ? 56 : 64} unoptimized className="rounded-full" />
    </Link>
  );
}
