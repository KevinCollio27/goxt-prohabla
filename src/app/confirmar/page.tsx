import type { Metadata } from "next";
import ExpoTalentoContact from "@/components/sections/expo-talento-contact";
import Footer from "@/components/sections/ExpoTalentoFooter";

export const metadata: Metadata = {
  title: "Confirma tu asistencia | ExpoTalento UTN 2026",
  description:
    "Confirma tu asistencia a la Feria ExpoTalento 2026. Miércoles 29 de julio, 9:00 am – 3:00 pm, UTN Alajuela.",
};

export default function ConfirmarPage() {
  return (
    <div className="relative">
      <main>
        <ExpoTalentoContact />
      </main>
      <Footer />
    </div>
  );
}
