import { Award } from "lucide-react";
import { Section } from "./Section";

const leadership = [
  {
    role: "Vice President — ITSA (Information Technology Student Association)",
    period: "Aug 2025 – Jul 2026",
    body: "Leading student events, technical workshops, and team initiatives across the IT department, coordinating committees and shipping deliverables end-to-end.",
  },
  {
    role: "Team Lead — Smart India Hackathon (SIH)",
    period: "Sep 2024 – Nov 2024",
    body: "Led the AYUSH Virtual Garden project, owning scope, task distribution, and final presentation for the national-level hackathon.",
  },
];

const certifications = [
  { title: "DBMS – Fundamentals & Advanced Concepts", issuer: "Scaler", year: "2024" },
  { title: "Introduction to Machine Learning with scikit-learn", issuer: "Data School", year: "2025" },
  { title: "Power BI for Data Analytics", issuer: "Simplilearn", year: "2025" },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Leadership & Certifications"
      title="Ownership, organization, and continuous learning."
      description="Leadership roles and credentials that reflect my commitment to collaboration and growth."
      className="bg-secondary/40"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-primary font-medium mb-5">
            Leadership & Activities
          </h3>
          <ol className="relative border-l border-border ml-3 space-y-6">
            {leadership.map((it) => (
              <li key={it.role} className="pl-8 relative">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {it.period}
                </div>
                <h4 className="font-semibold text-foreground">{it.role}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {it.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-primary font-medium mb-5">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li
                key={c.title}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition"
              >
                <div className="w-10 h-10 rounded-md bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
