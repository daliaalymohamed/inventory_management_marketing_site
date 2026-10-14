import QRCode from 'qrcode';
import { site } from '../config';

/** Quiet zone in modules, matching the `qrcode` library's default that the app's labels use. */
const MARGIN = 4;

/**
 * A real, scannable QR code built the same way the app builds its labels: the
 * `qrcode` library with its default settings (error correction M), encoding
 * `<app address>/scan/<item code>`, drawn black on white.
 */
export function QrPattern({ code }: { code: string }) {
  const url = `${site.exampleScanBaseUrl}/scan/${code}`;
  const { size, data } = QRCode.create(url).modules;
  const total = size + MARGIN * 2;

  let path = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (data[y * size + x]) path += `M${x + MARGIN} ${y + MARGIN}h1v1h-1z`;
    }
  }

  return (
    <svg
      className="size-28 flex-none rounded-lg border border-line"
      viewBox={`0 0 ${total} ${total}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={`QR code for ${code}`}
    >
      <rect width={total} height={total} fill="#ffffff" />
      <path d={path} fill="#000000" />
    </svg>
  );
}
