import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Briefcase, Truck, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { getLogos } from "@/lib/logos";

const EMPRESAS = getLogos("Logos Empresas SC-trimmed");

const pillars = [
  {
    id: "comercio",
    icon: <ShoppingCart className="size-5" aria-hidden />,
    title: "Comercio",
    description: "Retail, ventas y atención al cliente",
  },
  {
    id: "logistica",
    icon: <Truck className="size-5" aria-hidden />,
    title: "Logística",
    description: "Transporte, distribución y cadena de suministro",
  },
  {
    id: "servicios",
    icon: <Briefcase className="size-5" aria-hidden />,
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
            Empresas que confían en Prohabla
          </Badge>
          <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl text-navy">
            Más de 90 empresas te esperan en los eventos de <span className="text-primary">Prohabla</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Conoce a las empresas de los sectores de comercio, logística y servicios que participan en nuestras ferias de empleo.
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
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 border-t border-border pt-12">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Empresas confirmadas
          </p>
          <Marquee
            pauseOnHover
            repeat={2}
            className="w-full [--duration:30s] p-0 mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
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
