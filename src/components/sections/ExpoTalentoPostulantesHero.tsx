import { ArrowRight, Briefcase, User } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LOGOS_DESTACADOS = [
  "BURGER KING",
  "MCDONALDS",
  "STARBUCKS",
  "KFC",
  "HEINEKEN",
  "JUAN VALDEZ",
].map((name) => ({ src: `/empresas-trimmed/${name}.png`, name }));

const STATS = [
  {
    id: "empresas",
    value: "+90 empresas",
    label: "Podran ver tu perfil",
  },
  {
    id: "horario",
    value: "100% gratuito",
    label: "Sin costo de inscripción",
  },
  {
    id: "sectores",
    value: "Sectores",
    label: "Comercio, logística y servicios",
  },
];

export default function ExpoTalentoHero() {
  return (
    <section className="relative isolate overflow-hidden pt-10 md:pt-16 pb-16 md:pb-24"
        style={{ background: "#F7FBFE" }}
    >
      <div className="page-bg-grid" />
      <div className="max-w-7xl mx-auto sm:px-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Columna izquierda: contenido */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit gap-2 bg-secondary text-navy">
                <span className="size-1.5 rounded-full bg-primary" />
                Feria de empleo 2026 · Postulaciones abiertas
              </Badge>
              <h1 className="text-4xl font-medium tracking-tight md:text-5xl text-navy">   
                Tu próxima{" "}
                <span className="text-primary">oportunidad</span> laboral empieza aquí
              </h1>
              <p className="text-muted-foreground text-base md:text-lg">
                Completa el formulario de inscripción y se parte de la feria de empleo más grande del país. Conectá con empresas líderes y descubre nuevas oportunidades para tu carrera profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-1.5">
                  <span className="text-xl md:text-2xl font-bold">{stat.value}</span>
                  <p className="text-muted-foreground text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                Empresas que confían en Prohabla
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {LOGOS_DESTACADOS.map((logo) => (
                  <a
                    key={logo.src}
                    href="https://goxt.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center justify-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={140}
                      height={36}
                      style={{ width: "auto" }}
                      className="h-9 w-auto object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario Iframe */}
          <div className="flex flex-col gap-8">
            <iframe
              src="https://crm.goxt.io/widget/form/formulario-de-confirmacin-de-asistencia-a-expotalento-2026"
              width="100%"
              height="850"
              style={{ border: "none", borderRadius: "16px" }}
              title="Formulario de Confirmación asistencia a ExpoTalento 2026."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
