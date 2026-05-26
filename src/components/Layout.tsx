import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
            {/* Mantenemos tu barra de navegación exactamente como está */}
            <Navbar />

            <main>
                {/* Aquí React Router renderizará dinámicamente la página activa */}
                <Outlet />
            </main>

            {/* Mantenemos tus componentes de cierre idénticos */}
            <Footer />
            <WhatsAppButton />
        </div>
    );
}