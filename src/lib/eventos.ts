export interface Evento {
  id: string;
  nombre: string;
  diaSemana: string;
  fecha: string;
  horario: string;
  horarioNota: string;
  entrada: string;
  institucion: string;
  sede: string;
}

export const proximoEvento: Evento = {
  id: "feria-empleo-conectate-la-fortuna-2026",
  nombre: "Feria de Empleo Conéctate La Fortuna 2026",
  diaSemana: "Jueves",
  fecha: "17 de septiembre, 2026",
  horario: "10:00 AM – 4:00 PM",
  horarioNota: "Puedes llegar en cualquier momento del horario",
  entrada: "Entrada libre",
  institucion: "CTP La Fortuna",
  sede: "Finca del CTP, La Fortuna, San Carlos",
};
