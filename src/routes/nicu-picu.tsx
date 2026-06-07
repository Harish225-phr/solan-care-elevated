import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Activity, ShieldCheck, Cpu, Phone, Clock, HeartPulse } from "lucide-react";
import nicuImg from "@/assets/nicu.jpg";
import otAsset from "@/assets/hospital-ot.asset.json";

export const Route = createFileRoute("/nicu-picu")({
  head: () => ({
    meta: [
      { title: "NICU & PICU — JP Hospital Solan" },
      { name: "description", content: "Advanced Level-III NICU and PICU with critical monitoring, 24/7 intensivist support and CIPACA critical care partnership." },
      { property: "og:title", content: "NICU & PICU — JP Hospital Solan" },
      { property: "og:description", content: "Critical care for newborns and children." },
      { property: "og:url", content: "/nicu-picu" },
    ],
    links: [{ rel: "canonical", href: "/nicu-picu" }],
  }),
  component: NicuPage,
});

const careProcess = [
  { step: "01", title: "Rapid Assessment", desc: "On arrival, intensivists evaluate the child within minutes." },
  { step: "02", title: "Continuous Monitoring", desc: "Multi-parameter monitors track vitals 24/7." },
  { step: "03", title: "Specialist Intervention", desc: "Paediatricians and neonatologists tailor treatment." },
  { step: "04", title: "Family Updates", desc: "Daily structured updates for families." },
  { step: "05", title: "Recovery Transition", desc: "Smooth step-down from ICU to ward with follow-up." },
];

function NicuPage() {
  return (
    <>
      <PageHero eyebrow="NICU & PICU" title={<>Critical care for the <span className="gradient-text">tiniest patients</span>.</>} subtitle="A Level-III neonatal ICU and paediatric ICU built around advanced monitoring and expert intensivists." image={nicuImg}>
        <Link to="/appointment" className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft">Talk to a specialist</Link>
        <a href="tel:+917018125644" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-3 text-sm font-semibold text-ink"><Phone className="h-4 w-4 text-destructive" /> Emergency</a>
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: HeartPulse, title: "Level-III NICU", desc: "For premature and critically ill newborns." },
            { icon: Activity, title: "Paediatric ICU", desc: "Dedicated PICU beds with intensivist coverage." },
            { icon: ShieldCheck, title: "CIPACA Partnership", desc: "Tele-ICU & critical care protocols, 24/7." },
            { icon: Cpu, title: "Modern Equipment", desc: "Ventilators, incubators, phototherapy & more." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Care Process</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">How critical care happens at JP Hospital.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {careProcess.map((p) => (
              <div key={p.step} className="rounded-3xl border border-border bg-card p-6">
                <div className="text-3xl font-bold gradient-text">{p.step}</div>
                <h3 className="mt-3 text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-soft">
            <img src={otAsset.url} alt="Operation theatre" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Trust Indicators</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Built to handle the most critical moments.</h2>
            <ul className="mt-6 space-y-4">
              {["Round-the-clock intensivist & paediatrician coverage", "Advanced ventilators and neonatal monitors", "Modular OT for emergency surgical interventions", "CIPACA tele-ICU support", "Strict infection control & family-centred care"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {t}</li>
              ))}
            </ul>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4">
              <Clock className="h-5 w-5 text-teal" />
              <div className="text-sm"><span className="font-semibold text-ink">Emergency Response</span><span className="ml-2 text-muted-foreground">24 × 7 always available</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}