import { useMemo } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { subcategories } from '../data/products';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.15,
            ease: "easeIn"
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.97 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 18
        }
    }
};

// Estructura de la botonera con URLs físicas y limpias aprobadas por el experto SEO
const filterButtons = [
    { path: '/catalogo', id: 'all', label: 'Todo' },
    { path: '/catalogo/pintura', id: 'pintura', label: 'Pinturas' },
    { path: '/catalogo/impermeabilizacion', id: 'impermeabilizacion', label: 'Impermeabilizantes' },
    { path: '/catalogo/preparacion-superficies', id: 'preparacion-superficies', label: 'Preparación de Superficies' }
];

export default function CatalogLanding() {
    // Leemos el id de la categoría directamente de la URL física si existe (ej: /catalogo/impermeabilizacion)
    const { categoryId } = useParams<{ categoryId?: string }>();
    const currentCategory = categoryId || 'all';

    // 1. Filtrado de subcategorías real y semántico para el renderizador
    const filteredSubcategories = useMemo(() => {
        if (currentCategory === 'all') return subcategories;
        return subcategories.filter(sub => sub.categoryId === currentCategory);
    }, [currentCategory]);

    // Configuración dinámica de Metadatos según la URL para potenciar SEO Local
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
                    title: "Catálogo de Impermeabilizantes y Pinturas | BSR Obras",
                    description: "Explorá nuestro catálogo completo de impermeabilizantes, membranas y pinturas en Rosario. Materiales premium para profesionales de la construcción.",
                    canonical: "https://bsrobras.com.ar/catalogo"
                };
        }
    }, [currentCategory]);

    // Esquema de Migas de Pan (Breadcrumbs) dinámico
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
        <section id="catalogo" className="pt-28 pb-20 bg-[#f6f8f6]">
            <Helmet>
                <title>{seoMeta.title}</title>
                <meta name="description" content={seoMeta.description} />
                <link rel="canonical" href={seoMeta.canonical} />
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Nuestro Catálogo</h2>
                    <p className="text-slate-600">Selección premium para profesionales de la construcción y refacción en Rosario.</p>
                </div>

                {/* BOTONERA DE FILTROS: Interactiva para el usuario, estructural para Google */}
                <div className="flex flex-wrap gap-3 border-b border-slate-200/60 pb-8 mb-10 justify-center md:justify-start">
                    {filterButtons.map((btn) => {
                        const isActive = currentCategory === btn.id;
                        return (
                            <Link
                                key={btn.id}
                                to={btn.path}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${isActive
                                        ? 'bg-primary text-white ring-2 ring-primary/20'
                                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                    }`}
                            >
                                {btn.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Grid dinámico con animaciones de Framer Motion */}
                {filteredSubcategories.length === 0 ? (
                    <p className="text-slate-500 py-12 text-center">No se encontraron subcategorías disponibles.</p>
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentCategory}
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredSubcategories.map(sub => (
                                <motion.div
                                    key={sub.id}
                                    variants={itemVariants}
                                    className="h-full"
                                >
                                    <Link
                                        to={`/catalogo/${sub.categoryId}/${sub.id}`}
                                        className="group relative h-64 rounded-xl overflow-hidden border border-primary/10 hover:border-primary transition-all shadow-sm hover:shadow-xl block bg-white"
                                    >
                                        <img
                                            src={sub.image}
                                            alt={sub.name}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            decoding="async"
                                            width="400"
                                            height="300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6 text-left">
                                            <h3 className="text-white font-bold text-2xl">{sub.name}</h3>
                                            <p className="text-white/70 text-sm mt-1">Ver productos</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </section>
    );
}