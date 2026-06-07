import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Award, HeartHandshake, Sparkles, Microscope, ShieldCheck, Building2 } from "lucide-react";
import exterior from "@/assets/hospital-exterior.asset.json";
import ward from "@/assets/hospital-ward.asset.json";
import ot from "@/assets/hospital-ot.asset.json";
import nicuImg from "@/assets/nicu.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JP Hospital Solan" },
      { name: "description", content: "35+ years of trusted paediatric and critical care in Himachal Pradesh. Our mission, vision, infrastructure and patient-centric philosophy." },
      { property: "og:title", content: "About JP Hospital Solan" },
      { property: "og:description", content: "Three decades of compassionate, expert care for children and families in Himachal Pradesh." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: HeartHandshake, title: "Patient-Centric Care", desc: "Decisions made with families, not just for them — at every step." },
  { icon: Microscope, title: "Advanced Infrastructure", desc: "Level-III NICU, PICU, modular OT, digital diagnostics & in-house pharmacy." },
  { icon: ShieldCheck, title: "Critical Care Partnership", desc: "CIPACA-backed critical care protocols and intensivist support." },
  { icon: Sparkles, title: "Clinical Excellence", desc: "Decades of refined neonatal and paediatric clinical practice." },
];

const timeline = [
  { year: "1989", title: "Founded in Solan", desc: "Dr. J.P. Bisht begins paediatric practice, serving families across Himachal." },
  { year: "1998", title: "Dedicated Children's Unit", desc: "Expanded into a full paediatric facility with inpatient care." },
  { year: "2008", title: "NICU Established", desc: "Advanced neonatal intensive care for premature and critically ill newborns." },
  { year: "2016", title: "PICU & Critical Care", desc: "Paediatric ICU added with 24/7 intensivist monitoring." },
  { year: "2021", title: "CIPACA Partnership", desc: "Joined CIPACA for advanced critical care protocols." },
  { year: "Today", title: "1,100+ Families", desc: "Trusted by thousands of families — 4.9★ rated." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About JP Hospital"
        title={<>Three decades of <span className="gradient-text">trusted care</span> — built on family values.</>}
        subtitle="From a single paediatric clinic in 1989 to one of Himachal's most respected child & critical care institutions."
        image={exterior.url}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Our Mission</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">World-class child and critical care — close to home.</h2>
          </div>
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7">
              <Award className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">To be Himachal Pradesh's most trusted destination for paediatric, neonatal and critical care.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7">
              <Building2 className="h-7 w-7 text-teal" />
              <h3 className="mt-4 text-lg font-semibold">Philosophy</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Every child deserves expert care delivered with kindness. We listen, treat thoughtfully, and stay with families through recovery.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Built around what matters most to families.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Our Journey</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">35+ years of caring for Himachal's families.</h2>
        </div>
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-teal/40 to-transparent lg:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div key={t.year} className={`relative grid gap-6 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className={`pl-12 lg:pl-0 ${i % 2 ? "lg:pl-12" : "lg:pr-12 lg:text-right"}`}>
                  <div className="text-3xl font-bold text-primary">{t.year}</div>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-white lg:left-1/2 lg:-translate-x-1/2" />
                <div />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[ward.url, ot.url, nicuImg, exterior.url, ward.url, ot.url].map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-3xl border border-border bg-card ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
              <img src={src} alt="Hospital infrastructure" className={`h-full w-full object-cover ${i === 0 ? "aspect-[16/11]" : "aspect-[4/3]"}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}