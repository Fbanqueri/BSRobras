import { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { categories, subcategories, products, type Product } from '../data/products';
import ProductModal from './ProductModal';

const Catalog = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // --- Lógica de Deep Linking (URL) ---
    useEffect(() => {
        const handlePopState = () => {
            const params = new URLSearchParams(window.location.search);
            const productSlug = params.get('producto');
            if (productSlug) {
                const product = products.find(p => p.slug === productSlug);
                if (product) setSelectedProduct(product);
            } else {
                setSelectedProduct(null);
            }
        };

        window.addEventListener('popstate', handlePopState);
        handlePopState();
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const openProductModal = (product: Product) => {
        setSelectedProduct(product);
        const newUrl = `${window.location.pathname}?producto=${product.slug}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const closeProductModal = () => {
        setSelectedProduct(null);
        const newUrl = window.location.pathname;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    // --- Filtrado ---
    const filteredSubcategories = useMemo(() => {
        if (!selectedCategory) return subcategories;
        return subcategories.filter(s => s.categoryId === selectedCategory);
    }, [selectedCategory]);

    const filteredProducts = useMemo(() => {
        if (!selectedSubcategory) return [];
        return products.filter(p => p.subcategory === selectedSubcategory);
    }, [selectedSubcategory]);

    return (
        <section id="catalogo" className="py-20 bg-[#f6f8f6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Nuestro Catálogo</h2>
                        <p className="text-slate-600">Selección premium para profesionales de la construcción.</p>
                    </div>

                    {/* Nivel 1: Pastillas de Categorías */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => { setSelectedCategory(null); setSelectedSubcategory(null); }}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${!selectedCategory ? 'bg-primary text-white shadow-md' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                        >
                            Todos
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => { setSelectedCategory(cat.id); setSelectedSubcategory(null); }}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === cat.id ? 'bg-primary text-white shadow-md' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {!selectedSubcategory ? (
                        /* Nivel 2: Grid de Subcategorías */
                        <motion.div
                            key="subcategories"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredSubcategories.map(sub => (
                                <button
                                    key={sub.id}
                                    onClick={() => setSelectedSubcategory(sub.id)}
                                    className="group relative h-64 rounded-xl overflow-hidden border border-primary/10 hover:border-primary transition-all shadow-sm hover:shadow-xl"
                                >
                                    <img src={sub.image} alt={sub.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-left">
                                        <h4 className="text-white font-bold text-2xl">{sub.name}</h4>
                                        <p className="text-white/70 text-sm mt-1">Ver productos</p>
                                    </div>
                                </button>
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
                                    onClick={() => setSelectedSubcategory(null)}
                                    className="text-primary font-bold flex items-center gap-1 hover:underline"
                                >
                                    <ArrowLeft size={16} /> Volver al catálogo
                                </button>
                                <span className="font-bold text-slate-900">
                                    {subcategories.find(s => s.id === selectedSubcategory)?.name}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProducts.map(product => (
                                    <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                        <div className="h-64 overflow-hidden relative">
                                            <img alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.image} />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                            <p className="text-slate-600 text-sm mb-6 line-clamp-2">{product.description}</p>
                                            <button
                                                onClick={() => openProductModal(product)}
                                                className="mt-auto w-full flex items-center justify-center gap-2 py-3 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-lg font-bold transition-all border border-primary/20"
                                            >
                                                <FileText size={16} /> Ficha técnica
                                            </button>
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
                    <ProductModal product={selectedProduct} onClose={closeProductModal} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Catalog;