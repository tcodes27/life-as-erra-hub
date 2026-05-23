import { createFileRoute, redirect } from "@tanstack/react-router";

// Branded short links — /go/<slug> redirects to the curated destination.
const shortLinks: Record<string, string> = {
  makeup: "/links#beauty-hair",
  pilates: "/pilates",
  business: "/services",
  favorites: "/links",
  shop: "/shop",
  list: "/#join",
};

export const Route = createFileRoute("/go/$slug")({
  beforeLoad: ({ params }) => {
    const dest = shortLinks[params.slug.toLowerCase()] ?? "/links";
    throw redirect({ href: dest });
  },
  component: () => null,
});
