/**Styles for SeatStatus component */
import { makeStyles } from 'tss-react/mui';

export const useSeatStatusStyles = makeStyles()((theme) => ({
    available: {
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.success.main}`,
    },
    selected: {
        background: theme.palette.success.main,
    },
    booked: {
        background: theme.palette.grey[400],
    },
}));
