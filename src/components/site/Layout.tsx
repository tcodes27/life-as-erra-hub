import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { MobileQuickBar } from "./MobileQuickBar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="container-editorial pt-16 pb-10 md:pt-24 md:pb-14 fade-in-up">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">{eyebrow}</div>
      )}
      <h1 className="font-display text-5xl md:text-7xl text-balance leading-[0.95]">{title}</h1>
      {intro && <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">{intro}</p>}
    </section>
  );
}
