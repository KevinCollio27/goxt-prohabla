import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ExpoTalento 2026 | Prohabla",
  description:
    "La Feria ExpoTalento 2026 conecta a estudiantes, egresados y empresas en un mismo lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      {process.env.NODE_ENV === "development" && (
        <head>
          <script src="https://tweakcn.com/live-preview.min.js" />
        </head>
      )}
      <body className="min-h-full flex flex-col" style={{ background: "#F7FBFE" }}>
        <Navbar />
        {children}
        <Script
          src="https://api-crm.goxt.io/api/widget/embed.js"
          data-api-key="wk_f8c21837b9b4027d0e1f4e32d87eb2f670dc4ddd2550e7f1"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
