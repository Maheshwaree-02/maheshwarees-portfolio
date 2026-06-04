import { Layers3, Search, FileText, Sparkles } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Layers3,
    title: "How great websites are built",
    body: "I'm fascinated by what goes on behind the scenes — the architecture, content models, and workflows that power large-scale websites.",
  },
  {
    icon: FileText,
    title: "Enterprise content systems",
    body: "Curious about how CMS platforms help teams author, structure, and govern content across many channels and audiences.",
  },
  {
    icon: Search,
    title: "Structured content, UX & SEO",
    body: "I appreciate the craft of clean information architecture, accessible UX, and SEO that helps the right content reach the right people.",
  },
  {
    icon: Sparkles,
    title: "Eager to learn Adobe Experience Manager",
    body: "Actively building toward AEM and enterprise web workflows — authoring, components, templates, and digital experience operations.",
  },
];

export function Interest() {
  return (
    <Section
      id="interest"
      eyebrow="Digital Experience & Content"
      title="Why I'm drawn to AEM and modern content platforms."
      description="A look at the side of the industry I find genuinely exciting — and where I want to grow next."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <it.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
