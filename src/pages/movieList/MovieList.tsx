import { useState } from 'react';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { MovieGrid } from '@components';
import { MovieFiltersDesktop } from '@pages';
import { MovieFiltersMobile } from '@pages';
import {
    useGetMovieGenresQuery,
    useGetMovieLanguagesQuery,
    useGetMoviesQuery,
} from '@services/movieApi';

import {
    CenteredLoader,
    FilterFab,
    MovieListContent,
    MovieListMainContent,
    MoviesListSideSection,
    PageContainer,
    PaginationButton,
    PaginationContainer,
    Title,
} from './MovieList.styles';

export const MovieList = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [cursor, setCursor] = useState<string | null>(null);

    // Fetch movies with filters + pagination
    const { data, isLoading, isFetching } = useGetMoviesQuery({
        languages: selectedLanguages,
        genres: selectedGenres,
        cursor,
    });

    const { data: languages = [] } = useGetMovieLanguagesQuery();
    const { data: genres = [] } = useGetMovieGenresQuery();

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

    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    return (
        <PageContainer>
            <Title variant="h5">All Movies</Title>
            <MovieListContent>
                <MoviesListSideSection>
                    {/* Filters */}
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
                    <Box>
                        {isLoading || isFetching ? (
                            <CenteredLoader />
                        ) : data?.results?.length ? (
                            <MovieGrid
                                movies={data.results}
                                layoutKey="MovieListGrid"
                                columns={{ xs: 6, sm: 4, md: 4, lg: 3 }}
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
                                disabled={!data.previous}
                                onClick={handlePrevious}
                            >
                                Previous
                            </PaginationButton>
                            <PaginationButton
                                variant="contained"
                                disabled={!data.next}
                                onClick={handleNext}
                            >
                                Next
                            </PaginationButton>
                        </PaginationContainer>
                    )}
                </MovieListMainContent>
            </MovieListContent>
            {isMobile && (
                <>
                    <FilterFab
                        color="primary"
                        onClick={() => setMobileFilterOpen(true)}
                    >
                        <FilterAltIcon />
                    </FilterFab>
                    <MovieFiltersMobile
                        open={mobileFilterOpen}
                        onClose={() => setMobileFilterOpen(false)}
                        availableLanguages={languages}
                        availableGenres={genres}
                        selectedLanguages={selectedLanguages}
                        selectedGenres={selectedGenres}
                        setSelectedLanguages={setSelectedLanguages}
                        setSelectedGenres={setSelectedGenres}
                    />
                </>
            )}
        </PageContainer>
    );
};
