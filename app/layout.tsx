import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bella Italia | Full Restaurant Platform — $10,000 Tier",
  description:
    "The ultimate restaurant digital experience. Online ordering, real-time tracking, loyalty rewards, multi-location dining, and reservation management — all in one stunning platform.",
  keywords:
    "restaurant, fine dining, online ordering, reservations, loyalty program, gift cards, delivery, Italian restaurant",
  openGraph: {
    title: "Bella Italia | Full Restaurant Platform",
    description:
      "Experience the future of dining. Order online, track in real-time, earn rewards, and book tables at any of our locations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Satoshi font from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${cormorant.variable} min-h-screen antialiased grain-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
