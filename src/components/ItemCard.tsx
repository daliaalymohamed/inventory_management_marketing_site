import type { Industry, StatusColor } from '../data';
import { QrPattern } from './QrPattern';

/** The same badge colours the app uses for each item-status colour. */
const badgeStyles: Record<StatusColor, string> = {
  emerald: 'bg-emerald-100 text-emerald-700',
  red: 'bg-red-100 text-red-700',
  amber: 'bg-amber-100 text-amber-700',
  gray: 'bg-surface-alt text-muted',
};

/**
 * An illustration of an item in the app: the fields and labels the scan
 * screen shows (status, current assignee, category, serial number, storage),
 * plus the assignment history from the item's page. The real scan screen
 * shows the item's photo where this card shows its QR label.
 */
export function ItemCard({ industry }: { industry: Industry }) {
  const { item } = industry;
  const facts = [
    ['Current Assignee', item.assignee ?? 'Unassigned'],
    ['Category', item.tag],
    ['Serial Number', item.serial],
    ['Storage Locations', item.location],
  ];

  return (
    <article className="panel p-5 shadow-card" aria-label={`Example item: ${item.name}`}>
      <header className="flex items-center gap-[18px] border-b border-line pb-4">
        <QrPattern code={item.code} />
        <div>
          <p className="mb-0.5 font-mono text-sm text-muted">{item.code}</p>
          <h3 className="mb-2 text-lg font-bold">{item.name}</h3>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeStyles[item.statusColor]}`}
          >
            {item.status}
          </span>
        </div>
      </header>

      <dl className="my-4 grid gap-2.5">
        {facts.map(([label, value]) => (
          <div key={label} className="grid gap-0 min-[421px]:grid-cols-[148px_1fr] min-[421px]:gap-3">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="min-w-0 font-medium text-heading">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="rounded-[10px] bg-surface-alt px-4 py-3.5">
        <p className="mb-2 text-xs font-semibold tracking-[0.06em] text-muted uppercase">
          Assignment history
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
