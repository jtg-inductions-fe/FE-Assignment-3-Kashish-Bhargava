export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
        flexCenter: () => CSSProperties;
        flex: (
            justify?: CSSProperties['justifyContent'],
            align?: CSSProperties['alignItems'],
            gap?: CSSProperties['gap'],
            direction?: CSSProperties['flexDirection'],
        ) => CSSProperties;
    }
}
