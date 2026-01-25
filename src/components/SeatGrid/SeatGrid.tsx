import { Box } from '@mui/material';

import { SeatAisle, SeatRow } from '@components';
import { getAisleIndexes } from '@utils';

import type { SeatGridProps } from './SeatGrid.types';

export const SeatGrid = (props: SeatGridProps) => {
    // Props
    const { rows, selectedSeatIds, onToggleSeat } = props;

    // Calculate row indexes where horizontal aisle gaps should appear
    const aisleIndexes = getAisleIndexes(rows.length);

    return (
        <Box
            display="flex"
            flexDirection="column"
            maxWidth="1440px"
            margin="0 auto"
            gap={12}
        >
            {rows.map((row, index) => (
                <Box key={row.rowNumber}>
                    {/*A single seat row*/}
                    <SeatRow
                        key={row.rowNumber}
                        rowLabel={row.rowLabel}
                        seats={row.seats}
                        selectedSeatIds={selectedSeatIds}
                        onToggleSeat={onToggleSeat}
                    />
                    {/*Aisle gap*/}
                    {aisleIndexes.includes(index + 1) && (
                        <SeatAisle orientation="horizontal" />
                    )}
                </Box>
            ))}
        </Box>
    );
};
