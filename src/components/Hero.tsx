import { ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
    isMainHero?: boolean;
}

export default function Hero({ isMainHero = true }: HeroProps) {
    return (
        <section className={`relative bg-[#090D16] text-white overflow-hidden text-left ${isMainHero ? 'min-h-screen flex flex-col justify-center' : ''}`}>
            {/* Imagen de fondo nativa — sin delay de CSSOM ni cálculo de mix-blend */}
            <img
                src="/assets/Hero.webp"
                alt="Impermeabilizantes, membranas y pinturas en Rosario - BSR Obras"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="1920"
                height="1080"
                className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
            />
            {/* Gradiente architectural — oscurece bottom para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#090D16]/40 via-[#090D16]/65 to-[#090D16]/95" />
            {/* Resplandor ambiental — esquina derecha (GPU layer para evitar re-rasterización en scroll) */}
            <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />
            {/* Resplandor secundario — izquierda baja */}
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-700/6 rounded-full blur-[80px] pointer-events-none transform-gpu will-change-transform" />

            {isMainHero ? (
                /* ── Hero principal — Dirección C: Problema → Solución ── */
                <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 md:pt-36 md:pb-24">
                    {/* 1. Contexto local — dirección */}
                    <div className="animate-hero-up flex flex-wrap items-center gap-x-5 gap-y-2 mb-8">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300">
                            <MapPin size={13} className="text-emerald-400 shrink-0" />
                            Mendoza 7301, Rosario
                        </span>
                    </div>

                    {/* 2. H1 Principal — habla del problema del cliente pero incluye semánticamente el rubro y la ciudad */}
                    <h1 className="animate-hero-up-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight leading-[1.08] text-white text-balance max-w-[18ch] mb-6">
                        <span className="block text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-emerald-400 mb-3 font-semibold">
                            Impermeabilizantes y Pinturas en Rosario
                        </span>
                        ¿Se filtra tu terraza?{' '}
                        <span className="text-emerald-400">¿Se descascara la pared?</span>
                    </h1>

                    {/* 3. Subtexto — combina empatía + palabras clave del negocio */}
                    <p className="animate-hero-up-delay-1 text-slate-300 text-lg md:text-xl leading-relaxed max-w-[50ch] mb-10 font-normal">
                        En BSR Obras resolvemos problemas de humedad, filtraciones y pintura todos los días. Vení con una foto del problema y llevate la solución exacta con asesoramiento sin cargo.
                    </p>

                    {/* 4. CTAs — un camino para cada tipo de visitante */}
                    <div className="animate-hero-up-delay-2 flex flex-wrap gap-3 items-center">
                        <Link
                            to="/catalogo"
                            className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-7 rounded-xl transition-all duration-150 shadow-[0_10px_25px_-5px_rgba(4,120,87,0.40)] hover:shadow-[0_14px_30px_-5px_rgba(4,120,87,0.55)] active:scale-[0.97] text-sm tracking-wide"
                        >
                            Ver soluciones
                            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>

                        <a
                            href={`https://wa.me/5493413233169?text=${encodeURIComponent("Hola BSR Obras! Tengo un problema de humedad/pintura en casa, les paso una foto para que me asesoren:")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-150 border border-white/15 hover:border-white/25 active:scale-[0.97] text-sm"
                        >
                            <MessageSquare size={16} className="text-emerald-400" />
                            Mandanos una foto por WhatsApp
                        </a>
                    </div>
                </div>
            ) : (
                /* ── Hero compacto secundario para catálogo ── */
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-[0.18em]">
                                Catálogo Técnico BSR Obras
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance text-white leading-[1.06]">
                            Soluciones y materiales por categoría
                        </h1>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal max-w-[60ch]">
                            Fichas técnicas, rendimientos por m² y marcas líderes para impermeabilización, pinturas y preparación de superficies en Rosario.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}