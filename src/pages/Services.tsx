import { Link } from "react-router-dom";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#0B1F3B]/10 bg-white px-3 py-1 text-sm text-[#0B1F3B]/70">
      {children}
    </span>
  );
}

function Card({ title, desc, bullets }: { title: string; desc: string; bullets: string[] }) {
  return (
    <div className="group rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold text-[#0B1F3B]">{title}</div>
          <div className="mt-2 text-[#0B1F3B]/70">{desc}</div>
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-[#E11D2E]/80 opacity-70 group-hover:opacity-100" />
      </div>

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

export default function Services() {
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
            Services
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F3B] sm:text-4xl">
            Build fast. Ship clean. Keep it reliable.
          </h1>

          <p className="mt-3 max-w-3xl text-[#0B1F3B]/70">
            We build internal tools, automations, and integrations that make teams move faster.
            Minimal ceremony. High leverage.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-2xl bg-[#E11D2E] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90"
              href="mailto:akirshtein@scalablesoftware.org?subject=ScalableSoftware%20-%20Service%20Request"
            >
              Email about a project
            </a>
            <Link
              className="rounded-2xl border border-[#0B1F3B]/20 px-6 py-3 text-center text-sm font-semibold text-[#0B1F3B] hover:bg-[#0B1F3B]/5"
              to="/contact"
            >
              Contact details
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>Prototypes first</Pill>
            <Pill>Clear scope</Pill>
            <Pill>Production-ready</Pill>
            <Pill>Iterate weekly</Pill>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#0B1F3B]">What you can hire us for</h2>
            <p className="mt-2 max-w-2xl text-[#0B1F3B]/70">
              The goal is simple: reduce manual work and increase visibility.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Card
            title="Automation & Ops"
            desc="Turn messy workflows into reliable pipelines."
            bullets={[
              "CSV/Excel parsing + validation",
              "Scheduled jobs, alerts, notifications",
              "Approval flows + audit logs",
              "Report generators and exports",
            ]}
          />
          <Card
            title="Internal Web Apps"
            desc="Internal tools that feel modern (and don’t break)."
            bullets={[
              "Dashboards + admin panels",
              "Intake forms and review queues",
              "Role-based access (Auth0 etc.)",
              "Search, filters, and analytics",
            ]}
          />
          <Card
            title="Integrations"
            desc="Connect systems so data stops living in silos."
            bullets={[
              "API integrations + webhooks",
              "Data sync between tools",
              "Payments/auth/CRM connections",
              "Monitoring and retries",
            ]}
          />
          <Card
            title="Cloud & Deployment"
            desc="Deploys that are stable and easy to maintain."
            bullets={[
              "CI/CD setup",
              "Logging + monitoring",
              "Cost sanity checks",
              "Performance + reliability hardening",
            ]}
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="rounded-3xl border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">How we run projects</h2>
        <p className="mt-2 max-w-3xl text-[#0B1F3B]/70">
          We keep it tight: clarify → prototype → ship → iterate.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {[
            ["1", "Clarify", "You send a workflow + pain points. We reply with a plan."],
            ["2", "Prototype", "We demo early and lock scope before going deep."],
            ["3", "Ship", "Production deploy with basic monitoring and docs."],
            ["4", "Iterate", "Polish, add features, and drive outcomes."],
          ].map(([n, t, d]) => (
            <div key={t} className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#E11D2E]/10 text-sm font-semibold text-[#E11D2E]">
                  {n}
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
