import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contacto" className="bg-slate-950 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Columna 1: Branding */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/assets/logo.png" alt="BSR Obras" className="w-10 h-10 object-contain" />
                            <span className="text-xl font-bold tracking-tight text-white">BSR Obras</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Tu pinturería de confianza en Rosario. Dedicados a proveer materiales de construcción, impermeabilizantes y soluciones para construcción en seco de la más alta gama para tus proyectos.
                        </p>
                        <div className="flex gap-4">
                            <a href={import.meta.env.VITE_INSTAGRAM_URL || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href={import.meta.env.VITE_FACEBOOK_URL || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Contacto */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contacto</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary shrink-0" size={18} />
                                <span>Mendoza 7301, Rosario</span>
                            </li>
                            <li className="flex items-center gap-3 group/phone">
                                <Phone className="text-primary shrink-0" size={18} />
                                0341 457-7305
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || "contacto@bsrobras.com"}`} className="hover:text-primary transition-colors">
                                    {import.meta.env.VITE_CONTACT_EMAIL || "contacto@bsrobras.com"}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3 y 4: Mapa */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Ubicación</h4>
                        <div className="w-full h-48 rounded-lg overflow-hidden border border-white/5 bg-slate-900">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.27466992173984!2d-60.719493154243395!3d-32.94058666931289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6532a592e70ab%3A0xf7ee1d95a0043f57!2sBSR%20obras%20-%20Impermeabilizantes%20-%20Pinturas%20-%20Aditivos%20para%20la%20construcci%C3%B3n!5e0!3m2!1ses-419!2sar!4v1771733908102!5m2!1ses-419!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale opacity-50 invert contrast-90"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs">
                    <p>© 2017 {import.meta.env.VITE_SITE_NAME || "BSR Obras"}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;