import { Box, Button, Modal, Typography } from '@mui/material';

import { BookingSuccessModalProps } from './BookingSuccessModal.types';

export const BookingSuccessModal = (props: BookingSuccessModalProps) => {
    //Props
    const { open, bookingId, onClose, onViewTicket } = props;

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                bgcolor="common.white"
                p={24}
                borderRadius={4}
                width={400}
                mx="auto"
                mt="20vh"
                display="flex"
                flexDirection="column"
                gap={16}
                textAlign="center"
            >
                {/*Booking confirmed*/}
                <Typography variant="h2" color="success.main">
                    Booking Confirmed
                </Typography>
                {/*Booking id*/}
                <Typography>
                    Your booking ID is <strong>{bookingId}</strong>
                </Typography>
                {/*Close modal button*/}
                <Box display="flex" gap={12} justifyContent="center">
                    <Button
                        variant="outlined"
                        onClick={onClose}
                        aria-label="Click to close modal"
                    >
                        Close
                    </Button>
                    {/*View Ticket*/}
                    <Button
                        variant="contained"
                        onClick={onViewTicket}
                        aria-label="Click to view ticket"
                    >
                        View Ticket
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};
