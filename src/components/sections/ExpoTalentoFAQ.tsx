"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Badge } from "../ui/badge";
import { proximoEvento } from "@/lib/eventos";

export default function ExpoTalentoFAQ() {
  return (
    <section
      style={{ background: "#FFFFFF" }}
      className="relative isolate overflow-hidden bg-background section-padding-y"
      aria-labelledby="faq-heading"
    >
      <div className="container-padding-x mx-auto flex max-w-5xl flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg flex flex-col items-center text-center">
          <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit gap-2 bg-secondary text-navy">
            <span className="size-1.5 rounded-full bg-primary" />
            Preguntas Frecuentes · Prohabla
          </Badge>
          <h1 id="faq-heading" className="text-3xl md:text-5xl font-medium tracking-tight text-navy">
            ¿Tiene dudas o <span className="text-primary">consultas</span>?
          </h1>
          <p className="text-muted-foreground text-lg/8 text-pretty">
            Reunimos la información más importante para que aproveche al máximo su visita a la feria. 
          </p>
        </div>

        <Accordion type="single" defaultValue="item-1" aria-label="FAQ items">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base font-medium">
              ¿Qué es una feria de empleo de Prohabla?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Prohabla impulsa ferias de empleo en distintos puntos de Costa Rica, incentivando a que las empresas publiquen sus oportunidades laborales para que estudiantes, egresados y profesionales interesados puedan postular y conectar con más de 90 empresas de sectores como comercio, logística y servicios.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base font-medium">
              ¿Cuándo y dónde es la próxima feria de empleo?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              {`Se realiza el ${proximoEvento.diaSemana} ${proximoEvento.fecha}, de ${proximoEvento.horario}, en ${proximoEvento.institucion} (${proximoEvento.sede}).`}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base font-medium">
              ¿La entrada a la feria tiene algún costo?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              No, la feria es 100% gratuita y de entrada libre, sin necesidad de comprar boletos ni cupos limitados.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-base font-medium">
              Busco trabajo, ¿cómo puedo participar en la feria?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Complete el formulario de inscripción para postulantes en este sitio, adjunte su currículum y quedará disponible para que las empresas participantes revisen su perfil.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-base font-medium">
              ¿Necesito tener experiencia laboral para asistir?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              No. La feria está dirigida tanto a personas con experiencia como a quienes están dando sus primeros pasos en el mundo laboral, incluyendo estudiantes avanzados y recién egresados.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left text-base font-medium">
              Tengo una empresa, ¿cómo registro mis vacantes en la feria?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Las empresas pueden completar el formulario de registro en este sitio, adjuntando la información de las vacantes disponibles para publicarlas y darlas a conocer a los asistentes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left text-base font-medium">
              ¿Qué debo llevar si voy a asistir a la feria de empleo?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Se recomienda llevar el currículum impreso y en formato digital, investigar previamente las empresas participantes, y usar ropa formal y fresca considerando el clima de la región.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-left text-base font-medium">
              ¿Qué sectores de empresas participan en las ferias de Prohabla?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Empresas de los sectores de comercio, logística y servicios, con nuevas organizaciones confirmadas en cada edición.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
