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

export default function ExpoTalentoFAQ() {
  return (
    <section
      style={{ background: "#FFFFFF" }}
      className="relative isolate overflow-hidden bg-background section-padding-y"
      aria-labelledby="faq-heading"
    >
      <div className="page-bg-grid" />
      <div className="container-padding-x mx-auto flex max-w-5xl flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg flex flex-col items-center text-center">
          <Badge className="text-sm h-auto py-1 px-3 border-0 w-fit gap-2 bg-secondary text-navy">
            <span className="size-1.5 rounded-full bg-primary" />
            Preguntas Frecuentes ExpoTalento 2026
          </Badge>
          <h1 id="faq-heading" className="text-3xl md:text-5xl font-medium tracking-tight text-navy">
            ¿Tiene dudas o consultas?
          </h1>
          <p className="text-muted-foreground text-lg/8 text-pretty">
            Reunimos la información más importante para que aproveche al máximo su visita a la feria. 
          </p>
        </div>

        <Accordion type="single" defaultValue="item-1" aria-label="FAQ items">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base font-medium">
              ¿Qué es la Feria de Empleo ExpoTalento UTN 2026?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Es la 11.ª edición de la feria de empleo organizada por la carrera de Administración y Gestión de Recursos Humanos de la UTN. Conecta a estudiantes, egresados y profesionales con más de 90 empresas de los sectores de comercio, logística y servicios.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base font-medium">
              ¿Cuándo y dónde es la feria de empleo en Alajuela?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Se realiza el miércoles 29 de julio de 2026, de 9:00 a.m. a 3:00 p.m., en la Sede Central de la Universidad Técnica Nacional (UTN), en Alajuela.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base font-medium">
              ¿La entrada a ExpoTalento tiene algún costo?
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
              ¿Qué sectores de empresas participan en ExpoTalento?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Empresas de los sectores de comercio, logística y servicios, con más de 20 organizaciones confirmadas para esta edición.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
