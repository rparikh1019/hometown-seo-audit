import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO defaults for Hometown Communities
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hometowncommunities.com"),
  title: {
    default: "Hometown Communities | Quality Manufactured Home Communities",
    template: "%s | Hometown Communities",
  },
  description:
    "Discover quality manufactured home communities with Hometown Communities. Affordable, comfortable living with modern amenities in desirable locations.",
  keywords: [
    "manufactured homes",
    "mobile home communities",
    "affordable housing",
    "manufactured home communities",
    "mobile home parks",
  ],
  authors: [{ name: "Hometown Communities" }],
  creator: "Hometown Communities",
  publisher: "Hometown Communities",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hometowncommunities.com",
    siteName: "Hometown Communities",
    title: "Hometown Communities | Quality Manufactured Home Communities",
    description:
      "Discover quality manufactured home communities with Hometown Communities. Affordable, comfortable living with modern amenities in desirable locations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hometown Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hometown Communities | Quality Manufactured Home Communities",
    description:
      "Discover quality manufactured home communities with Hometown Communities. Affordable, comfortable living with modern amenities.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
