import { Link } from "@tanstack/react-router";
import { CalendarPlus, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/917018125644?text=Hello%20JP%20Hospital%2C%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-12 w-12 place-items-center rounded-full bg-[oklch(0.74_0.16_150)] text-white shadow-glow transition hover:-translate-y-0.5"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <Link
        to="/appointment"
        className="group flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5"
      >
        <CalendarPlus className="h-4 w-4" />
        <span className="hidden sm:inline">Book Appointment</span>
      </Link>
    </div>
  );
}