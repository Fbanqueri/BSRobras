import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, PaintBucket, BrickWall, MessageSquare } from 'lucide-react';
import Hero from '../components/Hero';

// Escenarios de problemas comunes — hablan el idioma del cliente, no del fabricante
const problemScenarios = [
    {
        id: 'filtraciones',
        icon: <Droplets size={24} />,
        problem: 'Se filtra la terraza o el techo',
        description: 'Humedad que baja, manchas en el cielo raso, goteras cuando llueve. El problema está en la superficie expuesta y tiene solución.',
        solution: 'Membranas líquidas, asfálticas y selladores elásticos que detienen la filtración de forma definitiva.',
        link: '/catalogo/impermeabilizacion',
        linkText: 'Ver impermeabilizantes y membranas',
        image: '/assets/categories/MemLiquida_optimized.webp',
        accentColor: 'emerald',
    },
    {
        id: 'pintura',
        icon: <PaintBucket size={24} />,
        problem: 'La pared se descascara o se manchó',
        description: 'Pintura que se ampolla, humedad que mancha, paredes que perdieron color. Antes de pintar, hay que elegir el producto correcto.',
        solution: 'Línea de látex premium para interior y exterior con alto poder cubritivo y durabilidad garantizada.',
        link: '/catalogo/pintura/latex',
        linkText: 'Ver pinturas látex interior y exterior',
        image: '/assets/categories/latex.webp',
        accentColor: 'blue',
    },
    {
        id: 'grietas',
        icon: <BrickWall size={24} />,
        problem: 'Grietas, juntas abiertas o superficies dañadas',
        description: 'Rajaduras que vuelven a aparecer, juntas que se abrieron, paredes que necesitan preparación antes de cualquier acabado.',
        solution: 'Masillas, selladores y fijadores que preparan la superficie para que el trabajo dure.',
        link: '/catalogo/preparacion-superficies',
        linkText: 'Ver selladores, masillas y fijadores',
        image: '/assets/categories/selladores-juntas-optimized-v2.webp',
        accentColor: 'amber',
    },
];

// Color accent maps para evitar string interpolation de Tailwind
const accentMap: Record<string, {
    iconBg: string;
    iconText: string;
    glow: string;
    linkHover: string;
    tag: string;
}> = {
    emerald: {
        iconBg: 'bg-emerald-500/15',
        iconText: 'text-emerald-400',
        glow: 'bg-emerald-500/10',
        linkHover: 'hover:text-emerald-300',
        tag: 'text-emerald-400',
    },
    blue: {
        iconBg: 'bg-blue-500/15',
        iconText: 'text-blue-400',
        glow: 'bg-blue-500/10',
        linkHover: 'hover:text-blue-300',
        tag: 'text-blue-400',
    },
    amber: {
        iconBg: 'bg-amber-500/15',
        iconText: 'text-amber-400',
        glow: 'bg-amber-500/10',
        linkHover: 'hover:text-amber-300',
        tag: 'text-amber-400',
    },
};

// Spring transition estándar del proyecto
const spring = { type: 'spring' as const, stiffness: 140, damping: 20 };

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Venta de Impermeabilizantes, Membranas y Pinturas en Rosario | BSR Obras</title>
                <meta
                    name="description"
                    content="¿Se filtra tu terraza? ¿Se descascara la pared? En BSR Obras te damos la solución exacta en impermeabilizantes, membranas, pinturas y selladores."
                />
                <link rel="canonical" href="https://bsrobras.com.ar/" />
                <meta property="og:title" content="Venta de Impermeabilizantes, Membranas y Pinturas en Rosario | BSR Obras" />
                <meta
                    property="og:description"
                    content="¿Se filtra tu terraza? ¿Se descascara la pared? En BSR Obras te damos la solución exacta en impermeabilizantes, membranas, pinturas y selladores."
                />
                <meta property="og:url" content="https://bsrobras.com.ar/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://bsrobras.com.ar/assets/logo.png" />
            </Helmet>

            <Hero isMainHero={true} />

            {/* ── Sección Problema → Solución ── */}
            <section className="relative min-h-screen flex flex-col justify-center py-20 lg:py-24 bg-slate-50">
                <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header de sección — empático, centrado en el cliente */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={spring}
                        className="mb-14"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-balance leading-tight mb-3">
                            ¿Cuál es el problema de tu casa?
                            <span className="sr-only"> — Soluciones en Impermeabilización y Pinturería en Rosario</span>
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-[52ch]">
                            Contanos qué te pasa y te guiamos al material correcto. Cada solución tiene su producto exacto.
                        </p>
                    </motion.div>

                    {/* ── Cards de problemas — 3 columnas iguales ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {problemScenarios.map((scenario, index) => {
                            const accent = accentMap[scenario.accentColor];
                            return (
                                <motion.div
                                    key={scenario.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
                                    className="group relative bg-[#090D16] rounded-2xl overflow-hidden flex flex-col min-h-[420px]"
                                >
                                    {/* Imagen de fondo nativa con lazy loading */}
                                    <img
                                        src={scenario.image}
                                        alt={scenario.problem}
                                        loading="lazy"
                                        decoding="async"
                                        width="400"
                                        height="420"
                                        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                                    />
                                    {/* Gradiente de legibilidad */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#090D16]/95 via-[#090D16]/70 to-[#090D16]/30" />
                                    {/* Resplandor de color propio — acelerado por GPU */}
                                    <div className={`absolute top-0 right-0 w-40 h-40 ${accent.glow} rounded-full blur-[60px] pointer-events-none transform-gpu`} />

                                    {/* Contenido */}
                                    <div className="relative z-10 flex flex-col h-full p-7 md:p-8">
                                        {/* Ícono */}
                                        <div className={`p-2.5 ${accent.iconBg} ${accent.iconText} rounded-xl w-fit mb-6`}>
                                            {scenario.icon}
                                        </div>

                                        {/* Etiqueta de problema */}
                                        <span className={`text-[10px] font-mono uppercase tracking-[0.16em] ${accent.tag} mb-2`}>
                                            Problema común
                                        </span>

                                        {/* Título del problema */}
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight leading-snug">
                                            {scenario.problem}
                                        </h3>

                                        {/* Descripción empática */}
                                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                            {scenario.description}
                                        </p>

                                        {/* Solución (push to bottom) */}
                                        <div className="mt-auto">
                                            <p className="text-slate-400 text-xs leading-relaxed mb-5">
                                                <span className={`font-semibold ${accent.tag}`}>Solución:</span>{' '}
                                                {scenario.solution}
                                            </p>

                                            {/* CTA */}
                                            <div className="pt-4 border-t border-white/10">
                                                <Link
                                                    to={scenario.link}
                                                    className={`inline-flex items-center gap-2 text-sm font-semibold text-white ${accent.linkHover} transition-colors group/link`}
                                                >
                                                    {scenario.linkText}
                                                    <ArrowRight size={15} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA final — conversacional, empático ── */}
            <section className="bg-[#090D16] relative overflow-hidden border-t border-slate-200 border-b border-white/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight text-balance leading-tight">
                                Cada caso es distinto. Contanos el tuyo.
                            </h2>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                Mandanos un mensaje o una foto del problema. Te decimos qué producto necesitás y cuánto rinde por m² sin compromiso.
                            </p>
                        </div>
                        <a
                            href={`https://wa.me/5493413233169?text=${encodeURIComponent("Hola BSR Obras! Quiero hacer una consulta por materiales para mi casa/obra:")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-7 rounded-xl transition-all duration-150 shadow-[0_8px_20px_-5px_rgba(4,120,87,0.45)] hover:shadow-[0_12px_28px_-5px_rgba(4,120,87,0.6)] active:scale-[0.97] text-sm whitespace-nowrap"
                        >
                            <MessageSquare size={16} />
                            Hacer consulta
                            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}