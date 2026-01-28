import { Link } from "react-router-dom";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#0B1F3B]/10 bg-white px-3 py-1 text-sm text-[#0B1F3B]/70">
      {children}
    </span>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="text-lg font-semibold text-[#0B1F3B]">{title}</div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#E11D2E]/80 opacity-70 group-hover:opacity-100" />
      </div>
      <div className="mt-3 text-[#0B1F3B]/70">{children}</div>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-[#0B1F3B]/10 bg-white p-8 shadow-sm sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E11D2E]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#0B1F3B]/10 blur-3xl" />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E11D2E] via-[#E11D2E]/50 to-transparent" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 px-3 py-1 text-xs font-semibold text-[#0B1F3B]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#E11D2E]" />
            Pricing
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F3B] sm:text-4xl">
            Pricing & Engagements
          </h1>

          <p className="mt-3 max-w-3xl text-[#0B1F3B]/70">
            Clear, transparent pricing for custom software, automation, and internal tools.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>10-hour minimum</Pill>
            <Pill>Milestone-based</Pill>
            <Pill>Fixed scope</Pill>
            <Pill>Weekly updates</Pill>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-2xl bg-[#E11D2E] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90"
              to="/contact"
            >
              Get a quote
            </Link>
            <Link
              className="rounded-2xl border border-[#0B1F3B]/20 px-6 py-3 text-center text-sm font-semibold text-[#0B1F3B] hover:bg-[#0B1F3B]/5"
              to="/work"
            >
              View work
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#0B1F3B]">Simple pricing</h2>
            <p className="mt-2 max-w-2xl text-[#0B1F3B]/70">
              We price based on scope, timeline, and risk — and we keep it explicit.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <InfoCard title="Project pricing">
            <p>
              <span className="font-semibold text-[#0B1F3B]">Minimum engagement:</span>{" "}
              <span className="font-semibold text-[#0B1F3B]">$2,000</span> (10-hour minimum).
            </p>
            <p className="mt-3">
              Most projects land between{" "}
              <span className="font-semibold text-[#0B1F3B]">$4,000–$10,000</span>, depending on
              complexity and timeline.
            </p>
            <p className="mt-3">
              Larger systems, multi-phase builds, and long-term engagements are priced separately.
            </p>
          </InfoCard>

          <InfoCard title="How it works">
            <ul className="mt-1 space-y-2 text-sm text-[#0B1F3B]/70">
              {[
                "Scope + deliverables defined before work begins",
                "Milestones with demos/updates so there are no surprises",
                "Changes outside scope are quoted separately",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="rounded-3xl border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">What we typically build</h2>
        <p className="mt-2 max-w-3xl text-[#0B1F3B]/70">
          High-leverage software that replaces manual work and improves visibility.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Workflow automation & integrations", "Replace manual spreadsheet-driven processes."],
            ["Internal tools & dashboards", "Admin panels, reporting, operational visibility."],
            ["Custom backend services & APIs", "Reliable services built for scale and maintainability."],
            ["MVP builds & technical validation", "Prove feasibility quickly without cutting corners."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold text-[#0B1F3B]">{title}</div>
                  <div className="mt-2 text-[#0B1F3B]/70">{desc}</div>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-[#E11D2E]/80 opacity-70" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT + COMMITMENT */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Ongoing support & maintenance">
            After launch, optional support plans are available for bug fixes, monitoring, and small
            enhancements. Major new features are scoped and quoted separately.
          </InfoCard>

          <InfoCard title="Our commitment">
            Every project begins with a defined scope and milestone. If delivered work does not meet
            the agreed requirements, we’ll make it right — or you won’t be billed for unused project
            time.
          </InfoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-[#0B1F3B]/10 bg-white p-8 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">Let’s get started</h2>
        <p className="mt-2 max-w-3xl text-[#0B1F3B]/70">
          Have a problem to solve or an idea to validate? A short call is often enough to determine
          fit and next steps.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-2xl bg-[#E11D2E] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="rounded-2xl border border-[#0B1F3B]/20 px-6 py-3 text-center text-sm font-semibold text-[#0B1F3B] hover:bg-[#0B1F3B]/5"
            to="/work"
          >
            View work
          </Link>
        </div>
      </section>
    </div>
  );
}
