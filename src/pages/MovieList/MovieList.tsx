import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { Button, GridLayout, MovieCard } from '@components';
import { GRID_CONSTANTS, ROUTES } from '@constant';
import { MovieFiltersDesktop, MovieFiltersMobile } from '@pages';
import {
    useGetMovieGenresQuery,
    useGetMovieLanguagesQuery,
    useGetMoviesQuery,
} from '@services/MovieApi';

import {
    BrowseByCinemaFab,
    CenteredLoader,
    FilterFab,
    MovieListContainer,
    MovieListMainContent,
} from './MovieList.styles';

export const MovieList = () => {
    //Theme and responsive breakpoint
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    //Grid Layout configuration
    const gridColumns = GRID_CONSTANTS.MOVIE_LIST_GRID;

    //URL Search params
    const [searchParams, setSearchParams] = useSearchParams();

    //Applied filter state
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    //Pagination cursor
    const [cursor, setCursor] = useState<string | null>(null);

    //Navigation
    const navigate = useNavigate();

    //Temporary filters for mobile drawer
    const [tempLanguages, setTempLanguages] = useState<string[]>([]);
    const [tempGenres, setTempGenres] = useState<string[]>([]);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    // Fetch movies with filters + pagination
    const { data, isLoading, isFetching } = useGetMoviesQuery({
        languages: selectedLanguages,
        genres: selectedGenres,
        cursor,
    });

    //Fetch available filter options
    const { data: languages = [] } = useGetMovieLanguagesQuery();
    const { data: genres = [] } = useGetMovieGenresQuery();

    //Initialize filters from URL
    useEffect(() => {
        const urlGenres = searchParams.getAll('genres');
        const urlLanguages = searchParams.getAll('languages');

        if (urlGenres.length > 0) setSelectedGenres(urlGenres);
        if (urlLanguages.length > 0) setSelectedLanguages(urlLanguages);
    }, [searchParams]);

    //Update URL when filters and pagination change
    useEffect(() => {
        const params = new URLSearchParams();

        selectedGenres.forEach((g) => params.append('genres', g));
        selectedLanguages.forEach((l) => params.append('languages', l));
        if (cursor) params.set('cursor', cursor);

        setSearchParams(params);
    }, [selectedGenres, selectedLanguages, cursor, setSearchParams]);

    //Handle next page navigation
    const handleNext = () => {
        if (data?.next) {
            const nextCursor = new URL(data.next).searchParams.get('cursor');
            setCursor(nextCursor);
        }
    };

    //Handle previous page navigation
    const handlePrevious = () => {
        if (data?.previous) {
            const prevCursor = new URL(data.previous).searchParams.get(
                'cursor',
            );
            setCursor(prevCursor);
        }
    };

    //Open mobile filters drawer
    const handleOpenFilters = () => {
        setTempLanguages(selectedLanguages);
        setTempGenres(selectedGenres);
        setMobileFilterOpen(true);
    };

    //Apply mobile filters
    const handleApplyFilters = () => {
        setSelectedLanguages(tempLanguages);
        setSelectedGenres(tempGenres);
        setMobileFilterOpen(false);
    };

    //Reset mobile filter selections
    const handleResetFilters = () => {
        setTempLanguages([]);
        setTempGenres([]);
    };

    return (
        <MovieListContainer>
            {/*Desktop filter sidebar*/}
            <Box display={'flex'} flex={'0 0 25%'}>
                {!isMobile && (
                    <MovieFiltersDesktop
                        availableLanguages={languages}
                        availableGenres={genres}
                        selectedLanguages={selectedLanguages}
                        selectedGenres={selectedGenres}
                        setSelectedLanguages={setSelectedLanguages}
                        setSelectedGenres={setSelectedGenres}
                    />
                )}
            </Box>
            {/*Main movie list content*/}
            <MovieListMainContent>
                <Typography variant="h2">Explore All Movies</Typography>
                <Box>
                    {/*Loading State*/}
                    {isLoading || isFetching ? (
                        <CenteredLoader />
                    ) : data?.results?.length ? (
                        /*Movie Grid*/
                        <GridLayout columns={gridColumns}>
                            {data.results.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </GridLayout>
                    ) : (
                        /*Empty State*/
                        <Typography
                            align="center"
                            color="text.secondary"
                            mt={4}
                        >
                            No movies found
                        </Typography>
                    )}
                </Box>
                {/*Pagination Buttons*/}
                {data && (
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={20}
                    >
                        <Button
                            variant="outlined"
                            disabled={!data.previous || isFetching || isLoading}
                            onClick={handlePrevious}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="contained"
                            disabled={!data.next || isFetching || isLoading}
                            onClick={handleNext}
                        >
                            Next
                        </Button>
                    </Box>
                )}
            </MovieListMainContent>
            {/*Mobile View Filter*/}
            {isMobile && (
                <>
                    {/*Open filters button*/}
                    <FilterFab
                        color="primary"
                        onClick={() => {
                            handleOpenFilters();
                        }}
                    >
                        <FilterAltIcon />
                    </FilterFab>
                    {/*Mobile filters drawers*/}
                    <MovieFiltersMobile
                        open={mobileFilterOpen}
                        onClose={() => setMobileFilterOpen(false)}
                        availableLanguages={languages}
                        availableGenres={genres}
                        selectedLanguages={tempLanguages}
                        selectedGenres={tempGenres}
                        setSelectedLanguages={setTempLanguages}
                        setSelectedGenres={setTempGenres}
                        onApply={handleApplyFilters}
                        onReset={handleResetFilters}
                    />
                    {/*Browse by cinema button*/}
                    <BrowseByCinemaFab
                        color="primary"
                        variant="extended"
                        onClick={() => {
                            void navigate(ROUTES.CINEMAS);
                        }}
                    >
                        <LocationOnIcon />
                        Browse by Cinemas
                    </BrowseByCinemaFab>
                </>
            )}
        </MovieListContainer>
    );
};
