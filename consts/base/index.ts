import {PrismaneTheme} from "@/types/theme";

const base: PrismaneTheme = {
    mode: "dark",
    colors: {
        primary: {
            // Prismane's diamond colors
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
        },
        base: {
            // Prismane's gray colors
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
        },
    },
    spacing: "4px",
    fontFamily: "Inter",
};

export default base;