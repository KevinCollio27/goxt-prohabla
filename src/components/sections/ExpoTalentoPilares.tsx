import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Lightbulb, Rocket, Users, GraduationCap, Briefcase } from "lucide-react";
import { ReactNode } from "react";

const pillars = [
  {
    id: "empleos",
    icon: <Briefcase className="size-6" aria-hidden />,
    title: "Empleos",
    description:
      "Vacantes de empresas de distintos sectores, desde comercio hasta logística y servicios.",
  },
  {
    id: "practicas",
    icon: <GraduationCap className="size-6" aria-hidden />,
    title: "Prácticas",
    description:
      "Oportunidades para estudiantes avanzados y recién egresados, con posibilidad de contratación posterior.",
  },
  {
    id: "networking",
    icon: <Users className="size-6" aria-hidden />,
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
            Un evento, una oportunidad
          </Badge>
          <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl text-navy">
            ¿Qué es ExpoTalento?
          </h2>
          <p className="text-muted-foreground max-w-md">
            La feria que conecta a estudiantes, egresados y empresas en un mismo lugar, con oportunidades reales de crecimiento profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 *:text-center *:bg-muted">
          {pillars.map((pillar) => (
            <Card key={pillar.id} className="group border-0 shadow-none">
              <CardHeader className="pb-3">
                <CardDecorator>{pillar.icon}</CardDecorator>
                <h3 className="mt-6 font-medium">{pillar.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />
    <div className="bg-muted absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
