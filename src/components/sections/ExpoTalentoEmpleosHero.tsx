import { EmpleosBoard } from "@/components/empleos/EmpleosBoard";
import { getVacantes } from "@/lib/vacantes-source";

interface ExpoTalentoEmpleosHeroProps {
  initialSelectedId?: string;
}

export default async function ExpoTalentoEmpleosHero({
  initialSelectedId,
}: ExpoTalentoEmpleosHeroProps) {
  const vacantes = await getVacantes();

  return (
    <section
      className="relative isolate overflow-hidden pt-4 md:pt-6 pb-4 md:pb-6 lg:flex lg:h-[calc(100vh-5rem)] lg:flex-col"
      style={{ background: "#F7FBFE" }}
    >
      <div className="page-bg-grid" />
      <div className="max-w-7xl mx-auto sm:px-16 px-4 w-full lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
        <h1 className="sr-only">Oportunidades de Empleo Disponibles</h1>
        <div className="lg:min-h-0 lg:flex-1">
          <EmpleosBoard vacantes={vacantes} initialSelectedId={initialSelectedId} />
        </div>
      </div>
    </section>
  );
}
