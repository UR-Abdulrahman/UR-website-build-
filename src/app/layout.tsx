import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PopupForm from "@/components/PopupForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Untapped Revenue — Done-For-You Fitness Studio Marketing",
    template: "%s | Untapped Revenue",
  },
  description:
    "We've generated $46.3M for 100+ fitness studios in 17 months. Done-for-you ads, CRM, and AI follow-up starting at $197/month.",
  keywords: [
    "gym marketing",
    "fitness studio marketing agency",
    "gym lead generation",
    "fitness ads",
    "CrossFit marketing",
    "yoga studio marketing",
    "done for you gym marketing",
  ],
  authors: [{ name: "Untapped Revenue" }],
  creator: "Untapped Revenue",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://untapped-revenue.com",
    siteName: "Untapped Revenue",
    title: "Untapped Revenue — Done-For-You Fitness Studio Marketing",
    description:
      "We've generated $46.3M for 100+ fitness studios in 17 months. Fitness-exclusive marketing agency.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Untapped Revenue — $46.3M Generated for 100+ Fitness Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Untapped Revenue — Done-For-You Fitness Studio Marketing",
    description:
      "We've generated $46.3M for 100+ fitness studios in 17 months.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased bg-[#06040A] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <PopupForm />
      </body>
    </html>
  );
}
