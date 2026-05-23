import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/site/Layout";
import { EmailCapture } from "@/components/site/EmailCapture";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore My World — LifeAsErra" },
      { name: "description", content: "Get ready with me, behind the scenes, home + garden, fashion, wellness, the relocation journey and daily life — a visual diary." },
      { property: "og:title", content: "Explore My World — LifeAsErra" },
      { property: "og:description", content: "A visual diary of lifestyle, wellness and behind-the-scenes." },
    ],
    links: [{ rel: "canonical", href: "/explore" }],
  }),
  component: ExplorePage,
});

const categories = [
  { title: "Get Ready With Me", desc: "Morning routines, makeup looks, what I'm wearing." },
  { title: "Behind the Scenes", desc: "Building, filming, traveling — the parts you don't see." },
  { title: "Home + Garden", desc: "Slow afternoons, decor finds, and the garden." },
  { title: "Fashion + Style", desc: "Outfits, capsule pieces and seasonal edits." },
  { title: "Wellness Lifestyle", desc: "Movement, mobility, slow mornings and intentional living." },
  { title: "Relocation Journey", desc: "Notes from building a life in a new country." },
  { title: "Daily Life", desc: "Coffee, meals, errands — life as Erra." },
];

function ExplorePage() {
  return (
    <Layout>
      <PageHeader eyebrow="My World" title="A visual diary." intro="Pieces of my week — sometimes a video, sometimes a moment. Always honest." />
      <section className="container-editorial">
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((c, i) => (
            <article key={c.title} className={`rounded-3xl border border-border/60 bg-card overflow-hidden hover:shadow-card transition-all duration-500 ${i === 0 ? "md:col-span-2" : ""}`}>
              <div className={`relative ${i === 0 ? "aspect-[21/9]" : "aspect-[5/4]"} bg-gradient-to-br from-secondary via-accent/40 to-secondary flex items-center justify-center`}>
                <span className="font-display text-6xl md:text-7xl text-foreground/15">{c.title.charAt(0)}</span>
                <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest bg-background/80 px-3 py-1 rounded-full">Coming Soon</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl md:text-3xl">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <EmailCapture />
    </Layout>
  );
}
