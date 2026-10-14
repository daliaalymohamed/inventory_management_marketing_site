import type { Industry } from '../data';
import { QrPattern } from './QrPattern';

/** An illustration of what scanning a label shows: the item, where it is, and its history. */
export function ItemCard({ industry }: { industry: Industry }) {
  const { item } = industry;
  const statusClass = `pill pill-${item.status.toLowerCase()}`;

  return (
    <article className="item-card" aria-label={`Example item: ${item.name}`}>
      <header className="item-card-head">
        <QrPattern seed={item.code} />
        <div>
          <p className="item-code">{item.code}</p>
          <h3 className="item-name">{item.name}</h3>
          <span className={statusClass}>{item.status}</span>
        </div>
      </header>

      <dl className="item-facts">
        <div>
          <dt>Category</dt>
          <dd>{item.category}</dd>
        </div>
        <div>
          <dt>Stored at</dt>
          <dd>{item.location}</dd>
        </div>
        <div>
          <dt>Currently with</dt>
          <dd>{item.holder}</dd>
        </div>
      </dl>

      <div className="item-history">
        <p className="item-history-title">History</p>
        <ol>
          {item.history.map((entry) => (
            <li key={entry.what + entry.when}>
              <span className="when">{entry.when}</span>
              <span>{entry.what}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
