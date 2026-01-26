import { Box, Typography } from '@mui/material';

import { Button } from '@components';
import { theme } from '@theme';

import { SeatBookingSummaryProps } from './SeatBookingSummary.types';

/**Displays seat price, total amount and booking button */
export const SeatBookingSummary = (props: SeatBookingSummaryProps) => {
    //Props
    const { pricePerSeat, selectedCount, onBook, isBooking } = props;

    //Total Amount
    const total = pricePerSeat * selectedCount;

    return (
        <Box bgcolor="secondary.dark" boxShadow={theme.shadows[2]}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding={16}
                maxWidth="1440px"
                margin="0 auto"
                flexWrap="wrap"
                gap={20}
            >
                {/*Price per seat*/}
                <Typography variant="h3">
                    Price per Seat: ₹{pricePerSeat}
                </Typography>
                <Box display="flex" alignItems="center" gap={20}>
                    {/*Booking button*/}
                    <Button
                        variant="contained"
                        disabled={selectedCount === 0 || isBooking}
                        aria-label="Click to book tickets"
                        onClick={onBook}
                    >
                        {isBooking ? 'Booking...' : 'Book Tickets'}
                    </Button>
                    {/*Total calculation*/}
                    <Typography variant="h3" aria-label="Total Amount">
                        ₹{pricePerSeat} x {selectedCount} = ₹{total}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
