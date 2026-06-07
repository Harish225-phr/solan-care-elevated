import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";
import { X } from "lucide-react";
import exterior from "@/assets/hospital-exterior.asset.json";
import ward from "@/assets/hospital-ward.asset.json";
import ot from "@/assets/hospital-ot.asset.json";
import nicuImg from "@/assets/nicu.jpg";
import heroImg from "@/assets/hero-paediatric.jpg";
import diagImg from "@/assets/diagnostics.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — JP Hospital Solan" },
      { name: "description", content: "Explore JP Hospital — infrastructure, patient care, NICU, PICU and diagnostics." },
      { property: "og:title", content: "Gallery — JP Hospital Solan" },
      { property: "og:description", content: "Inside JP Hospital Solan: facilities and care moments." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Item = { src: string; category: string; tall?: boolean };

const items: Item[] = [
  { src: exterior.url, category: "Infrastructure", tall: true },
  { src: heroImg, category: "Patient Care" },
  { src: nicuImg, category: "NICU" },
  { src: ward.url, category: "Patient Care", tall: true },
  { src: ot.url, category: "Infrastructure" },
  { src: diagImg, category: "Diagnostics" },
  { src: nicuImg, category: "PICU" },
  { src: heroImg, category: "Doctor Consultations" },
  { src: ward.url, category: "Patient Care" },
  { src: ot.url, category: "Infrastructure", tall: true },
  { src: diagImg, category: "Diagnostics" },
  { src: exterior.url, category: "Infrastructure" },
];

const categories = ["All", "Infrastructure", "Patient Care", "NICU", "PICU", "Diagnostics", "Doctor Consultations"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);
  return (
    <>
      <PageHero eyebrow="Gallery" title={<>A look <span className="gradient-text">inside JP Hospital</span>.</>} subtitle="Infrastructure, patient care, NICU, PICU and diagnostics — around the hospital." image={ot.url} />
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${filter === c ? "bg-primary text-primary-foreground shadow-soft" : "border border-border bg-card text-ink hover:border-primary/40 hover:text-primary"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((it, i) => (
            <button key={i} onClick={() => setOpen(it.src)} className="group block w-full overflow-hidden rounded-3xl border border-border bg-card text-left transition hover:-translate-y-0.5 hover:shadow-glow">
              <img src={it.src} alt={it.category} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-105 ${it.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{it.category}</span>
                <span className="text-xs text-primary">View</span>
              </div>
            </button>
          ))}
        </div>
      </section>
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/80 p-4 backdrop-blur-sm animate-fade-up" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button aria-label="Close" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"><X className="h-5 w-5" /></button>
          <img src={open} alt="" className="max-h-[85vh] max-w-5xl rounded-2xl object-contain shadow-glow" />
        </div>
      )}
    </>
  );
}