import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero-paediatric.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Reviews — JP Hospital Solan" },
      { name: "description", content: "4.9 star rated by 1,100+ families across Himachal Pradesh." },
      { property: "og:title", content: "Patient Reviews — JP Hospital Solan" },
      { property: "og:description", content: "Real stories from families cared for by JP Hospital Solan." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { name: "Anjali Sharma", role: "Mother · Solan", text: "Dr. Bisht has cared for both my children since they were born. The NICU team saved my daughter's life — we will always be grateful." },
  { name: "Vikram Thakur", role: "Father · Shimla", text: "From triage to discharge, every staff member treated us like family. Clean facilities, modern equipment and unmatched expertise." },
  { name: "Pooja Kumari", role: "Mother · Kasauli", text: "The PICU team monitored my son around the clock. I have never seen this level of dedication anywhere in Himachal." },
  { name: "Suresh Verma", role: "Grandfather · Nalagarh", text: "Three generations of our family have been cared for by Dr. Bisht. The trust we have is built over decades." },
  { name: "Megha Kapoor", role: "Mother · Parwanoo", text: "Premature baby, NICU, sleepless nights — and a team that never gave up. We're home with a happy, healthy boy today." },
  { name: "Rohan Singh", role: "Father · Baddi", text: "Honest doctors, fair pricing and warm care. The OPD wait times are short and the staff is wonderful with children." },
  { name: "Neha Bansal", role: "Mother · Solan", text: "What sets JP Hospital apart is the follow-up. They call to check on my child days after discharge." },
  { name: "Arvind Chauhan", role: "Father · Subathu", text: "Modern diagnostics on-site meant no running between labs. Everything done in one calm, organised visit." },
  { name: "Komal Rana", role: "Mother · Kandaghat", text: "Dr. Bisht explains every step in language a parent can understand. That alone makes the experience different." },
];

function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Patient Reviews" title={<>Loved by <span className="gradient-text">1,100+ families</span> across Himachal.</>} subtitle="4.9 star average from verified families. Here's what they say about us." image={heroImg} />
      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { value: "4.9★", label: "Average rating" },
            { value: "1,100+", label: "Verified reviews" },
            { value: "98%", label: "Would recommend" },
          ].map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-7 text-center">
              <div className="text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-teal" />
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-500" />)}
                </div>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-ink">"{r.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">{r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</span>
                <div>
                  <div className="text-sm font-semibold text-ink">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}