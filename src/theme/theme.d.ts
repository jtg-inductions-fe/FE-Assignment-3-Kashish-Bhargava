export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
        flexCenter: () => CSSProperties;
    }
}

/**
 * Extending MUI Theme to include custom borderRadius property.
 */
declare module '@mui/material/styles' {
    interface Theme {
        borderRadius: {
            button: number;
        };
    }

    interface ThemeOptions {
        borderRadius?: {
            button?: number;
        };
    }
}
