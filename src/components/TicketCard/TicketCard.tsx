import dayjs from 'dayjs';

import { Box, Button, Divider, Typography } from '@mui/material';

import MoviePoster from '@assets/images/movie-poster.png';
import QrCode from '@assets/images/ticket-qr-code.svg';
import { formatDuration } from '@utils';

import { useTicketCardStyles } from './TicketCard.styles';
import type { TicketCardProps } from './TicketCard.types';

export const TicketCard = (props: TicketCardProps) => {
    //Props
    const { booking, isCancelling, onCancel } = props;

    //Styles using custom hook
    const { classes } = useTicketCardStyles();

    /**Booking States */
    const isCancelled = booking.status === 'C';
    const isPast = dayjs(booking.slot.start_time).isBefore(dayjs());

    /**Status Labels */
    const statusLabel = isCancelled
        ? 'Cancelled'
        : isPast
          ? 'Completed'
          : 'Upcoming';

    /**Seats label */
    const seatLabel = booking.seats
        .map((s) => `R${s.row_number} S${s.seat_number}`)
        .join(', ');

    return (
        <Box
            className={classes.card}
            bgcolor="common.white"
            display="flex"
            flexDirection="column"
            borderRadius={2}
        >
            {/*Top Section :movie and cinema details*/}
            <Box display="flex" gap={16} padding={16}>
                <Box className={classes.poster}>
                    <img
                        src={MoviePoster}
                        alt={booking.slot.movie}
                        className={classes.styledImage}
                    />
                </Box>

                <Box display="flex" flexDirection="column" gap={8}>
                    <Typography variant="h3">{booking.slot.movie}</Typography>

                    <Typography>
                        {formatDuration(booking.slot.duration)}
                    </Typography>

                    <Typography>
                        {dayjs(booking.slot.start_time).format(
                            'ddd DD MMM | hh:mm A',
                        )}
                    </Typography>
                    <Typography
                        className={classes.cinemaSection}
                        textTransform="capitalize"
                    >
                        {booking.slot.cinema}, {booking.slot.location}
                    </Typography>
                </Box>
            </Box>

            {/* Divider  */}
            <Box className={classes.dashedDivider} />

            {/* Middle Section: QR code and booking details  */}
            <Box display="flex" flexDirection="column" gap={16} padding={16}>
                <Box display="flex" justifyContent={'space-between'}>
                    <Box className={classes.qr}>
                        <img
                            src={QrCode}
                            alt="QR Code"
                            className={classes.styledImage}
                        />
                    </Box>

                    <Box
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        gap={6}
                    >
                        <Typography>
                            {booking.seats.length} Ticket(s)
                        </Typography>

                        <Typography>Seat {seatLabel}</Typography>

                        <Typography>Booking ID: {booking.id}</Typography>
                    </Box>
                </Box>

                <Typography textAlign="center">
                    Booked On:&nbsp;
                    {dayjs(booking.created_at).format('ddd DD MMM | hh:mm A')}
                </Typography>

                <Typography textAlign="center" fontWeight={600}>
                    Ticket Status: {statusLabel}
                </Typography>

                {!isCancelled && !isPast && (
                    <Button
                        variant="contained"
                        color="error"
                        className={classes.cancelButton}
                        disabled={isCancelling}
                        onClick={() => onCancel(booking.id)}
                    >
                        {isCancelling ? 'Cancelling...' : 'Cancel Ticket'}
                    </Button>
                )}
                {isPast && !isCancelled && (
                    <Typography color="text.secondary">
                        Cancellation unavailable for past shows
                    </Typography>
                )}
            </Box>
            <Divider />
            {/* Bottom Section: Amount of booking*/}
            <Box display="flex" justifyContent="space-between" padding={16}>
                <Typography>Total Amount</Typography>
                <Typography>₹ {booking.total_price.toFixed(2)}</Typography>
            </Box>
        </Box>
    );
};
