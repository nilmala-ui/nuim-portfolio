import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617", // Midnight Navy
                primary: "#3B82F6", // Electric Azure
                secondary: "#7C3AED", // Deep Violet
                text: "#FFFFFF",
                muted: "#CBD5E1", // Lighter slate for better contrast on dark bg
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)"],
                mono: ["var(--font-geist-mono)"],
                serif: ["var(--font-playfair)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
