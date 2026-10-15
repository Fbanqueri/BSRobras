import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY > 20;
                    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const hasDarkHero = location.pathname === '/';
    const shouldBeOpaque = !hasDarkHero || isScrolled;

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.querySelector(location.hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location]);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Catálogo', path: '/catalogo' },
        { name: 'Contacto', path: '/contacto' },
    ];

    const isActive = (path: string) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 py-3.5 transition-[background-color,border-color,box-shadow] duration-200 transform-gpu ${
                shouldBeOpaque
                    ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-xs'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2.5 group"
                    >
                        <img
                            src="/assets/logo.png"
                            alt="BSR Obras"
                            className="w-9 h-9 object-contain transition-transform duration-200 group-hover:scale-105"
                        />
                        <span className={`text-lg font-bold tracking-tight transition-colors ${
                            shouldBeOpaque ? 'text-slate-900' : 'text-white'
                        }`}>
                            BSR Obras
                        </span>
                    </Link>

                    {/* Nav desktop */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleNavClick(e, link.path)}
                                className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                                    shouldBeOpaque
                                        ? isActive(link.path)
                                            ? 'text-primary'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                                        : isActive(link.path)
                                            ? 'text-white'
                                            : 'text-white/75 hover:text-white'
                                }`}
                            >
                                {link.name}
                                {/* Indicador de ruta activa — línea bajo el link, spring animated */}
                                {isActive(link.path) && (
                                    <motion.span
                                        layoutId="nav-active-indicator"
                                        className={`absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full ${
                                            shouldBeOpaque ? 'bg-primary' : 'bg-emerald-400'
                                        }`}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </nav>

                    {/* CTA WhatsApp — solo desktop */}
                    <a
                        href="https://wa.me/5493413233169"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150 active:scale-[0.97] ${
                            shouldBeOpaque
                                ? 'bg-primary text-white hover:bg-primary-dark shadow-[0_4px_14px_-3px_rgba(4,120,87,0.4)] hover:shadow-[0_6px_18px_-3px_rgba(4,120,87,0.5)]'
                                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md'
                        }`}
                    >
                        <MessageSquare size={15} />
                        Consultar
                    </a>

                    {/* Hamburger mobile — morph a X con spring physics */}
                    <button
                        type="button"
                        className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg transition-colors ${
                            shouldBeOpaque ? 'hover:bg-slate-100' : 'hover:bg-white/10'
                        }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className={`block w-5 h-[2px] rounded-full ${shouldBeOpaque ? 'bg-slate-700' : 'bg-white'}`}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.15 }}
                            className={`block w-5 h-[2px] rounded-full ${shouldBeOpaque ? 'bg-slate-700' : 'bg-white'}`}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className={`block w-5 h-[2px] rounded-full ${shouldBeOpaque ? 'bg-slate-700' : 'bg-white'}`}
                        />
                    </button>
                </div>
            </div>

            {/* Menú mobile con stagger reveal */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/40 overflow-hidden"
                    >
                        <div className="px-4 py-5 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.path}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05, type: 'spring', stiffness: 300, damping: 25 }}
                                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                                        isActive(link.path)
                                            ? 'text-primary bg-primary-subtle'
                                            : 'text-slate-700 hover:bg-slate-100'
                                    }`}
                                    onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, link.path)}
                                >
                                    {link.name}
                                    {isActive(link.path) && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    )}
                                </motion.a>
                            ))}
                            <div className="pt-2">
                                <a
                                    href="https://wa.me/5493413233169"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white font-semibold rounded-xl text-sm active:scale-[0.97] transition-transform"
                                >
                                    <MessageSquare size={16} />
                                    Consultar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;