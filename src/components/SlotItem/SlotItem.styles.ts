/**
 * Styles for SlotItem
 */
import { makeStyles } from 'tss-react/mui';

export const useSlotItemStyles = makeStyles<{ status: 'available' | 'fast' }>()(
    (
        {
            spacing,
            typography: { pxToRem },
            palette: {
                warning: { main: mainWarning },
                success: { main },
            },
            breakpoints: { up },
        },
        { status },
    ) => ({
        slot: {
            padding: spacing(2, 16),
            borderRadius: spacing(2),
            borderWidth: '2px 2px 2px 6px',
            borderStyle: 'solid',
            borderColor: `${status === 'fast' ? mainWarning : main}`,
            color: status === 'fast' ? mainWarning : main,
            fontWeight: 500,
            fontSize: pxToRem(20),
            width: pxToRem(120),
            height: pxToRem(48),

            [up('md')]: {
                height: pxToRem(62),
            },
        },
    }),
);
