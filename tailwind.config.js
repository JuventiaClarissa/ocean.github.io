/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}', // Make sure this matches your project structure
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};