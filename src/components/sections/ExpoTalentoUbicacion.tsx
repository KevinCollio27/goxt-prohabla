import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const DETALLES = [
  {
    id: "fecha",
    icon: Calendar,
    title: "Miércoles 29 de julio, 2026",
    subtitle: "Entrada libre",
  },
  {
    id: "horario",
    icon: Clock,
    title: "9:00 AM – 3:00 PM",
    subtitle: "Puedes llegar en cualquier momento del horario",
  },
  {
    id: "lugar",
    icon: MapPin,
    title: "Universidad Técnica Nacional",
    subtitle: "Sede Central, Alajuela, Costa Rica",
  },
];

const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.118622508405!2d-84.21900102520627!3d10.007059390098707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9b8106ae04b%3A0x95eeb17783362f9d!2sSede%20Central%20de%20la%20Universidad%20T%C3%A9cnica%20Nacional!5e0!3m2!1ses-419!2scl!4v1784042732976!5m2!1ses-419!2scl";

export default function ExpoTalentoUbicacion() {
  return (
    <section
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="page-bg-grid" />
      <div className="max-w-7xl mx-auto sm:px-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: información del evento */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit gap-2 bg-secondary text-navy">
                <span className="size-1.5 rounded-full bg-primary" />
                Ubicación · ExpoTalento 2026
              </Badge>
              <h2 className="text-4xl font-medium tracking-tight md:text-5xl text-navy">
                Encuentra el <span className="text-primary">Evento</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Ven y encuentra las oportunidades que estás buscando e impulsa tu carrera.
              </p>
            </div>

            <div className="flex flex-col gap-5 rounded-2xl border border-border border-l-4 border-l-sky bg-white p-6 shadow-md">
              {DETALLES.map((detalle) => (
                <div key={detalle.id} className="flex items-start gap-3">
                  <detalle.icon
                    className="size-5 text-primary shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-medium text-navy">{detalle.title}</p>
                    <p className="text-sm text-muted-foreground">{detalle.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#ExpoTalentoHero" className="group relative">
                <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer">
                  <span className="relative z-10 transition-all duration-500">
                    Estoy Interesado
                  </span>
                  <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </Button>
              </a>
            </div>
          </div>

          {/* Columna derecha: mapa */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-md">
            <iframe
              src={MAPS_EMBED_SRC}
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación ExpoTalento 2026 - Sede Central UTN Alajuela"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
