import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Interest } from "@/components/portfolio/Interest";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title =
  "Maheshwaree Talekar — IT Student, Web Development & Digital Experience";
const description =
  "Portfolio of Maheshwaree Talekar — final-year B.Tech IT student from Mumbai specializing in web development, data analytics, content systems, and digital experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Maheshwaree Talekar, AEM, Adobe Experience Manager, Content Author, Digital Experience, CMS, Web Development, Data Analytics, Power BI, Portfolio, Mumbai, IT Student",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Maheshwaree Talekar",
          jobTitle: "Information Technology Student",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "B.Tech Information Technology",
          },
          knowsAbout: [
            "Web Development",
            "Data Analytics",
            "Power BI",
            "SQL",
            "React",
            "Content Management",
            "Adobe Experience Manager",
            "SEO",
            "UX",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Interest />
      <Contact />
      <Footer />
    </main>
  );
}
