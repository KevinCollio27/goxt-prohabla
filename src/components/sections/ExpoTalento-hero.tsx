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
    id: "fecha",
    value: "29/07/2026",
    label: "Miércoles, sede UTN Alajuela",
  },
  {
    id: "horario",
    value: "Entrada Libre",
    label: "Desde 9:00AM a 3:00PM",
  },
  {
    id: "empresas",
    value: "+20 empresas",
    label: "Comercio, logística y servicios",
  },
];

const ROLES = [
  {
    id: "postulante",
    icon: User,
    title: "Soy Postulante",
    description: "Buscás empleo, prácticas o crecer profesionalmente",
    cta: "Quiero postular",
    href: "/postulantes",
  },
  {
    id: "empresa",
    icon: Briefcase,
    title: "Soy Empresa",
    description: "Buscás talento calificado para tu organización",
    cta: "Quiero participar",
    href: "/empresas",
  },
];

export default function ExpoTalentoHero() {
  return (
    <section
      id="ExpoTalentoHero"
      className="relative isolate overflow-hidden pt-10 md:pt-16 pb-16 md:pb-24"
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
                Feria de empleo · UTN Alajuela 2026
              </Badge>
              <h1 className="text-4xl font-medium tracking-tight md:text-5xl text-navy">
                El espacio donde las{" "}
                <span className="text-primary">oportunidades</span> comienzan
              </h1>
              <p className="text-muted-foreground text-base md:text-lg">
                Estudiantes, egresados y empresas se conectan en un mismo lugar. Encuentre empleo, prácticas y talento calificado.
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
                Empresas que confían en ExpoTalento
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

          {/* Columna derecha: opciones de acceso */}
          <div className="flex w-full flex-col justify-center gap-8">
            {ROLES.map((role) => (
              <div
                key={role.id}
                className="flex flex-col gap-4 rounded-2xl border border-border border-l-4 border-l-sky bg-white p-8 shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-navy">
                  <role.icon className="size-5 text-white" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-xl font-semibold text-navy">{role.title}</h2>
                  <p className="text-base text-muted-foreground">{role.description}</p>
                </div>
                <a href={role.href} className="w-fit">
                  <Button className="gap-2">
                    {role.cta}
                    <ArrowRight className="size-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
