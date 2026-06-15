import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-accent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Open to opportunities · Graduating 2026
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05]">
            Maheshwaree Talekar
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-medium">
            IT Student · Web Development · Data Analytics ·{" "}
            <span className="text-primary">Content &amp; Digital Experience Enthusiast</span>
          </p>

          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Final-year Information Technology student passionate about building digital
            solutions, creating intuitive user experiences, and transforming data into
            actionable insights. Experienced in web development, analytics, SQL, Power BI,
            and collaborative project execution.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-foreground hover:text-primary transition"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "9.57", v: "CGPA / 10" },
              { k: "2", v: "Featured Projects" },
              { k: "3", v: "Certifications" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl md:text-3xl font-semibold text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs md:text-sm text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
