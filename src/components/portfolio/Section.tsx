import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary mb-4">
              <span className="h-px w-8 bg-primary" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{title}</h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
