import type { Metadata } from "next";
import { Roboto, Yrsa } from "next/font/google"; // Add Yrsa from Google
import localFont from "next/font/local"; // For local fonts
import "./globals.css";

// Local font "Winter Insight"
export const winterInsight = localFont({
  src: "./fonts/WinterInsight.woff",
  variable: "--font-winter-insight",
});

// Google font "Roboto"
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

// Google font "Yrsa"
const yrsa = Yrsa({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
