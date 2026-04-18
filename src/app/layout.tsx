import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StayNow | Book Zambian Lodges Instantly",
  description: "Discover and book the best lodges across Zambia. No online payment needed — pay on arrival. Available rooms are filling up fast!",
  keywords: ["Zambia", "lodge", "booking", "hotel", "accommodation", "Lusaka", "Livingstone", "Copperbelt"],
  openGraph: {
    title: "StayNow | Book Zambian Lodges Instantly",
    description: "Find your perfect lodge in Zambia. Real-time availability, best prices, pay on arrival.",
    type: "website",
    locale: "en_ZM",
    siteName: "StayNow",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#0a0a0a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
