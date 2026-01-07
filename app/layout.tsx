import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Aurora from '@/components/backgrounds/aurora';
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Midnight Drive",
  description: "Hottest Band in New Jersey",
  keywords: [
    "Midnight Drive band",
    "New Jersey band",
    "indie rock band NJ",
    "alternative band",
    "indie rock band New Jersey"
  ],
  metadataBase: new URL("https://midnightdrivenj.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = "dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.6}
          />
        </div>
      </body>
    </html>
  );
}
