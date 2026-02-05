import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo.config";

export const metadata: Metadata = generateMetadata(
  "Links",
  "Conéctate conmigo en todas mis plataformas. GitHub, LinkedIn, Instagram y más.",
  "/linktree"
);

export default function LinktreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
