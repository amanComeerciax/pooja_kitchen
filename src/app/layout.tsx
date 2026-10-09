import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://poojaskitchen.com"),
  title: "Pooja's Kitchen | Live Catering & Party Orders",
  description:
    "Good Food. Beautiful Gatherings. Freshly prepared favourites, sandwich dhokla, live counters, and thoughtful catering for your celebrations.",
  keywords: [
    "Pooja's Kitchen",
    "Catering",
    "Live Catering",
    "Sandwich Dhokla",
    "Party Orders",
    "Wedding Catering",
    "Vegetarian Catering",
  ],
  openGraph: {
    title: "Pooja's Kitchen | Good Food. Beautiful Gatherings.",
    description:
      "Freshly prepared favourites and thoughtful live catering for your celebrations.",
    images: ["/images/hero-catering.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
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
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
