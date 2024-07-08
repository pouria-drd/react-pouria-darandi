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
                drd: {
                    primary: "#256EFF", // 00ccfd, 256EFF, 192BC2
                    bg: {
                        primary: "#ffffff",
                        secondary: "#fafbfd",
                        bgBlue: "#F9FEFF",
                    },
                    text: {
                        primary: "#444444", //292d36
                        secondary: "#80848f",
                    },
                },
            },
        },
    },
    plugins: [],
};
