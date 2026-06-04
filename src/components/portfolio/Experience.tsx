import { Section } from "./Section";

const items = [
  {
    title: "Team Collaboration",
    body: "Worked across academic and technical project teams, coordinating roles, reviewing each other's work, and shipping deliverables together.",
  },
  {
    title: "Project Planning & Documentation",
    body: "Structured project requirements, timelines, and technical documentation to keep work organized and reproducible.",
  },
  {
    title: "Coordinating Deliverables & Presentations",
    body: "Owned end-to-end coordination of submissions, presentations, and demo materials for academic project reviews.",
  },
  {
    title: "Research & Analytical Work",
    body: "Conducted research, gathered datasets, and translated findings into reports and dashboards for decision support.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Leadership"
      title="How I work with teams and ship results."
      description="Project-based experience that reflects ownership, organization, and a strong collaborative habit."
      className="bg-secondary/40"
    >
      <ol className="relative border-l border-border ml-3 space-y-8">
        {items.map((it, i) => (
          <li key={it.title} className="pl-8 relative">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              0{i + 1}
            </div>
            <h3 className="font-semibold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {it.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
