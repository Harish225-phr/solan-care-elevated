import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import drJp from "@/assets/dr-jp-bisht.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — JP Hospital Solan" },
      { name: "description", content: "Meet Dr. J.P. Bisht and our visiting consultants in orthopaedics, pulmonology, gynaecology and more." },
      { property: "og:title", content: "Doctors at JP Hospital Solan" },
      { property: "og:description", content: "Experienced paediatric and specialist doctors." },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

const featured = {
  name: "Dr. J.P. Bisht",
  creds: "MD, DCH",
  role: "Paediatrician & Newborn Specialist",
  exp: "35+ Years",
  expertise: ["Neonatal & Newborn Care", "Paediatric Intensive Care", "Childhood Vaccinations", "Growth & Development", "Paediatric Emergencies"],
  image: drJp,
  bio: "An institution in himself, Dr. Bisht has cared for three decades of Himachali families. His clinical depth in neonatology and paediatric critical care is matched only by his warm, family-first bedside manner.",
};

const consultants = [
  { name: "Dr. Kulwinder Singh Shah", role: "Orthopaedics & Joint Replacement", initials: "KS", color: "from-blue-500/20 to-teal/20" },
  { name: "Dr. Sumit Bharti", role: "Pulmonology & Sleep Medicine", initials: "SB", color: "from-teal/20 to-emerald-400/20" },
  { name: "Dr. J.P. Kaur", role: "Gynaecology & Advanced Laparoscopy", initials: "JK", color: "from-rose-400/20 to-primary/20" },
];

function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Doctors"
        title={<>Specialists who treat your <span className="gradient-text">family like family</span>.</>}
        subtitle="Led by Dr. J.P. Bisht with 35+ years in paediatrics, supported by visiting consultants."
        image={drJp}
      />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Featured Specialist</span>
        <div className="mt-4 grid gap-10 overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-white to-mist p-8 shadow-soft lg:grid-cols-[1fr_1.3fr] lg:p-12">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[1.75rem] bg-gradient-to-br from-primary/15 to-teal/15 blur-2xl" />
            <img src={featured.image} alt={featured.name} className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-soft" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{featured.name}</h2>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 text-primary font-semibold"><GraduationCap className="h-4 w-4" /> {featured.creds}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-ink font-medium">{featured.role}</span>
              <span className="ml-1 rounded-full bg-teal/15 px-2.5 py-0.5 text-xs font-semibold text-teal-foreground">{featured.exp}</span>
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">{featured.bio}</p>
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Areas of Expertise</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {featured.expertise.map((e) => (
                  <span key={e} className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-ink">{e}</span>
                ))}
              </div>
            </div>
            <Link to="/appointment" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:shadow-glow">
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Visiting Consultants</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Expert specialists across disciplines.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {consultants.map((c) => (
            <div key={c.name} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${c.color} grid place-items-center`}>
                <div className="grid h-24 w-24 place-items-center rounded-full bg-white/80 text-3xl font-bold text-primary shadow-soft backdrop-blur">{c.initials}</div>
              </div>
              <div className="p-6">
                <Stethoscope className="h-5 w-5 text-teal" />
                <h3 className="mt-3 text-lg font-semibold text-ink">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.role}</p>
                <Link to="/appointment" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Book consultation <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}