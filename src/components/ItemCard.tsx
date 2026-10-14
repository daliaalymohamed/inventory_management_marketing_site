import type { Industry } from '../data';
import { QrPattern } from './QrPattern';

const statusStyles: Record<string, string> = {
  Assigned: 'bg-info-soft text-info',
  Available: 'bg-ok-soft text-ok',
  Maintenance: 'bg-warn-soft text-warn',
};

/** An illustration of what scanning a label shows: the item, where it is, and its history. */
export function ItemCard({ industry }: { industry: Industry }) {
  const { item } = industry;
  const facts = [
    ['Category', item.category],
    ['Stored at', item.location],
    ['Currently with', item.holder],
  ];

  return (
    <article
      className="panel p-5 shadow-card"
      aria-label={`Example item: ${item.name}`}
    >
      <header className="flex items-center gap-[18px] border-b border-line pb-4">
        <QrPattern seed={item.code} />
        <div>
          <p className="mb-0.5 font-mono text-sm text-muted">{item.code}</p>
          <h3 className="mb-2 text-lg font-bold">{item.name}</h3>
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[item.status] ?? ''}`}
          >
            {item.status}
          </span>
        </div>
      </header>

      <dl className="my-4 grid gap-2.5">
        {facts.map(([label, value]) => (
          <div key={label} className="grid gap-0 min-[421px]:grid-cols-[120px_1fr] min-[421px]:gap-3">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="min-w-0 font-medium text-heading">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="rounded-[10px] bg-surface-alt px-4 py-3.5">
        <p className="mb-2 text-xs font-semibold tracking-[0.06em] text-muted uppercase">
          History
        </p>
        <ol>
          {item.history.map((entry) => (
            <li
              key={entry.what + entry.when}
              className="grid gap-0 border-dashed border-line py-1.5 text-[0.92rem] not-first:border-t min-[421px]:grid-cols-[96px_1fr] min-[421px]:gap-3"
            >
              <span className="text-muted">{entry.when}</span>
              <span>{entry.what}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
