import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.RED[235],
        light: COLORS.RED[255],
    },
    background: {
        paper: COLORS.BLUE[53],
        default: COLORS.WHITE[245],
    },
    info: {
        main: COLORS.BLUE[73],
    },
    secondary: {
        main: COLORS.BLUE[67],
        dark: COLORS.GREY[229],
        light: COLORS.GREY[238],
    },
    text: {
        primary: COLORS.GREY[102],
        secondary: COLORS.GREY[153],
        disabled: COLORS.BLUE[162],
    },
    warning: {
        main: COLORS.YELLOW,
    },
    success: {
        main: COLORS.GREEN[166],
        light: COLORS.GREEN[255],
    },
    common: {
        black: COLORS.GREY[900],
        white: COLORS.WHITE[255],
    },
};
