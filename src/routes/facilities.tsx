import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BedDouble, DoorOpen, Pill, FlaskConical, Scan, HeartPulse, Brain, Siren } from "lucide-react";
import wardAsset from "@/assets/hospital-ward.asset.json";
import otAsset from "@/assets/hospital-ot.asset.json";
import exterior from "@/assets/hospital-exterior.asset.json";
import nicuImg from "@/assets/nicu.jpg";
import diagImg from "@/assets/diagnostics.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — JP Hospital Solan" },
      { name: "description", content: "Modern wards, private rooms, pharmacy, lab, digital X-Ray, ECG, EEG and emergency unit." },
      { property: "og:title", content: "Facilities — JP Hospital Solan" },
      { property: "og:description", content: "Premium hospital infrastructure." },
      { property: "og:url", content: "/facilities" },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

const facilities = [
  { icon: BedDouble, title: "General Wards", image: wardAsset.url, desc: "Bright, spacious general wards with attendant comfort." },
  { icon: DoorOpen, title: "Private Rooms", image: wardAsset.url, desc: "Single-occupancy rooms with attached attendant space." },
  { icon: Pill, title: "24/7 Pharmacy", image: otAsset.url, desc: "Always-open pharmacy with paediatric formulations." },
  { icon: FlaskConical, title: "Pathology Lab", image: diagImg, desc: "Rapid in-house pathology with same-day reports." },
  { icon: Scan, title: "Digital X-Ray", image: diagImg, desc: "High-resolution digital X-Ray with low radiation." },
  { icon: HeartPulse, title: "ECG", image: diagImg, desc: "On-site ECG with cardiology interpretation." },
  { icon: Brain, title: "EEG", image: diagImg, desc: "Paediatric & adult EEG with neurology review." },
  { icon: Siren, title: "Emergency Unit", image: exterior.url, desc: "24 × 7 emergency unit with triage and resuscitation." },
];

function FacilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Facilities" title={<>Infrastructure that <span className="gradient-text">supports excellence</span>.</>} subtitle="Every room and device chosen to make care safer, faster and more comfortable." image={wardAsset.url} />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ icon: Icon, title, image, desc }) => (
            <div key={title} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
          <img src={nicuImg} alt="Modern NICU at JP Hospital" className="aspect-[21/9] w-full object-cover" loading="lazy" />
        </div>
      </section>
    </>
  );
}