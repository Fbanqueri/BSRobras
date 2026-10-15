import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { subcategories, products, categories } from '../data/products';

export default function SubcategoryPage() {
    const { categorySlug, subcategorySlug } = useParams<{ categorySlug: string; subcategorySlug: string }>();

    const categoryName = useMemo(() => {
        const found = categories.find(c => c.id === categorySlug);
        return found ? found.name : categorySlug;
    }, [categorySlug]);

    const currentSubcategory = useMemo(() => {
        return subcategories.find(sub => sub.id === subcategorySlug && sub.categoryId === categorySlug);
    }, [categorySlug, subcategorySlug]);

    const filteredProducts = useMemo(() => {
        if (!currentSubcategory) return [];
        return products.filter(prod => prod.subcategory === currentSubcategory.id);
    }, [currentSubcategory]);

    const breadcrumbSchema = useMemo(() => {
        if (!currentSubcategory) return null;
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bsrobras.com.ar/" },
                { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://bsrobras.com.ar/catalogo" },
                { "@type": "ListItem", "position": 3, "name": categoryName, "item": `https://bsrobras.com.ar/catalogo/${categorySlug}` },
                { "@type": "ListItem", "position": 4, "name": currentSubcategory.name, "item": `https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}` }
            ]
        };
    }, [currentSubcategory, categorySlug, subcategorySlug, categoryName]);

    const itemListSchema = useMemo(() => {
        if (!currentSubcategory || filteredProducts.length === 0) return null;
        return {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `${currentSubcategory.name} en Rosario - BSR Obras`,
            "numberOfItems": filteredProducts.length,
            "itemListElement": filteredProducts.map((prod, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": prod.name,
                "url": `https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}/${prod.slug}`
            }))
        };
    }, [currentSubcategory, filteredProducts, categorySlug, subcategorySlug]);

    const subcategorySEO = useMemo(() => {
        if (!currentSubcategory) {
            return {
                title: "Catálogo Técnico | BSR Obras",
                description: "Materiales técnicos de construcción en Rosario."
            };
        }

        // Marcas reconocidas presentes en los productos de esta subcategoría
        const brands = Array.from(new Set(
            filteredProducts.map(p => p.brand).filter(Boolean)
        ));

        const brandsString = brands.length > 0 ? brands.join(', ') : 'Marcas Líderes';

        let description = '';
        switch (currentSubcategory.id) {
            case 'membranas-liquidas':
                description = `Venta de membranas líquidas en Rosario (${brandsString}). Poliuretánicas, acrílicas e impercaucho en baldes de 5, 12 y 20 kg. Retiro en nuestro local de Mendoza 7301 (Rosario). ¡Consultá precio y disponibilidad por WhatsApp!`;
                break;
            case 'membranas-asfalticas':
                description = `Membranas asfálticas en rollo ${brandsString} en Rosario (aluminio 19/27 micrones y geotextil transitable 40-45 kg). Retiro en nuestro local de Mendoza 7301 (Rosario). ¡Consultá precio y disponibilidad por WhatsApp!`;
                break;
            case 'pintura-asfaltica':
                description = `Pintura y emulsión asfáltica en frío ${brandsString} en Rosario. Baldes de 1L a 200L para imprimación hidrófuga y techados. Retiro en nuestro local de Mendoza 7301 (Rosario). ¡Consultá precio y disponibilidad por WhatsApp!`;
                break;
            case 'latex':
                description = `Látex profesional interior y exterior ${brandsString} en Rosario. Baldes de 10L y 20L con alto poder cubritivo y antihongos. Retiro en nuestro local de Mendoza 7301 (Rosario). ¡Consultá precio y disponibilidad por WhatsApp!`;
                break;
            case 'selladores-juntas':
                description = `Selladores de poliuretano y acrílicos ${brandsString} en Rosario. Cartuchos y potes para juntas de dilatación y fisuras. Retiro en nuestro local de Mendoza 7301 (Rosario). ¡Consultá precio y disponibilidad por WhatsApp!`;
                break;
            case 'masillas-fijadores':
                description = `Masillas para yeso, enlucidos y fijadores ${brandsString} en Rosario. Baldes de 32 kg y bolsas profesionales. Retiro en nuestro local de Mendoza 7301 (Rosario). ¡Consultá precio y disponibilidad por WhatsApp!`;
                break;
            case 'reparacion-grietas':
                description = `Mantas y vendas de fibra sintética en Rosario para refuerzo estructural de techos y rajaduras. Retiro en nuestro local de Mendoza 7301 (Rosario). ¡Consultá precio y disponibilidad por WhatsApp!`;
                break;
            default:
                description = `Distribución y venta de ${currentSubcategory.name.toLowerCase()} en Rosario (${brandsString}). Retiro en nuestro local de Mendoza 7301 (Rosario). ¡Consultá precio y disponibilidad por WhatsApp!`;
        }

        return {
            title: `${currentSubcategory.name} en Rosario | ${brandsString} | Cotizar Precio`,
            description
        };
    }, [currentSubcategory, filteredProducts]);

    if (!currentSubcategory) {
        return <Navigate to="/catalogo" replace />;
    }

    return (
        <section className="pt-32 pb-24 bg-slate-50 min-h-[90dvh] text-left">
            <Helmet>
                <title>{subcategorySEO.title}</title>
                <meta name="description" content={subcategorySEO.description} />
                <link rel="canonical" href={`https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}`} />

                <meta property="og:title" content={subcategorySEO.title} />
                <meta property="og:description" content={subcategorySEO.description} />
                <meta property="og:type" content="website" />
                {filteredProducts.length > 0 && (
                    <link rel="preload" as="image" href={filteredProducts[0].image} fetchPriority="high" />
                )}

                {breadcrumbSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(breadcrumbSchema)}
                    </script>
                )}
                {itemListSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(itemListSchema)}
                    </script>
                )}
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb visual */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400 mb-8 flex-wrap">
                    <Link to="/" className="hover:text-slate-700 transition-colors">Inicio</Link>
                    <ChevronRight size={14} className="text-slate-300 shrink-0" />
                    <Link to="/catalogo" className="hover:text-slate-700 transition-colors">Catálogo</Link>
                    <ChevronRight size={14} className="text-slate-300 shrink-0" />
                    <Link to={`/catalogo/${categorySlug}`} className="hover:text-slate-700 transition-colors">{categoryName}</Link>
                    <ChevronRight size={14} className="text-slate-300 shrink-0" />
                    <span className="text-slate-700 font-medium">{currentSubcategory.name}</span>
                </nav>

                {/* Encabezado de la Subcategoría */}
                <div className="mb-12 border-b border-slate-200/80 pb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
                        {currentSubcategory.name}
                    </h1>
                    <p className="text-slate-600 text-base md:text-lg max-w-[65ch]">
                        Especificaciones técnicas, rendimientos garantizados y asesoramiento en obra para cada aplicación.
                    </p>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80">
                        <p className="text-slate-500 text-sm">Próximamente se incorporarán nuevos productos en esta sección.</p>
                    </div>
                ) : (
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProducts.map((product, index) => {
                            const delayClass = `delay-${Math.min(index + 1, 6)}`;
                            return (
                                <div
                                    key={product.id}
                                    className={`animate-card ${delayClass} h-full`}
                                >
                                    <div className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(4,120,87,0.12)] transition-all duration-300">
                                        
                                        {/* Marco fotográfico — fondo blanco integrado y escala completa sin doble recuadro */}
                                        <div className="relative h-64 sm:h-72 bg-white p-2 flex items-center justify-center overflow-hidden border-b border-slate-100">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-contain scale-110 sm:scale-115 group-hover:scale-125 transition-transform duration-300 drop-shadow-xs"
                                                decoding="async"
                                                loading={index === 0 ? "eager" : "lazy"}
                                                fetchPriority={index === 0 ? "high" : "low"}
                                                width="320"
                                                height="288"
                                            />
                                        </div>

                                        {/* Información y metadata técnica */}
                                        <div className="p-6 flex flex-col flex-grow text-left justify-between">
                                            <div>
                                                <h2 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors mb-2 tracking-tight">
                                                    {product.name}
                                                </h2>
                                                
                                                <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                                                    {product.description}
                                                </p>

                                                {/* Ficha técnica compacta */}
                                                {product.specs?.rendimiento && (
                                                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4">
                                                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                                                            Rendimiento estimado
                                                        </span>
                                                        <span className="text-xs font-mono font-medium text-slate-700">
                                                            {product.specs.rendimiento}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Botón de acción táctil */}
                                            <div className="pt-4 border-t border-slate-100 mt-2">
                                                <Link
                                                    to={`/catalogo/${categorySlug}/${subcategorySlug}/${product.slug}`}
                                                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-primary text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-150 active:scale-[0.97] text-xs sm:text-sm tracking-wide"
                                                >
                                                    <span>Ver Ficha Técnica</span>
                                                    <ArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}