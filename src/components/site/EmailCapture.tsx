import { useState } from "react";

export function EmailCapture({ variant = "block" }: { variant?: "block" | "inline" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
    setEmail("");
  }

  if (variant === "inline") {
    return (
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="flex-1 px-4 py-3 rounded-full bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button className="px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition">
          {done ? "On the list ✓" : "Join"}
        </button>
      </form>
    );
  }

  return (
    <section className="container-editorial my-24">
      <div className="rounded-3xl bg-accent/60 px-6 py-14 md:px-16 md:py-20 text-center shadow-soft">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The List</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
          Get updates, links, and <em>exclusive drops</em>.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
          New links, product launches, and content updates — straight to your inbox. No noise, just the good stuff.
        </p>
        <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 px-5 py-3.5 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
            {done ? "On the list ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
