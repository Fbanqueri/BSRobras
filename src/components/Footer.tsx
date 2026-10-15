import { Instagram, Facebook, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const quickLinks = [
        { name: 'Impermeabilización', path: '/catalogo/impermeabilizacion' },
        { name: 'Pinturas / Látex', path: '/catalogo/pintura/latex' },
        { name: 'Preparación de Superficies', path: '/catalogo/preparacion-superficies' },
        { name: 'Ver todo el catálogo', path: '/catalogo' },
    ];

    return (
        <footer id="contacto" className="bg-slate-950 text-slate-400">

            {/* Cuerpo del footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Columna 1: Branding */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <img src="/assets/logo.png" alt="BSR Obras" className="w-9 h-9 object-contain" />
                            <span className="text-lg font-bold tracking-tight text-white">BSR Obras</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-2 text-slate-400 max-w-[36ch]">
                            Especialistas en impermeabilizantes, membranas y pinturas para tu casa u obra. Rosario, desde 2017.
                        </p>
                        <p className="text-xs text-slate-500 mb-6">
                            Lun–Vie 9:00 a 12:30 y 16:00 a 19:00 · Sáb 9:00 a 12:30
                        </p>
                        <div className="flex gap-3">
                            <a
                                href={import.meta.env.VITE_INSTAGRAM_URL || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram de BSR Obras"
                                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-150 active:scale-[0.97]"
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href={import.meta.env.VITE_FACEBOOK_URL || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook de BSR Obras"
                                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-150 active:scale-[0.97]"
                            >
                                <Facebook size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Contacto */}
                    <div>
                        <h4 className="text-white font-bold mb-5 text-sm tracking-tight">Contacto</h4>
                        <ul className="space-y-3.5 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary shrink-0 mt-0.5" size={16} />
                                <span>Mendoza 7301, Rosario</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={16} />
                                <a href="tel:+543414577305" className="hover:text-white transition-colors">
                                    0341 457-7305
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={16} />
                                <a
                                    href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'contacto@bsrobras.com.ar'}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {import.meta.env.VITE_CONTACT_EMAIL || 'contacto@bsrobras.com.ar'}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Links rápidos al catálogo */}
                    <div>
                        <h4 className="text-white font-bold mb-5 text-sm tracking-tight">Catálogo</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        <ArrowRight size={13} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Línea de copyright */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} BSR Obras. Todos los derechos reservados.</p>
                    <p>Mendoza 7301, Rosario, Santa Fe, Argentina</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;