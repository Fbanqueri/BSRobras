import { useMemo } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { subcategories } from '../data/products';

const filterButtons = [
    { path: '/catalogo', id: 'all', label: 'Todo el Catálogo' },
    { path: '/catalogo/impermeabilizacion', id: 'impermeabilizacion', label: 'Impermeabilización' },
    { path: '/catalogo/pintura', id: 'pintura', label: 'Pinturas' },
    { path: '/catalogo/preparacion-superficies', id: 'preparacion-superficies', label: 'Preparación de Superficies' }
];

export default function CatalogLanding() {
    const { categoryId } = useParams<{ categoryId?: string }>();
    const currentCategory = categoryId || 'all';

    const filteredSubcategories = useMemo(() => {
        if (currentCategory === 'all') return subcategories;
        return subcategories.filter(sub => sub.categoryId === currentCategory);
    }, [currentCategory]);

    const seoMeta = useMemo(() => {
        switch (currentCategory) {
            case 'pintura':
                return {
                    title: "Pinturas y Látex Premium en Rosario | BSR Obras",
                    description: "Descubrí nuestra línea de látex profesional para interior y exterior en Rosario. Máximo poder cubritivo y resistencia para tus paredes.",
                    canonical: "https://bsrobras.com.ar/catalogo/pintura"
                };
            case 'impermeabilizacion':
                return {
                    title: "Impermeabilizantes y Membranas en Rosario | BSR Obras",
                    description: "Especialistas en impermeabilización en Rosario. Conseguí membranas líquidas, asfálticas y pinturas aislantes para eliminar filtraciones definitivamente.",
                    canonical: "https://bsrobras.com.ar/catalogo/impermeabilizacion"
                };
            case 'preparacion-superficies':
                return {
                    title: "Masillas, Selladores y Reparación de Grietas | BSR Obras",
                    description: "Insumos profesionales para la preparación de superficies en Rosario. Selladores poliuretánicos, masillas y fijadores de primeras marcas.",
                    canonical: "https://bsrobras.com.ar/catalogo/preparacion-superficies"
                };
            default:
                return {
                    title: "Catálogo Técnico de Impermeabilizantes y Pinturas | BSR Obras",
                    description: "Impermeabilizantes, membranas, pinturas látex y selladores para resolver filtraciones y renovar tu casa u obra en Rosario",
                    canonical: "https://bsrobras.com.ar/catalogo"
                };
        }
    }, [currentCategory]);

    const breadcrumbSchema = useMemo(() => {
        const items = [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bsrobras.com.ar/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://bsrobras.com.ar/catalogo" }
        ];

        if (currentCategory !== 'all') {
            const currentBtn = filterButtons.find(b => b.id === currentCategory);
            if (currentBtn) {
                items.push({
                    "@type": "ListItem",
                    "position": 3,
                    "name": currentBtn.label,
                    "item": `https://bsrobras.com.ar${currentBtn.path}`
                });
            }
        }

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items
        };
    }, [currentCategory]);

    return (
        <section id="catalogo" className="pt-32 pb-24 bg-slate-50 min-h-[90dvh] text-left">
            <Helmet>
                <title>{seoMeta.title}</title>
                <meta name="description" content={seoMeta.description} />
                <link rel="canonical" href={seoMeta.canonical} />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb visual */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400 mb-8 flex-wrap">
                    <Link to="/" className="hover:text-slate-700 transition-colors">Inicio</Link>
                    <ChevronRight size={14} className="text-slate-300 shrink-0" />
                    {currentCategory === 'all' ? (
                        <span className="text-slate-700 font-medium">Catálogo</span>
                    ) : (
                        <>
                            <Link to="/catalogo" className="hover:text-slate-700 transition-colors">Catálogo</Link>
                            <ChevronRight size={14} className="text-slate-300 shrink-0" />
                            <span className="text-slate-700 font-medium">
                                {filterButtons.find(b => b.id === currentCategory)?.label || currentCategory}
                            </span>
                        </>
                    )}
                </nav>

                {/* Encabezado editorial sobrio */}
                <div className="mb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                        Catálogo Técnico
                    </h1>
                    <p className="text-slate-600 text-base md:text-lg max-w-[65ch] leading-relaxed">
                        Impermeabilizantes, membranas, pinturas látex y selladores para resolver filtraciones y renovar tu casa u obra en Rosario.
                    </p>
                </div>

                {/* Tabs de categoría estilo barra arquitectónica segmentada (sin pill badges) */}
                <div className="border-b border-slate-200 mb-10 overflow-x-auto scrollbar-none">
                    <nav className="flex space-x-1 sm:space-x-4 min-w-max pb-px" aria-label="Categorías">
                        {filterButtons.map((btn) => {
                            const isActive = currentCategory === btn.id;
                            return (
                                <Link
                                    key={btn.id}
                                    to={btn.path}
                                    className={`relative py-3.5 px-3.5 sm:px-4 text-sm font-semibold transition-colors duration-150 active:scale-[0.98] ${isActive
                                        ? 'text-slate-900'
                                        : 'text-slate-500 hover:text-slate-800'
                                        }`}
                                >
                                    {btn.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="catalog-tab-active"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Grid de Subcategorías estilo Fichas Técnicas */}
                {filteredSubcategories.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80">
                        <p className="text-slate-500 text-sm">No se encontraron líneas de producto en esta sección.</p>
                    </div>
                ) : (
                    <div
                        key={currentCategory}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredSubcategories.map((sub, index) => {
                            const delayClass = `delay-${Math.min(index + 1, 6)}`;
                            return (
                                <div
                                    key={sub.id}
                                    className={`animate-card ${delayClass} h-full`}
                                >
                                    <Link
                                        to={`/catalogo/${sub.categoryId}/${sub.id}`}
                                        className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(4,120,87,0.12)] transition-all duration-300"
                                    >
                                        {/* Contenedor fotográfico técnico */}
                                        <div className="relative h-56 sm:h-60 bg-slate-900 overflow-hidden">
                                            <img
                                                src={sub.image}
                                                alt={sub.name}
                                                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                                decoding="async"
                                                loading={index === 0 ? "eager" : "lazy"}
                                                fetchPriority={index === 0 ? "high" : "low"}
                                                width="400"
                                                height="240"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                        </div>

                                        {/* Cuerpo de la ficha técnica */}
                                        <div className="p-6 flex flex-col flex-grow justify-between">
                                            <div>
                                                <h2 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors tracking-tight mb-2">
                                                    {sub.name}
                                                </h2>
                                            </div>

                                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-primary mt-4">
                                                <span>Ver productos</span>
                                                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}