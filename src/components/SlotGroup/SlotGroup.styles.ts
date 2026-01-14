import { makeStyles } from 'tss-react/mui';

export const useSlotGroupStyles = makeStyles()((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: theme.spacing(6),
        padding: theme.spacing(4, 0),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    left: {
        minWidth: 220,
    },
    right: {
        display: 'flex',
        gap: theme.spacing(3),
        flexWrap: 'wrap',
    },
}));
