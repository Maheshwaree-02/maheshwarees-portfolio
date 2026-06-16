import {
  GraduationCap,
  BrainCircuit,
  Database,
  BarChart3,
} from "lucide-react";
import { Section } from "./Section";

const points = [
  {
    icon: GraduationCap,
    title: "B.Tech in Information Technology",
    body: "Final-year Information Technology student with a 9.57 CGPA, building a strong foundation in software engineering, artificial intelligence, and data systems.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning Builder",
    body: "Passionate about developing intelligent applications using LLMs, RAG pipelines, agentic AI workflows, forecasting models, and machine learning techniques.",
  },
  {
    icon: Database,
    title: "Aspiring Data Engineer",
    body: "Interested in designing scalable data pipelines, ETL workflows, data warehouses, and cloud-based architectures that transform raw data into valuable business assets.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Problem Solving",
    body: "Enjoy uncovering insights from data, building predictive models, and creating analytics solutions that support data-driven decision making.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="AI Builder. Data Enthusiast. Future Data Engineer."
      description="I'm a final-year Information Technology student passionate about Artificial Intelligence, Machine Learning, Data Engineering, and Analytics. I enjoy transforming complex data into actionable insights and building scalable AI-powered applications that solve real-world problems."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {points.map((p) => (
          <div
            key={p.title}
            className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
              <p.icon className="w-5 h-5" />
            </div>

            <h3 className="font-semibold text-foreground">{p.title}</h3>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-secondary/50 p-6 md:p-8">
        <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
          With a strong academic background and a passion for intelligent
          systems, I'm focused on building projects at the intersection of{" "}
          <span className="text-primary font-medium">
            Artificial Intelligence, Data Engineering, Machine Learning, and
            Analytics
          </span>
          . My work includes developing AI-powered research assistants using
          LangGraph and RAG, consumer demand forecasting platforms, wind power
          forecasting systems, and data-driven solutions that combine software
          engineering with real-world impact.
          <br />
          <br />
          I'm continuously exploring modern AI frameworks, cloud technologies,
          and scalable data architectures to prepare for a career as an AI
          Engineer, Data Engineer, or Data Analyst.
        </p>
      </div>
    </Section>
  );
}
