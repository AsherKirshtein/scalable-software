import { Link } from "react-router-dom";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-4 shadow-sm">
      <div className="text-sm text-[#0B1F3B]/60">{label}</div>
      <div className="mt-1 text-xl font-semibold text-[#0B1F3B]">{value}</div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="text-lg font-semibold text-[#0B1F3B]">{title}</div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#E11D2E]/80 opacity-70 group-hover:opacity-100" />
      </div>
      <div className="mt-2 text-[#0B1F3B]/70">{desc}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-[#0B1F3B]/10 bg-white p-8 shadow-sm sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E11D2E]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#0B1F3B]/10 blur-3xl" />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E11D2E] via-[#E11D2E]/50 to-transparent" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 px-3 py-1 text-xs font-semibold text-[#0B1F3B]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#E11D2E]" />
            Built for speed and reliability
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0B1F3B] sm:text-5xl">
            High-leverage software for operations teams — and the products that follow.
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-[#0B1F3B]/70">
            We build internal tools, automations, and integrations that remove bottlenecks.
            When we see repeatable pain, we turn it into focused SaaS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-2xl bg-[#E11D2E] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90"
              href="mailto:akirshtein@scalablesoftware.org?subject=ScalableSoftware%20-%20Project%20Inquiry"
            >
              Email to start
            </a>
            <Link
              className="rounded-2xl border border-[#0B1F3B]/20 px-6 py-3 text-center text-sm font-semibold text-[#0B1F3B] hover:bg-[#0B1F3B]/5"
              to="/services"
            >
              View services
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Stat label="Response time" value="Same day" />
            <Stat label="Delivery style" value="Fast prototypes" />
            <Stat label="Focus" value="Ops + automation" />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#0B1F3B]">What we build</h2>
            <p className="mt-2 max-w-2xl text-[#0B1F3B]/70">
              Clean user experience, solid architecture, and reliable delivery.
            </p>
          </div>
          <Link className="hidden text-sm font-semibold text-[#E11D2E] underline underline-offset-4 sm:block" to="/services">
            Details →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Card title="Automations" desc="Replace repetitive manual steps with reliable workflows and alerts." />
          <Card title="Internal Tools" desc="Dashboards, admin panels, intake flows, and role-based access." />
          <Card title="Integrations" desc="APIs, auth, billing, data pipelines, reporting, and data sync." />
        </div>
      </section>

      {/* PROOF */}
      <section className="rounded-3xl bg-[#0B1F3B]/5 p-8 sm:p-12">
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">Proof beats buzzwords</h2>
        <p className="mt-2 max-w-3xl text-[#0B1F3B]/70">
          If you can describe your workflow and where it hurts, we can ship improvements quickly.
          Typical wins look like this:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["Fewer errors", "Guardrails, validations, and consistent data."],
            ["Faster cycles", "Cut approval and reporting time dramatically."],
            ["Clear visibility", "Dashboards and audit trails for operations."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm">
              <div className="font-semibold text-[#0B1F3B]">{t}</div>
              <div className="mt-2 text-[#0B1F3B]/70">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {[
            ["Discover", "Clarify goals, constraints, success metrics."],
            ["Prototype", "Early demo fast. Tight feedback loop."],
            ["Ship", "Deploy, monitor, and harden."],
            ["Support", "Iterate, optimize, and expand."],
          ].map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#E11D2E]/10 text-sm font-semibold text-[#E11D2E]">
                  {i + 1}
                </div>
                <div className="font-semibold text-[#0B1F3B]">{t}</div>
              </div>
              <div className="mt-3 text-sm text-[#0B1F3B]/70">{d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
