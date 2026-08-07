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
  title: {
    default: "FormTools - Free PDF & Image Tools",
    template: "%s | FormTools",
  },
  description:
    "Merge, Split, Compress PDFs and Resize Images online for free. Fast, secure and easy to use.",

  keywords: [
    "PDF Tools",
    "Merge PDF",
    "Split PDF",
    "Compress PDF",
    "Image Resizer",
    "Online PDF Tools",
    "FormTools",
  ],

  authors: [{ name: "Ashutosh" }],

  metadataBase: new URL("https://formtools-3sjv.vercel.app"),

  openGraph: {
    title: "FormTools - Free PDF & Image Tools",
    description:
      "Merge, Split, Compress PDFs and Resize Images online for free.",
    url: "https://formtools-3sjv.vercel.app",
    siteName: "FormTools",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FormTools - Free PDF & Image Tools",
    description:
      "Merge, Split, Compress PDFs and Resize Images online for free.",
  },

  verification: {
    google: "YB45tQsXQ7L3RuPi3LwIkfva1BaFCXT01CEwXUUJDEw",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable}`}>
    {children}
  </body>
</html>
  );
}
