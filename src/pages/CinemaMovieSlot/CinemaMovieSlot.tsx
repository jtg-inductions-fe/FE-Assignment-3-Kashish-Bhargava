import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { skipToken } from '@reduxjs/toolkit/query';

import { SlotGroup, SlotStructure } from '@components';
import { useGetCinemaBySlugQuery } from '@services/CinemaApi';
import { useGetCinemaMovieSlotsQuery } from '@services/SlotApi';

export const CinemaMovieSlot = () => {
    const { slug } = useParams<{ slug: string }>();
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    /** Fetch cinema using slug */
    const { data: cinema, isLoading: cinemaLoading } = useGetCinemaBySlugQuery(
        slug ?? '',
        {
            skip: !slug,
        },
    );

    /** Fetch movies & slots using cinema.id */
    const { data: movies, isLoading: slotsLoading } =
        useGetCinemaMovieSlotsQuery(
            cinema ? { cinemaId: cinema.id, date } : skipToken,
        );

    if (cinemaLoading || slotsLoading || !cinema || !movies) {
        return null;
    }

    return (
        <>
            <SlotStructure
                title={`${cinema.name} • ${cinema.location}`}
                selectedDate={date}
                onDateChange={setDate}
            />

            {movies.map((movie) => (
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
