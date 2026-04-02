import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stateracontracting.com"),
  title: {
    default: "Statera Contracting | Calgary Renovation Experts",
    template: "%s | Statera Contracting",
  },
  description:
    "Calgary's trusted renovation contractor with 20+ years of experience in residential and commercial renovations. Licensed, insured, and WCB compliant. Free consultations.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Statera Contracting",
    images: [
      {
        url: "/images/kitchens/DSC_9938 (1).jpg",
        width: 1200,
        height: 630,
        alt: "Statera Contracting — Calgary Renovation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://stateracontracting.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
