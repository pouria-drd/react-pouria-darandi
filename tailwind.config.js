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

            dropShadow: {
                pdIcon: "0 16px 16px rgba(102, 179, 255, 0.25)",
                pdIconHover: "0 16px 16px rgba(102, 179, 255, 0.35)",
            },

            colors: {
                pd: {
                    // blue: #66B3FF, green: #00CC8F, purple: #9580FF,
                    // Orange: #FF764D, Pink: #FF80B3
                    primary: "#66B3FF",
                    "primary-alt": "#278B6D",

                    "primary-bg": "#21232C",
                    "secondary-bg": "#2B2E3B",

                    "primary-text": "#F1F2F3",
                    "secondary-text": "#9FA1AD",

                    scroll: "#4d525d",
                    "scroll-bg": "#333843",
                },
            },
        },
    },
    plugins: [],
};
