import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import exterior from "@/assets/hospital-exterior.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — JP Hospital Solan" },
      { name: "description", content: "Phone, address, OPD hours and directions to JP Hospital Solan." },
      { property: "og:title", content: "Contact JP Hospital Solan" },
      { property: "og:description", content: "Reach us by phone, email or visit." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inputCls = "w-full rounded-2xl border border-border bg-mist/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

function InfoCard({ icon: Icon, title, lines }: { icon: LucideIcon; title: string; lines: string[] }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-glow">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
      <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">{title}</h3>
      <div className="mt-2 space-y-1 text-sm text-ink">
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>We're here, <span className="gradient-text">whenever you need us</span>.</>} subtitle="Reach us by phone, drop by during OPD hours, or use our quick form." image={exterior.url} />
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard icon={MapPin} title="Address" lines={["Sharma Niwas Hospital Rd", "Near Vipul Gas Agency", "Kotla Nala, Solan", "Himachal Pradesh 173212"]} />
          <InfoCard icon={Phone} title="Phone" lines={["+91 70181 25644", "01792-220011", "+91 94180 88778"]} />
          <InfoCard icon={Mail} title="Email" lines={["care@jphospitalsolan.in", "appointments@jphospitalsolan.in"]} />
          <InfoCard icon={Clock} title="Hours" lines={["Emergency · 24 × 7", "OPD: 10:30 – 2:00", "OPD: 4:30 – 6:00", "Mon – Sat"]} />
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-soft">
            <iframe title="JP Hospital Solan map" src="https://www.google.com/maps?q=JP+Hospital+Solan+Himachal+Pradesh&output=embed" className="aspect-[4/3] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <form className="rounded-[1.75rem] border border-border bg-card p-8 shadow-soft" onSubmit={(e) => { e.preventDefault(); alert("Thank you, we'll be in touch."); }}>
            <h2 className="text-xl font-bold tracking-tight text-ink">Quick contact</h2>
            <p className="mt-1 text-sm text-muted-foreground">Send a message — we'll reply within one working day.</p>
            <div className="mt-5 grid gap-4">
              <input required placeholder="Your name" className={inputCls} />
              <input required type="tel" placeholder="Phone number" className={inputCls} />
              <textarea rows={4} placeholder="Message" className={inputCls} />
              <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}