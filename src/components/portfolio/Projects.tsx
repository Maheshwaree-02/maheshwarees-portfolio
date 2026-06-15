import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    n: "01",
    title: "KrishiMitra — Smart Agriculture Management Platform",
    description:
      "Role-based web application supporting Farmers, Workers, and Administrators. Built responsive interfaces with HTML, CSS, and JavaScript and implemented modules for farm management, inventory tracking, task assignment, and analytics reporting.",
    tech: ["HTML", "CSS", "JavaScript", "DBMS"],
    tag: "Web Platform · Apr–May 2025",
  },
  {
    n: "02",
    title: "Consumer Sales & Demand Forecasting Analytics Platform",
    description:
      "Business analytics platform using Python, SQL, and Power BI. Designed SQL-based data processing workflows, KPI dashboards, and analytical reports to support data-driven decisions.",
    tech: ["Python", "SQL", "Power BI"],
    tag: "Data Analytics · Mar–Apr 2025",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured projects."
      description="A focused selection of projects that reflect how I think about products, content, and data."
    >
      <div className="space-y-5">
        {projects.map((p) => (
          <article
            key={p.n}
            className="group relative rounded-xl border border-border bg-card p-6 md:p-8 hover:border-primary/50 hover:shadow-[var(--shadow-card)] transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:gap-10">
              <div className="md:w-40 shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-2 mb-4 md:mb-0">
                <span className="text-3xl md:text-4xl font-semibold text-primary/70 tabular-nums">
                  {p.n}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {p.tag}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
