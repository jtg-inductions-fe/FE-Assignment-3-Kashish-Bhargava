/**
 * Styles for SlotGroup
 */
import { makeStyles } from 'tss-react/mui';

export const useSlotGroupStyles = makeStyles()(
    ({
        spacing,
        palette: {
            common: { white },
        },
        breakpoints: { up },
    }) => ({
        container: {
            flexDirection: 'column',
            gap: spacing(24),
            padding: spacing(10, 10),
            background: white,

            [up('md')]: {
                flexDirection: 'row',
                gap: spacing(48),
                padding: spacing(20, 20),
            },
        },
    }),
);
