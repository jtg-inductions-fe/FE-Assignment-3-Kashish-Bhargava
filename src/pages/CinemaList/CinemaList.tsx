import { useCallback, useEffect, useRef, useState } from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';

import { CinemaCard, GridLayout } from '@components';
import { GRID_CONSTANTS } from '@constant';
import { useGetCinemasQuery } from '@services/CinemaApi/cinemaApi';
import type { Cinema } from '@services/CinemaApi/cinemaApi.types';

import { CinemaListHeader, LocationTextField } from './CinemaList.styles';

export const CinemaList = () => {
    //Grid column configuration
    const gridColumns = GRID_CONSTANTS.CINEMA_LIST_GRID;

    //Search input value
    const [location, setSearch] = useState('');

    //Debounced Search Value
    const [debouncedSearch, setDebouncedSearch] = useState('');

    //Pagination cursor
    const [cursor, setCursor] = useState<string | null>(null);

    //Cinema List
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
            setCinemas((prev) => {
                if (!cursor) return data.results;

                const map = new Map<number, Cinema>();

                [...prev, ...data.results].forEach((cinema) => {
                    map.set(cinema.id, cinema);
                });

                return Array.from(map.values());
            });
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

    //Attach intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 1.0,
        });
        if (loaderRef.current) observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, [handleObserver]);

    let content = null;

    /*Initial loading*/
    if (isLoading && !cinemas.length) {
        content = (
            <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
            </Box>
        );
        /*Cinemas Grid*/
    } else if (cinemas.length > 0) {
        content = (
            <GridLayout columns={gridColumns}>
                {cinemas.map((cinema) => (
                    <CinemaCard key={cinema.id} cinema={cinema} />
                ))}
            </GridLayout>
        );
        /*Empty state*/
    } else {
        content = (
            <Typography
                align="center"
                color="text.secondary"
                mt={4}
                variant="h2"
            >
                No cinemas found
            </Typography>
        );
    }

    return (
        <Box display="flex" flexDirection="column" gap={20}>
            {/*Page Header*/}
            <CinemaListHeader>
                <Typography variant="h2">Browse Cinemas</Typography>
                {/*Search field*/}
                <LocationTextField
                    variant="outlined"
                    placeholder="Search by location..."
                    value={location}
                    onChange={(e) => setSearch(e.target.value)}
                    fullWidth
                    aria-label="Search cinemas by location"
                />
            </CinemaListHeader>
            {/*Main Content*/}
            {content}

            {/*Pagination loader*/}
            <Box display="flex" justifyContent="center" minHeight={48}>
                {isFetching && cinemas.length > 0 && (
                    <CircularProgress size={24} />
                )}
            </Box>
            {/*Intersection observer trigger*/}
            <Box ref={loaderRef} height={2} />
        </Box>
    );
};
