import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (): TypographyOptions => ({
    fontFamily: 'Inter,Arial,sans-serif',
    htmlFontSize: HTML_FONT_SIZE,

    h1: {
        fontSize: typographyUtil.pxToRem(30),
        fontWeight: 700,
        lineHeight: typographyUtil.pxToRem(45),
    },

    h2: {
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 600,
        lineHeight: typographyUtil.pxToRem(30),
    },

    h3: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 600,
        lineHeight: typographyUtil.pxToRem(24),
    },

    h4: {
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: typographyUtil.pxToRem(18),
        fontWeight: 600,
    },

    body1: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 500,
        lineHeight: typographyUtil.pxToRem(24),
    },

    body2: {
        fontSize: typographyUtil.pxToRem(12),
        fontWeight: 500,
        lineHeight: typographyUtil.pxToRem(18),
    },

    button: {
        fontWeight: 600,
        fontSize: typographyUtil.pxToRem(14),
        lineHeight: typographyUtil.pxToRem(20),
    },

    subtitle1: {
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(14),
        lineHeight: typographyUtil.pxToRem(20),
    },

    subtitle2: {
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(16),
        lineHeight: typographyUtil.pxToRem(24),
    },
    caption: {
        fontWeight: 400,
        fontSize: typographyUtil.pxToRem(12),
        lineHeight: typographyUtil.pxToRem(18),
    },
});

export const typography = { typographyStyle, typographyUtil };
