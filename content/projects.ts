export type ProjectStatus = "live" | "in-development" | "coming-soon";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  tier: "featured" | "secondary" | "tertiary" | "compact";
  image?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "mirror",
    name: "Mirror",
    tagline: "A daily reflection app for people who want to pay more attention to their own life.",
    description:
      "Mirror helps you check in with yourself every day. Track actions, build routines, and reflect on patterns over time. No streaks, no guilt. Just an honest look at how you're spending your days.",
    status: "live",
    statusLabel: "Live on App Store",
    tier: "featured",
    image: "/images/mirror/today-dark.webp",
    url: "https://usemirror.app",
  },
  {
    slug: "calendar",
    name: "13-Month Calendar",
    tagline: "13 equal months, 28 days each. A calendar that actually makes sense.",
    description:
      "The International Fixed Calendar, redesigned for modern use. Every month is identical. Every date falls on the same weekday, every year.",
    status: "in-development",
    statusLabel: "In development",
    tier: "secondary",
  },
  {
    slug: "apparel",
    name: "Apparel",
    tagline: "Things we want to wear. Photography coming.",
    description:
      "A small line of clothing designed by the same people who build the apps. Details and photography coming soon.",
    status: "coming-soon",
    statusLabel: "Coming soon",
    tier: "tertiary",
  },
  {
    slug: "predictions",
    name: "Predictions",
    tagline: "Track what you think will happen. Then find out.",
    description:
      "Log predictions about anything. Get scored on accuracy over time. See where your intuition is strong and where it's not.",
    status: "in-development",
    statusLabel: "In development",
    tier: "compact",
  },
  {
    slug: "bros",
    name: "Bros",
    tagline: "Details soon.",
    description: "More details coming soon.",
    status: "in-development",
    statusLabel: "In development",
    tier: "compact",
  },
];
