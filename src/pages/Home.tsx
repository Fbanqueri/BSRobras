import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, PaintBucket, Construction } from 'lucide-react';
import Hero from '../components/Hero';
import { categories } from '../data/products';

export default function Home() {
    // Asignamos iconos específicos a cada categoría
    const getCategoryIcon = (id: string) => {
        switch (id) {
            case 'pintura': return <PaintBucket size={32} className="text-primary" />;
            case 'impermeabilizacion': return <ShieldCheck size={32} className="text-primary" />;
            case 'preparacion-superficies': return <Construction size={32} className="text-primary" />;
            default: return <Construction size={32} className="text-primary" />;
        }
    };

    // Modificamos las descripciones para ajustarlas al stock real
    const getAdjustedDescription = (id: string, originalIntro: string) => {
        if (id === 'pintura') {
            return 'Nuestra línea de pinturas ofrece soluciones de alta calidad para renovar tus espacios. Contamos con látex premium para interior y exterior, garantizando el mejor poder cubritivo.';
        }
        return originalIntro;
    };

    // CORREGIDO: Rutas físicas y limpias (SSG) según auditoría SEO técnica
    const getCategoryLink = (id: string) => {
        if (id === 'pintura') {
            return '/catalogo/pintura/latex'; // Va directo a látex porque es tu única subcategoría
        }
        // Para impermeabilización y preparación, apuntamos a sus URLs físicas distribuidoras
        return `/catalogo/${id}`;
    };
    return (
        <>
            <Helmet>
                <title>Venta de Impermeabilizantes y Pinturas en Rosario | BSR Obras</title>
                <meta
                    name="description"
                    content="Soluciones definitivas en impermeabilizantes y pinturas en Rosario. Olvidate de las filtraciones. Calidad profesional y asesoramiento experto en el local."
                />
                <link rel="canonical" href="https://bsrobras.com.ar/" />
            </Helmet>

            {/* Reutilizamos tu Hero principal con los textos corporativos de entrada */}
            <Hero isMainHero={true} />

            {/* Sección Estratégica de Enlazado Interno (Pilar 1 SEO) */}
            <section className="py-20 bg-white text-left">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-14 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">
                            Pinturas, Membranas e Insumos para la Construcción
                        </h2>
                        <p className="text-slate-600 max-w-3xl text-lg leading-relaxed">
                            Somos una tienda especializada en la venta de impermeabilizantes de alta performance, pinturas de primeras marcas y soluciones para la preparación de superficies. Todo lo que necesitás para tu proyecto o local comercial.
                        </p>
                    </div>

                    {/* Grilla de Categorías Troncales */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat, index) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-50 border border-slate-200/60 p-8 rounded-2xl flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all group"
                            >
                                <div>
                                    <div className="mb-5 p-3 bg-white border border-slate-100 rounded-xl inline-block shadow-sm">
                                        {getCategoryIcon(cat.id)}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                        {cat.name}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {getAdjustedDescription(cat.id, cat.introduction)}
                                    </p>
                                </div>

                                {/* CORREGIDO: El Link ahora apunta dinámicamente a la ruta más eficiente según la categoría */}
                                <div className="pt-4 border-t border-slate-200/60">
                                    <Link
                                        to={getCategoryLink(cat.id)}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                                    >
                                        Ver Productos <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Bloque de Confianza y Atención Directa */}
            <section className="py-16 bg-slate-900 text-white text-center md:text-left">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <p className="text-xl md:text-2xl font-bold mb-2 tracking-tight text-white">
                            ¿Tenés que pintar o arreglar una filtración y no sabés por dónde empezar?
                        </p>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                            Mandanos un mensaje. Te asesoramos sin cargo para que te lleves el producto exacto que tu casa necesita, sin gastar de más.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/5493413233169"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-7 rounded-xl transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 whitespace-nowrap text-sm"
                    >
                        Consultar con un Asesor
                    </a>
                </div>
            </section>
        </>
    );
}