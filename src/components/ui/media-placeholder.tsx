import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label: string;
  className?: string;
};

export function MediaPlaceholder({ label, className }: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-green-luxury",
        "before:absolute before:inset-0 before:bg-grid-fade before:bg-[size:28px_28px] before:opacity-50",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_45%)]",
        className
      )}
    >
      <div className="absolute inset-x-6 bottom-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-white/78 backdrop-blur">
        {label}
      </div>
    </div>
  );
}
