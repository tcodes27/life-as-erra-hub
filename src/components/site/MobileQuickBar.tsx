import { Link } from "@tanstack/react-router";
import { Link2, ShoppingBag, Sparkles, Compass, Mail } from "lucide-react";

const items = [
  { to: "/links", label: "Links", icon: Link2 },
  { to: "/shop", label: "Shop", icon: ShoppingBag },
  { to: "/pilates", label: "Pilates", icon: Sparkles },
  { to: "/explore", label: "Explore", icon: Compass },
  { to: "/#join", label: "Subscribe", icon: Mail },
] as const;

export function MobileQuickBar() {
  return (
    <>
      {/* Spacer so floating bar never covers content */}
      <div className="md:hidden h-20" aria-hidden />
      <nav
        aria-label="Quick navigation"
        className="md:hidden fixed bottom-3 inset-x-3 z-50"
      >
        <div className="rounded-2xl bg-background/85 backdrop-blur-xl border border-border/70 shadow-card px-2 py-2 flex items-center justify-between">
          {items.map(({ to, label, icon: Icon }) => {
            const isHash = to.includes("#");
            const className =
              "flex-1 flex flex-col items-center gap-1 py-1.5 rounded-xl text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition";
            const content = (
              <>
                <Icon size={18} strokeWidth={1.6} />
                <span>{label}</span>
              </>
            );
            return isHash ? (
              <a key={to} href={to} className={className}>
                {content}
              </a>
            ) : (
              <Link
                key={to}
                to={to as Exclude<typeof to, "/#join">}
                className={className}
                activeProps={{ className: `${className} text-foreground` }}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
