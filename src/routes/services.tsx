import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Baby, HeartPulse, Stethoscope, Activity, Sparkles, Microscope, Wind, Pill, Scan, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-paediatric.jpg";
import nicuImg from "@/assets/nicu.jpg";
import diagImg from "@/assets/diagnostics.jpg";
import otAsset from "@/assets/hospital-ot.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — JP Hospital Solan" },
      { name: "description", content: "Paediatrics, NICU, PICU, critical care, orthopaedics, pulmonology, gynaecology, laparoscopy, diagnostics and pharmacy." },
      { property: "og:title", content: "Medical Services — JP Hospital Solan" },
      { property: "og:description", content: "Complete spectrum of paediatric and critical care services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Baby, title: "Paediatrics & Newborn Care", image: heroImg, desc: "End-to-end child health from delivery through adolescence.", benefits: ["Newborn screening", "Vaccinations", "Growth & nutrition", "Developmental assessment"] },
  { icon: HeartPulse, title: "NICU & PICU", image: nicuImg, desc: "Level-III neonatal & paediatric intensive care, 24/7 monitored.", benefits: ["Premature newborn care", "Respiratory support", "Critical monitoring", "Family-centred ICU"] },
  { icon: Stethoscope, title: "Critical Care (CIPACA)", image: otAsset.url, desc: "Adult & paediatric critical care via CIPACA partnership.", benefits: ["Intensivist-led", "Tele-ICU support", "Advanced ventilation", "24/7 emergency"] },
  { icon: Activity, title: "Orthopaedics & Joint Replacement", image: otAsset.url, desc: "Trauma, fractures and joint replacement.", benefits: ["Joint replacement", "Trauma care", "Sports injuries", "Paediatric ortho"] },
  { icon: Wind, title: "Pulmonology & Sleep Medicine", image: diagImg, desc: "Respiratory and sleep disorder evaluation and treatment.", benefits: ["Asthma & COPD", "Sleep studies", "Pulmonary function", "Allergy testing"] },
  { icon: Sparkles, title: "Gynaecology & Laparoscopy", image: heroImg, desc: "Women's health and advanced minimally invasive surgery.", benefits: ["Advanced laparoscopy", "Antenatal care", "Fertility evaluation", "Menopause care"] },
  { icon: Scan, title: "Diagnostics & Imaging", image: diagImg, desc: "Digital X-Ray, ECG, EEG and on-site pathology lab.", benefits: ["Digital X-ray", "ECG / EEG", "Pathology lab", "Same-day reports"] },
  { icon: Microscope, title: "Pathology Lab", image: diagImg, desc: "In-house lab with rapid, accurate diagnostic reports.", benefits: ["Blood work", "Microbiology", "Histopathology", "Home collection"] },
  { icon: Pill, title: "24/7 Pharmacy", image: otAsset.url, desc: "On-site pharmacy with paediatric formulations.", benefits: ["24/7 availability", "Paediatric stock", "Insurance billing", "Counselling"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title={<>A complete spectrum of <span className="gradient-text">expert care</span>.</>} subtitle="From newborn screening to advanced critical care — every service designed around safety and clinical excellence." image={otAsset.url} />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, image, desc, benefits }) => (
            <div key={title} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-primary shadow-soft backdrop-blur"><Icon className="h-5 w-5" /></span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {benefits.map((b) => (<li key={b} className="flex items-center gap-2 text-ink"><span className="h-1.5 w-1.5 rounded-full bg-teal" />{b}</li>))}
                </ul>
                <Link to="/appointment" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Book now <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}