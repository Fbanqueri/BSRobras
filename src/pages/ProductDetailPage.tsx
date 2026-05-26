import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { FileText, ArrowLeft, MessageSquare } from 'lucide-react';
import { products, subcategories } from '../data/products';

export default function ProductDetailPage() {
    const { categorySlug, subcategorySlug, productSlug } = useParams<{
        categorySlug: string;
        subcategorySlug: string;
        productSlug: string;
    }>();

    // Buscamos el producto exacto basándonos en el slug de la URL
    const product = useMemo(() => {
        return products.find(p => p.slug === productSlug && p.subcategory === subcategorySlug);
    }, [productSlug, subcategorySlug]);

    // Buscamos la subcategoría para armar los Breadcrumbs visuales y semánticos
    const subcategory = useMemo(() => {
        return subcategories.find(s => s.id === subcategorySlug);
    }, [subcategorySlug]);

    // Extraemos dinámicamente la marca para el Schema
    const brandName = useMemo(() => {
        if (!product) return 'BSR Obras';
        if (product.name.includes("Das Beste")) return "Das Beste";
        if (product.name.includes("TACSA")) return "TACSA";
        if (product.name.includes("Terra Color")) return "Terra Color";
        if (product.name.includes("Kover")) return "KoverTech";
        return "BSR Obras";
    }, [product]);

    // Generamos el Schema de Producto (JSON-LD) optimizado usando priceSpecification para cotizaciones
    const productSchema = useMemo(() => {
        if (!product) return null;
        return {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": `https://bsrobras.com.ar${product.image}`,
            "description": product.description,
            "sku": product.id,
            "brand": {
                "@type": "Brand",
                "name": brandName
            },
            "offers": {
                "@type": "Offer",
                "url": `https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}/${product.slug}`,
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "ARS",
                    "valueAddedTaxIncluded": "true",
                    "description": "Precio a consultar / Cotización personalizada por volumen"
                }
            }
        };
    }, [product, categorySlug, subcategorySlug, brandName]);

    // Si el producto no existe, redirigimos por seguridad al catálogo
    if (!product) {
        return <Navigate to="/catalogo" replace />;
    }

    // Armamos el enlace de consulta para WhatsApp con un texto personalizado predefinido
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5493413233169";
    const whatsappMessage = encodeURIComponent(`Hola BSR Obras! Me interesa el producto: ${product.name}. Me podrían dar más asesoramiento?`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-slate-50 text-left">
            <Helmet>
                <title>{`${product.name} | BSR Obras Rosario`}</title>
                <meta name="description" content={product.description} />
                <link rel="canonical" href={`https://bsrobras.com.ar/catalogo/${categorySlug}/${subcategorySlug}/${product.slug}`} />

                {/* Metadatos Open Graph para redes sociales */}
                <meta property="og:title" content={`${product.name} | BSR Obras`} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={`https://bsrobras.com.ar${product.image}`} />
                <meta property="og:type" content="product" />

                {/* Inyección del Schema Estructurado */}
                {productSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(productSchema)}
                    </script>
                )}
            </Helmet>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Enlace de Retorno e Historial Semántico */}
                <div className="mb-6">
                    <Link
                        to={`/catalogo/${categorySlug}/${subcategorySlug}`}
                        className="text-primary hover:underline inline-flex items-center gap-2 text-sm font-semibold"
                    >
                        <ArrowLeft size={16} /> Volver a {subcategory?.name || 'Categoría'}
                    </Link>
                </div>

                {/* Bloque Principal: Dos Columnas Estéticas */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
                >
                    {/* Columna Izquierda: Imagen del Producto Maximizada */}
                    <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-4 shadow-sm">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto max-h-[450px] object-contain rounded-lg hover:scale-102 transition-transform duration-300"
                        />
                    </div>

                    {/* Columna Derecha: Información Comercial Atractiva */}
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            {/* H1 Obligatorio con el nombre del producto en su URL única */}
                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                                {product.name}
                            </h1>

                            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Acción de Conversión Inmediata */}
                        <div className="pt-6 border-t border-slate-100">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transition-all text-base tracking-wide"
                            >
                                <MessageSquare size={20} fill="currentColor" /> Consultar Asesoramiento por WhatsApp
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Sección Inferior: Especificaciones Técnicas Estilo E-Commerce Profesional */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold text-slate-900 mb-4 inline-flex items-center gap-2">
                        <FileText size={20} className="text-primary" /> Prestaciones y Especificaciones
                    </h2>

                    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
                        <dl className="divide-y divide-slate-100">
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-slate-50/50 transition-colors">
                                    <button className="text-sm font-bold text-slate-500 uppercase tracking-wider text-left capitalize bg-transparent border-none p-0 cursor-default">
                                        {key.replace('_', ' ')}
                                    </button>
                                    <dd className="mt-1 text-sm font-semibold text-slate-900 sm:mt-0 sm:col-span-2">
                                        {value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

            </div>
        </section>
    );
}