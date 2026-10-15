import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail, MessageSquare, ExternalLink, Instagram, Facebook, Navigation, ArrowRight, ChevronRight } from 'lucide-react';

export default function ContactPage() {
    const [isMapActive, setIsMapActive] = useState(false);
    const contactSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "@id": "https://bsrobras.com.ar/contacto",
                "url": "https://bsrobras.com.ar/contacto",
                "name": "Contacto y Ubicación en Rosario (Mendoza 7301) | BSR Obras",
                "description": "Visitá BSR Obras en Mendoza 7301, Rosario o consultanos por WhatsApp para asesoramiento en impermeabilizantes y pinturas.",
                "isPartOf": {
                    "@id": "https://bsrobras.com.ar"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Inicio",
                        "item": "https://bsrobras.com.ar"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Contacto",
                        "item": "https://bsrobras.com.ar/contacto"
                    }
                ]
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>Contacto y Ubicación en Rosario (Mendoza 7301) | BSR Obras</title>
                <meta
                    name="description"
                    content="Visitá BSR Obras en Mendoza 7301, Rosario (Lun a Vie 9 a 12:30 y 16 a 19 hs, Sáb 9 a 12:30 hs) o consultanos por WhatsApp. Asesoramiento sin cargo en impermeabilizantes y pinturas."
                />
                <link rel="canonical" href="https://bsrobras.com.ar/contacto" />
                <meta property="og:title" content="Contacto y Ubicación en Rosario (Mendoza 7301) | BSR Obras" />
                <meta
                    property="og:description"
                    content="Visitá BSR Obras en Mendoza 7301, Rosario (Lun a Vie 9 a 12:30 y 16 a 19 hs, Sáb 9 a 12:30 hs) o consultanos por WhatsApp. Asesoramiento sin cargo en impermeabilizantes y pinturas."
                />
                <meta property="og:url" content="https://bsrobras.com.ar/contacto" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://bsrobras.com.ar/assets/logo.png" />
                <script type="application/ld+json">
                    {JSON.stringify(contactSchema)}
                </script>
            </Helmet>

            <section className="pt-32 pb-24 bg-slate-50 min-h-[90dvh] text-left">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400 mb-8">
                        <Link to="/" className="hover:text-slate-700 transition-colors">Inicio</Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <span className="text-slate-700 font-medium">Contacto</span>
                    </nav>

                    {/* Encabezado editorial — mismo tratamiento que Catálogo */}
                    <div className="mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                            Hablemos de tu obra
                        </h1>
                        <p className="text-slate-600 text-base md:text-lg max-w-[58ch] leading-relaxed">
                            Mandanos una foto del problema o acercate al local. Te asesoramos sin cargo sobre el material y el rendimiento que necesitás.
                        </p>
                    </div>

                    {/* ── Grilla principal: 2 columnas ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

                        {/* Tarjeta WhatsApp — acción principal */}
                        <div className="lg:col-span-5 bg-[#090D16] rounded-2xl p-7 sm:p-8 relative overflow-hidden">
                            {/* Resplandor sutil */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/8 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-5">
                                    <MessageSquare size={22} />
                                </div>

                                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 leading-snug">
                                    Escribinos por WhatsApp
                                </h2>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    ¿Goteras, humedad o descascaramiento? Envianos una imagen y te indicamos el material exacto y rendimiento por m² sin compromiso.
                                </p>

                                <a
                                    href={`https://wa.me/5493413233169?text=${encodeURIComponent("Hola BSR Obras! Quiero hacer una consulta por materiales o asesoramiento para mi obra:")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-150 shadow-[0_8px_20px_-5px_rgba(4,120,87,0.45)] hover:shadow-[0_12px_28px_-5px_rgba(4,120,87,0.6)] active:scale-[0.97] text-sm"
                                >
                                    <MessageSquare size={16} />
                                    Iniciar conversación
                                    <ArrowRight size={15} />
                                </a>
                            </div>
                        </div>

                        {/* Tarjeta Datos del local */}
                        <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80">
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-6">
                                Datos del local
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
                                {/* Dirección */}
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <span className="block font-semibold text-slate-900">Dirección</span>
                                        <span className="text-slate-500">Mendoza 7301, Rosario, Santa Fe</span>
                                    </div>
                                </div>

                                {/* Horarios */}
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <span className="block font-semibold text-slate-900">Horarios</span>
                                        <span className="text-slate-500">Lun–Vie 9:00 a 12:30 y 16:00 a 19:00</span>
                                        <span className="block text-slate-500">Sáb 9:00 a 12:30</span>
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <span className="block font-semibold text-slate-900">Teléfono</span>
                                        <a
                                            href="tel:+543414577305"
                                            className="text-primary hover:text-primary-dark font-medium transition-colors"
                                        >
                                            0341 457-7305
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <span className="block font-semibold text-slate-900">Correo</span>
                                        <a
                                            href="mailto:contacto@bsrobras.com"
                                            className="text-primary hover:text-primary-dark font-medium transition-colors"
                                        >
                                            contacto@bsrobras.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Redes Sociales */}
                            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                                    Seguinos
                                </span>
                                <a
                                    href={import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/bsrobras'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram de BSR Obras"
                                    className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-150"
                                >
                                    <Instagram size={16} />
                                </a>
                                <a
                                    href={import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/bsrobras'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook de BSR Obras"
                                    className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-150"
                                >
                                    <Facebook size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Mapa full-width ── */}
                    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                            <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                                Cómo llegar · Mendoza 7301
                            </h2>
                            <a
                                href="https://maps.google.com/?q=Mendoza+7301,+Rosario,+Santa+Fe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                            >
                                <Navigation size={14} />
                                Abrir en Google Maps
                                <ExternalLink size={13} className="text-slate-400" />
                            </a>
                        </div>

                        <div
                            className="relative w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 h-[320px] sm:h-[400px]"
                            onMouseLeave={() => setIsMapActive(false)}
                        >
                            <iframe
                                title="Ubicación de BSR Obras en Mendoza 7301, Rosario"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.675659850117!2d-60.722067923485145!3d-32.94058597359556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b68b449179d639%3A0xb35a4d04829375e2!2sMendoza%207301%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0, position: 'absolute', inset: 0 }}
                                className={`w-full h-full transition-opacity duration-200 ${!isMapActive ? 'pointer-events-none' : 'pointer-events-auto'}`}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            {!isMapActive && (
                                <button
                                    type="button"
                                    onClick={() => setIsMapActive(true)}
                                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/0 hover:bg-black/5 transition-colors cursor-pointer"
                                    aria-label="Activar mapa interactivo"
                                >
                                    <span className="bg-white/95 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm border border-slate-200/80 pointer-events-none">
                                        Hacé clic para explorar el mapa
                                    </span>
                                </button>
                            )}
                        </div>

                        <p className="mt-4 text-xs text-slate-400">
                            Zona Oeste de Rosario · Acceso rápido por Av. Mendoza y Av. Circunvalación · Fácil estacionamiento
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
