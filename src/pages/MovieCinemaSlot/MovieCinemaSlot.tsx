import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { skipToken } from '@reduxjs/toolkit/query';

import { SlotGroup, SlotStructure } from '@components';
import { useGetMovieBySlugQuery } from '@services/MovieApi';
import { useGetMovieCinemaSlotsQuery } from '@services/SlotApi';

export const MovieCinemaSlot = () => {
    const { slug } = useParams<{ slug: string }>();
    const [searchParams, setSearchParams] = useSearchParams();
    const date =
        searchParams.get('date') ?? new Date().toISOString().split('T')[0];
    // Fetch movie by slug
    const { data: movie, isLoading: isMovieLoading } = useGetMovieBySlugQuery(
        slug ?? '',
        {
            skip: !slug,
        },
    );

    const {
        data: cinemas,
        isLoading: isSlotsLoading,
        isError: isSlotsError,
    } = useGetMovieCinemaSlotsQuery(
        movie ? { movieId: movie.id, date } : skipToken,
    );

    const handleDateChange = (newDate: string) => {
        setSearchParams({ date: newDate });
    };

    if (isMovieLoading) {
        return <p style={{ textAlign: 'center' }}>Loading movie...</p>;
    }

    if (!movie) {
        return (
            <p style={{ textAlign: 'center', color: 'red' }}>Movie not found</p>
        );
    }

    return (
        <>
            <SlotStructure
                title={movie.name}
                duration={movie.duration}
                genres={movie.genres}
                languages={movie.languages}
                selectedDate={date}
                onDateChange={handleDateChange}
            />

            {isSlotsLoading && (
                <p style={{ textAlign: 'center' }}>Loading slots...</p>
            )}

            {isSlotsError && (
                <p style={{ textAlign: 'center', color: 'red' }}>
                    No slots available.
                </p>
            )}

            {cinemas?.length === 0 && <p>No slots available on this date.</p>}
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
