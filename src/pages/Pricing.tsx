export default function Pricing() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      {/* page background layer (matches most “navy + clean” themes) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />

      <header className="mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-slate-900" />
          Pricing
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Pricing & Engagements
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Clear, transparent pricing for custom software and automation.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Card helper style: tinted + consistent border + hover */}
        <section className="group rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:border-slate-300">
          <h2 className="text-xl font-semibold text-slate-900">Project Pricing</h2>
          <p className="mt-3 text-slate-700">
            <span className="font-semibold text-slate-900">Minimum Engagement:</span>{" "}
            All projects start at{" "}
            <span className="font-semibold text-slate-900">$2,000</span> (10-hour minimum).
          </p>
          <p className="mt-3 text-slate-700">
            Most projects fall between{" "}
            <span className="font-semibold text-slate-900">$4,000–$10,000</span>, depending on
            scope, complexity, and timeline.
          </p>
          <p className="mt-3 text-slate-700">
            Larger systems, long-term engagements, or multi-phase builds are priced separately.
          </p>
        </section>

        <section className="group rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:border-slate-300">
          <h2 className="text-xl font-semibold text-slate-900">How Pricing Works</h2>
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

        <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur md:col-span-2">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">What We Typically Build</h2>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent md:block" />
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              {
                title: "Workflow automation & integrations",
                desc: "Replace manual spreadsheet-driven processes.",
              },
              {
                title: "Internal tools & dashboards",
                desc: "Admin panels, reporting, operational visibility.",
              },
              {
                title: "Custom backend services & APIs",
                desc: "Reliable services built for scale and maintainability.",
              },
              {
                title: "MVP builds & technical validation",
                desc: "Prove feasibility quickly without cutting corners.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-xl border border-slate-200/70 bg-white/60 p-4 transition hover:border-slate-300"
              >
                <p className="font-medium text-slate-900">{x.title}</p>
                <p className="mt-1 text-slate-600">{x.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur md:col-span-2">
          <h2 className="text-xl font-semibold text-slate-900">Ongoing Support & Maintenance</h2>
          <p className="mt-3 text-slate-700">
            After launch, optional support and maintenance plans are available for bug fixes,
            monitoring, and small enhancements. Support is separate from major feature development
            and is always scoped clearly.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur md:col-span-2">
          <h2 className="text-xl font-semibold text-slate-900">Our Commitment</h2>
          <p className="mt-3 text-slate-700">
            Every project begins with a defined scope and milestone. If delivered work does not
            meet the agreed requirements, we’ll make it right — or you won’t be billed for unused
            project time.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur md:col-span-2">
          <h2 className="text-xl font-semibold text-slate-900">Let’s Get Started</h2>
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
              className="rounded-xl border border-slate-300 bg-white/60 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              View Our Work
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
