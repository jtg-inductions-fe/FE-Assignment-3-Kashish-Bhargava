import { makeStyles } from 'tss-react/mui';

export const useSlotItemStyles = makeStyles<{ status: 'available' | 'fast' }>()(
    (theme, { status }) => ({
        slot: {
            padding: theme.spacing(2, 16),
            alignContent: 'center',
            borderRadius: theme.spacing(2),
            border: `2px solid ${
                status === 'fast'
                    ? theme.palette.warning.main
                    : theme.palette.success.main
            }`,
            borderLeft: `6px solid ${
                status === 'fast'
                    ? theme.palette.warning.main
                    : theme.palette.success.main
            }`,
            color:
                status === 'fast'
                    ? theme.palette.warning.main
                    : theme.palette.success.main,
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: theme.typography.pxToRem(20),
        },
    }),
);
