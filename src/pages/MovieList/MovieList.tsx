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
    const {
        data: movies,
        isLoading,
        isFetching,
    } = useGetMoviesQuery({
        languages: selectedLanguages,
        genres: selectedGenres,
        cursor,
    });

    //Fetching and Loading State
    const isLoadingOrFetching = isFetching || isLoading;
    //Check for movies existence
    const hasMovies = Boolean(movies?.results?.length);

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

        selectedGenres.forEach((genre) => params.append('genres', genre));
        selectedLanguages.forEach((language) =>
            params.append('languages', language),
        );
        if (cursor) params.set('cursor', cursor);

        setSearchParams(params);
    }, [selectedGenres, selectedLanguages, cursor, setSearchParams]);

    //Handle next page navigation
    const handleNext = () => {
        if (movies?.next) {
            const nextCursor = new URL(movies.next).searchParams.get('cursor');
            setCursor(nextCursor);
        }
    };

    //Handle previous page navigation
    const handlePrevious = () => {
        if (movies?.previous) {
            const prevCursor = new URL(movies.previous).searchParams.get(
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
            {!isMobile && (
                <Box display="flex" flex="0 0 25%">
                    <MovieFiltersDesktop
                        availableLanguages={languages}
                        availableGenres={genres}
                        selectedLanguages={selectedLanguages}
                        selectedGenres={selectedGenres}
                        setSelectedLanguages={setSelectedLanguages}
                        setSelectedGenres={setSelectedGenres}
                    />
                </Box>
            )}
            {/*Main movie list content*/}
            <MovieListMainContent>
                <Typography variant="h2">Explore All Movies</Typography>
                <Box>
                    {/*Loading State*/}
                    {isLoadingOrFetching && <CenteredLoader />}
                    {!isLoadingOrFetching && hasMovies && movies && (
                        /*Movie Grid*/
                        <GridLayout columns={gridColumns}>
                            {movies.results.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </GridLayout>
                    )}{' '}
                    {!isLoadingOrFetching && !hasMovies && (
                        /*Empty State*/
                        <Typography
                            align="center"
                            color="text.secondary"
                            mt={4}
                            variant="h2"
                        >
                            No movies found
                        </Typography>
                    )}
                </Box>
                {/*Pagination Buttons*/}
                {movies && (movies.next || movies.previous) && (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap={20}
                    >
                        <Button
                            variant="outlined"
                            disabled={!movies.previous || isLoadingOrFetching}
                            onClick={handlePrevious}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="contained"
                            disabled={!movies.next || isLoadingOrFetching}
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
