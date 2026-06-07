import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/doctors", label: "Doctors" },
  { to: "/services", label: "Services" },
  { to: "/nicu-picu", label: "NICU & PICU" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold shadow-glow">
              JP
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-tight text-ink">JP Hospital</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Solan · Himachal</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-mist hover:text-primary"
                activeProps={{ className: "rounded-full px-3 py-2 text-sm font-semibold text-primary bg-mist" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="tel:+917018125644"
              className="flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-2 text-xs font-semibold text-ink transition hover:border-primary/40 hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" /> +91 70181 25644
            </a>
            <Link
              to="/appointment"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-white/80"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Scroll progress */}
        <div className="h-0.5 w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-primary to-teal transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-mist"
                activeProps={{ className: "rounded-xl px-3 py-3 text-sm font-semibold text-primary bg-mist" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}