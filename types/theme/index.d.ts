export interface PrismaneTheme {
    // The base mode "dark" or "light"
    mode: "light" | "dark";

    // The base colors
    colors: {
        primary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        base: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    };

    // The base spacing, changing it will scale up or down the size of your components
    spacing: string;
    fontFamily: string;
}