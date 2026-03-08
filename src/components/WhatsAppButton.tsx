import { Phone as WhatsApp } from 'lucide-react';

const WhatsAppButton = () => {
    // Aquí podés cambiar el número (sin el +) y el mensaje inicial
    const phoneNumber = "541112345678";
    const message = encodeURIComponent("Hola BSR Obras, estoy visitando su web y quería realizar una consulta.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
            aria-label="Contactar por WhatsApp"
        >
            <WhatsApp size={24} />

            {/* Tooltip que aparece al pasar el mouse */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-slate-100 pointer-events-none">
                ¿En qué podemos ayudarte?
            </span>
        </a>
    );
};

export default WhatsAppButton;