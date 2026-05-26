import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
    isMainHero?: boolean;
}

export default function Hero({ isMainHero = true }: HeroProps) {
    return (
        <section className="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden text-left">
            {/* Imagen de fondo premium con opacidad uniforme */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity"
                style={{ backgroundImage: "url('/assets/Hero.webp')" }}
            />
            {/* Capa de oscurecimiento uniforme para asegurar la legibilidad del texto */}
            <div className="absolute inset-0 bg-slate-950/50" />

            {/* Fondo estético sutil */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.12),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    {isMainHero ? (
                        <>
                            {/* Bloque para la Home principal */}

                            {/* NUEVO H1 CORREGIDO: Todo en minúsculas/capitalizado comercial enfocado en SEO local */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
                            >
                                Venta de impermeabilizantes y pinturas en Rosario
                            </motion.h1>

                            {/* NUEVO PÁRRAFO CORREGIDO: Persuasivo y enfocado al cliente minorista/profesional */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed"
                            >
                                Soluciones definitivas en impermeabilizantes y pinturas. Olvídate de las filtraciones y los repintados constantes. Protege tu inversión con materiales profesionales que embellecen y resisten el paso del tiempo.
                            </motion.p>

                            {/* Botones de acción rápida en la Home */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                {/* BOTÓN PRINCIPAL: Letras blancas, sin uppercase y con fondo de alto contraste */}
                                <Link
                                    to="/catalogo"
                                    className="bg-primary hover:bg-primary-dark text-white font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2 text-sm tracking-wide"
                                >
                                    Ver Catálogo <ArrowRight size={18} />
                                </Link>

                                {/* BOTÓN SECUNDARIO: Estilo outline blanco y sutil */}
                                <a
                                    href="https://wa.me/5493413233169"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/5 hover:bg-white/10 text-white font-semibold py-3.5 px-6 rounded-xl transition-all inline-flex items-center gap-2 text-sm border border-white/20 backdrop-blur-sm"
                                >
                                    <MessageSquare size={18} className="text-primary" /> Asesoramiento Directo
                                </a>
                            </motion.div>
                        </>
                    ) : (
                        <>
                            {/* Bloque compacto secundario para la vista interna del catálogo */}
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                                Catálogo Técnico Completo
                            </h1>
                            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
                                Explorá nuestras líneas de productos por categorías jerárquicas. Encontrá fichas técnicas, rendimientos y marcas líderes para cada etapa de tu proyecto.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}