const WhatsAppButton = () => {
    // Aquí podés cambiar el número (sin el +) y el mensaje inicial
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const initialMessage = import.meta.env.VITE_WHATSAPP_MESSAGE;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(initialMessage)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group flex items-center justify-center"
            aria-label="Contactar por WhatsApp"
        >
            <span className="material-symbols-outlined !text-[28px]">chat</span>

            {/* Tooltip que aparece al pasar el mouse */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-slate-100 pointer-events-none">
                ¿En qué podemos ayudarte?
            </span>
        </a>
    );
};

export default WhatsAppButton;