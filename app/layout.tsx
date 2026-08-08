import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ChatButtons from "@/components/chat-buttons";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Huswell Trading — Premium Box Packaging in Quezon City",
    template: "%s — Huswell Trading",
  },
  description:
    "Custom rigid boxes, regular box packaging, offset & digital printing, corrugated cartons, and 20 colors of shredded paper fillers. Manufactured in Quezon City since 2015, delivered nationwide.",
  keywords: [
    "rigid boxes Philippines",
    "premium box packaging",
    "custom boxes Quezon City",
    "offset printing boxes",
    "corrugated boxes",
    "shredded paper fillers",
  ],
  metadataBase: new URL("https://huswelltrading.com"),
  openGraph: {
    title: "Huswell Trading — Premium Box Packaging",
    description:
      "From concept to completion: premium boxes, offset & digital print, corrugated, and shredded paper fillers.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="min-h-full bg-canvas-dark antialiased">
        <Navbar />
        {children}
        <Footer />
        <ChatButtons />
      </body>
    </html>
  );
}