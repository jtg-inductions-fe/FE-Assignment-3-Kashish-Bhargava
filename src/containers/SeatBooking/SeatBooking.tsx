import { useMemo, useState } from 'react';

import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';

import { Box, CircularProgress, Typography } from '@mui/material';

import { skipToken } from '@reduxjs/toolkit/query';

import {
    SeatBookingHeader,
    SeatBookingSummary,
    SeatGrid,
    SeatScreenIndicator,
    SeatStatus,
} from '@components';
import { Seat, useGetSeatsQuery } from '@services/SeatApi';
import {
    useGetCinemaMovieSlotsQuery,
    useGetMovieCinemaSlotsQuery,
} from '@services/SlotApi';
import { groupSeatsByRow } from '@utils';

import { useSeatBookingContainerStyles } from './SeatBooking.styles';
import type { SeatBookingNavigationState } from './SeatBooking.types';
import type { SeatBookingContainerProps } from './SeatBooking.types';

export const SeatBookingContainer = (props: SeatBookingContainerProps) => {
    //Props
    const { cinemaId, slotId } = props;

    //Styles for custom hook
    const { classes } = useSeatBookingContainerStyles();

    /**
     * Navigation state
     * Available only when user navigates via SlotItem
     * Helps avoid extra API calls on first load
     */
    const location = useLocation();
    const navigationState = location.state as SeatBookingNavigationState | null;

    const cinemaSlotsArgs = navigationState ? skipToken : { cinemaId };

    /* Fetch all movies and slots for this cinema */
    const {
        data: cinemaMovies = [],
        isLoading: isCinemaSlotsLoading,
        isError: isCinemaSlotsError,
    } = useGetCinemaMovieSlotsQuery(cinemaSlotsArgs);

    /* Resolve slot details: navigation state for the first navigation and API calls for refresh or direct URL*/
    const resolvedSlot = useMemo(() => {
        // for first navigation
        if (navigationState) {
            return {
                movieName: navigationState.movieName,
                startTime: navigationState.startTime,
                date: navigationState.date,
                seatPrice: navigationState.seatPrice,
            };
        }

        // for refresh or direct URL
        for (const movie of cinemaMovies) {
            const slot = movie.slots.find((s) => s.id === slotId);
            if (slot) {
                return {
                    movieId: movie.id,
                    movieName: movie.name,
                    startTime: slot.start_time,
                    date: dayjs(slot.start_time).format('YYYY-MM-DD'),
                    seatPrice: Number(slot.price),
                };
            }
        }

        return null;
    }, [navigationState, cinemaMovies, slotId]);

    const movieSlotsArgs =
        resolvedSlot && resolvedSlot.movieId
            ? {
                  movieId: resolvedSlot.movieId,
                  date: resolvedSlot.date,
              }
            : skipToken;

    /* Fetch cinema info using movieId and date */
    const {
        data: cinemas = [],
        isLoading: isMovieSlotsLoading,
        isError: isMovieSlotsError,
    } = useGetMovieCinemaSlotsQuery(movieSlotsArgs);

    /**Prefer navigation state and fallback to API call on refresh or direct URL */
    const cinemaInfo = navigationState
        ? {
              name: navigationState.cinemaName,
              location: navigationState.cinemaLocation,
          }
        : cinemas.find((cinema) => cinema.id === cinemaId);

    /*Fetch seats*/
    const {
        data: seats = [],
        isLoading: isSeatsLoading,
        isError: isSeatsError,
    } = useGetSeatsQuery({ cinemaId, slotId });

    /*Seat selection logic*/
    const [selectedSeatIds, setSelectedSeatIds] = useState<number[]>([]);

    const toggleSeat = (seat: Seat) => {
        if (!seat.available) return;

        setSelectedSeatIds((prev) =>
            prev.includes(seat.id)
                ? prev.filter((id) => id !== seat.id)
                : [...prev, seat.id],
        );
    };

    /**Group seats into rows */
    const seatRows = groupSeatsByRow(seats);

    /* Loading states */
    if (isCinemaSlotsLoading || isMovieSlotsLoading || isSeatsLoading) {
        return (
            <Box display="flex" justifyContent="center" mt={6}>
                <CircularProgress />
            </Box>
        );
    }

    /*Error States / invalid data*/
    if (
        isCinemaSlotsError ||
        isMovieSlotsError ||
        isSeatsError ||
        !resolvedSlot ||
        !cinemaInfo
    ) {
        return (
            <Typography align="center" color="error">
                Failed to load seat booking details
            </Typography>
        );
    }

    return (
        <Box display="flex" flexDirection="column" gap={64}>
            {/*Header and booking summary*/}
            <Box>
                <SeatBookingHeader
                    movieName={resolvedSlot.movieName}
                    cinemaName={cinemaInfo.name}
                    cinemaLocation={cinemaInfo.location}
                    date={resolvedSlot.date}
                    startTime={resolvedSlot.startTime}
                />

                <SeatBookingSummary
                    pricePerSeat={resolvedSlot.seatPrice}
                    selectedCount={selectedSeatIds.length}
                />
            </Box>
            {/*Seat Grid and Screen Indicator*/}
            <Box
                display="flex"
                flexDirection="column"
                gap={48}
                className={classes.seatLayout}
                padding={6}
            >
                <SeatGrid
                    rows={seatRows}
                    selectedSeatIds={selectedSeatIds}
                    onToggleSeat={toggleSeat}
                />
                <SeatScreenIndicator />
            </Box>
            {/*Seat Status component*/}
            <SeatStatus />
        </Box>
    );
};
