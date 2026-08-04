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
  title: "أنس غيلان جروب | المقاولات والاستشارات الهندسية",
  description:
    "مجموعة أنس غيلان تقدم حلولاً متكاملة في المقاولات العامة، التوريدات، والاستشارات الهندسية مع التزام عالي بالجودة والموثوقية.",
  keywords: [
    "المقاولات",
    "الاستشارات الهندسية",
    "التوريدات",
    "مشاريع حكومية",
    "أنس غيلان",
  ],
  alternates: {
    canonical: "https://www.anasghilan.com",
  },
  openGraph: {
    title: "أنس غيلان جروب",
    description: "شريك موثوق في تنفيذ المشاريع وتقديم الاستشارات الهندسية.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
