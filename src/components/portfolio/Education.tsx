import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background."
    >
      <div className="rounded-xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Bachelor of Technology (B.Tech)
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Information Technology
            </p>
          </div>
        </div>
        <div className="md:text-right">
          <div className="text-xs uppercase tracking-widest text-primary font-medium">
            Expected Graduation
          </div>
          <div className="text-2xl font-semibold text-foreground mt-1">2026</div>
        </div>
      </div>
    </Section>
  );
}
