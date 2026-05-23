import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { EmailCapture } from "@/components/site/EmailCapture";
import { Download } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — LifeAsErra" },
      { name: "description", content: "Digital products from Erra — e-books on relocation, business funding, finance, plus planners and stationery." },
      { property: "og:title", content: "Digital Shop — LifeAsErra" },
      { property: "og:description", content: "E-books, planners and digital goods — instant download." },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

type Product = { title: string; category: string; price: string; blurb: string; tag?: string };

const products: Product[] = [
  { title: "The Relocation Guide", category: "E-Book", price: "$29", blurb: "My step-by-step playbook for moving abroad — paperwork, housing, mindset.", tag: "Bestseller" },
  { title: "Business Funding 101", category: "E-Book", price: "$24", blurb: "Grants, lines of credit, and the funding stack I actually used." },
  { title: "Finance for Her", category: "E-Book", price: "$19", blurb: "Money habits, budgeting templates, and how I plan my year." },
  { title: "The Yearly Planner", category: "Digital Planner", price: "$15", blurb: "A clean, undated planner with goal-setting + monthly reflection." },
  { title: "Content Calendar Kit", category: "Stationery", price: "$12", blurb: "Plan a month of content in one afternoon." },
  { title: "Coming Soon — Coaching", category: "Service", price: "—", blurb: "1:1 sessions for creators ready to monetize. Join the waitlist.", tag: "Soon" },
];

function ShopPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Digital Shop" title="Made with intention." intro="Guides, planners, and digital tools — instant download, no waiting." />
      <section className="container-editorial">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.title} className="rounded-3xl bg-card border border-border/60 p-6 flex flex-col hover:shadow-card transition-all duration-500">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-accent/60 to-secondary mb-5 flex items-center justify-center relative overflow-hidden">
                <span className="font-display text-5xl text-foreground/30">{p.title.charAt(0)}</span>
                {p.tag && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-background/90 px-2 py-1 rounded-full">{p.tag}</span>
                )}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.category}</div>
              <h3 className="font-display text-2xl mt-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{p.blurb}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-display text-xl">{p.price}</span>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition">
                  <Download size={14} /> Buy
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <EmailCapture />
    </Layout>
  );
}
