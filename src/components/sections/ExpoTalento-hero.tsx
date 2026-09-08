import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { proximoEvento } from "@/lib/eventos";

export default function ExpoTalentoHero() {
  return (
    <section
      id="ExpoTalentoHero"
      className="relative isolate overflow-hidden scroll-mt-20 pt-2 md:pt-4 pb-16 md:pb-24"
      style={{ background: "#F7FBFE" }}
    >
      <div className="page-bg-grid" />
      <div className="max-w-7xl mx-auto sm:px-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda: contenido */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit gap-2 bg-secondary text-navy">
                <span className="size-1.5 rounded-full bg-primary" />
                Prohabla · Ferias de empleo
              </Badge>
              <h1 className="text-4xl font-medium tracking-tight md:text-5xl text-navy">
                El espacio donde las{" "}
                <span className="text-primary">oportunidades</span> comienzan
              </h1>
              <p className="text-muted-foreground text-base md:text-lg">
                Estudiantes, egresados y empresas se conectan en un mismo lugar. Encuentre empleo, prácticas y talento calificado.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-white px-5 py-4 max-w-md">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="size-5 text-primary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Próximo evento
                </span>
                <span className="font-semibold text-navy">{proximoEvento.nombre}</span>
                <span className="text-sm text-muted-foreground">
                  {proximoEvento.fecha} · {proximoEvento.horario} · {proximoEvento.sede}
                </span>
              </div>
            </div>

            <a href="/empleos" className="group relative w-fit">
              <Button className="group relative h-12 w-fit cursor-pointer overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6">
                <span className="relative z-10 transition-all duration-500">
                  Ver Vacantes
                </span>
                <div className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </div>
              </Button>
            </a>
          </div>

          {/* Columna derecha: imagen */}
          <div className="w-full">
            <AspectRatio
              ratio={1}
              className="overflow-hidden rounded-2xl border border-border bg-muted"
            >
              <Image
                src="/Hero.jpg"
                alt="Feria de empleo Prohabla"
                fill
                priority
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
