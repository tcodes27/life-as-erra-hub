import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { EmailCapture } from "@/components/site/EmailCapture";
import pilatesImg from "@/assets/pilates.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/pilates")({
  head: () => ({
    meta: [
      { title: "B.MARC Pilates — A Wellness Community | LifeAsErra" },
      { name: "description", content: "More than a studio — a wellness ecosystem. An online community today and a future hybrid studio designed around self-guided reformer sessions and live classes." },
      { property: "og:title", content: "B.MARC Pilates — LifeAsErra" },
      { property: "og:description", content: "A practice of presence, a culture of care. Beginner-friendly, premium, built for real life." },
    ],
    links: [{ rel: "canonical", href: "/pilates" }],
  }),
  component: PilatesPage,
});

const pillars = [
  "Online Community",
  "Self-Guided Movement",
  "Live Classes",
  "Beginner-Welcoming",
  "Wellness Events",
  "Intentional Living",
];

function PilatesPage() {
  return (
    <Layout>
      <section className="container-editorial pt-16 md:pt-24 grid md:grid-cols-2 gap-12 items-center fade-in-up">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">A Wellness Community</div>
          <h1 className="font-display text-5xl md:text-7xl text-balance leading-[0.95]">
            More than a studio. <em>A wellness ecosystem.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty">
            An online community today — and a future studio designed around two ways to move: self-guided digital
            reformer sessions and live, instructor-led classes. Beginner-friendly, premium, built for real life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.bmarcpilates.com" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Join the Community <ArrowUpRight size={16} />
            </a>
            <a href="https://www.bmarcpilates.com/events" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background hover:bg-secondary transition">
              View Events
            </a>
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Beginner-friendly · Online + In-Person · Community-led
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
          <img src={pilatesImg} alt="B.MARC Pilates founder seated on a reformer in the studio" loading="lazy" className="w-full h-full object-cover" width={1600} height={1200} />
        </div>
      </section>

      <section className="container-editorial mt-24">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">The Community</div>
        <h2 className="font-display text-4xl md:text-5xl text-balance max-w-3xl leading-tight">
          A practice of <em>presence</em>, a culture of <em>care</em>.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl text-pretty">
          B.MARC is a modern wellness community built around movement — online today, hybrid tomorrow. We make
          Pilates, mobility, and intentional living feel less intimidating and more like home, whether you join
          us on screen, in a pop-up, or one day in our studio.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
          {pillars.map((p) => (
            <div key={p} className="rounded-2xl border border-border/60 bg-card px-5 py-4 text-sm">{p}</div>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-24 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border/60 bg-card p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Available Now</div>
          <h3 className="font-display text-3xl">The Online Community</h3>
          <p className="mt-3 text-muted-foreground">
            Gather, move, belong. Step into the B.MARC online community for movement, mobility and intentional living.
          </p>
          <a href="https://www.bmarcpilates.com" target="_blank" rel="noreferrer"
             className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/40 pb-1 hover:border-foreground transition">
            Join the community <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="rounded-3xl bg-accent/60 p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Coming Soon</div>
          <h3 className="font-display text-3xl">The Studio · Hybrid by design</h3>
          <p className="mt-3 text-muted-foreground">
            Self-guided reformer sessions on your own time, or live, instructor-led classes when you want the
            energy of a group. Memberships and class details will be shared as we open.
          </p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">In-Person</div>
          <h3 className="font-display text-3xl">Pop-Ups & Events</h3>
          <p className="mt-3 text-muted-foreground">Gather. Move. Belong. Community events as they're announced.</p>
          <a href="https://www.bmarcpilates.com/events" target="_blank" rel="noreferrer"
             className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground/40 pb-1 hover:border-foreground transition">
            All events <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Coming Soon</div>
          <h3 className="font-display text-3xl">Memberships</h3>
          <p className="mt-3 text-muted-foreground">
            Your wellness, your way. Membership tiers will launch alongside the studio.
          </p>
        </div>
      </section>

      <EmailCapture />
    </Layout>
  );
}
