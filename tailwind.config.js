/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                'brand-red': '#A81817',
                'brand-cream': '#FDF9EC',
                'brand-gold': '#D4AF37',
                'card-gold': '#D8B869',
                'text-dark': '#1A1A1A'
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
