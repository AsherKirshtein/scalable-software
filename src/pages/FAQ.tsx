function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-[#0B1F3B]/10 bg-white/90 p-6 shadow-sm">
      <div className="font-semibold text-[#0B1F3B]">{q}</div>
      <div className="mt-2 text-sm text-[#0B1F3B]/70">{a}</div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="space-y-12">
      <section>
        <div className="mb-4 flex items-center gap-3">
          <div className="h-1 w-10 rounded-full bg-[#E11D2E]" />
          <h1 className="text-3xl font-semibold tracking-tight text-[#0B1F3B] sm:text-4xl">
            FAQ
          </h1>
        </div>

        <p className="max-w-3xl text-[#0B1F3B]/75">
          Common questions we get before starting a project.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <FAQItem
          q="What kinds of clients do you work with?"
          a="We usually work with small teams, operators, and founders who feel the pain of manual workflows and internal tooling. You don’t need to be a large company."
        />
        <FAQItem
          q="Do you work on small projects?"
          a="Yes. Many engagements start small. The goal is to solve a real problem first, then decide if it should grow."
        />
        <FAQItem
          q="How does pricing work?"
          a="Pricing depends on scope and complexity. We usually provide a clear estimate after an initial discussion and prototype phase."
        />
        <FAQItem
          q="Do you offer ongoing support?"
          a="Yes. We can maintain and iterate on systems we build, or hand them off cleanly to your team."
        />
        <FAQItem
          q="What tech stack do you use?"
          a="We choose tools pragmatically. The focus is reliability, clarity, and long-term maintainability — not chasing trends."
        />
        <FAQItem
          q="How fast do projects move?"
          a="Prototypes often happen ina couple of weeks. Production timelines depend on scope, but we prioritize momentum and clear milestones."
        />
        <FAQItem
          q="Do you build SaaS products for clients?"
          a="We primarily build internal tools, but when a problem is clearly product-worthy, we’re open to helping shape it into a SaaS."
        />
        <FAQItem
          q="What do you need from us to get started?"
          a="A description of the workflow, the data involved, and what’s currently painful. That’s usually enough to begin."
        />
      </section>
    </div>
  );
}
