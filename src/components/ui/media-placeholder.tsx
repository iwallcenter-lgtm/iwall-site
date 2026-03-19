import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label: string;
  className?: string;
};

export function MediaPlaceholder({ label, className }: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#dfd6c8]",
        "before:absolute before:inset-0 before:bg-grid-fade before:bg-[size:28px_28px] before:opacity-50",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_45%)]",
        className
      )}
    >
      <div className="absolute inset-x-6 bottom-6 rounded-full border border-white/60 bg-white/65 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-neutral-600 backdrop-blur">
        {label}
      </div>
    </div>
  );
}
