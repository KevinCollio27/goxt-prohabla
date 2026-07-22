"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
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
  const [mobileView, setMobileView] = useState<"list" | "detail">(
    initialId && initialSelectedId === initialId ? "detail" : "list"
  );
  const selectedVacante = vacantes.find((v) => v.id === selectedId);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setMobileView("detail");
  };

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-white shadow-md lg:h-full lg:min-h-0 lg:grid-cols-[440px_1fr]">
      <div
        className={cn(
          "lg:flex lg:min-h-0 lg:border-r lg:border-border",
          mobileView === "detail" ? "hidden" : "flex"
        )}
      >
        <VacancyList vacantes={vacantes} selectedId={selectedId} onSelect={handleSelect} />
      </div>

      <div
        className={cn(
          "flex-col lg:flex lg:min-h-0",
          mobileView === "detail" ? "flex" : "hidden"
        )}
      >
        <button
          type="button"
          onClick={() => setMobileView("list")}
          className="flex shrink-0 items-center gap-1.5 border-b border-border px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground lg:hidden"
        >
          <ArrowLeft className="size-4" />
          Volver a vacantes
        </button>
        <div className="min-h-0 flex-1">
          <VacancyPreview vacante={selectedVacante} />
        </div>
      </div>
    </div>
  );
}
