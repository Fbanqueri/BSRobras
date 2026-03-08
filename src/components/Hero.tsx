import { motion } from 'motion/react';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-[85vh] min-h-[600px] flex items-center pt-16">
            <div className="absolute inset-0 overflow-hidden">
                {/* Capa de color verde oscuro sutil sobre la imagen */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
                {/* Degradado para que el texto se lea siempre bien */}
                <div className="absolute inset-0 bg-black/75 z-20"></div>
                <img
                    alt="Construcción profesional BSR Obras"
                    className="w-full h-full object-cover"
                    src="/assets/Hero.webp"
                />
            </div>

            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                        BSR Obras: Donde cada material es un <span className="text-white underline decoration-primary decoration-4 underline-offset-4">nuevo comienzo</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-100 mb-8 font-medium leading-relaxed opacity-90">
                        Soluciones integrales para la construcción. Materiales de alta calidad que garantizan resultados de excelencia en cada proyecto.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#catalogo" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg text-base font-bold hover:scale-[1.02] transition-transform shadow-xl">
                            Ver Catálogo
                        </a>
                        <a href="#contacto" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-white/20 transition-all">
                            Solicitar Presupuesto
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;