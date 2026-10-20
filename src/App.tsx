import { useState } from 'react';
import { mailtoDemo, site } from './config';
import { faq, features, industries, screenshots, security, steps } from './data';
import { ItemCard } from './components/ItemCard';

const currentYear = new Date().getFullYear();

function Logo() {
  return (
    <svg className="size-[30px]" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="28" height="28" rx="7" className="fill-accent" />
      <path d="M9 9h6v6H9zM17 17h6v6h-6zM17 9h6v3h-6zM9 17h3v6H9z" className="fill-on-accent" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="absolute top-1/2 left-4 size-[18px] -translate-y-1/2"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10" cy="10" r="10" className="fill-accent" />
      <path
        d="M5.5 10.5l3 3L14.5 7"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-on-accent"
      />
    </svg>
  );
}

export default function App() {
  const [industryId, setIndustryId] = useState(industries[0].id);
  const industry = industries.find((i) => i.id === industryId) ?? industries[0];

  return (
    <>
      <a
        className="absolute top-2 -left-[9999px] z-50 rounded-lg bg-surface px-3 py-2 focus:left-2"
        href="#main"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="container-page flex h-16 items-center gap-6">
          <a
            className="inline-flex items-center gap-2.5 text-lg font-bold text-heading no-underline"
            href="#top"
            aria-label={`${site.name} home`}
          >
            <Logo />
            <span>{site.name}</span>
          </a>
          <nav aria-label="Main" className="ml-auto">
            <ul className="hidden gap-6 lg:flex">
              {[
                ['#demo', 'Demo'],
                ['#how', 'How it works'],
                ['#industries', "Who it's for"],
                ['#features', 'Features'],
                ['#security', 'Security'],
                ['#faq', 'FAQ'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a className="font-medium text-text no-underline hover:text-heading" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn px-2.5 py-[7px] text-sm sm:px-3.5 sm:py-2" href={mailtoDemo}>
            Book a demo
          </a>
        </div>
      </header>

      <main id="main">
        <section className="py-14 pb-[72px] lg:py-[88px] lg:pb-24" id="top">
          <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-[0.08em] text-accent uppercase">
                Equipment tracking with QR labels
              </p>
              <h1 className="mb-[0.6em] text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tight">
                {site.tagline}
              </h1>
              <p className="lead">
                {site.name} tracks every item you lend out — from the shelf, to the person
                using it, and back again. Scan a label to see its status, where it belongs, who
                has it and where it has been.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn" href={mailtoDemo}>
                  Book a demo
                </a>
                <a className="btn btn-ghost" href="#demo">
                  Watch the demo
                </a>
              </div>
            </div>

            <div className="grid min-w-0 gap-3.5">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Show an example from">
                {industries.map((i) => (
                  <button
                    key={i.id}
                    type="button"
                    className="cursor-pointer rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-text hover:border-muted aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-on-accent"
                    aria-pressed={i.id === industryId}
                    onClick={() => setIndustryId(i.id)}
                  >
                    {i.label}
                  </button>
                ))}
              </div>
              <ItemCard industry={industry} />
              <p className="text-sm text-muted">
                An example item. Pick an industry above.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-heading py-[72px]">
          <div className="container-page max-w-[760px] text-center">
            <h2 className="section-title text-bg">Spreadsheets don't know who has the drill.</h2>
            <p className="text-lg text-bg/80">
              Equipment gets handed out, passed on and forgotten. A list that someone updates
              when they remember is never right when you need it — and the item you're looking
              for is always the one that isn't on it.
            </p>
          </div>
        </section>

        <section className="bg-surface-alt py-[72px]" id="demo">
          <div className="container-page">
            <h2 className="section-title text-center">See it in action</h2>
            <p className="lead mx-auto max-w-[760px] text-center">
              Sign in, add an item, hand it out and get it back, in under four minutes.
            </p>
            <div className="mx-auto mt-9 aspect-video max-w-[960px] overflow-hidden rounded-xl border border-line bg-heading shadow-card">
              <iframe
                className="size-full"
                src={`https://www.youtube-nocookie.com/embed/${site.demoVideoId}?rel=0`}
                title={`${site.name} demo video`}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <h3 className="mt-16 text-center text-2xl font-bold">A look inside</h3>
            <ul className="mt-8 grid items-start gap-6 md:grid-cols-2">
              {screenshots.map((shot, index) => (
                <li
                  key={shot.src}
                  className={
                    index === 0
                      ? 'md:col-span-2'
                      : shot.height > shot.width
                        ? 'md:max-w-[340px] md:justify-self-center'
                        : ''
                  }
                >
                  <figure>
                    <img
                      className="w-full rounded-xl border border-line bg-surface shadow-card"
                      src={shot.src}
                      width={shot.width}
                      height={shot.height}
                      alt={shot.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="mt-3 text-center text-sm text-muted">
                      {shot.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-[72px]" id="how">
          <div className="container-page">
            <h2 className="section-title text-center">How it works</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="panel p-6">
                  <span
                    className="mb-3.5 inline-grid size-9 place-items-center rounded-full bg-accent-soft font-bold text-accent"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-surface-alt py-[72px]" id="industries">
          <div className="container-page">
            <h2 className="section-title text-center">Made for anyone who lends out equipment</h2>
            <p className="lead mx-auto max-w-[760px] text-center">
              Categories, statuses and locations are all yours to define, so {site.name} fits
              the way your organisation already works.
            </p>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((i) => (
                <li key={i.id} className="panel grid content-start gap-2.5 p-6">
                  <h3 className="text-lg font-bold">{i.label}</h3>
                  <p>{i.pitch}</p>
                  <p className="text-sm text-muted">{i.examples.join(' · ')}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-[72px]" id="features">
          <div className="container-page">
            <h2 className="section-title text-center">Everything in one place</h2>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <li key={f.title} className="border-t-2 border-accent-soft px-1 py-[22px]">
                  <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-surface-alt py-[72px]" id="security">
          <div className="container-page grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="section-title">Built for organisations that take access seriously</h2>
              <p className="lead">
                Control who can see and change what, and keep a record of every important
                action. Run it on your own servers, or let us host it for you.
              </p>
            </div>
            <ul className="grid gap-3">
              {security.map((line) => (
                <li
                  key={line}
                  className="relative rounded-[10px] border border-line bg-surface py-3.5 pr-4 pl-12 text-heading"
                >
                  <CheckIcon />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-[72px]" id="faq">
          <div className="container-page max-w-[760px]">
            <h2 className="section-title text-center">Questions buyers ask</h2>
            <div className="mt-9 grid gap-3">
              {faq.map((item) => (
                <details key={item.question} className="panel group px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-heading [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      className="text-xl leading-none text-accent transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-alt py-[88px]" id="contact">
          <div className="container-page max-w-[760px] text-center">
            <h2 className="section-title">See it with your own equipment</h2>
            <p className="lead">
              Book a short online demo. Tell us what you track and we'll show you how{' '}
              {site.name} would handle it.
            </p>
            <a className="btn px-7 py-3.5 text-[1.05rem]" href={mailtoDemo}>
              Email us to book a demo
            </a>
            <p className="mt-[18px] break-words text-muted">
              Or write to <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-7 text-sm text-muted">
        <div className="container-page flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2.5 font-bold text-heading">
            <Logo />
            <span>{site.name}</span>
          </span>
          <span>
            © {currentYear} {site.name}. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
