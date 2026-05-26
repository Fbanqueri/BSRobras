import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { subcategories, products } from '../data/products';

export default function SubcategoryPage() {
    const { categorySlug, subcategorySlug } = useParams<{ categorySlug: string; subcategorySlug: string }>();

    // Buscamos si existe la subcategoría actual en nuestra base de datos
    const currentSubcategory = useMemo(() => {
        return subcategories.find(sub => sub.id === subcategorySlug && sub.categoryId === categorySlug);
    }, [categorySlug, subcategorySlug]);

    // CORRECCIÓN 1: Filtramos usando 'subcategory' en lugar de 'subcategoryId'
    const filteredProducts = useMemo(() => {
        if (!currentSubcategory) return [];
        return products.filter(prod => prod.subcategory === currentSubcategory.id);
    }, [currentSubcategory]);

    // Esquema de Datos Estructurados (Breadcrumbs) para este nivel
    const breadcrumbSchema = useMemo(() => {
        if (!currentSubcategory) return null;
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bsrobras.com.ar/" },
                { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://bsrobras.com.ar/catalogo" },
                { "@type": "ListItem", "position": 3, "name": currentSubcategory.name, "item": `https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}` }
            ]
        };
    }, [currentSubcategory, categorySlug, subcategorySlug]);

    // Si la URL tiene un slug que no existe en el array, redirigimos por seguridad al catálogo general
    if (!currentSubcategory) {
        return <Navigate to="/catalogo" replace />;
    }

    return (
        <section className="pt-28 pb-20 bg-slate-50">
            <Helmet>
                <title>{`${currentSubcategory.name} en Rosario | BSR Obras`}</title>
                <meta
                    name="description"
                    content={`Distribución y venta de ${currentSubcategory.name.toLowerCase()} en Rosario. Soluciones premium y materiales para la construcción de alta performance.`}
                />
                <link rel="canonical" href={`https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}`} />
                {breadcrumbSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(breadcrumbSchema)}
                    </script>
                )}
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Enlace de retorno semántico */}
                <div className="mb-8 text-left">
                    <Link to="/catalogo" className="text-primary hover:underline inline-flex items-center gap-2 text-sm font-medium">
                        ← Volver al Catálogo
                    </Link>
                </div>

                <div className="mb-12 text-left">
                    {/* H1 Obligatorio por directriz SEO On-Page */}
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">{currentSubcategory.name}</h1>
                    <p className="text-slate-600 max-w-3xl">
                        Protegé y renová tus superficies con la mejor calidad.
                    </p>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="bg-white rounded-xl p-12 text-center border border-slate-200 shadow-sm">
                        <p className="text-slate-500">Próximamente estaremos cargando los productos para esta sección.</p>
                    </div>
                ) : (
                    /* Mantenemos tus grids de animación estables */
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProducts.map(product => {
                            return (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                                >
                                    <div className="relative h-60 bg-white p-2 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow text-left">
                                        <h3 className="font-bold text-xl text-slate-900 mb-2">{product.name}</h3>
                                        <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                                            {product.description}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-slate-100 flex gap-3">
                                            {/* Enlace jerárquico limpio hacia la futura página detallada del producto */}
                                            <Link
                                                to={`/catalogo/${categorySlug}/${subcategorySlug}/${product.slug}`}
                                                className="flex-1 bg-primary/5 hover:bg-primary/10 text-primary border border-primary/10 hover:border-primary/30 font-extrabold py-2.5 px-4 rounded-xl transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-md hover:scale-[1.01] text-center block text-sm tracking-wide"
                                            >
                                                Ver Ficha Técnica
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </div>
        </section>
    );
}