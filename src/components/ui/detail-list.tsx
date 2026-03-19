type DetailListProps = {
  items: Array<{ label: string; value: string }>;
};

export function DetailList({ items }: DetailListProps) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="rounded-3xl border border-black/10 bg-white p-5">
          <dt className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">{item.label}</dt>
          <dd className="mt-3 text-base font-medium text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
