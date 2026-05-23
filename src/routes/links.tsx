import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { EmailCapture } from "@/components/site/EmailCapture";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Link Hub — LifeAsErra" },
      { name: "description", content: "Shop my looks, beauty, home, fitness, business tools, and favorites — all in one place." },
      { property: "og:title", content: "Link Hub — LifeAsErra" },
      { property: "og:description", content: "Shop my looks, beauty, home, fitness, business tools, and favorites." },
    ],
    links: [{ rel: "canonical", href: "/links" }],
  }),
  component: LinksPage,
});

type LinkItem = { title: string; desc?: string; href: string; emoji?: string };
type Section = { title: string; items: LinkItem[] };

const topPicks: LinkItem[] = [
  { title: "My Everyday Cream Sweater", desc: "Cashmere, on repeat", href: "#", emoji: "🤍" },
  { title: "The Pilates Reformer I Use", desc: "At-home favorite", href: "#", emoji: "🧘🏽‍♀️" },
  { title: "Relocation E-Book", desc: "My step-by-step guide", href: "/shop", emoji: "📘" },
];

const sections: Section[] = [
  { title: "Shop My Looks", items: [
    { title: "Linen Blazer — Aritzia", href: "#" },
    { title: "Quiet-Luxury Loafers", href: "#" },
    { title: "Gold Layering Necklace", href: "#" },
    { title: "The Perfect White Tee", href: "#" },
  ]},
  { title: "Beauty + Hair", items: [
    { title: "Glow Skin Routine", desc: "Cleanser + serum + SPF", href: "#" },
    { title: "Silk Press Essentials", href: "#" },
    { title: "My Everyday Lip", href: "#" },
  ]},
  { title: "Home + Decor", items: [
    { title: "Linen Bedding Set", href: "#" },
    { title: "Ceramic Vases I Love", href: "#" },
    { title: "Warm-Tone Lamp", href: "#" },
  ]},
  { title: "Fitness + Pilates", items: [
    { title: "Join bmarc Pilates", desc: "Free access right now", href: "/pilates" },
    { title: "Reformer for Home", href: "#" },
    { title: "Workout Set I Wear", href: "#" },
  ]},
  { title: "Business Tools", items: [
    { title: "Her Digital Media — Services", href: "/services" },
    { title: "Booking + Payments Stack", href: "#" },
    { title: "Email Marketing Tool", href: "#" },
  ]},
  { title: "My Favorites", items: [
    { title: "Coffee I Drink Daily", href: "#" },
    { title: "Candles That Smell Like a Hotel", href: "#" },
    { title: "Travel Carry-On", href: "#" },
  ]},
];

function LinkCard({ item }: { item: LinkItem }) {
  return (
    <a href={item.href} className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/60 hover:border-foreground/30 hover:shadow-soft transition-all">
      <div className="size-12 rounded-xl bg-secondary flex items-center justify-center text-xl shrink-0">
        {item.emoji ?? "✦"}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium truncate">{item.title}</div>
        {item.desc && <div className="text-xs text-muted-foreground truncate mt-0.5">{item.desc}</div>}
      </div>
      <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition shrink-0" />
    </a>
  );
}

function LinksPage() {
  return (
    <Layout>
      <PageHeader eyebrow="Link Hub" title="Everything, in one place." intro="The looks, products, and tools I'm actually using. Tap, shop, or save for later." />
      <section className="container-editorial">
        <div className="rounded-3xl bg-accent/50 p-6 md:p-8 mb-12 border border-border/40">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            <Sparkles size={14} /> Top picks this week
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {topPicks.map((p) => <LinkCard key={p.title} item={p} />)}
          </div>
        </div>
        <div className="space-y-14 pb-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-3xl md:text-4xl mb-5">{s.title}</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {s.items.map((it) => <LinkCard key={it.title} item={it} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <EmailCapture />
    </Layout>
  );
}
