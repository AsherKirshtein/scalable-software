function ProductCard({
  title,
  status,
  desc,
  bullets,
}: {
  title: string;
  status: "Exploring" | "Drafting" | "Building";
  desc: string;
  bullets: string[];
}) {
  const badge =
    status === "Building"
      ? "bg-[#E11D2E] text-white"
      : "bg-[#E11D2E]/10 text-[#E11D2E]";

  return (
    <div className="group rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="text-lg font-semibold text-[#0B1F3B]">{title}</div>
        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${badge}`}>{status}</span>
      </div>
      <p className="mt-2 text-[#0B1F3B]/70">{desc}</p>

      <ul className="mt-4 space-y-2 text-sm text-[#0B1F3B]/70">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Products() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-[#0B1F3B]/10 bg-white p-8 shadow-sm sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E11D2E]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#0B1F3B]/10 blur-3xl" />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E11D2E] via-[#E11D2E]/50 to-transparent" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 px-3 py-1 text-xs font-semibold text-[#0B1F3B]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#E11D2E]" />
            Products
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F3B] sm:text-4xl">
            We turn repeat pain into simple SaaS.
          </h1>

          <p className="mt-3 max-w-3xl text-[#0B1F3B]/70">
            Products come from real ops problems we see repeatedly. If you’ve got one, email it —
            that’s our “market research.”
          </p>

          <a
            className="mt-6 inline-block rounded-2xl bg-[#E11D2E] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            href="mailto:akirshtein@scalablesoftware.org?subject=ScalableSoftware%20-%20Product%20Idea"
          >
            Email a product idea
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">Current direction</h2>
        <p className="mt-2 max-w-2xl text-[#0B1F3B]/70">
          Early stage by design. We’d rather ship something small and useful than a giant platform.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <ProductCard
            title="Lease Deadline Tracker"
            status="Exploring"
            desc="Extract key dates + escalation clauses from leases and notify before money is missed."
            bullets={[
              "Upload PDF / doc",
              "Auto-extract dates and clauses",
              "Reminders + audit log",
              "Searchable clause library",
            ]}
          />
          <ProductCard
            title="Ops Automation Kits"
            status="Drafting"
            desc="Prebuilt workflows for intake → approvals → reporting, with clean exports."
            bullets={[
              "Intake + review queues",
              "CSV import templates + validation",
              "Report generator outputs",
              "Role-based permissions",
            ]}
          />
        </div>
      </section>
    </div>
  );
}
