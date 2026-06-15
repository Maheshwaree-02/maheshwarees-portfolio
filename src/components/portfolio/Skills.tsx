import { Code2, Globe, BarChart3, Wrench, Users, Database, Brain } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: ["HTML5", "CSS3", "Responsive Web Design"],
  },
  {
    icon: Brain,
    title: "Core Concepts",
    items: [
      "OOP",
      "DBMS",
      "Data Structures & Algorithms",
      "Problem Solving",
      "Software Development",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    icon: BarChart3,
    title: "Analytics & ML",
    items: ["Power BI", "Streamlit", "Scikit-Learn", "TensorFlow"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    icon: Users,
    title: "Professional Skills",
    items: [
      "Team Collaboration",
      "Documentation",
      "Attention to Detail",
      "Communication",
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
