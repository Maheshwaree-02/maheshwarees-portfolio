import { Code2, Globe, BarChart3, Wrench, Users } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    icon: Globe,
    title: "Web Development",
    items: ["HTML", "CSS", "React", "Responsive Design"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Visualization",
    items: ["Power BI", "Excel", "Data Analysis", "Dashboard Design"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Figma", "VS Code"],
  },
  {
    icon: Users,
    title: "Professional Skills",
    items: [
      "Content Organization",
      "Documentation",
      "Team Collaboration",
      "Problem Solving",
      "Attention to Detail",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit built around the web, data, and content."
      description="Technical depth across the stack with the professional habits to ship work that holds up in real teams."
      className="bg-secondary/40"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-xl border border-border bg-card p-6 hover:shadow-[var(--shadow-card)] transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-md bg-accent text-accent-foreground flex items-center justify-center">
                <g.icon className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-semibold text-foreground">{g.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-background text-foreground/80 hover:border-primary hover:text-primary transition"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
