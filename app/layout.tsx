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
    "App development studio building consumer products and partnering with founders to ship apps, AI, and automations. Based in Kansas.",
  metadataBase: new URL("https://unboundapps.com"),
  alternates: { canonical: "https://unboundapps.com" },
  openGraph: {
    title: "Unbound Studios",
    description:
      "App development studio building consumer products and partnering with founders to ship apps, AI, and automations. Based in Kansas.",
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
                "App development studio building consumer products and partnering with founders to ship apps, AI, and automations. Based in Kansas.",
              founders: [
                { "@type": "Person", name: "Casey Ring" },
                { "@type": "Person", name: "Nick Jackson" },
              ],
              email: "hello@unboundapps.com",
              sameAs: [
                "https://www.instagram.com/unboundbros/",
                "https://www.tiktok.com/@unboundbros",
                "https://x.com/unboundbros",
                "https://www.youtube.com/@theunboundbros",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "KS",
                addressCountry: "US",
              },
              knowsAbout: [
                "app development",
                "product strategy",
                "AI automation",
                "mobile apps",
                "web applications",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
