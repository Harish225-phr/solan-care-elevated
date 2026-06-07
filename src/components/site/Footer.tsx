import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(800px_400px_at_10%_0%,oklch(0.55_0.13_245)_0%,transparent_60%),radial-gradient(700px_300px_at_90%_10%,oklch(0.68_0.12_195)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-primary font-bold">JP</span>
              <div>
                <div className="text-lg font-bold tracking-tight">JP Hospital</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Solan · HP</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Trusted child care, newborn ICU, and critical care excellence in Himachal Pradesh — for 35+ years.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Explore</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["/about", "About"],
                ["/doctors", "Doctors"],
                ["/services", "Services"],
                ["/nicu-picu", "NICU & PICU"],
                ["/facilities", "Facilities"],
                ["/gallery", "Gallery"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/80 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Reach Us</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" /><span>Sharma Niwas Hospital Rd, Near Vipul Gas Agency, Kotla Nala, Solan, HP 173212</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" /><a href="tel:+917018125644">+91 70181 25644</a></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" /><a href="tel:01792220011">01792-220011</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" /><span>care@jphospitalsolan.in</span></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Hours</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" /><span><strong className="text-white">Emergency</strong><br />24 × 7 always open</span></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" /><span><strong className="text-white">OPD</strong><br />10:30 AM – 2:00 PM<br />4:30 PM – 6:00 PM<br />Mon – Sat</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <span>© {new Date().getFullYear()} JP Hospital Solan. All rights reserved.</span>
          <span>Compassion · Expertise · 35+ Years of Care</span>
        </div>
      </div>
    </footer>
  );
}