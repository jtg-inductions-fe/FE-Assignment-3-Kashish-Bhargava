import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box, Button, CircularProgress, Typography } from '@mui/material';

import { ActionModal, GridLayout, TicketCard } from '@components';
import { GRID_CONSTANTS, ROUTES } from '@constant';
import {
    PurchaseHistoryTicket,
    useCancelBookingMutation,
    useGetPurchaseHistoryQuery,
} from '@services/BookingApi';

import type { PurchaseHistoryContainerProps } from './PurchaseHistory.types';

export const PurchaseHistoryContainer = ({
    activeTab,
}: PurchaseHistoryContainerProps) => {
    //Grid column configuration
    const gridColumns = GRID_CONSTANTS.TICKET_GRID;

    /**Pagination cursor */
    const [cursor, setCursor] = useState<string | null>(null);

    /**List of bookings */
    const [items, setItems] = useState<PurchaseHistoryTicket[]>([]);

    /**Fetch purchase history based on active tab */
    const { data, isLoading, isFetching, isError } = useGetPurchaseHistoryQuery(
        {
            booking: activeTab,
            cursor,
        },
    );

    /**Cancel booking mutation */
    const [cancelBooking, { isLoading: isCancelling }] =
        useCancelBookingMutation();

    /**Cancellation successful modal state */
    const [cancelledBookingId, setCancelledBookingId] = useState<number | null>(
        null,
    );
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const navigate = useNavigate();

    /* Reset list when tab changes */
    useEffect(() => {
        setItems([]);
        setCursor(null);
    }, [activeTab]);

    /* Merge paginated results */
    const mergeById = (
        prev: PurchaseHistoryTicket[],
        next: PurchaseHistoryTicket[],
    ) => {
        const map = new Map(prev.map((booking) => [booking.id, booking]));
        next.forEach((booking) => map.set(booking.id, booking));

        return Array.from(map.values());
    };
    useEffect(() => {
        if (data?.results) {
            setItems((prev) =>
                cursor ? mergeById(prev, data.results) : data.results,
            );
        }
    }, [data, cursor]);

    /**Handle ticket cancellation */
    const handleCancel = async (bookingId: number) => {
        try {
            await cancelBooking(bookingId).unwrap();
            setCancelledBookingId(bookingId);
            setIsCancelModalOpen(true);
        } catch (err) {
            //eslint-disable-next-line no-console
            console.error('Cancel Failed', err);
        }
    };

    /**Loading, error and empty states */
    if (isLoading && !items.length) {
        return (
            <Box textAlign="center" mt={6}>
                <CircularProgress />
            </Box>
        );
    }

    if (isError) {
        return (
            <Typography align="center" color="error" variant="h2">
                Failed to load bookings
            </Typography>
        );
    }

    if (!items.length) {
        return (
            <Typography align="center" mt={6} variant="h2">
                No bookings found
            </Typography>
        );
    }

    return (
        <>
            {/*Ticket Grid*/}
            <GridLayout columns={gridColumns}>
                {items.map((booking) => (
                    <TicketCard
                        key={booking.id}
                        booking={booking}
                        onCancel={() => void handleCancel(booking.id)}
                        isCancelling={isCancelling}
                    />
                ))}
            </GridLayout>
            {/**Cancellation success modal*/}
            <ActionModal
                open={isCancelModalOpen}
                title="Ticket Cancelled"
                bookingId={cancelledBookingId}
                primaryActionLabel="Go to Home"
                onPrimaryAction={() => {
                    void navigate(ROUTES.HOME);
                    setIsCancelModalOpen(false);
                }}
                onClose={() => setIsCancelModalOpen(false)}
            ></ActionModal>
            {/*Pagination*/}
            {data?.next && (
                <Box textAlign="center">
                    <Button
                        variant="text"
                        disabled={isFetching}
                        onClick={() =>
                            setCursor(
                                new URL(data.next!).searchParams.get('cursor'),
                            )
                        }
                        aria-label="Load more bookings"
                    >
                        {isFetching ? 'Loading…' : 'Load more'}
                    </Button>
                </Box>
            )}
        </>
    );
};
