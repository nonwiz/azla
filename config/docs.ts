import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface NavsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navsConfig: NavsConfig = {
  mainNav: [
    {
      title: "Discover",
      href: "/docs",
    },
    {
      title: "Services",
      href: "/docs/components/accordion",
    },
    {
      title: "Blog",
      href: "/docs/components/accordion",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/nonwiz0",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Discover",
      items: [
        {
          title: "Photography",
          href: "/docs",
          items: [],
        },
        {
          title: "Art & Design",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Novel",
          href: "/docs/components-json",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/next",
          items: [],
        },
        {
          title: "Manual",
          href: "/docs/installation/manual",
          items: [],
        },
      ],
    },
  ],
};
