export type ProjectStatus = "live" | "in-development" | "coming-soon";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  tier: "featured" | "secondary";
  url: string;
}

export const projects: Project[] = [
  {
    slug: "mirror",
    name: "Mirror",
    tagline: "A daily habit tracker that connects your actions to who you want to become.",
    description:
      "A daily habit tracker that connects your actions to who you want to become.",
    status: "live",
    statusLabel: "Public beta",
    tier: "featured",
    url: "https://usemirror.app",
  },
  {
    slug: "golf-ai",
    name: "Golf AI",
    tagline: "A physics-first thinking coach for golfers who want to drop strokes.",
    description:
      "Chat-based swing coaching built on physics fundamentals. Get structured practice plans, understand why your ball does what it does, and build a repeatable swing through conversation, not YouTube rabbit holes.",
    status: "live",
    statusLabel: "Live",
    tier: "secondary",
    url: "https://golf.unboundapps.com",
  },
  {
    slug: "apparel",
    name: "Apparel",
    tagline: "Things we want to wear. Photography coming.",
    description:
      "A small line of clothing designed by the same people who build the apps. Details and photography coming soon.",
    status: "coming-soon",
    statusLabel: "Coming soon",
    tier: "secondary",
    url: "https://unboundmade.com",
  },
];
