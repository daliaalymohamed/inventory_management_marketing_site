import { useState } from 'react';
import { mailtoDemo, site } from './config';
import { features, industries, security, steps } from './data';
import { ItemCard } from './components/ItemCard';

const currentYear = new Date().getFullYear();

function Logo() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="28" height="28" rx="7" className="logo-bg" />
      <path d="M9 9h6v6H9zM17 17h6v6h-6zM17 9h6v3h-6zM9 17h3v6H9z" className="logo-ink" />
    </svg>
  );
}

export default function App() {
  const [industryId, setIndustryId] = useState(industries[0].id);
  const industry = industries.find((i) => i.id === industryId) ?? industries[0];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#top" aria-label={`${site.name} home`}>
            <Logo />
            <span>{site.name}</span>
          </a>
          <nav aria-label="Main">
            <ul className="nav-links">
              <li><a href="#how">How it works</a></li>
              <li><a href="#industries">Who it's for</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </nav>
          <a className="btn btn-small" href={mailtoDemo}>
            Book a demo
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Equipment tracking with QR labels</p>
              <h1>{site.tagline}</h1>
              <p className="lead">
                {site.name} tracks every item you lend out — from the shelf, to the person
                using it, and back again. Scan a label to see where it is, who has it and
                everything that happened to it.
              </p>
              <div className="cta-row">
                <a className="btn" href={mailtoDemo}>
                  Book a demo
                </a>
                <a className="btn btn-ghost" href="#how">
                  See how it works
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="chips" role="group" aria-label="Show an example from">
                {industries.map((i) => (
                  <button
                    key={i.id}
                    type="button"
                    className="chip"
                    aria-pressed={i.id === industryId}
                    onClick={() => setIndustryId(i.id)}
                  >
                    {i.label}
                  </button>
                ))}
              </div>
              <ItemCard industry={industry} />
              <p className="caption">Example of what a scan shows. Pick an industry above.</p>
            </div>
          </div>
        </section>

        <section className="section problem">
          <div className="container narrow center">
            <h2>Spreadsheets don't know who has the drill.</h2>
            <p className="lead">
              Equipment gets handed out, passed on and forgotten. A list that someone updates
              when they remember is never right when you need it — and the item you're looking
              for is always the one that isn't on it.
            </p>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <h2 className="center">How it works</h2>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title} className="step">
                  <span className="step-number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section alt" id="industries">
          <div className="container">
            <h2 className="center">Made for anyone who lends out equipment</h2>
            <p className="lead center narrow">
              Categories, statuses and locations are all yours to define, so {site.name} fits
              the way your organisation already works.
            </p>
            <ul className="industry-grid">
              {industries.map((i) => (
                <li key={i.id} className="card">
                  <h3>{i.label}</h3>
                  <p>{i.pitch}</p>
                  <p className="tags">{i.examples.join(' · ')}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container">
            <h2 className="center">Everything in one place</h2>
            <ul className="feature-grid">
              {features.map((f) => (
                <li key={f.title} className="feature">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section alt" id="security">
          <div className="container security-grid">
            <div>
              <h2>Built for organisations that take access seriously</h2>
              <p className="lead">
                Control who can see and change what, and keep a record of every important
                action. Run it on your own servers, or let us host it for you.
              </p>
            </div>
            <ul className="check-list">
              {security.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container narrow center">
            <h2>See it with your own equipment</h2>
            <p className="lead">
              Book a short online demo. Tell us what you track and we'll show you how{' '}
              {site.name} would handle it.
            </p>
            <a className="btn btn-large" href={mailtoDemo}>
              Email us to book a demo
            </a>
            <p className="email-line">
              Or write to <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <span className="brand brand-small">
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
