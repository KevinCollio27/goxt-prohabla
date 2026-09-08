import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Briefcase } from "lucide-react";

const pillars = [
  {
    id: "empleos",
    icon: <Briefcase className="size-5" aria-hidden />,
    title: "Empleos",
    description:
      "Vacantes de empresas de distintos sectores, desde comercio hasta logística y servicios.",
  },
  {
    id: "practicas",
    icon: <GraduationCap className="size-5" aria-hidden />,
    title: "Prácticas",
    description:
      "Oportunidades para estudiantes avanzados y recién egresados, con posibilidad de contratación posterior.",
  },
  {
    id: "networking",
    icon: <Users className="size-5" aria-hidden />,
    title: "Networking",
    description:
      "Contacto directo con reclutadores y profesionales del sector.",
  },
];

export default function PowerSkillsPillars() {
  return (
    <section
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ background: "#FFFFFF" }}>
      <div className="page-bg-grid" />
      <div className="max-w-5xl mx-auto sm:px-16 px-4">
        <div className="flex flex-col gap-3 text-center items-center mb-12">
          <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit gap-2 bg-secondary text-navy">
            <span className="size-1.5 rounded-full bg-primary" />
            Acerca de Prohabla
          </Badge>
          <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl text-navy">
            ¿Qué es <span className="text-primary">Prohabla</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Un equipo que impulsa ferias de empleo en distintos puntos de Costa Rica, incentivando a que las empresas publiquen sus oportunidades laborales para que los jóvenes profesionales interesados puedan postular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="flex flex-col gap-4 rounded-2xl border border-border border-l-4 border-l-primary bg-white p-8 shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-navy">
                <span className="text-white">{pillar.icon}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-navy">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
