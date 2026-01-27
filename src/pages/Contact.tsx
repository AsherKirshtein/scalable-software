function ContactCard({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#0B1F3B]/10 bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold text-[#0B1F3B]">{title}</div>
      <div className="mt-2 text-[#0B1F3B]/70">{desc}</div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function Contact() {
  const email = "akirshtein@scalablesoftware.org";

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-[#0B1F3B]/10 bg-white p-8 shadow-sm sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E11D2E]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#0B1F3B]/10 blur-3xl" />
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E11D2E] via-[#E11D2E]/50 to-transparent" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 px-3 py-1 text-xs font-semibold text-[#0B1F3B]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#E11D2E]" />
            Contact
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F3B] sm:text-4xl">
            Let’s build something that saves time immediately.
          </h1>

          <p className="mt-3 max-w-3xl text-[#0B1F3B]/70">
            Email is fastest. If it’s a fit, you’ll get a clear plan (scope + timeline + price range).
          </p>

          <a
            className="mt-6 inline-block rounded-2xl bg-[#E11D2E] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            href={`mailto:${email}?subject=ScalableSoftware%20-%20Project%20Inquiry`}
          >
            Email now
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <ContactCard
          title="Project inquiry template"
          desc="Copy/paste this. The more specific, the faster we can ship."
        >
          <pre className="whitespace-pre-wrap rounded-2xl border border-[#0B1F3B]/10 bg-[#0B1F3B]/5 p-4 text-sm text-[#0B1F3B]">
{`Subject: ScalableSoftware - Project Inquiry

1) What do you need built?
2) Current process (what’s painful)?
3) Deadline / urgency:
4) Who will use it?
5) Budget range (if known):
6) Any existing tools/data (Excel, Google Sheets, PDFs, apps)?`}
          </pre>
        </ContactCard>

        <ContactCard
          title="What happens next"
          desc="Simple, fast, and structured."
        >
          <ul className="space-y-2 text-sm text-[#0B1F3B]/70">
            {[
              "Reply within a day with clarifying questions (if needed)",
              "You get a plan: milestones + deliverables + estimate",
              "Prototype first so you can see it early",
              "Ship + iterate",
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#E11D2E]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-[#0B1F3B]/10 bg-white p-4 text-sm text-[#0B1F3B]/70">
            <span className="font-semibold text-[#0B1F3B]">Email:</span>{" "}
            <a className="text-[#E11D2E] underline underline-offset-4" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </ContactCard>
      </section>
    </div>
  );
}
