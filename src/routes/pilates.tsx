import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { EmailCapture } from "@/components/site/EmailCapture";
import pilatesImg from "@/assets/pilates.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pilates")({
  head: () => ({
    meta: [
      { title: "bmarc Pilates Community — LifeAsErra" },
      { name: "description", content: "Move slow, build strong. Join the bmarc Pilates community — free access right now." },
      { property: "og:title", content: "bmarc Pilates — LifeAsErra" },
      { property: "og:description", content: "An online Pilates community rooted in slow, strong, intentional movement." },
    ],
    links: [{ rel: "canonical", href: "/pilates" }],
  }),
  component: PilatesPage,
});

function PilatesPage() {
  return (
    <Layout>
      <section className="container-editorial pt-16 md:pt-24 grid md:grid-cols-2 gap-12 items-center fade-in-up">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">bmarc Pilates</div>
          <h1 className="font-display text-5xl md:text-7xl text-balance leading-[0.95]">
            Move slow. <em>Build strong.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty">
            An online Pilates community for women who want to move with intention. Calm, considered classes you can
            do at home — at your pace.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.bmarcpilates.com" target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Get free access
            </a>
            <a href="#waitlist"
               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background hover:bg-secondary transition">
              Join the waitlist
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
          <img src={pilatesImg} alt="" loading="lazy" className="w-full h-full object-cover" width={1600} height={1200} />
        </div>
      </section>

      <section className="container-editorial mt-24 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border/60 bg-card p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Free access</div>
          <h3 className="font-display text-3xl">Start moving today</h3>
          <p className="mt-3 text-muted-foreground">A foundation library to help you fall in love with Pilates — no card required.</p>
          <ul className="mt-6 space-y-2 text-sm">
            {["Beginner-friendly mat classes", "Weekly community check-ins", "Mobile-first workouts"].map(f => (
              <li key={f} className="flex gap-2 items-start"><Check size={16} className="mt-0.5 shrink-0" />{f}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-accent/60 p-8 relative overflow-hidden">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Membership · Coming soon</div>
          <h3 className="font-display text-3xl">The full studio</h3>
          <p className="mt-3 text-muted-foreground">A library of progressive programs, reformer flows, and live sessions.</p>
          <ul className="mt-6 space-y-2 text-sm">
            {["Reformer + mat programs", "Live classes monthly", "Personalized monthly plan", "Member-only community"].map(f => (
              <li key={f} className="flex gap-2 items-start"><Check size={16} className="mt-0.5 shrink-0" />{f}</li>
            ))}
          </ul>
          <div id="waitlist" className="mt-6">
            <EmailCapture variant="inline" />
          </div>
        </div>
      </section>

      <EmailCapture />
    </Layout>
  );
}
