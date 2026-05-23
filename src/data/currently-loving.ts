// Edit this list to update the homepage "Currently Loving" feed.
// Categories: Beauty · Home · Pilates · Fashion · Business · Wellness
export type LovingItem = {
  id: string;
  title: string;
  category: "Beauty" | "Home" | "Pilates" | "Fashion" | "Business" | "Wellness";
  note?: string;
  image: string;
  href: string;
};

export const currentlyLoving: LovingItem[] = [
  {
    id: "silk-pillowcase",
    title: "Silk Pillowcase",
    category: "Beauty",
    note: "The skin & hair upgrade I never skip.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
    href: "/go/beauty",
  },
  {
    id: "linen-throw",
    title: "Washed Linen Throw",
    category: "Home",
    note: "Soft, neutral, and endlessly photogenic.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    href: "/go/home",
  },
  {
    id: "grip-socks",
    title: "Grip Socks",
    category: "Pilates",
    note: "My everyday B.MARC studio pair.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    href: "/go/pilates",
  },
  {
    id: "tailored-trousers",
    title: "Tailored Trousers",
    category: "Fashion",
    note: "Goes with everything in the closet.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
    href: "/go/fashion",
  },
  {
    id: "crm-suite",
    title: "All-in-One CRM",
    category: "Business",
    note: "What I use to run Her Digital Media.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    href: "/go/business",
  },
  {
    id: "magnesium",
    title: "Nightly Magnesium",
    category: "Wellness",
    note: "Better sleep, softer mornings.",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    href: "/go/wellness",
  },
  {
    id: "ceramic-vase",
    title: "Hand-thrown Vase",
    category: "Home",
    note: "Quiet sculpture on the entry table.",
    image:
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=900&q=80",
    href: "/go/home",
  },
  {
    id: "tinted-balm",
    title: "Tinted Lip Balm",
    category: "Beauty",
    note: "The one in every bag I own.",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
    href: "/go/makeup",
  },
];
