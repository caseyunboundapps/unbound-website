import type { Metadata } from "next";
import { Figtree, Martian_Mono } from "next/font/google";
import PostHogProviders from "./providers";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unbound Studios — Invention Company",
  description:
    "Consumer apps, built in-house. Plus apps, AI, and automations for teams who want to ship faster.",
  metadataBase: new URL("https://unboundapps.com"),
  openGraph: {
    title: "Unbound Studios",
    description:
      "Consumer apps, built in-house. Plus apps, AI, and automations for teams who want to ship faster.",
    siteName: "Unbound Studios",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${martianMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PostHogProviders>{children}</PostHogProviders>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Unbound Studios",
              url: "https://unboundapps.com",
              description:
                "Consumer apps, built in-house. Plus apps, AI, and automations for teams who want to ship faster.",
              founders: [
                { "@type": "Person", name: "Casey Ring" },
                { "@type": "Person", name: "Nick Jackson" },
              ],
              email: "hello@unboundapps.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
