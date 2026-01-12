import { useCallback, useEffect, useRef, useState } from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';

import { CinemaCard, GridLayout } from '@components';
import { useGetCinemasQuery } from '@services/CinemaApi/cinemaApi';
import type { Cinema } from '@services/CinemaApi/cinemaApi.types';

import {
    CinemaListHeader,
    CinemaListLayout,
    LocationTextField,
} from './CinemaList.styles';

export const CinemaList = () => {
    const [location, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [cursor, setCursor] = useState<string | null>(null);
    const [cinemas, setCinemas] = useState<Cinema[]>([]);

    // Debounce logic
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(location);
            setCursor(null); // reset pagination when searching
        }, 800);

        return () => clearTimeout(handler); // reset on next keystroke
    }, [location]);

    //Fetch using debouncedSearch
    const { data, isLoading, isFetching } = useGetCinemasQuery({
        cursor,
        location: debouncedSearch,
    });

    //Merge results for infinite scroll
    useEffect(() => {
        if (data?.results) {
            setCinemas((prev) =>
                cursor ? [...prev, ...data.results] : data.results,
            );
        }
    }, [data, cursor]);

    // Infinite scroll
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && data?.next && !isFetching) {
                const nextCursor = new URL(data.next).searchParams.get(
                    'cursor',
                );
                setCursor(nextCursor);
            }
        },
        [data, isFetching],
    );

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 1.0,
        });
        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [handleObserver]);

    const gridColumns = { xs: 12, sm: 6, md: 4, lg: 3 };

    return (
        <CinemaListLayout>
            <CinemaListHeader>
                <Typography variant="h2">Browse Cinemas</Typography>

                <LocationTextField
                    variant="outlined"
                    placeholder="Search by location..."
                    value={location}
                    onChange={(e) => setSearch(e.target.value)}
                    fullWidth
                />
            </CinemaListHeader>
            {isLoading && !cinemas.length ? (
                <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress />
                </Box>
            ) : cinemas.length > 0 ? (
                <GridLayout
                    items={cinemas}
                    columns={gridColumns}
                    renderItem={(cinema) => <CinemaCard cinema={cinema} />}
                />
            ) : (
                <Typography align="center" color="text.secondary" mt={4}>
                    No cinemas found
                </Typography>
            )}

            {isFetching && cinemas.length > 0 && (
                <Box display="flex" justifyContent="center" mt={3}>
                    <CircularProgress size={24} />
                </Box>
            )}

            <Box ref={loaderRef} style={{ height: '1px' }} />
        </CinemaListLayout>
    );
};
