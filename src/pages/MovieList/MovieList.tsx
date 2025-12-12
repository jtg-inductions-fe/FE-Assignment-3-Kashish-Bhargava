import { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import { GridLayout, MovieCard } from '@components';
import { ROUTES } from '@constant';
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
    MoviesListSideSection,
    PaginationButton,
    PaginationContainer,
} from './MovieList.styles';

export const MovieList = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [searchParams, setSearchParams] = useSearchParams();

    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [cursor, setCursor] = useState<string | null>(null);

    const gridColumns = { xs: 6, sm: 4, md: 4, lg: 3 };
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

    const { data: languages = [] } = useGetMovieLanguagesQuery();
    const { data: genres = [] } = useGetMovieGenresQuery();

    //Initialize filters from URL
    useEffect(() => {
        const urlGenres = searchParams.getAll('genres');
        const urlLanguages = searchParams.getAll('languages');

        if (urlGenres.length > 0) setSelectedGenres(urlGenres);
        if (urlLanguages.length > 0) setSelectedLanguages(urlLanguages);
    }, [searchParams]);

    //Update URL when filters change
    useEffect(() => {
        const params = new URLSearchParams();

        selectedGenres.forEach((g) => params.append('genres', g));
        selectedLanguages.forEach((l) => params.append('languages', l));
        if (cursor) params.set('cursor', cursor);

        setSearchParams(params);
    }, [selectedGenres, selectedLanguages, cursor, setSearchParams]);

    const handleNext = () => {
        if (data?.next) {
            const nextCursor = new URL(data.next).searchParams.get('cursor');
            setCursor(nextCursor);
        }
    };

    const handlePrevious = () => {
        if (data?.previous) {
            const prevCursor = new URL(data.previous).searchParams.get(
                'cursor',
            );
            setCursor(prevCursor);
        }
    };

    const handleOpenFilters = () => {
        setTempLanguages(selectedLanguages);
        setTempGenres(selectedGenres);
        setMobileFilterOpen(true);
    };

    const handleApplyFilters = () => {
        setSelectedLanguages(tempLanguages);
        setSelectedGenres(tempGenres);
        setMobileFilterOpen(false);
    };

    const handleResetFilters = () => {
        setTempLanguages([]);
        setTempGenres([]);
    };

    return (
        <MovieListContainer>
            <MoviesListSideSection>
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
            </MoviesListSideSection>
            <MovieListMainContent>
                <Typography variant="h2">Explore All Movies</Typography>
                <Box>
                    {isLoading || isFetching ? (
                        <CenteredLoader />
                    ) : data?.results?.length ? (
                        <GridLayout
                            items={data.results}
                            columns={gridColumns}
                            renderItem={(movie) => <MovieCard movie={movie} />}
                        />
                    ) : (
                        <Typography
                            align="center"
                            color="text.secondary"
                            mt={4}
                        >
                            No movies found
                        </Typography>
                    )}
                </Box>

                {data && (
                    <PaginationContainer>
                        <PaginationButton
                            variant="outlined"
                            disabled={!data.previous || isFetching || isLoading}
                            onClick={handlePrevious}
                        >
                            Previous
                        </PaginationButton>
                        <PaginationButton
                            variant="contained"
                            disabled={!data.next || isFetching || isLoading}
                            onClick={handleNext}
                        >
                            Next
                        </PaginationButton>
                    </PaginationContainer>
                )}
            </MovieListMainContent>
            {isMobile && (
                <>
                    <FilterFab
                        color="primary"
                        onClick={() => {
                            handleOpenFilters();
                        }}
                    >
                        <FilterAltIcon />
                    </FilterFab>
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
