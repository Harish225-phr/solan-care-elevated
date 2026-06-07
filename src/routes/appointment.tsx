import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { useState, type ReactNode } from "react";
import { Phone, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-paediatric.jpg";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — JP Hospital Solan" },
      { name: "description", content: "Book a paediatric or specialist consultation at JP Hospital Solan." },
      { property: "og:title", content: "Book Appointment — JP Hospital Solan" },
      { property: "og:description", content: "Schedule a visit with Dr. J.P. Bisht or a visiting consultant." },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: AppointmentPage,
});

const inputCls = "w-full rounded-2xl border border-border bg-mist/60 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

function Field({ label, required, className = "", children }: { label: string; required?: boolean; className?: string; children: ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}{required && <span className="text-destructive"> *</span>}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero eyebrow="Book Appointment" title={<>Schedule a visit in <span className="gradient-text">under a minute</span>.</>} subtitle="Tell us a little about your needs and our team will confirm your appointment within 2 working hours." image={heroImg} />
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-soft sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center animate-fade-up">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-teal/15 text-teal"><CheckCircle2 className="h-9 w-9" /></span>
                <h2 className="mt-6 text-2xl font-bold text-ink">Request received</h2>
                <p className="mt-2 max-w-md text-muted-foreground">Thank you. Our front desk will call within 2 working hours to confirm.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary/40">Book another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-5 sm:grid-cols-2">
                <h2 className="sm:col-span-2 text-2xl font-bold tracking-tight text-ink">Patient details</h2>
                <Field label="Full Name" required><input required className={inputCls} placeholder="e.g. Aarav Sharma" /></Field>
                <Field label="Mobile" required><input required type="tel" className={inputCls} placeholder="+91 ..." /></Field>
                <Field label="Age"><input className={inputCls} placeholder="Years / months" /></Field>
                <Field label="Department">
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Select department</option>
                    {["Paediatrics", "NICU / PICU", "Orthopaedics", "Pulmonology", "Gynaecology", "Diagnostics"].map((d) => <option key={d}>{d}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Doctor">
                  <select className={inputCls} defaultValue="">
                    <option value="" disabled>Select doctor</option>
                    {["Dr. J.P. Bisht", "Dr. Kulwinder Singh Shah", "Dr. Sumit Bharti", "Dr. J.P. Kaur", "Any available"].map((d) => <option key={d}>{d}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Date"><input type="date" className={inputCls} /></Field>
                <Field label="Message" className="sm:col-span-2"><textarea rows={4} className={inputCls} placeholder="Briefly describe symptoms (optional)" /></Field>
                <div className="sm:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" /> Information kept strictly confidential.</p>
                  <button type="submit" className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow hover:-translate-y-0.5">Request Appointment</button>
                </div>
              </form>
            )}
          </div>
          <aside className="space-y-5">
            <div className="rounded-3xl border border-destructive/20 bg-gradient-to-br from-destructive/5 to-mist p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-destructive px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-destructive-foreground"><span className="h-1.5 w-1.5 rounded-full bg-white" /> Emergency</span>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">Need urgent help?</h3>
              <p className="mt-2 text-sm text-muted-foreground">24 × 7 emergency line is always staffed.</p>
              <a href="tel:+917018125644" className="mt-5 flex items-center justify-between rounded-2xl bg-ink px-5 py-4 text-white">
                <div><div className="text-[10px] uppercase tracking-widest text-white/60">Call now</div><div className="font-semibold">+91 70181 25644</div></div>
                <Phone className="h-5 w-5 text-teal" />
              </a>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-lg font-semibold text-ink">OPD Hours</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>10:30 AM – 2:00 PM</li>
                <li>4:30 PM – 6:00 PM</li>
                <li className="text-ink font-medium">Monday – Saturday</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}