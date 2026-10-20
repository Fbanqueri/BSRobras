import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { products, subcategories, categories } from '../data/products';

export default function ProductDetailPage() {
    const { categorySlug, subcategorySlug, productSlug } = useParams<{
        categorySlug: string;
        subcategorySlug: string;
        productSlug: string;
    }>();

    const categoryName = useMemo(() => {
        const found = categories.find(c => c.id === categorySlug);
        return found ? found.name : categorySlug;
    }, [categorySlug]);

    const product = useMemo(() => {
        return products.find(p => p.slug === productSlug && p.subcategory === subcategorySlug);
    }, [productSlug, subcategorySlug]);

    const subcategory = useMemo(() => {
        return subcategories.find(s => s.id === subcategorySlug);
    }, [subcategorySlug]);

    const brandName = useMemo(() => {
        if (!product) return 'BSR Obras';
        return product.brand || 'BSR Obras';
    }, [product]);

    const itemPageSchema = useMemo(() => {
        if (!product) return null;
        const canonicalUrl = `https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}/${product.slug}`;
        return {
            "@context": "https://schema.org",
            "@type": "ItemPage",
            "name": `${product.name} | BSR Obras Rosario`,
            "description": product.description,
            "url": canonicalUrl,
            "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": `https://bsrobras.com.ar${product.image}`
            },
            "provider": {
                "@type": "LocalBusiness",
                "@id": "https://bsrobras.com.ar/#organization",
                "name": "BSR Obras"
            }
        };
    }, [product, categorySlug, subcategorySlug]);

    const breadcrumbSchema = useMemo(() => {
        if (!product) return null;
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bsrobras.com.ar/" },
                { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://bsrobras.com.ar/catalogo" },
                { "@type": "ListItem", "position": 3, "name": categoryName, "item": `https://bsrobras.com.ar/catalogo/${categorySlug}` },
                { "@type": "ListItem", "position": 4, "name": subcategory?.name || "Subcategoría", "item": `https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}` },
                { "@type": "ListItem", "position": 5, "name": product.name, "item": `https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}/${product.slug}` }
            ]
        };
    }, [product, subcategory, categorySlug, subcategorySlug, categoryName]);

    if (!product) {
        return <Navigate to="/catalogo" replace />;
    }

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5493413233169";
    const whatsappMessage = encodeURIComponent(`Hola BSR Obras! Me interesa el producto: ${product.name}. Me podrían brindar cotización y asesoramiento técnico?`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const pageTitle = `${product.name} en Rosario | Cotizar Precio | BSR Obras`;
    const prestacionText = product.specs?.prestacion ? ` (${product.specs.prestacion})` : '';
    const pageDescription = `${product.name}${prestacionText}. ${product.description} Retiro en nuestro local de Mendoza 7301 (Rosario). ¡Consultá precio y disponibilidad por WhatsApp!`;

    return (
        <section className="pt-32 pb-24 bg-slate-50 min-h-[90dvh] text-left">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={`https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}/${product.slug}`} />

                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={`https://bsrobras.com.ar${product.image}`} />
                <meta property="og:type" content="website" />
                <link rel="preload" as="image" href={product.image} fetchPriority="high" />

                {itemPageSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(itemPageSchema)}
                    </script>
                )}
                {breadcrumbSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(breadcrumbSchema)}
                    </script>
                )}
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb visual jerárquico */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400 mb-8 flex-wrap">
                    <Link to="/" className="hover:text-slate-700 transition-colors">Inicio</Link>
                    <ChevronRight size={14} className="text-slate-300 shrink-0" />
                    <Link to="/catalogo" className="hover:text-slate-700 transition-colors">Catálogo</Link>
                    <ChevronRight size={14} className="text-slate-300 shrink-0" />
                    <Link to={`/catalogo/${categorySlug}`} className="hover:text-slate-700 transition-colors">{categoryName}</Link>
                    <ChevronRight size={14} className="text-slate-300 shrink-0" />
                    <Link to={`/catalogo/${categorySlug}/${subcategorySlug}`} className="hover:text-slate-700 transition-colors">{subcategory?.name || 'Subcategoría'}</Link>
                    <ChevronRight size={14} className="text-slate-300 shrink-0" />
                    <span className="text-slate-700 font-medium truncate max-w-[220px] sm:max-w-none">{product.name}</span>
                </nav>

                {/* Bloque Principal del Producto (Ficha Técnica y Visual con animación CSS nativa) */}
                <div
                    className="animate-card bg-white rounded-2xl border border-slate-200/80 p-6 md:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12"
                >
                    {/* Columna Izquierda: Escaparate del producto (5 cols) — fondo blanco integrado y escala completa */}
                    <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 flex items-center justify-center min-h-[380px] md:min-h-[460px] overflow-hidden shadow-xs">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full max-h-[440px] object-contain scale-115 md:scale-120 hover:scale-125 transition-transform duration-300 drop-shadow-xs"
                            decoding="async"
                            loading="eager"
                            fetchPriority="high"
                            width="440"
                            height="440"
                        />
                    </div>

                    {/* Columna Derecha: Especificaciones comerciales y asesoramiento (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                        <div>
                            {/* Metadata de fabricante o línea */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-widest">
                                    {brandName} · Ficha de Producto
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 text-balance">
                                {product.name}
                            </h1>

                            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Garantías y soporte técnico */}
                            <div className="space-y-2.5 pb-8 mb-8 border-b border-slate-100 text-xs sm:text-sm text-slate-600 font-medium">
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                                    <span>Asesoramiento para el cálculo exacto de m²</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                                    <span>Retiro por nuestro local</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                                    <span>Material garantizado de primera calidad</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Directo a Asesoría por WhatsApp */}
                        <div>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-8 rounded-xl shadow-[0_10px_25px_-5px_rgba(4,120,87,0.40)] hover:shadow-[0_14px_30px_-5px_rgba(4,120,87,0.55)] transition-all duration-150 active:scale-[0.97] text-sm tracking-wide"
                            >
                                <MessageSquare size={17} />
                                <span>Consultar precio y disponibilidad</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Especificaciones Técnicas: Matriz Modular (Estudio de Materiales) */}
                <div className="mt-14">
                    <div className="mb-6 flex items-center gap-2.5">
                        <ShieldCheck size={20} className="text-primary" />
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                            Especificaciones y Rendimientos Técnicos
                        </h2>
                    </div>

                    <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(product.specs).map(([key, value]) => {
                            const isTechnicalData = key === 'rendimiento' || key === 'secado' || key === 'prestacion';
                            return (
                                <div
                                    key={key}
                                    className="bg-white rounded-xl border border-slate-200/80 p-5 hover:border-slate-300 transition-colors"
                                >
                                    <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                                        {key.replace('_', ' ')}
                                    </dt>
                                    <dd className={`text-sm font-semibold text-slate-900 block ${isTechnicalData ? 'font-mono text-slate-800' : ''
                                        }`}>
                                        {value}
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
}