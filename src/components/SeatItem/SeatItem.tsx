import { Box } from '@mui/material';

import { useSeatItemStyles } from './SeatItem.styles';
import type { SeatItemProps } from './SeatItem.types';

export const SeatItem = (props: SeatItemProps) => {
    //Props
    const { seat, isSelected, onToggle } = props;

    // Styles using custom hook
    const { classes } = useSeatItemStyles({
        available: seat.available,
        selected: isSelected,
    });

    return (
        <Box
            className={classes.seat}
            onClick={seat.available ? () => onToggle(seat) : undefined}
            component="button"
            aria-disabled={!seat.available}
            width={32}
            height={32}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize={12}
            fontWeight={500}
            type="button"
            disabled={!seat.available}
        >
            {/*Seat Number*/}
            {seat.seat_number}
        </Box>
    );
};
