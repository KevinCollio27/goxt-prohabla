import { proximoEvento } from "./eventos";

export const SITE_URL = "https://www.prohabla.org";
export const SITE_NAME = "Prohabla";
export const SITE_DESCRIPTION = `${proximoEvento.nombre} conecta a estudiantes, egresados y empresas en un mismo lugar. ${proximoEvento.diaSemana} ${proximoEvento.fecha}, ${proximoEvento.institucion} - ${proximoEvento.sede}, ${proximoEvento.entrada}.`;

export const EVENT_INFO = {
  name: proximoEvento.nombre,
  // TODO: actualizar fecha/hora en formato ISO cuando cambie el próximo evento en eventos.ts
  startDate: "2026-09-17T10:00:00-06:00",
  endDate: "2026-09-17T16:00:00-06:00",
  venueName: proximoEvento.institucion,
  addressLocality: "La Fortuna, San Carlos",
  addressCountry: "CR",
  latitude: 10.470251989660488,
  longitude: -84.64013292496246,
};
