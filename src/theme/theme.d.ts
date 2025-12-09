export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
        flexCenter: () => CSSProperties;
    }
}

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
