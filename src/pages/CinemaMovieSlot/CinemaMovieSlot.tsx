import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { skipToken } from '@reduxjs/toolkit/query';

import { SlotGroup, SlotStructure } from '@components';
import { useGetCinemaBySlugQuery } from '@services/CinemaApi';
import { useGetCinemaMovieSlotsQuery } from '@services/SlotApi';

export const CinemaMovieSlot = () => {
    const { slug } = useParams<{ slug: string }>();
    const [searchParams, setSearchParams] = useSearchParams();
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

    const handleDateChange = (newDate: string) => {
        setSearchParams({ date: newDate });
    };

    if (isCinemaLoading) {
        return <p style={{ textAlign: 'center' }}>Loading cinema...</p>;
    }

    if (!cinema) {
        return (
            <p style={{ textAlign: 'center', color: 'red' }}>
                Cinema not found
            </p>
        );
    }

    return (
        <>
            <SlotStructure
                title={`${cinema.name} • ${cinema.location}`}
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

            {movies?.length === 0 && <p>No slots available on this date.</p>}

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
