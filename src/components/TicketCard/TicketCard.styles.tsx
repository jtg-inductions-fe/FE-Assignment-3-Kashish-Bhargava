/**Styles for TicketCard component */
import { makeStyles } from 'tss-react/mui';

export const useTicketCardStyles = makeStyles()(
    ({
        palette: {
            secondary: { dark },
            background,
        },
        typography: { pxToRem },
        spacing,
    }) => ({
        card: {
            width: '100%',
            maxWidth: pxToRem(420),
        },

        poster: {
            width: pxToRem(96),
            height: pxToRem(140),
            borderRadius: spacing(8),
            flexShrink: 0,
        },

        cinemaSection: {
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
        },

        dashedDivider: {
            borderTop: `2px dashed ${dark}`,
            margin: spacing(0, 16),
            position: 'relative',

            '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: pxToRem(-8),
                width: pxToRem(16),
                height: pxToRem(16),
                backgroundColor: background.default,
                borderRadius: '50%',
            },

            '&::before': {
                left: pxToRem(-22),
            },

            '&::after': {
                right: pxToRem(-22),
            },
        },

        qr: {
            minWidth: pxToRem(96),
            minHeight: pxToRem(96),
        },

        styledImage: {
            width: '100%',
            height: 'auto',
        },

        cancelButton: {
            maxWidth: pxToRem(200),
            margin: '0 auto',
        },
    }),
);
