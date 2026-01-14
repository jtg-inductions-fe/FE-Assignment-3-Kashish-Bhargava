import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { skipToken } from '@reduxjs/toolkit/query';

import { SlotGroup, SlotStructure } from '@components';
import { useGetMovieBySlugQuery } from '@services/MovieApi';
import { useGetMovieCinemaSlotsQuery } from '@services/SlotApi';

export const MovieCinemaSlot = () => {
    const { slug } = useParams<{ slug: string }>();
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    // Fetch movie by slug
    const { data: movie } = useGetMovieBySlugQuery(slug ?? '', {
        skip: !slug,
    });

    const { data: cinemas, isLoading } = useGetMovieCinemaSlotsQuery(
        movie ? { movieId: movie.id, date } : skipToken,
    );

    if (isLoading || !movie || !cinemas) {
        return null;
    }

    return (
        <>
            <SlotStructure
                title={movie.name}
                duration={movie.duration}
                genres={movie.genres}
                languages={movie.languages}
                selectedDate={date}
                onDateChange={setDate}
            />

            {cinemas.map((cinema) => (
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
