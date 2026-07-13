import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Lightbulb, Rocket, Users, GraduationCap, Briefcase, Truck, ShoppingCart } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { getLogos } from "@/lib/logos";

const EMPRESAS = getLogos("empresas-trimmed");

const pillars = [
  {
    id: "comercio",
    icon: <ShoppingCart className="size-7" strokeWidth={1.5} aria-hidden />,
    title: "Comercio",
    description: "Retail, ventas y atención al cliente",
  },
  {
    id: "logistica",
    icon: <Truck className="size-7" strokeWidth={1.5} aria-hidden />,
    title: "Logística",
    description: "Transporte, distribución y cadena de suministro",
  },
  {
    id: "servicios",
    icon: <Briefcase className="size-7" strokeWidth={1.5} aria-hidden />,
    title: "Servicios",
    description: "Administración, finanzas y soporte",
  },
];

export default function PowerSkillsPillars() {
  return (
    <section
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="page-bg-grid" />
      <div className="max-w-5xl mx-auto sm:px-16 px-4">
        <div className="flex flex-col gap-3 text-center items-center mb-12">
          <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit gap-2 bg-secondary text-navy">
            <span className="size-1.5 rounded-full bg-primary" />
            Empresas Participantes ExpoTalento 2026
          </Badge>
          <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl text-navy">
            Más de 20 empresas te esperan en ExpoTalento 2026
          </h2>
          <p className="text-muted-foreground max-w-md">
            Conoce a las empresas de los sectores de comercio, logística y servicios que estarán presentes en la feria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 *:text-center">
          {pillars.map((pillar) => (
            <Card key={pillar.id} className="group border border-border bg-white shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardHeader className="pb-3">
                <SectorIcon>{pillar.icon}</SectorIcon>
                <h3 className="mt-6 font-medium text-navy">{pillar.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 border-t border-border pt-12">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Empresas confirmadas
          </p>
          <Marquee
            pauseOnHover
            repeat={2}
            className="w-full [--duration:240s] p-0 mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
          >
            {EMPRESAS.map((logo) => (
              <div key={logo.src} className="flex items-center justify-center mx-8">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={180}
                  height={48}
                  style={{ width: "auto" }}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

const SectorIcon = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 via-primary/10 to-transparent text-primary">
    {children}
  </div>
);
