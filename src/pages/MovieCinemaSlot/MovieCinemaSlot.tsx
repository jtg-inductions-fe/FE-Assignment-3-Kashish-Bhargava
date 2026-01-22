import { useParams, useSearchParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import { skipToken } from '@reduxjs/toolkit/query';

import { SlotGroup, SlotStructure } from '@components';
import { useGetMovieBySlugQuery } from '@services/MovieApi';
import { useGetMovieCinemaSlotsQuery } from '@services/SlotApi';

export const MovieCinemaSlot = () => {
    // Extract movie slug from URL params
    const { slug } = useParams<{ slug: string }>();

    //Reads and updates date from query params
    const [searchParams, setSearchParams] = useSearchParams();

    //Selected date for slots, defaults to today
    const date =
        searchParams.get('date') ?? new Date().toISOString().split('T')[0];

    // Fetch movie by slug
    const { data: movie, isLoading: isMovieLoading } = useGetMovieBySlugQuery(
        slug ?? '',
        {
            skip: !slug,
        },
    );

    //Fetch cinema-wise slots for a movie and date
    const {
        data: cinemas,
        isLoading: isSlotsLoading,
        isError: isSlotsError,
    } = useGetMovieCinemaSlotsQuery(
        movie ? { movieId: movie.id, date } : skipToken,
    );

    //Update selected date in URL
    const handleDateChange = (newDate: string) => {
        setSearchParams({ date: newDate });
    };

    //Loading while movie data is being fetched
    if (isMovieLoading) {
        return <Typography textAlign="center">Loading movie...</Typography>;
    }

    //Movie not found handling
    if (!movie) {
        return (
            <Typography textAlign="center" color="primary.main">
                Movie not found
            </Typography>
        );
    }

    return (
        <>
            {/*Movie details and date selection section*/}
            <SlotStructure
                title={movie.name}
                duration={movie.duration}
                genres={movie.genres}
                languages={movie.languages}
                selectedDate={date}
                onDateChange={handleDateChange}
            />
            {/*Slots loading state*/}
            {isSlotsLoading && (
                <Typography textAlign="center">Loading slots...</Typography>
            )}
            {/*Slots error state*/}
            {isSlotsError && (
                <Typography textAlign="center" color="primary.main">
                    No slots available.
                </Typography>
            )}
            {/*Empty state handling*/}
            {cinemas?.length === 0 && (
                <Typography>No slots available on this date.</Typography>
            )}
            {/*Slots groups*/}
            {cinemas?.map((cinema) => (
                <SlotGroup
                    key={cinema.id}
                    title={cinema.name}
                    subtitle={cinema.location}
                    slots={cinema.slots}
                />
            ))}
        </>
    );
};
