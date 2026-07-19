"use client";

import { useState } from "react";
import type { Vacante } from "@/lib/vacantes";
import { VacancyList } from "@/components/empleos/VacancyList";
import { VacancyPreview } from "@/components/empleos/VacancyPreview";

interface EmpleosBoardProps {
  vacantes: Vacante[];
  initialSelectedId?: string;
}

export function EmpleosBoard({ vacantes, initialSelectedId }: EmpleosBoardProps) {
  const initialId = vacantes.some((v) => v.id === initialSelectedId)
    ? initialSelectedId
    : (vacantes[0]?.id ?? null);
  const [selectedId, setSelectedId] = useState<string | null>(initialId ?? null);
  const selectedVacante = vacantes.find((v) => v.id === selectedId);

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-white shadow-md lg:h-full lg:min-h-0 lg:grid-cols-[440px_1fr]">
      <div className="lg:min-h-0 lg:border-r lg:border-border">
        <VacancyList
          vacantes={vacantes}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>

      <div className="hidden lg:block lg:min-h-0">
        <VacancyPreview vacante={selectedVacante} />
      </div>
    </div>
  );
}
