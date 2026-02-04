function CaseStudy({
  title,
  outcome,
  bullets,
  tags,
  href,
  featured = false,
  logoSrc,
}: {
  title: string;
  outcome: string;
  bullets: string[];
  tags: string[];
  href?: string;
  featured?: boolean;
  logoSrc?: string; // e.g. "/clearsignal-mark.svg"
}) {
  const Card = (
    <div
      className={[
        "group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        featured ? "border-[#E11D2E]/20 ring-1 ring-[#E11D2E]/10" : "border-[#0B1F3B]/10",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {logoSrc ? (
              <span className="mr-1 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#0B1F3B]/10 bg-white align-middle">
                <img
                  src={logoSrc}
                  alt={`${title} logo`}
                  className="h-[22px] w-[22px] opacity-90"
                  loading="lazy"
                />
              </span>
            ) : null}

            <div className="text-lg font-semibold text-[#0B1F3B]">{title}</div>

            {featured ? (
              <span className="rounded-full border border-[#E11D2E]/20 bg-[#E11D2E]/10 px-2 py-0.5 text-[11px] font-semibold text-[#E11D2E]">
                Featured
              </span>
            ) : null}
          </div>

          <div className="mt-2 text-[#0B1F3B]/70">{outcome}</div>
        </div>

        <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E11D2E]/80 opacity-70 group-hover:opacity-100" />
      </div>

      <ul className="mt-4 space-y-2 text-sm text-[#0B1F3B]/70">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 px-3 py-1 text-xs font-semibold text-[#0B1F3B]/80"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  if (!href) return Card;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D2E]/40"
      aria-label={`${title} (opens in new tab)`}
    >
      {Card}
    </a>
  );
}


export default function Work() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-[#0B1F3B]/10 bg-white p-8 shadow-sm sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E11D2E]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#0B1F3B]/10 blur-3xl" />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E11D2E] via-[#E11D2E]/50 to-transparent" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 px-3 py-1 text-xs font-semibold text-[#0B1F3B]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#E11D2E]" />
              Work
            </div>

            <a
              href="https://clearsignalpro.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#0B1F3B]/10 bg-white px-3 py-1 text-xs font-semibold text-[#0B1F3B] hover:bg-[#0B1F3B]/5"
              aria-label="Clear Signal domain (opens in new tab)"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#0B1F3B]/60" />
              clearsignalpro.com
            </a>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F3B] sm:text-4xl">
            Real builds. Real outcomes.
          </h1>

          <p className="mt-3 max-w-3xl text-[#0B1F3B]/70">
            We focus on shipping software that reduces manual effort, prevents errors, and gives teams visibility.
            Here are representative examples of the kind of work we do — including our ongoing build, Clear Signal.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">Selected case studies</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <CaseStudy
            featured
            logoSrc="/clearsignal-mark.png"
            title="Clear Signal — development intelligence feed"
            outcome="Built an originator-focused app that aggregates development news into a searchable feed with saved views and fast navigation."
            bullets={[
              "Ingested articles into structured items (source, city, date, entities) for reliable display",
              "Shipped Dashboard + detail pages with filters (city/type/query) and saved searches",
              "Designed for scale: backend-first search/filtering plan + dedupe on ingest to keep the dataset clean",
            ]}
            tags={["Product build", "Data ingestion", "Search & filters", "Vite + React"]} // (also fix this, you're not Next.js)
            href="https://clearsignalpro.com"
          />

          <CaseStudy
            title="Operations automation pipeline"
            outcome="Converted repetitive spreadsheet workflows into a validated export/import pipeline with audit-friendly outputs."
            bullets={[
              "Reduced manual processing time and copy/paste errors",
              "Added validation + consistent formatting",
              "Generated stakeholder-ready reports automatically",
            ]}
            tags={["Automation", "Data validation", "Exports"]}
          />

          <CaseStudy
            title="Internal dashboard + intake flow"
            outcome="Built a lightweight internal app to track requests, enforce required fields, and keep approvals visible."
            bullets={[
              "Centralized intake and reduced back-and-forth",
              "Created clear status tracking for stakeholders",
              "Improved turnaround by making work visible",
            ]}
            tags={["Internal tools", "UX", "Workflow"]}
          />

          <CaseStudy
            title="System integrations + reliability"
            outcome="Connected services using API integration patterns with retries, logging, and simple monitoring."
            bullets={[
              "Reduced manual data syncing between tools",
              "Improved reliability with retries + logging",
              "Shipped with deployment-ready configuration",
            ]}
            tags={["Integrations", "Reliability", "APIs"]}
          />

          <CaseStudy
            title="Prototype-to-production delivery"
            outcome="Delivered a fast prototype first, then iterated into a hardened production release."
            bullets={[
              "Prototype in days to align on scope",
              "Iterated weekly with clear milestones",
              "Final build included monitoring + documentation",
            ]}
            tags={["Prototyping", "Delivery", "Production"]}
          />
        </div>
      </section>

      <section className="rounded-3xl border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">Want something like this?</h2>
        <p className="mt-2 max-w-3xl text-[#0B1F3B]/70">
          Send a short description of your workflow and where it hurts. We’ll reply with a clear plan.
        </p>
        <a
          className="mt-6 inline-block rounded-2xl bg-[#E11D2E] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
          href="mailto:akirshtein@scalablesoftware.org?subject=ScalableSoftware%20-%20Project%20Inquiry"
        >
          Email to start
        </a>
      </section>
    </div>
  );
}
