import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

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
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
