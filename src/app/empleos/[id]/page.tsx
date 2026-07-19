import type { Metadata } from "next";
import ExpoTalentoEmpleosHero from "@/components/sections/ExpoTalentoEmpleosHero";
import { getVacantes } from "@/lib/vacantes-source";
import { SITE_URL } from "@/lib/site-config";

interface EmpleoPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: EmpleoPageProps): Promise<Metadata> {
  const { id } = await params;
  const vacantes = await getVacantes();
  const vacante = vacantes.find((v) => v.id === id);

  if (!vacante) {
    return {
      title: "Vacante no encontrada",
    };
  }

  const title = `${vacante.tituloPuesto} en ${vacante.empresa}`;
  const description =
    vacante.descripcion.length > 160
      ? `${vacante.descripcion.slice(0, 157)}...`
      : vacante.descripcion;
  const url = `${SITE_URL}/empleos/${vacante.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function EmpleoPage({ params }: EmpleoPageProps) {
  const { id } = await params;

  return (
    <div className="relative">
      <main>
        <ExpoTalentoEmpleosHero initialSelectedId={id} />
      </main>
    </div>
  );
}
