import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { currentlyLoving, type LovingItem } from "@/data/currently-loving";

const categories = ["All", "Beauty", "Home", "Pilates", "Fashion", "Business", "Wellness"] as const;
type Cat = (typeof categories)[number];

export function CurrentlyLoving() {
  const [active, setActive] = useState<Cat>("All");
  const items =
    active === "All" ? currentlyLoving : currentlyLoving.filter((i) => i.category === active);

  return (
    <section className="container-editorial my-20 md:my-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            The Edit · Updated Weekly
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-balance leading-tight">
            Currently <em>loving</em>.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg text-pretty">
            A rotating feed of pieces I'm reaching for — beauty, home, fashion, wellness, and the
            tools behind the businesses.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 -mx-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-[0.18em] border transition ${
                active === c
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <LovingCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function LovingCard({ item }: { item: LovingItem }) {
  return (
    <a
      href={item.href}
      className="group block rounded-2xl overflow-hidden bg-card border border-border/60 hover:shadow-card transition-all duration-500"
    >
      <div className="aspect-[4/5] overflow-hidden bg-secondary/40">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-4">
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
          {item.category}
        </div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg leading-snug">{item.title}</h3>
          <ArrowUpRight
            size={15}
            className="mt-1 shrink-0 text-muted-foreground group-hover:text-foreground transition"
          />
        </div>
        {item.note && (
          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.note}</p>
        )}
      </div>
    </a>
  );
}
