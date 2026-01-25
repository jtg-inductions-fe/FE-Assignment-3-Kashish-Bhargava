import { useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { SeatBookingContainer } from '@containers/SeatBookingContainer';

export const SeatBooking = () => {
    //Params
    const { cinemaId, slotId } = useParams<{
        cinemaId: string;
        slotId: string;
    }>();

    //Missing or invalid cinema or slot id
    if (!cinemaId || !slotId) {
        return <Typography>Invalid cinema or slot</Typography>;
    }

    return (
        <Box marginTop={20}>
            <SeatBookingContainer
                cinemaId={Number(cinemaId)}
                slotId={Number(slotId)}
            />
        </Box>
    );
};
