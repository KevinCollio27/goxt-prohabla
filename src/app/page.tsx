import ExpoTalentoHero from "@/components/sections/ExpoTalento-hero";
import Testimonials from "@/components/sections/ExpoTalentoTestimonios";
import CTASection from "@/components/sections/ExpoTalentoCTA";
import ExpoTalentoFAQ from "@/components/sections/ExpoTalentoFAQ";
import Footer from "@/components/sections/ExpoTalentoFooter";
import ExpoTalentoPilares from "@/components/sections/ExpoTalentoPilares";
import ExpoTalentoStats from "@/components/sections/ExpoTalentoStats";
import ExpoTalentoSectores from "@/components/sections/ExpoTalentoSectores";

export default function Home() {
  return (
    <div className="relative">
      <main>
        <ExpoTalentoHero />
        <ExpoTalentoStats />
        <ExpoTalentoPilares />
        <ExpoTalentoSectores />
        <Testimonials />
        <ExpoTalentoFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
