import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { cn } from "@/lib/utils";

const socialIcons = {
  whatsappChannel: FaWhatsapp,
  x: FaXTwitter,
  tiktok: FaTiktok,
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebookF
} as const;

const socialLabels = {
  whatsappChannel: "WhatsApp Channel",
  x: "X",
  tiktok: "TikTok",
  instagram: "Instagram",
  youtube: "YouTube",
  facebook: "Facebook"
} as const;

type SocialLinksProps = {
  title: string;
  urls: Record<keyof typeof socialIcons, string>;
  className?: string;
};

export function SocialLinks({ title, urls, className }: SocialLinksProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/82">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {(Object.keys(socialIcons) as Array<keyof typeof socialIcons>).map((key) => {
          const Icon = socialIcons[key];

          return (
            <Link
              key={key}
              href={urls[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLabels[key]}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white shadow-sm backdrop-blur transition duration-200 hover:scale-[1.04] hover:bg-white/16 hover:text-gold"
            >
              <Icon className="h-[18px] w-[18px]" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
