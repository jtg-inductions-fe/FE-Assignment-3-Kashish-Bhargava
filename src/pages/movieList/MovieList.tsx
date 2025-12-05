// import { useState } from 'react';

// import FilterListIcon from '@mui/icons-material/FilterList';
// import {
//     Box,
//     Button,
//     CircularProgress,
//     Fab,
//     Typography,
//     useMediaQuery,
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// import { MovieGrid } from '@components';
// import { MovieFiltersDesktop } from '@pages';
// import { MovieFiltersMobile } from '@pages';
// import {
//     useGetMovieGenresQuery,
//     useGetMovieLanguagesQuery,
//     useGetMoviesQuery,
// } from '@services/movieApi';

// export const MovieList = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//     const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
//     const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
//     const [cursor, setCursor] = useState<string | null>(null);

//     // Fetch movies with filters + pagination
//     const { data, isLoading, isFetching } = useGetMoviesQuery({
//         languages: selectedLanguages,
//         genres: selectedGenres,
//         cursor,
//     });

//     const { data: languages = [] } = useGetMovieLanguagesQuery();
//     const { data: genres = [] } = useGetMovieGenresQuery();

//     const handleNext = () => {
//         if (data?.next) {
//             const nextCursor = new URL(data.next).searchParams.get('cursor');
//             setCursor(nextCursor);
//         }
//     };

//     const handlePrevious = () => {
//         if (data?.previous) {
//             const prevCursor = new URL(data.previous).searchParams.get(
//                 'cursor',
//             );
//             setCursor(prevCursor);
//         }
//     };

//     const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

//     return (
//         <Box sx={{ p: { xs: 2, md: 4 }}}>
//             <Typography variant="h5" fontWeight="bold" mb={3}>
//                 All Movies
//             </Typography>

//             {/* <Box sx={{display:'flex'}}> */}
//             {/* Desktop Filters */}
//             {!isMobile && (
//                 <MovieFiltersDesktop
//                     availableLanguages={languages}
//                     availableGenres={genres}
//                     selectedLanguages={selectedLanguages}
//                     selectedGenres={selectedGenres}
//                     setSelectedLanguages={setSelectedLanguages}
//                     setSelectedGenres={setSelectedGenres}
//                 />
//             )}
//            {/* <Box> */}
//             {/* Movies Grid */}
//             {/* <Box mt={3} sx={{minWidth:{lg:'1110px',md:0}}}> */}
//             <Box mt={3} >
//                 {isLoading || isFetching ? (
//                     <CircularProgress sx={{ display: 'block', m: 'auto' }} />
//                 ) : data?.results?.length ? (
//                     <MovieGrid movies={data.results} />
//                 ) : (
//                     <Typography
//                         variant="body1"
//                         color="text.secondary"
//                         sx={{ textAlign: 'center', mt: 4 }}
//                     >
//                         No movies found
//                     </Typography>
//                 )}
//             </Box>

//             {/* Pagination */}
//             {data && (
//                 <Box
//                     mt={4}
//                     display="flex"
//                     justifyContent="center"
//                     alignItems="center"
//                     gap={2}
//                 >
//                     <Button
//                         variant="outlined"
//                         disabled={!data.previous}
//                         onClick={handlePrevious}
//                     >
//                         Previous
//                     </Button>
//                     <Button
//                         variant="contained"
//                         disabled={!data.next}
//                         onClick={handleNext}
//                     >
//                         Next
//                     </Button>
//                 </Box>
//             )}

//             {/* Mobile Filter Floating Button */}
//             {isMobile && (
//                 <>
//                     <Fab
//                         color="primary"
//                         aria-label="filter"
//                         sx={{
//                             position: 'fixed',
//                             bottom: 16,
//                             right: 16,
//                             boxShadow: 4,
//                         }}
//                         onClick={() => setMobileFilterOpen(true)}
//                     >
//                         <FilterListIcon />
//                     </Fab>

//                     <MovieFiltersMobile
//                         open={mobileFilterOpen}
//                         onClose={() => setMobileFilterOpen(false)}
//                         availableLanguages={languages}
//                         availableGenres={genres}
//                         selectedLanguages={selectedLanguages}
//                         selectedGenres={selectedGenres}
//                         setSelectedLanguages={setSelectedLanguages}
//                         setSelectedGenres={setSelectedGenres}
//                     />
//                 </>
//             )}
//             {/* </Box> */}
//            {/* </Box> */}
//         </Box>
//     );
// };

//Without the extra box

// import { useState } from 'react';

// import FilterListIcon from '@mui/icons-material/FilterList';
// import {
//     Box,
//     Button,
//     CircularProgress,
//     Fab,
//     Typography,
//     useMediaQuery,
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// import { MovieGrid } from '@components';
// import { MovieFiltersDesktop } from '@pages';
// import { MovieFiltersMobile } from '@pages';
// import {
//     useGetMovieGenresQuery,
//     useGetMovieLanguagesQuery,
//     useGetMoviesQuery,
// } from '@services/movieApi';

// export const MovieList = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//     const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
//     const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
//     const [cursor, setCursor] = useState<string | null>(null);

//     // Fetch movies with filters + pagination
//     const { data, isLoading, isFetching } = useGetMoviesQuery({
//         languages: selectedLanguages,
//         genres: selectedGenres,
//         cursor,
//     });

//     const { data: languages = [] } = useGetMovieLanguagesQuery();
//     const { data: genres = [] } = useGetMovieGenresQuery();

//     const handleNext = () => {
//         if (data?.next) {
//             const nextCursor = new URL(data.next).searchParams.get('cursor');
//             setCursor(nextCursor);
//         }
//     };

//     const handlePrevious = () => {
//         if (data?.previous) {
//             const prevCursor = new URL(data.previous).searchParams.get(
//                 'cursor',
//             );
//             setCursor(prevCursor);
//         }
//     };

//     const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

//     return (
//         <Box sx={{ p: { xs: 2, md: 4 }}}>
//             <Typography variant="h5" fontWeight="bold" mb={3}>
//                 All Movies
//             </Typography>

//             {/* Desktop Filters */}
//             {!isMobile && (
//                 <MovieFiltersDesktop
//                     availableLanguages={languages}
//                     availableGenres={genres}
//                     selectedLanguages={selectedLanguages}
//                     selectedGenres={selectedGenres}
//                     setSelectedLanguages={setSelectedLanguages}
//                     setSelectedGenres={setSelectedGenres}
//                 />
//             )}
//             {/* Movies Grid */}
//             <Box mt={3} >
//                 {isLoading || isFetching ? (
//                     <CircularProgress sx={{ display: 'block', m: 'auto' }} />
//                 ) : data?.results?.length ? (
//                     <MovieGrid movies={data.results} />
//                 ) : (
//                     <Typography
//                         variant="body1"
//                         color="text.secondary"
//                         sx={{ textAlign: 'center', mt: 4 }}
//                     >
//                         No movies found
//                     </Typography>
//                 )}
//             </Box>

//             {/* Pagination */}
//             {data && (
//                 <Box
//                     mt={4}
//                     display="flex"
//                     justifyContent="center"
//                     alignItems="center"
//                     gap={2}
//                 >
//                     <Button
//                         variant="outlined"
//                         disabled={!data.previous}
//                         onClick={handlePrevious}
//                     >
//                         Previous
//                     </Button>
//                     <Button
//                         variant="contained"
//                         disabled={!data.next}
//                         onClick={handleNext}
//                     >
//                         Next
//                     </Button>
//                 </Box>
//             )}

//             {/* Mobile Filter Floating Button */}
//             {isMobile && (
//                 <>
//                     <Fab
//                         color="primary"
//                         aria-label="filter"
//                         sx={{
//                             position: 'fixed',
//                             bottom: 16,
//                             right: 16,
//                             boxShadow: 4,
//                         }}
//                         onClick={() => setMobileFilterOpen(true)}
//                     >
//                         <FilterListIcon />
//                     </Fab>

//                     <MovieFiltersMobile
//                         open={mobileFilterOpen}
//                         onClose={() => setMobileFilterOpen(false)}
//                         availableLanguages={languages}
//                         availableGenres={genres}
//                         selectedLanguages={selectedLanguages}
//                         selectedGenres={selectedGenres}
//                         setSelectedLanguages={setSelectedLanguages}
//                         setSelectedGenres={setSelectedGenres}
//                     />
//                 </>
//             )}
//         </Box>
//     );
// };

import { useState } from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import {
    // Box,
    // Button,
    // CircularProgress,
    // Fab,
    Box,
    Typography,
    useMediaQuery,
} from '@mui/material';
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
    MoviesGridWrapper,
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
            <Box sx={{ display: { md: 'flex', sm: 'block' } }}>
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
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <MoviesGridWrapper>
                        {isLoading || isFetching ? (
                            <CenteredLoader />
                        ) : data?.results?.length ? (
                            <MovieGrid movies={data.results} />
                        ) : (
                            <Typography
                                align="center"
                                color="text.secondary"
                                mt={4}
                            >
                                No movies found
                            </Typography>
                        )}
                    </MoviesGridWrapper>

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
                </Box>
            </Box>
            {isMobile && (
                <>
                    <FilterFab
                        color="primary"
                        onClick={() => setMobileFilterOpen(true)}
                    >
                        <FilterListIcon />
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
