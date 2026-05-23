import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { EmailCapture } from "@/components/site/EmailCapture";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Her Digital Media" },
      { name: "description", content: "Website builds, backend systems, and booking & payment integrations for women-led brands." },
      { property: "og:title", content: "Services — LifeAsErra" },
      { property: "og:description", content: "Websites, backend systems, and booking & payment integrations." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { title: "Website Builds", desc: "Editorial, conversion-focused sites that feel like the brand they represent." },
  { title: "Backend Systems", desc: "CRMs, automations and the plumbing that lets you scale without burning out." },
  { title: "Booking & Payments", desc: "Seamless scheduling and checkout integrations — your client journey, smoothed." },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Her Digital Media"
        title="Quietly powerful systems for women-led brands."
        intro="The studio behind the scenes — building the websites, backends and booking flows that make brands run."
      />
      <section className="container-editorial">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-border/60 bg-card p-7 hover:shadow-soft transition">
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-balance">Ready to build something quietly beautiful?</h2>
            <p className="mt-3 opacity-80 max-w-xl">Tell me about your project — I take on a small number of clients each season.</p>
          </div>
          <a href="https://herdigitalmedia.com" target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition self-start md:self-auto">
            Work With Me <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
      <EmailCapture />
    </Layout>
  );
}
