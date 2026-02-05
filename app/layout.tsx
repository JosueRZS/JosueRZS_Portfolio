import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { generateMetadata } from "@/lib/seo.config";
import {
  StructuredData,
  generatePersonSchema,
  generateWebSiteSchema,
  generateProfilePageSchema,
} from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <StructuredData data={generatePersonSchema()} />
        <StructuredData data={generateWebSiteSchema()} />
        <StructuredData data={generateProfilePageSchema()} />
      </head>
      <body className="font-inter bg-black-deep">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
