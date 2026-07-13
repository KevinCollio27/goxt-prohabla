import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function BlogHeader() {
  return (
    <section
    className="relative isolate overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24"
    style={{ background: "#FFFFFF" }}
    >
      <div className="page-bg-grid" />
      <div className="max-w-7xl mx-auto sm:px-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Columna izquierda: contenido */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit gap-2 bg-secondary text-navy">
                <span className="size-1.5 rounded-full bg-primary" />
                Blog de ExpoTalento
              </Badge>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-navy">
                Recursos para tu búsqueda de empleo y reclutamiento.
              </h1>
              <p className="text-muted-foreground text-base md:text-lg">
                Guías, consejos y novedades sobre la Feria ExpoTalento 2026 en
                la UTN.
              </p>
            </div>
          </div>

          {/* Columna derecha: imagen */}
          <div className="relative h-80 md:h-120 rounded-2xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/Blogg.jpg"
              alt="Blog de ExpoTalento"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
