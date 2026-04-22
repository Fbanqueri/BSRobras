import { useState, useEffect, useMemo, useRef } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { categories, subcategories, products, type Product } from '../data/products';
import ProductModal from './ProductModal';

const Catalog = () => {
    // 1. Hooks de React Router
    const { subcategoria, slug } = useParams<{ subcategoria?: string, slug?: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const catalogRef = useRef<HTMLElement>(null);

    // 2. MAGIA SEO: Calculamos la subcategoría activa. 
    // Si estamos en /catalogo/:subcategoria, usa esa. 
    // Si entramos directo a /producto/:slug, busca a qué categoría pertenece el producto.
    const activeSubcategory = subcategoria || (slug ? products.find(p => p.slug === slug)?.subcategory : null);

    // 3. Estado del producto para abrir/cerrar el modal basado en la URL
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        slug ? products.find(p => p.slug === slug) || null : null
    );

    // Efecto para abrir o cerrar el modal si el usuario usa las flechas de "Atrás/Adelante" del navegador
    useEffect(() => {
        if (slug) {
            const product = products.find(p => p.slug === slug);
            if (product) setSelectedProduct(product);
        } else {
            setSelectedProduct(null);
        }
    }, [slug]);

    // --- Filtrado ---
    const filteredSubcategories = useMemo(() => {
        if (!selectedCategory) return subcategories;
        return subcategories.filter(s => s.categoryId === selectedCategory);
    }, [selectedCategory]);

    const filteredProducts = useMemo(() => {
        if (!activeSubcategory) return [];
        return products.filter(p => p.subcategory === activeSubcategory);
    }, [activeSubcategory]);

    // Scroll al inicio del catálogo cuando cambia la subcategoría (pero no cuando abrimos un producto)
    useEffect(() => {
        if (activeSubcategory && catalogRef.current && !slug) {
            setTimeout(() => {
                catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [activeSubcategory, slug]);

    // 4. Esquema de Migas de Pan (Breadcrumbs)
    const breadcrumbSchema = useMemo(() => {
        const items = [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bsrobras.com.ar/" },
            { "@type": "ListItem", "position": 2, "name": "Catálogo", "item": "https://bsrobras.com.ar/catalogo" }
        ];

        if (activeSubcategory) {
            const subName = subcategories.find(s => s.id === activeSubcategory)?.name;
            items.push({
                "@type": "ListItem",
                "position": 3,
                "name": subName || "Categoría",
                "item": `https://bsrobras.com.ar/catalogo/${activeSubcategory}`
            });
        }

        if (selectedProduct) {
            items.push({
                "@type": "ListItem",
                "position": activeSubcategory ? 4 : 3,
                "name": selectedProduct.name,
                "item": `https://bsrobras.com.ar/producto/${selectedProduct.slug}`
            });
        }

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items
        };
    }, [activeSubcategory, selectedProduct]);

    return (
        <section id="catalogo" ref={catalogRef} className="py-20 bg-[#f6f8f6]">
            <Helmet>
                <title>
                    {isHome
                        ? "BSR Obras | Impermeabilizantes y Pinturas en Rosario"
                        : selectedProduct
                            ? `${selectedProduct.name} | BSR Obras`
                            : activeSubcategory
                                ? `${subcategories.find(s => s.id === activeSubcategory)?.name} | BSR Obras`
                                : "Catálogo de Impermeabilizantes y Pinturas | BSR Obras"}
                </title>
                <meta
                    name="description"
                    content={isHome
                        ? "Venta de impermeabilizantes y pinturas en Rosario. Calidad y asesoramiento para tu obra."
                        : selectedProduct
                            ? selectedProduct.description
                            : activeSubcategory
                                ? `Explora nuestra selección de ${subcategories.find(s => s.id === activeSubcategory)?.name}. Materiales de construcción de alta calidad en Rosario.`
                                : "Catálogo completo de impermeabilizantes, pinturas y preparación de superficies en BSR Obras, Rosario."}
                />

                {/* Meta etiquetas Open Graph para Social Media */}
                <meta property="og:title" content={isHome ? "BSR Obras | Impermeabilizantes y Pinturas en Rosario" : selectedProduct ? `${selectedProduct.name} | BSR Obras` : (activeSubcategory ? `${subcategories.find(s => s.id === activeSubcategory)?.name} | BSR Obras` : "Catálogo BSR Obras")} />
                <meta property="og:description" content={isHome ? "Venta de impermeabilizantes y pinturas en Rosario. Calidad y asesoramiento para tu obra." : selectedProduct ? selectedProduct.description : (activeSubcategory ? `Explora nuestra selección de ${subcategories.find(s => s.id === activeSubcategory)?.name}.` : "Catálogo completo de impermeabilizantes, pinturas y preparación de superficies en BSR Obras.")} />
                <meta property="og:image" content={selectedProduct ? `https://bsrobras.com.ar${selectedProduct.image}` : "https://bsrobras.com.ar/assets/logo.png"} />
                <meta property="og:type" content={selectedProduct ? "product" : "website"} />

                {/* Etiqueta Canonical */}
                <link rel="canonical" href={isHome ? "https://bsrobras.com.ar/" : selectedProduct ? `https://bsrobras.com.ar/producto/${selectedProduct.slug}` : (activeSubcategory ? `https://bsrobras.com.ar/catalogo/${activeSubcategory}` : "https://bsrobras.com.ar/catalogo")} />

                {/* Esquema de Breadcrumbs */}
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

                {/* Esquema de Producto (Informativo) */}
                {selectedProduct && (
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": selectedProduct.name,
                            "description": selectedProduct.description,
                            "image": `https://bsrobras.com.ar${selectedProduct.image}`,
                            "sku": selectedProduct.id,
                            "mpn": selectedProduct.id,
                            "brand": {
                                "@type": "Brand",
                                "name": "BSR Obras"
                            }
                        })}
                    </script>
                )}
            </Helmet>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        {selectedProduct || activeSubcategory ? (
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">
                                {selectedProduct 
                                    ? selectedProduct.name 
                                    : subcategories.find(s => s.id === activeSubcategory)?.name}
                            </h1>
                        ) : (
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Nuestro Catálogo</h2>
                        )}
                        <p className="text-slate-600">Selección premium para profesionales de la construcción.</p>
                    </div>

                    {/* Nivel 1: Pastillas de Categorías */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => { setSelectedCategory(null); navigate('/catalogo'); }}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${!selectedCategory && !activeSubcategory ? 'bg-primary text-white shadow-md' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                        >
                            Todos
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => { setSelectedCategory(cat.id); navigate('/catalogo'); }}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === cat.id && !activeSubcategory ? 'bg-primary text-white shadow-md' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {!activeSubcategory ? (
                        /* Nivel 2: Grid de Subcategorías */
                        <motion.div
                            key="subcategories"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredSubcategories.map(sub => (
                                <Link
                                    key={sub.id}
                                    to={`/catalogo/${sub.id}`}
                                    className="group relative h-64 rounded-xl overflow-hidden border border-primary/10 hover:border-primary transition-all shadow-sm hover:shadow-xl block"
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
                            ))}
                        </motion.div>
                    ) : (
                        /* Nivel 3: Grid de Productos */
                        <motion.div
                            key="products"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => navigate('/catalogo')}
                                    className="text-primary font-bold flex items-center gap-1 hover:underline"
                                >
                                    <ArrowLeft size={16} /> Volver al catálogo
                                </button>
                                <span className="font-bold text-slate-900">
                                    {subcategories.find(s => s.id === activeSubcategory)?.name}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProducts.map(product => (
                                    <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                        <div className="h-64 overflow-hidden relative">
                                            <img
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                src={product.image}
                                                loading="lazy"
                                                decoding="async"
                                                width="400"
                                                height="300"
                                            />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                            <p className="text-slate-600 text-sm mb-6 line-clamp-2">{product.description}</p>

                                            {/* Link limpio para productos */}
                                            <Link
                                                to={`/producto/${product.slug}`}
                                                className="mt-auto w-full flex items-center justify-center gap-2 py-3 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-lg font-bold transition-all border border-primary/20"
                                            >
                                                <FileText size={16} /> Ficha técnica
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => {
                            setSelectedProduct(null);
                            // Al cerrar el modal, regresamos limpiamente a la subcategoría
                            navigate(`/catalogo/${selectedProduct.subcategory}`);
                        }}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Catalog;