import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Herramientas de React Router
    const navigate = useNavigate();
    const location = useLocation();

    // Manejo de la sombra del Navbar al hacer scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Magia para el scroll automático si la URL tiene un hash (ej. /#contacto)
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.querySelector(location.hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location]);

    // Nuevas rutas limpias
    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Catálogo', path: '/catalogo' },
        { name: 'Contacto', path: '/#contacto' }, // Este mantiene el # porque es una sección en el footer
    ];

    // Función unificada para manejar clics en desktop y mobile
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // Si es la ruta de contacto, navegamos al hash
        if (path.includes('#')) {
            navigate(path);
        } else {
            // Navegamos a la ruta limpia (/ o /catalogo)
            navigate(path);

            // Hacemos el scroll suave a la sección correspondiente
            setTimeout(() => {
                if (path === '/catalogo') {
                    document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'smooth' });
                } else if (path === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 150); // Pequeño delay para asegurar que React ya actualizó la ruta
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo ahora usa Link para ir al inicio limpiamente */}
                    <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
                        <img src="/assets/logo.png" alt="BSR Obras" className="w-10 h-10 object-contain" />
                        <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>{import.meta.env.VITE_SITE_NAME || "BSR Obras"}</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleNavClick(e, link.path)}
                                className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className={isScrolled ? 'text-primary' : 'text-white'} /> : <Menu className={isScrolled ? 'text-primary' : 'text-white'} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-primary/10 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="block text-lg font-semibold text-slate-700"
                                    onClick={(e) => handleNavClick(e, link.path)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;