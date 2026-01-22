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
        },
        { status },
    ) => ({
        slot: {
            padding: spacing(2, 16),
            alignContent: 'center',
            borderRadius: spacing(2),
            border: `2px solid ${status === 'fast' ? mainWarning : main}`,
            borderLeft: `6px solid ${status === 'fast' ? mainWarning : main}`,
            color: status === 'fast' ? mainWarning : main,
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: pxToRem(20),
            width: pxToRem(120),
            height: pxToRem(62),
        },
    }),
);
