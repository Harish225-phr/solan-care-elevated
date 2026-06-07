import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Phone,
  CalendarPlus,
  Star,
  ShieldCheck,
  Baby,
  HeartPulse,
  Stethoscope,
  Activity,
  Microscope,
  Sparkles,
  ArrowRight,
  MapPin,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-paediatric.jpg";
import drJp from "@/assets/dr-jp-bisht.jpg";
import nicuImg from "@/assets/nicu.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import wardAsset from "@/assets/hospital-ward.asset.json";
import otAsset from "@/assets/hospital-ot.asset.json";
import exteriorAsset from "@/assets/hospital-exterior.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JP Hospital Solan — Trusted Child Care & Critical Care Excellence" },
      { name: "description", content: "35+ years of advanced paediatric, NICU, PICU and critical care in Solan, Himachal Pradesh. Led by Dr. J.P. Bisht. 1100+ patient reviews. 4.9★ rating." },
      { property: "og:title", content: "JP Hospital Solan — Trusted Child Care & Critical Care" },
      { property: "og:description", content: "Advanced newborn care, paediatric ICU, diagnostics & specialist consultations with compassion and expertise." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const stats = [
  { value: "35+", label: "Years of Experience" },
  { value: "1,100+", label: "Patient Reviews" },
  { value: "4.9★", label: "Average Rating" },
  { value: "24/7", label: "Emergency Care" },
];

const services = [
  { icon: Baby, title: "Paediatrics & Newborn", desc: "Comprehensive child health from newborn through adolescence." },
  { icon: HeartPulse, title: "NICU & PICU", desc: "Level-III neonatal & paediatric intensive care, 24/7 monitored." },
  { icon: Stethoscope, title: "Critical Care", desc: "Advanced critical care via CIPACA partnership and expert intensivists." },
  { icon: Activity, title: "Orthopaedics", desc: "Joint replacement and trauma care by leading visiting consultants." },
  { icon: Sparkles, title: "Gynaecology & Laparoscopy", desc: "Advanced women's health and minimally invasive surgery." },
  { icon: Microscope, title: "Diagnostics", desc: "Digital X-ray, ECG, EEG and in-house pathology lab." },
];

const reasons = [
  "Trusted family care across three generations of patients",
  "Round-the-clock paediatric emergency response",
  "Advanced NICU & PICU with critical-care partnership",
  "Compassionate, family-first clinical philosophy",
];

const testimonials = [
  { name: "Anjali Sharma", role: "Parent · Solan", text: "Dr. Bisht has cared for both my children since they were born. The NICU team saved my daughter's life — we will always be grateful." },
  { name: "Vikram Thakur", role: "Family · Shimla", text: "From triage to discharge, every staff member treated us like family. Clean facilities, modern equipment and unmatched expertise." },
  { name: "Pooja Kumari", role: "Mother · Kasauli", text: "The PICU team monitored my son around the clock. I have never seen this level of dedication anywhere in Himachal." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate gradient-hero pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-teal" /></span>
              35+ years of paediatric care
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]">
              Trusted <span className="gradient-text">Child Care</span> & Critical Care Excellence in Solan.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Advanced newborn care, paediatric intensive care, diagnostics and specialist consultations — delivered with compassion and decades of expertise.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow hover:-translate-y-0.5"
              >
                <CalendarPlus className="h-4 w-4" /> Book Appointment
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+917018125644"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-primary/40 hover:text-primary"
              >
                <Phone className="h-4 w-4 text-destructive" /> Emergency · +91 70181 25644
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-2">
                {[drJp, heroImg, nicuImg].map((s, i) => (
                  <img key={i} src={s} className="h-10 w-10 rounded-full border-2 border-white object-cover" alt="" loading="lazy" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-500" />)}
                  <span className="ml-1.5 font-semibold text-ink">4.9</span>
                </div>
                <div className="text-xs text-muted-foreground">1,100+ verified family reviews</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-teal/15 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white shadow-glow">
              <img src={heroImg} alt="Paediatrician with newborn at JP Hospital" className="aspect-[4/5] h-full w-full object-cover" />
            </div>
            <div className="absolute -left-6 bottom-8 glass rounded-2xl px-4 py-3 shadow-soft animate-float">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/15 text-teal"><ShieldCheck className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Accredited</div>
                  <div className="text-sm font-semibold text-ink">CIPACA Critical Care</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-10 glass rounded-2xl px-4 py-3 shadow-soft">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Open now</div>
              <div className="text-sm font-semibold text-ink">Emergency · 24 × 7</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto -mt-10 max-w-7xl px-6 lg:px-8">
        <div className="glass rounded-3xl border border-white/60 p-6 shadow-soft sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft">
              <img src={exteriorAsset.url} alt="JP Hospital Solan building" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -right-4 -bottom-6 hidden glass rounded-2xl p-5 shadow-soft sm:block">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Trusted since</div>
              <div className="text-2xl font-bold text-primary">1989</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">About JP Hospital</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A family-led mission to bring world-class child care to Himachal.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              For over three decades, JP Hospital Solan has been the trusted destination for newborn, paediatric and critical care families across Himachal Pradesh — combining advanced medical technology with warm, personalised attention.
            </p>
            <ul className="mt-6 space-y-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary"><ShieldCheck className="h-3.5 w-3.5" /></span>
                  {r}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Featured Services</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">A complete spectrum of care, under one roof.</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-mist opacity-0 transition group-hover:opacity-100" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-white to-mist p-8 shadow-soft lg:grid-cols-[1fr_1.2fr] lg:p-12">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[1.75rem] bg-gradient-to-br from-primary/15 to-teal/15 blur-2xl" />
            <img src={drJp} alt="Dr. J.P. Bisht" className="aspect-[4/5] w-full rounded-[1.5rem] border border-white object-cover shadow-soft" loading="lazy" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Meet our specialist</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Dr. J.P. Bisht</h2>
            <p className="mt-1 text-base font-medium text-primary">MD, DCH · Paediatrician & Newborn Specialist</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {["35+ Years Experience", "Newborn Care Expert", "PICU Specialist", "Family Trusted"].map((t) => (
                <span key={t} className="rounded-full bg-mist px-3 py-1.5 font-medium text-ink">{t}</span>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              An institution in himself, Dr. Bisht has cared for more than three decades of families in Himachal Pradesh. His approach combines deep clinical expertise in neonatology and paediatric intensive care with the warmth of a family doctor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/appointment" className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow">
                Book Consultation
              </Link>
              <Link to="/doctors" className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink hover:border-primary/40 hover:text-primary">
                Meet all specialists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Family Voices</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Why families across Himachal trust us.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1">
                <Quote className="h-6 w-6 text-teal" />
                <blockquote className="mt-4 text-sm leading-relaxed text-ink">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-ink">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />)}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-white lg:p-14">
          <div className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(600px_300px_at_20%_20%,oklch(0.55_0.13_245)_0%,transparent_60%),radial-gradient(500px_250px_at_80%_80%,oklch(0.68_0.12_195)_0%,transparent_60%)]" />
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> 24 × 7 Emergency
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Critical care when every minute matters.</h2>
              <p className="mt-3 max-w-lg text-white/70">Our emergency unit and PICU are staffed around the clock with intensivists, paediatricians and dedicated critical-care nursing.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:+917018125644" className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-ink shadow-glow">
                <span><span className="block text-xs uppercase tracking-widest text-muted-foreground">Call now</span><span className="font-semibold">+91 70181 25644</span></span>
                <Phone className="h-5 w-5 text-primary" />
              </a>
              <a href="tel:01792220011" className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10">
                <span><span className="block text-xs uppercase tracking-widest text-white/60">Landline</span><span className="font-semibold text-white">01792-220011</span></span>
                <Phone className="h-5 w-5 text-teal" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Find Us</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">In the heart of Solan, easy to reach.</h2>
            <p className="mt-4 text-muted-foreground">Sharma Niwas Hospital Rd, Near Vipul Gas Agency, Kotla Nala, Solan, Himachal Pradesh 173212</p>
            <div className="mt-6 space-y-2 text-sm text-ink">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Free patient parking on-site</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Wheelchair accessible</div>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft">
              Get directions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-soft">
            <iframe
              title="JP Hospital Solan map"
              src="https://www.google.com/maps?q=JP+Hospital+Solan+Himachal+Pradesh&output=embed"
              className="aspect-[16/10] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
