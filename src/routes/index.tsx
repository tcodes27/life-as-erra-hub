import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { EmailCapture } from "@/components/site/EmailCapture";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import pilates from "@/assets/pilates.jpg";
import shop from "@/assets/shop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LifeAsErra — Lifestyle, business & everything in between" },
      { name: "description", content: "The curated home of Erra — shop my links, digital products, content, Pilates community, and services." },
      { property: "og:title", content: "LifeAsErra" },
      { property: "og:description", content: "Behind the scenes of my life, business, and everything in between." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="container-editorial pt-12 md:pt-20 pb-12">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 fade-in-up">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Welcome</div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.92] text-balance">
              Life as <em className="text-foreground/90">Erra</em>.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl text-pretty">
              Behind the scenes of my life, business, and everything in between — curated links,
              quiet luxuries, and the tools I actually use.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/links" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                Shop My Links <ArrowUpRight size={16} />
              </Link>
              <Link to="/explore" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background hover:bg-secondary transition">
                Explore My World
              </Link>
              <a href="#join" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition">
                Join My List
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
              <img src={hero} alt="" className="w-full h-full object-cover" width={1080} height={1920} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40 overflow-hidden">
        <div className="container-editorial py-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>Curated Links</span><span className="hidden sm:inline">·</span>
          <span>Digital Goods</span><span className="hidden sm:inline">·</span>
          <span>Pilates Community</span><span className="hidden sm:inline">·</span>
          <span>Studio Services</span>
        </div>
      </section>

      <section className="container-editorial my-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">The Edit</div>
            <h2 className="font-display text-4xl md:text-5xl">Where to wander.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard to="/links" eyebrow="Link Hub" title="Shop My Links" copy="Looks, beauty, home, fitness & business — categorized." image={shop} />
          <FeatureCard to="/shop" eyebrow="Digital Shop" title="E-books & Planners" copy="Relocation, business funding, finance and more." image={about} />
          <FeatureCard to="/pilates" eyebrow="Community" title="bmarc Pilates" copy="Move slow. Build strong. Join the community." image={pilates} />
        </div>
      </section>

      <section className="container-editorial my-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft order-2 md:order-1">
            <img src={about} alt="" loading="lazy" className="w-full h-full object-cover" width={1280} height={1600} />
          </div>
          <div className="order-1 md:order-2">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">About</div>
            <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
              An inside look at a <em>curated</em> life.
            </h2>
            <p className="mt-6 text-muted-foreground text-pretty leading-relaxed">
              I share the daily — getting ready, building businesses, decorating a home, and moving my body.
              This is my corner of the internet where it all lives in one place.
            </p>
            <Link to="/explore" className="mt-7 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/40 pb-1 hover:border-foreground transition">
              Explore my world <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div id="join"><EmailCapture /></div>
    </Layout>
  );
}

function FeatureCard({ to, eyebrow, title, copy, image }: { to: string; eyebrow: string; title: string; copy: string; image: string }) {
  return (
    <Link to={to} className="group block rounded-3xl overflow-hidden bg-card border border-border/60 hover:shadow-card transition-all duration-500">
      <div className="aspect-[5/4] overflow-hidden">
        <img src={image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{eyebrow}</div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl">{title}</h3>
          <ArrowUpRight size={18} className="mt-1 text-muted-foreground group-hover:text-foreground transition" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
      </div>
    </Link>
  );
}
