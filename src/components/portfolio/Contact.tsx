import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "maheshwaree.talekar@example.com",
    href: "mailto:maheshwaree.talekar@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/maheshwaree-talekar",
    href: "https://www.linkedin.com/in/maheshwaree-talekar",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/maheshwaree-talekar",
    href: "https://github.com/maheshwaree-talekar",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-14 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-25"
            style={{ background: "var(--gradient-accent)" }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary mb-4">
                <span className="h-px w-8 bg-primary" />
                Contact
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Let's build something meaningful.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I'm actively looking for opportunities in AEM content authoring, digital
                experience, CMS, content operations, and entry-level technology roles.
                Happy to chat about projects, internships, or collaborations.
              </p>
              <a
                href="mailto:maheshwaree.talekar@example.com"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
              >
                Send a message
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <ul className="space-y-3">
              {channels.map((c) => {
                const Wrapper: any = c.href ? "a" : "div";
                return (
                  <li key={c.label}>
                    <Wrapper
                      {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-accent/40 transition"
                    >
                      <div className="w-10 h-10 rounded-md bg-accent text-accent-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                        <c.icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">
                          {c.label}
                        </div>
                        <div className="text-sm font-medium text-foreground truncate">
                          {c.value}
                        </div>
                      </div>
                    </Wrapper>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
