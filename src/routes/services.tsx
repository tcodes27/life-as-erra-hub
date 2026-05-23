import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { EmailCapture } from "@/components/site/EmailCapture";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Her Digital Media — Premium digital systems | LifeAsErra" },
      { name: "description", content: "Custom websites, booking systems, payments, client portals and operational automation — engineered to help service businesses operate smarter and grow faster." },
      { property: "og:title", content: "Her Digital Media — LifeAsErra" },
      { property: "og:description", content: "Websites that help your business look professional, book clients, and grow online." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { title: "Website Design", desc: "Custom, conversion-focused sites built for your brand." },
  { title: "Booking Systems", desc: "Let clients book and pay 24/7 without the back-and-forth." },
  { title: "Payment Integrations", desc: "Secure Stripe, Square, or Apple Pay checkout." },
  { title: "Custom Operational Systems", desc: "Engineered workflows, custom CRM, and internal tools built around how your business actually runs." },
  { title: "Client Portals", desc: "A premium dashboard your clients will actually love." },
  { title: "Website Maintenance", desc: "Updates, fixes, and support, handled for you." },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Her Digital Media"
        title="Websites that help your business look professional, book clients, and grow online."
        intro="We engineer custom websites, booking systems, client portals, operational systems, and custom workflow automation — designed to help service businesses operate smarter and grow faster."
      />
      <section className="container-editorial">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">Services</div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-border/60 bg-card p-7 hover:shadow-soft transition">
              <h3 className="font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <a href="https://herdigitalmedia.com/services" target="_blank" rel="noreferrer"
                 className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition">
                Learn more <ArrowUpRight size={12} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] opacity-70 mb-3">Premium digital systems for service businesses</div>
            <h2 className="font-display text-3xl md:text-4xl text-balance">Start your inquiry.</h2>
            <p className="mt-3 opacity-80 max-w-xl">Tell us about your business — every project starts with a conversation.</p>
          </div>
          <div className="flex flex-wrap gap-3 self-start md:self-auto">
            <a href="https://herdigitalmedia.com/contact" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition">
              Start Your Inquiry <ArrowUpRight size={16} />
            </a>
            <a href="https://herdigitalmedia.com/our-work" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 transition">
              View Our Work
            </a>
          </div>
        </div>
      </section>
      <EmailCapture />
    </Layout>
  );
}
