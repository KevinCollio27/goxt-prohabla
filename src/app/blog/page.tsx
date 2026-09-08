import type { Metadata } from "next";
import BlogHeader from "@/components/sections/blog-header";
import BlogGrid from "@/components/sections/blog-grid";
import Footer from "@/components/sections/ExpoTalentoFooter";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos, guías y recursos para tu búsqueda de empleo o el reclutamiento de talento.",
  openGraph: {
    title: "Blog | Prohabla 2026",
    description:
      "Artículos, guías y recursos para tu búsqueda de empleo o el reclutamiento de talento.",
  },
};

export default function BlogPage() {
  return (
    <div className="relative">
      <main>
        <BlogHeader />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
