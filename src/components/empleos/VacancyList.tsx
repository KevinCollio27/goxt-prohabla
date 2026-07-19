"use client";

import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DEFAULT_LOGO_URL,
  formatList,
  formatRelativeDate,
  getInitials,
  isVacanteNueva,
  joinNonEmpty,
  vacanteCierraProximo,
  type Vacante,
} from "@/lib/vacantes";

interface VacancyListProps {
  vacantes: Vacante[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function VacancyList({ vacantes, selectedId, onSelect }: VacancyListProps) {
  const [search, setSearch] = useState("");

  const filtered = vacantes.filter((v) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      v.tituloPuesto.toLowerCase().includes(q) ||
      v.empresa.toLowerCase().includes(q) ||
      v.ubicacion.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex h-full flex-col">
      <div className="px-5 pt-5 pb-3">
        <h2 className="text-lg font-semibold text-navy">
          Vacantes Disponibles ({vacantes.length})
        </h2>
      </div>

      <div className="px-5 pb-4">
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por cargo, empresa o ciudad..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            Sin resultados.
          </p>
        ) : (
          filtered.map((vacante) => {
            const selected = selectedId === vacante.id;
            return (
              <button
                key={vacante.id}
                type="button"
                onClick={() => onSelect(vacante.id)}
                className={cn(
                  "flex w-full items-center gap-3 border-b border-l-4 border-border px-5 py-4 text-left transition-colors last:border-b-0",
                  selected
                    ? "border-l-primary bg-secondary/40"
                    : "border-l-transparent hover:bg-muted/50"
                )}
              >
                <Avatar className="h-10 w-14 shrink-0 rounded-lg bg-white">
                  <AvatarImage
                    src={vacante.logoUrl ?? DEFAULT_LOGO_URL}
                    alt={vacante.empresa}
                    className="object-contain p-1"
                  />
                  <AvatarFallback className="rounded-lg text-xs">
                    {getInitials(vacante.empresa)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <span className="line-clamp-2 min-w-0 font-semibold text-navy">
                      {vacante.tituloPuesto}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {formatRelativeDate(vacante.fechaPublicacion)}
                    </span>
                  </div>
                  <p className="truncate text-sm text-foreground">{vacante.empresa}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {joinNonEmpty([vacante.ubicacion, formatList(vacante.modalidad, "")])}
                  </p>

                  {(isVacanteNueva(vacante) || vacanteCierraProximo(vacante)) && (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {isVacanteNueva(vacante) && (
                        <Badge
                          variant="outline"
                          className="border-emerald-200 bg-emerald-50 text-emerald-700"
                        >
                          Nuevo
                        </Badge>
                      )}
                      {vacanteCierraProximo(vacante) && (
                        <Badge
                          variant="outline"
                          className="border-amber-200 bg-amber-50 text-amber-700"
                        >
                          Cierra pronto
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
