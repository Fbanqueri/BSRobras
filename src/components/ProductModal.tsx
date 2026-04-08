import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import type { Product } from '../data/products';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
    // Hemos eliminado "offers", "aggregateRating" y "reviews"
    // y actualizamos la URL a la nueva ruta limpia para mejorar el SEO
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": [
            `${import.meta.env.VITE_SITE_URL || "https://bsrobras.com.ar"}${product.image}`
        ],
        "description": product.description,
        "sku": product.id,
        "url": `${import.meta.env.VITE_SITE_URL || "https://bsrobras.com.ar"}/producto/${product.slug}`,
        "brand": {
            "@type": "Brand",
            "name": import.meta.env.VITE_SITE_NAME || "BSR Obras"
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <Helmet>
                <title>{product.name} | Ficha Técnica | BSR Obras</title>
                <meta name="description" content={product.description} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>
            {/* Fondo desenfocado */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Contenido del Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-primary/20"
            >
                {/* Cabecera del Modal */}
                <div className="bg-primary px-6 py-4 flex justify-between items-center">
                    <h2 className="text-white font-bold text-lg uppercase tracking-wider">
                        Ficha Técnica: {product.name}
                    </h2>
                    <button onClick={onClose} className="text-white hover:rotate-90 transition-transform">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
                    {/* Sección de Descripción */}
                    <div className="mb-8 pb-6 border-b border-slate-100">
                        <h4 className="text-xs font-bold text-primary uppercase mb-2 tracking-widest">
                            Descripción
                        </h4>
                        <p className="text-slate-700 leading-relaxed text-lg">
                            {product.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {/* Columna 1: Rendimiento y Presentación */}
                        <div className="space-y-6">
                            <div className="border-b border-slate-100 pb-2 mb-4">
                                <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Rendimiento y Presentación</h4>
                            </div>

                            {product.specs.rendimiento && (
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Cobertura Estimada</span>
                                    <p className="text-slate-800 font-medium">{product.specs.rendimiento}</p>
                                </div>
                            )}
                            {product.specs.prestacion && (
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Presentación</span>
                                    <p className="text-slate-800 font-medium">{product.specs.prestacion}</p>
                                </div>
                            )}
                            {product.specs.color && (
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Tonalidad Disponible</span>
                                    <p className="text-slate-800 font-medium">{product.specs.color}</p>
                                </div>
                            )}
                        </div>

                        {/* Columna 2: Aplicación y Tiempos */}
                        <div className="space-y-6">
                            <div className="border-b border-slate-100 pb-2 mb-4">
                                <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Aplicación y Tiempos</h4>
                            </div>

                            {product.specs.uso && (
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Uso Recomendado</span>
                                    <p className="text-slate-800 font-medium">{product.specs.uso}</p>
                                </div>
                            )}
                            {product.specs.aplicacion && (
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Método de Aplicación</span>
                                    <p className="text-slate-800 font-medium">{product.specs.aplicacion}</p>
                                </div>
                            )}
                            {product.specs.secado && (
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Tiempo de Secado</span>
                                    <p className="text-slate-800 font-medium">{product.specs.secado}</p>
                                </div>
                            )}
                            {product.specs.acabado && (
                                <div>
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Acabado Final</span>
                                    <p className="text-slate-800 font-medium">{product.specs.acabado}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-slate-100 flex justify-center">
                        <p className="text-sm text-slate-500 italic text-center">
                            * Los valores son aproximados. Como resultado, pueden variar según la superficie y condiciones climáticas.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductModal;