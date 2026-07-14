import ExpoTalentoHero from "@/components/sections/ExpoTalento-hero";
import Testimonials from "@/components/sections/ExpoTalentoTestimonios";
import CTASection from "@/components/sections/ExpoTalentoCTA";
import ExpoTalentoFAQ from "@/components/sections/ExpoTalentoFAQ";
import Footer from "@/components/sections/ExpoTalentoFooter";
import ExpoTalentoPilares from "@/components/sections/ExpoTalentoPilares";
import ExpoTalentoStats from "@/components/sections/ExpoTalentoStats";
import ExpoTalentoSectores from "@/components/sections/ExpoTalentoSectores";
import ExpoTalentoUbicacion from "@/components/sections/ExpoTalentoUbicacion";
import { EVENT_INFO, SITE_DESCRIPTION, SITE_URL } from "@/lib/site-config";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT_INFO.name,
  startDate: EVENT_INFO.startDate,
  endDate: EVENT_INFO.endDate,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  description: SITE_DESCRIPTION,
  image: [`${SITE_URL}/opengraph-image`],
  location: {
    "@type": "Place",
    name: EVENT_INFO.venueName,
    address: {
      "@type": "PostalAddress",
      addressLocality: EVENT_INFO.addressLocality,
      addressCountry: EVENT_INFO.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: EVENT_INFO.latitude,
      longitude: EVENT_INFO.longitude,
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Prohabla",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CRC",
    availability: "https://schema.org/InStock",
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <main>
        <ExpoTalentoHero />
        <ExpoTalentoStats />
        <ExpoTalentoPilares />
        <ExpoTalentoSectores />
        <ExpoTalentoUbicacion />
        <Testimonials />
        <ExpoTalentoFAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
