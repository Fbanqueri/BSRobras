import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import CatalogLanding from './pages/CatalogLanding';
import SubcategoryPage from './pages/SubcategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

function App() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HardwareStore"],
    "name": import.meta.env.VITE_SITE_NAME || "BSR Obras",
    "image": `${import.meta.env.VITE_SITE_URL || "https://bsrobras.com.ar"}/assets/logo.png`,
    "@id": import.meta.env.VITE_SITE_URL || "https://bsrobras.com.ar",
    "url": import.meta.env.VITE_SITE_URL || "https://bsrobras.com.ar",
    "telephone": "+54 341 457-7305",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Rosario"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Santa Fe"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": `+${import.meta.env.VITE_WHATSAPP_NUMBER || "5493413233169"}`,
        "contactType": "Customer Support",
        "availableLanguage": "Spanish"
      }
    ],
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "12:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "16:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:30"
      }
    ],
    "sameAs": [
      import.meta.env.VITE_INSTAGRAM_URL,
      import.meta.env.VITE_FACEBOOK_URL
    ].filter(Boolean)
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <Routes>
        {/* Envolvemos todas las rutas dentro de nuestro Layout común */}
        <Route path="/" element={<Layout />}>

          {/* 1. Ruta de Inicio (Home) */}
          <Route index element={<Home />} />

          {/* 2. Catálogo Nivel 1: General y Categorías Padre (/catalogo y /catalogo/:categoryId) */}
          <Route path="catalogo" element={<CatalogLanding />} />
          <Route path="catalogo/:categoryId" element={<CatalogLanding />} />

          {/* 3. Catálogo Nivel 2: Subcategoría Jerárquica (/catalogo/impermeabilizacion/membranas-liquidas) */}
          <Route path="catalogo/:categorySlug/:subcategorySlug" element={<SubcategoryPage />} />

          {/* 4. Catálogo Nivel 3: Ficha de Producto Individual (/catalogo/impermeabilizacion/membranas-liquidas/slug-producto) */}
          <Route path="catalogo/:categorySlug/:subcategorySlug/:productSlug" element={<ProductDetailPage />} />

          {/* 5. Ruta de Contacto y Ubicación (/contacto) */}
          <Route path="contacto" element={<ContactPage />} />

          {/* Redirecciones de seguridad cliente y fallback */}
          <Route path="producto/:slug" element={<Navigate to="/catalogo" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;