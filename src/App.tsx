import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';

function App() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": import.meta.env.VITE_SITE_NAME || "BSR Obras",
    "image": `${import.meta.env.VITE_SITE_URL || "https://bsrobras.com.ar"}/assets/logo.png`,
    "@id": import.meta.env.VITE_SITE_URL || "https://bsrobras.com.ar",
    "url": import.meta.env.VITE_SITE_URL || "https://bsrobras.com.ar",
    "telephone": `+${import.meta.env.VITE_WHATSAPP_NUMBER || "5493413233169"}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mendoza 7301",
      "addressLocality": "Rosario",
      "addressRegion": "Santa Fe",
      "postalCode": "2000",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": import.meta.env.VITE_MAP_LATITUDE || -32.940586,
      "longitude": import.meta.env.VITE_MAP_LONGITUDE || -60.719493
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "19:00"
    },
    "sameAs": [
      import.meta.env.VITE_INSTAGRAM_URL,
      import.meta.env.VITE_FACEBOOK_URL
    ].filter(Boolean)
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Helmet>
        <title>BSR Obras | Materiales de Construcción en Rosario</title>
        <meta name="description" content="Venta de materiales para la construcción, impermeabilizantes y pinturas en Rosario. Calidad y asesoramiento para tu obra." />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Catalog />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;