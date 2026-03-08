import { X } from 'lucide-react';
import { motion } from 'motion/react';
import type { Product } from '../data/products';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
                    <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                        Ficha Técnica: {product.name}
                    </h3>
                    <button onClick={onClose} className="text-white hover:rotate-90 transition-transform">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Columna Izquierda */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xs font-bold text-primary uppercase mb-1 tracking-widest">Rendimiento</h4>
                                <p className="text-slate-800 font-medium">{product.specs.rendimiento}</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-primary uppercase mb-1 tracking-widest">Prestación</h4>
                                <p className="text-slate-800 font-medium">{product.specs.prestacion}</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-primary uppercase mb-1 tracking-widest">Uso</h4>
                                <p className="text-slate-800 font-medium">{product.specs.uso}</p>
                            </div>
                        </div>

                        {/* Columna Derecha */}
                        <div className="space-y-6">
                            {product.specs.acabado && (
                                <div>
                                    <h4 className="text-xs font-bold text-primary uppercase mb-1 tracking-widest">Acabado</h4>
                                    <p className="text-slate-800 font-medium">{product.specs.acabado}</p>
                                </div>
                            )}
                            {product.specs.color && (
                                <div>
                                    <h4 className="text-xs font-bold text-primary uppercase mb-1 tracking-widest">Color</h4>
                                    <p className="text-slate-800 font-medium">{product.specs.color}</p>
                                </div>
                            )}
                            <div>
                                <h4 className="text-xs font-bold text-primary uppercase mb-1 tracking-widest">Aplicación</h4>
                                <p className="text-slate-800 font-medium">{product.specs.aplicacion}</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-primary uppercase mb-1 tracking-widest">Secado</h4>
                                <p className="text-slate-800 font-medium">{product.specs.secado}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-slate-100 flex justify-center">
                        <p className="text-sm text-slate-500 italic text-center">
                            * Los valores son aproximados y pueden variar según la superficie y condiciones climáticas.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductModal;