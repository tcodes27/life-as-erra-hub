import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { EmailCapture } from "@/components/site/EmailCapture";
import { Play } from "lucide-react";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore My World — LifeAsErra" },
      { name: "description", content: "GRWM, behind the scenes, home, fashion and daily life — a visual journal." },
      { property: "og:title", content: "Explore My World — LifeAsErra" },
      { property: "og:description", content: "GRWM, behind the scenes, home, fashion and daily life." },
    ],
    links: [{ rel: "canonical", href: "/explore" }],
  }),
  component: ExplorePage,
});

const categories = [
  { title: "Get Ready With Me", desc: "Morning routines, makeup looks, what I'm wearing.", count: "12 stories" },
  { title: "Behind the Scenes", desc: "Building, filming, traveling — the parts you don't see.", count: "8 stories" },
  { title: "Home + Garden", desc: "Slow afternoons, decor finds, and the garden.", count: "10 stories" },
  { title: "Fashion + Style", desc: "Outfits, capsule pieces and seasonal edits.", count: "15 stories" },
  { title: "Daily Life", desc: "Coffee, meals, errands — life as Erra.", count: "20 stories" },
];

function ExplorePage() {
  return (
    <Layout>
      <PageHeader eyebrow="My World" title="A visual journal." intro="Pieces of my week — sometimes a video, sometimes a moment. Always honest." />
      <section className="container-editorial">
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((c, i) => (
            <article key={c.title} className={`rounded-3xl border border-border/60 bg-card overflow-hidden hover:shadow-card transition-all duration-500 ${i === 0 ? "md:col-span-2" : ""}`}>
              <div className={`relative ${i === 0 ? "aspect-[21/9]" : "aspect-[5/4]"} bg-gradient-to-br from-secondary via-accent/40 to-secondary flex items-center justify-center`}>
                <button aria-label="Play" className="size-14 rounded-full bg-background/90 backdrop-blur flex items-center justify-center shadow-soft hover:scale-105 transition">
                  <Play size={20} className="ml-0.5" />
                </button>
                <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest bg-background/80 px-3 py-1 rounded-full">{c.count}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl md:text-3xl">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-secondary">Watch</span>
                  <span className="px-3 py-1 rounded-full bg-secondary">Shop the look</span>
                  <span className="px-3 py-1 rounded-full bg-secondary">Save</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <EmailCapture />
    </Layout>
  );
}
