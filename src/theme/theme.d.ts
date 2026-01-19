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
        shape: {
            borderRadius: number;
            borderRadiusLg: number;
        };
        border: {
            layoutBorder: string;
        };
        appVars: {
            navbarWidth: number;
            layoutContainerWidth: number;
        };
    }

    interface ThemeOptions {
        shape?: {
            borderRadius?: number;
            borderRadiusLg?: number;
        };
        border?: {
            layoutBorder?: string;
        };
        appVars?: {
            navbarWidth?: number;
            layoutContainerWidth?: number;
        };
    }
}
