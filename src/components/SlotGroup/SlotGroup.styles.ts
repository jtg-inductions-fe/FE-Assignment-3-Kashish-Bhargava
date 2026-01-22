import { makeStyles } from 'tss-react/mui';

export const useSlotGroupStyles = makeStyles()(
    ({
        spacing,
        palette: {
            divider,
            common: { white },
        },
        breakpoints: { up },
    }) => ({
        container: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            gap: spacing(24),
            padding: spacing(20, 20),
            borderBottom: `1px solid ${divider}`,
            background: white,

            [up('md')]: {
                flexDirection: 'row',
                gap: spacing(48),
            },
        },
        left: {
            display: 'flex',
            flexDirection: 'column',
            gap: spacing(8),
        },
        right: {
            display: 'flex',
            gap: spacing(12),
            flexWrap: 'wrap',
        },
    }),
);
