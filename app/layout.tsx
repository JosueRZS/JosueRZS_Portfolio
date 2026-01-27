import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josue RZS | Software Developer",
  description: "Desarrollador ecuatoriano enfocado en construir aplicaciones web útiles y confiables.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-inter bg-black-deep">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
