/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#047857', // Emerald-700 — Verde técnico BSR (unificado con DESIGN.md)
                    dark: '#065f46',    // Emerald-800 — hover/active state
                },
            },
        },
    },
    plugins: [],
}