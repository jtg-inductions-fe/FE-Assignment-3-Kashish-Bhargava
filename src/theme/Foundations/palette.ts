import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.RED.main,
        light: COLORS.RED.light,
        contrastText: COLORS.WHITE.main,
    },
    background: {
        paper: COLORS.BLUE.dark,
        default: COLORS.WHITE.secondary,
    },
    info: {
        main: COLORS.BLUE.main,
    },
    secondary: {
        main: COLORS.BLUE.medium,
        dark: COLORS.GREY.light,
        light: COLORS.GREY.lighter,
    },
    text: {
        primary: COLORS.GREY.dark,
        secondary: COLORS.GREY.medium,
        disabled: COLORS.BLUE.light,
    },
    warning: {
        main: COLORS.YELLOW.main,
    },
    success: {
        main: COLORS.GREEN.main,
        light: COLORS.GREEN.light,
    },
    common: {
        black: COLORS.GREY.darkest,
        white: COLORS.WHITE.main,
    },
};
