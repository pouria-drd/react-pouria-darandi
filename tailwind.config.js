/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx,css,html}"],
    theme: {
        extend: {
            fontFamily: {
                vazir: "Vazir",
                yekanX: "IRANYekanX",
                peyda: "PeydaWebFaNum",
            },

            colors: {
                pd: {
                    primary: "#4fae8c",
                    "primary-bg": "#1b2027",
                    "secondary-bg": "#282b37",
                    "primary-text": "#efebf2",
                    "secondary-text": "#797e87",
                    scroll: "#4d525d",
                    "scroll-bg": "#333843",
                },
            },
        },
    },
    plugins: [],
};
