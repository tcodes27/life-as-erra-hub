import { Link } from "@tanstack/react-router";
import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-editorial py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-xl">LifeAs<span className="italic">Erra</span></div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Behind the scenes of my life, business, and everything in between.
          </p>
        </div>
        <div className="text-sm">
          <div className="uppercase tracking-widest text-xs text-muted-foreground mb-3">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/links" className="hover:underline">Link Hub</Link></li>
            <li><Link to="/shop" className="hover:underline">Digital Shop</Link></li>
            <li><Link to="/explore" className="hover:underline">My World</Link></li>
            <li><Link to="/pilates" className="hover:underline">Pilates</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="uppercase tracking-widest text-xs text-muted-foreground mb-3">Follow</div>
          <div className="flex gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="p-2 rounded-full border border-border hover:bg-background transition">
              <Instagram size={16} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="p-2 rounded-full border border-border hover:bg-background transition">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="container-editorial pb-8 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} LifeAsErra</span>
        <span>Curated with care</span>
      </div>
    </footer>
  );
}
