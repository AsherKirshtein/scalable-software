export default function Careers() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-[#0B1F3B]/10 bg-white p-8 shadow-sm sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E11D2E]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#0B1F3B]/10 blur-3xl" />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E11D2E] via-[#E11D2E]/50 to-transparent" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 px-3 py-1 text-xs font-semibold text-[#0B1F3B]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#E11D2E]" />
            Careers
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F3B] sm:text-4xl">
            Not hiring today — building the bench.
          </h1>

          <p className="mt-3 max-w-3xl text-[#0B1F3B]/70">
            We’re not actively hiring right now. But we’re always open to meeting strong builders so
            we can move fast when projects and product traction demand it.
          </p>

          <div className="mt-6 rounded-2xl border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 p-4 text-sm text-[#0B1F3B]/70">
            <span className="font-semibold text-[#0B1F3B]">Status:</span>{" "}
            Not hiring • Open to introductions • Keeping a shortlist
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-[#0B1F3B]">Who we’ll want later</div>
          <p className="mt-2 text-[#0B1F3B]/70">
            People who ship. People who communicate. People who care about clean delivery.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-[#0B1F3B]/70">
            {[
              "Full-stack engineers (React + backend)",
              "Backend / automation specialists (APIs, data pipelines, reliability)",
              "Product-minded builders (scope → prototype → ship)",
              "Design-leaning devs (UX, polish, front-end craft)",
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold text-[#0B1F3B]">What we value</div>
          <p className="mt-2 text-[#0B1F3B]/70">
            This is a small, high-output environment. We optimize for leverage and speed.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-[#0B1F3B]/70">
            {[
              "Ownership: you finish what you start",
              "Pragmatism: simple beats fancy",
              "Craft: polish matters",
              "Reliability: it works when it counts",
              "Communication: no surprises",
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-[#0B1F3B]">Want to be on the shortlist?</h2>
        <p className="mt-2 max-w-3xl text-[#0B1F3B]/70">
          Send your Resume, GitHub/portfolio, and a short note about what you build best.
          If a good fit comes up, we’ll reach out.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-[#0B1F3B]">Email template</div>
            <pre className="mt-3 whitespace-pre-wrap rounded-2xl border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 p-4 text-sm text-[#0B1F3B]">
{`Subject: ScalableSoftware - Talent Intro

1) Role(s) you're strongest in:
2) Links (GitHub / portfolio / LinkedIn):
3) A project you're proud of (1-2 sentences):
4) Availability (now / later):`}
            </pre>
          </div>

          <div className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-[#0B1F3B]">Email</div>
            <p className="mt-2 text-sm text-[#0B1F3B]/70">
              We’ll keep it simple and respectful — no spam, no mass blasts.
            </p>
            <a
              className="mt-5 inline-block rounded-2xl bg-[#E11D2E] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              href="mailto:akirshtein@scalablesoftware.org?subject=ScalableSoftware%20-%20Talent%20Intro"
            >
              Email to join shortlist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
