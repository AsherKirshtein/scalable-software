export default function Pricing() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">
          Pricing & Engagements
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Clear, transparent pricing for custom software and automation.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Project Pricing</h2>
          <p className="mt-3 text-slate-700">
            <span className="font-semibold">Minimum Engagement:</span> All projects start at{" "}
            <span className="font-semibold">$2,000</span> (10-hour minimum).
          </p>
          <p className="mt-3 text-slate-700">
            Most projects fall between <span className="font-semibold">$4,000–$10,000</span>,
            depending on scope, complexity, and timeline.
          </p>
          <p className="mt-3 text-slate-700">
            Larger systems, long-term engagements, or multi-phase builds are priced separately.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">How Pricing Works</h2>
          <p className="mt-3 text-slate-700">
            We scope projects clearly, price upfront, and deliver against defined milestones.
            You’ll know exactly what you’re paying for before we start.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>Scope and deliverables defined before work begins</li>
            <li>Milestone-based progress with updates/demos</li>
            <li>Changes outside scope are quoted separately</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <h2 className="text-xl font-semibold">What We Typically Build</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="font-medium">Workflow automation & integrations</p>
              <p className="mt-1 text-slate-600">Replace manual spreadsheet-driven processes.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="font-medium">Internal tools & dashboards</p>
              <p className="mt-1 text-slate-600">Admin panels, reporting, operational visibility.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="font-medium">Custom backend services & APIs</p>
              <p className="mt-1 text-slate-600">Reliable services built for scale and maintainability.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="font-medium">MVP builds & technical validation</p>
              <p className="mt-1 text-slate-600">Prove feasibility quickly without cutting corners.</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <h2 className="text-xl font-semibold">Ongoing Support & Maintenance</h2>
          <p className="mt-3 text-slate-700">
            After launch, optional support and maintenance plans are available for bug fixes,
            monitoring, and small enhancements. Support is separate from major feature development
            and is always scoped clearly.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <h2 className="text-xl font-semibold">Our Commitment</h2>
          <p className="mt-3 text-slate-700">
            Every project begins with a defined scope and milestone. If delivered work does not meet
            the agreed requirements, we’ll make it right — or you won’t be billed for unused project time.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
          <h2 className="text-xl font-semibold">Let’s Get Started</h2>
          <p className="mt-3 text-slate-700">
            Have a problem to solve or an idea to validate? A short call is often enough to
            determine fit and next steps.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="/work"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              View Our Work
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
