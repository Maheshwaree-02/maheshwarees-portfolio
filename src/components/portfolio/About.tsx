import { GraduationCap, Lightbulb, Layers, MessageSquare } from "lucide-react";
import { Section } from "./Section";

const points = [
  {
    icon: GraduationCap,
    title: "B.Tech in Information Technology",
    body: "Final-year student building a strong foundation in software, systems, and the web.",
  },
  {
    icon: Lightbulb,
    title: "Analytical & problem-solving mindset",
    body: "I enjoy breaking down complex problems into structured, data-informed solutions.",
  },
  {
    icon: Layers,
    title: "Web technologies & digital platforms",
    body: "Hands-on experience with modern web stacks, responsive design, and CMS-style content delivery.",
  },
  {
    icon: MessageSquare,
    title: "Communication & attention to detail",
    body: "Strong written and verbal communication with a deep care for quality and consistency.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A detail-oriented technologist who loves digital experiences."
      description="I'm drawn to the intersection of web development, content systems, and data — building products that are well-organized, accessible, and genuinely useful."
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
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-secondary/50 p-6 md:p-8">
        <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
          I'm particularly interested in <span className="text-primary font-medium">enterprise
          content management systems, UI/UX, and SEO</span> — areas where structure,
          storytelling, and engineering meet to shape the digital experiences people actually use.
        </p>
      </div>
    </Section>
  );
}
