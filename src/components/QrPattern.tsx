/**
 * A decorative QR-style pattern for the mock item card. It is not a real,
 * scannable code: the cells come from a seeded pseudo-random generator so each
 * item code always draws the same pattern.
 */

const SIZE = 21;

function seededRandom(seed: string) {
  let h = 2166136261;
  for (const ch of seed) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 1000) / 1000;
  };
}

function inFinder(x: number, y: number) {
  const corners = [
    [0, 0],
    [SIZE - 7, 0],
    [0, SIZE - 7],
  ];
  return corners.some(([cx, cy]) => x >= cx && x < cx + 7 && y >= cy && y < cy + 7);
}

export function QrPattern({ seed }: { seed: string }) {
  const rand = seededRandom(seed);
  const cells: [number, number][] = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (!inFinder(x, y) && rand() > 0.52) cells.push([x, y]);
    }
  }

  const finders = [
    [0, 0],
    [SIZE - 7, 0],
    [0, SIZE - 7],
  ];

  return (
    <svg
      className="size-[92px] flex-none rounded-lg"
      viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="-1" y="-1" width={SIZE + 2} height={SIZE + 2} className="fill-qr-bg" />
      {finders.map(([fx, fy]) => (
        <g key={`${fx}-${fy}`} className="fill-qr-ink">
          <path
            d={`M${fx} ${fy}h7v7h-7z M${fx + 1} ${fy + 1}v5h5v-5z`}
            fillRule="evenodd"
          />
          <rect x={fx + 2} y={fy + 2} width="3" height="3" />
        </g>
      ))}
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" className="fill-qr-ink" />
      ))}
    </svg>
  );
}
