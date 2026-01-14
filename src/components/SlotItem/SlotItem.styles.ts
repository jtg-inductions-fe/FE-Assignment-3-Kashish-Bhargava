import { makeStyles } from 'tss-react/mui';

export const useSlotItemStyles = makeStyles<{ status: 'available' | 'fast' }>()(
    (theme, { status }) => ({
        slot: {
            padding: theme.spacing(2, 4),
            borderRadius: theme.spacing(2),
            border: `1px solid ${
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
        },
    }),
);
