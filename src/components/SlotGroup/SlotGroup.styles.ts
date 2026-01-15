import { makeStyles } from 'tss-react/mui';

export const useSlotGroupStyles = makeStyles()((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: theme.spacing(48),
        padding: theme.spacing(20, 20),
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: theme.palette.common.white,
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(8),
    },
    right: {
        display: 'flex',
        gap: theme.spacing(12),
        flexWrap: 'wrap',
    },
}));
