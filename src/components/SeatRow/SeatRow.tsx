import { Box } from '@mui/material';

import { SeatAisle } from '@components';
import { SeatItem } from '@components';
import { getAisleIndexes } from '@utils';

import type { SeatRowProps } from './SeatRow.types';

export const SeatRow = (props: SeatRowProps) => {
    //Props
    const { rowLabel, seats, selectedSeatIds, onToggleSeat } = props;

    // Calculate row indexes where vertical aisle gaps should appear
    const aisleIndexes = getAisleIndexes(seats.length);

    return (
        <Box display="flex" alignItems="center" gap={20}>
            {/*Row Label*/}
            <Box
                color="common.white"
                bgcolor="text.secondary"
                textAlign="center"
                width={24}
                fontWeight={600}
            >
                {rowLabel}
            </Box>
            {/*Seats container*/}
            <Box display="flex" gap={6}>
                {seats.map((seat, index) => (
                    <Box key={seat.id} display="flex">
                        {/*Aisle gap*/}
                        {aisleIndexes.includes(index) && (
                            <SeatAisle orientation="vertical" />
                        )}
                        {/*Seat Item*/}
                        <SeatItem
                            seat={seat}
                            isSelected={selectedSeatIds.includes(seat.id)}
                            onToggle={onToggleSeat}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
