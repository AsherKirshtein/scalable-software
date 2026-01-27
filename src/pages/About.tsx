export default function About() {
  const phases: Array<{
    title: string;
    desc: string;
    outputs: string[];
  }> = [
    {
      title: "Understand",
      desc: "We map the workflow, data, constraints, and what success actually looks like.",
      outputs: [
        "Clear problem statement",
        "Workflow + data map",
        "Success criteria",
      ],
    },
    {
      title: "Prototype",
      desc: "We build a working version fast to validate direction and surface unknowns early.",
      outputs: [
        "Clickable or working prototype",
        "Early technical direction",
        "Initial scope boundaries",
      ],
    },
    {
      title: "Feedback",
      desc: "You react to the prototype. We tighten scope, remove confusion, and prioritize wins.",
      outputs: [
        "Refined requirements",
        "Adjusted scope",
        "Prioritized improvements",
      ],
    },
    {
      title: "Demo",
      desc: "We walk through the updated build together and confirm it matches the real-world process.",
      outputs: [
        "Live walkthrough",
        "Final sign-off on behavior",
        "Deployment readiness check",
      ],
    },
    {
      title: "Ship",
      desc: "We harden, deploy, and document the system so it’s reliable and maintainable.",
      outputs: [
        "Production deployment",
        "Basic monitoring/logging",
        "Usage documentation",
      ],
    },
    {
      title: "Iterate",
      desc: "We refine based on real usage, add leverage, and expand only where it pays off.",
      outputs: [
        "Incremental improvements",
        "New features driven by usage",
        "Optional productization",
      ],
    },
  ];

  return (
    <div className="space-y-14">
      {/* ABOUT */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <div className="h-1 w-10 rounded-full bg-[#E11D2E]" />
          <h1 className="text-3xl font-semibold tracking-tight text-[#0B1F3B] sm:text-4xl">
            About ScalableSoftware
          </h1>
        </div>

        <p className="max-w-3xl text-lg text-[#0B1F3B]/75">
          Most teams don’t fail because they lack talent — they fail because their tools don’t scale
          with their operations. Manual steps pile up. Spreadsheets drift. Context gets lost.
        </p>

        <p className="mt-4 max-w-3xl text-[#0B1F3B]/75">
          We build internal tools, automations, and integrations that remove busywork now and scale
          cleanly as teams grow. When the same pain appears repeatedly, we turn it into focused SaaS.
        </p>
      </section>

      {/* PRINCIPLES */}
      <section className="rounded-3xl bg-[#0B1F3B]/5 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">How we think</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            [
              "Leverage over volume",
              "Small systems done right beat large systems done fast.",
            ],
            [
              "Prototype early",
              "Working software beats long documents every time.",
            ],
            [
              "Production matters",
              "Reliability and maintainability are part of the deliverable.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-[#0B1F3B]/10 bg-white/90 p-6 shadow-sm"
            >
              <div className="font-semibold text-[#0B1F3B]">{t}</div>
              <div className="mt-2 text-sm text-[#0B1F3B]/70">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE WITH OUTPUTS */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <div className="h-1 w-10 rounded-full bg-[#E11D2E]" />
          <h2 className="text-2xl font-semibold text-[#0B1F3B]">How we work</h2>
        </div>

        <p className="max-w-3xl text-[#0B1F3B]/75">
          Each phase produces concrete outputs. You always know what you’re getting and what comes next.
        </p>

        <div className="relative mt-8">
          {/* Timeline lines */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#0B1F3B]/10 lg:block" />
          <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-[#0B1F3B]/10 lg:hidden" />

          <div className="space-y-6">
            {phases.map((p, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={p.title}
                  className={`relative grid gap-6 lg:grid-cols-2 ${
                    isLeft ? "" : "lg:[&>div:first-child]:order-2"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="pointer-events-none absolute left-5 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[#0B1F3B]/10 lg:left-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#E11D2E]" />
                  </div>

                  <div className="hidden lg:block" />

                  {/* Card */}
                  <div
                    className={`ml-10 rounded-2xl border border-[#0B1F3B]/10 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:ml-0 ${
                      isLeft ? "lg:pr-10" : "lg:pl-10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E11D2E]/10 text-sm font-semibold text-[#E11D2E]">
                        {idx + 1}
                      </div>
                      <div className="text-lg font-semibold text-[#0B1F3B]">{p.title}</div>
                    </div>

                    <p className="mt-3 text-sm text-[#0B1F3B]/70">{p.desc}</p>

                    {/* OUTPUTS */}
                    <div className="mt-4 rounded-xl border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 p-4">
                      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#0B1F3B]/60">
                        Outputs
                      </div>
                      <ul className="space-y-1.5 text-sm text-[#0B1F3B]/70">
                        {p.outputs.map((o) => (
                          <li key={o} className="flex gap-2">
                            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
