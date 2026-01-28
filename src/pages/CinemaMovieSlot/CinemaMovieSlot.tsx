import { useParams, useSearchParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import { skipToken } from '@reduxjs/toolkit/query';

import { SlotGroup, SlotStructure } from '@components';
import { useGetCinemaBySlugQuery } from '@services/CinemaApi';
import { useGetCinemaMovieSlotsQuery } from '@services/SlotApi';

export const CinemaMovieSlot = () => {
    // Extract movie slug from URL params
    const { slug } = useParams<{ slug: string }>();

    //Reads and updates date from query params
    const [searchParams, setSearchParams] = useSearchParams();

    //Selected date for slots, defaults to today
    const date =
        searchParams.get('date') ?? new Date().toISOString().split('T')[0];

    /** Fetch cinema using slug */
    const { data: cinema, isLoading: isCinemaLoading } =
        useGetCinemaBySlugQuery(slug ?? '', {
            skip: !slug,
        });

    /** Fetch movies & slots using cinema.id */
    const {
        data: movies,
        isLoading: isSlotsLoading,
        isError: isSlotsError,
    } = useGetCinemaMovieSlotsQuery(
        cinema ? { cinemaId: cinema.id, date } : skipToken,
    );

    //Update selected date in URL
    const handleDateChange = (newDate: string) => {
        setSearchParams({ date: newDate });
    };

    //Loading while cinema data is being fetched
    if (isCinemaLoading) {
        return <Typography textAlign="center">Loading cinema...</Typography>;
    }

    //Cinema not found handling
    if (!cinema) {
        return (
            <Typography textAlign="center" color="primary.main">
                Cinema not found
            </Typography>
        );
    }

    return (
        <>
            {/*Cinema detail and date selection section*/}
            <SlotStructure
                title={`${cinema.name} ${cinema.location}`}
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
            {movies?.length === 0 && (
                <Typography>No movies available on this date.</Typography>
            )}
            {/*Slots groups*/}
            {movies?.map((movie) => (
                <SlotGroup
                    key={movie.id}
                    title={movie.name}
                    subtitle={`${movie.duration} • ${movie.genres.join(', ')} • ${movie.languages.join(', ')}`}
                    slots={movie.slots}
                />
            ))}
        </>
    );
};
