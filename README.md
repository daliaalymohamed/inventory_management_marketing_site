# Asset Tracker marketing site

**Live site:** https://daliaalymohamed.github.io/inventory_management_marketing_site/

The public one-page website for Asset Tracker. It is a static React site (Vite +
TypeScript, styled with Tailwind CSS v4) with no backend and no database,
published on GitHub Pages.

This repository is **public** and separate from the app. Never copy anything
from the app's private repository into it.

## Run it locally

Requires Node.js 24.21.0 (via nvm).

```bash
source ~/.nvm/nvm.sh && nvm use 24.21.0
npm install --include=dev
npm run dev        # http://localhost:5173
```

`npm run build` writes the finished site to `dist/`; `npm run preview` serves
that build locally.

## Where to edit

| What | File |
|---|---|
| Product name, tagline, contact email, address in the example QR codes | `src/config.ts` |
| Industries, steps, features, security list | `src/data.ts` |
| Page layout and section text | `src/App.tsx` |
| Colours (light and dark) and shared Tailwind classes | `src/index.css` |
| Styling of each element | Tailwind classes in the `className` of `src/App.tsx` and `src/components/` |
| Browser tab title and search description | `index.html` |

If you rename the product, change both `src/config.ts` and `index.html`.

## Publish on GitHub Pages

Already set up for this repository. Every push to `main` runs
`.github/workflows/deploy.yml`, which builds the site and publishes it to the
live address above, usually within a minute or two.

To set it up again elsewhere: push the folder to a **public** repository, then
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Custom domain (once bought)

1. Settings → Pages → Custom domain → enter the domain, e.g. `example.com`.
2. At the domain registrar, add the DNS records GitHub shows on that page.
3. Tick **Enforce HTTPS** once GitHub has issued the certificate.
4. Update the live-site link at the top of this README.
