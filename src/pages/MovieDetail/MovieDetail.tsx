import { useNavigate, useParams } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShareIcon from '@mui/icons-material/Share';
import { Box, CircularProgress, IconButton, Typography } from '@mui/material';

import DummyPoster from '@assets/images/movie-poster.png';
import { Button } from '@components';
import { ROUTES } from '@constant';
import { useGetMovieBySlugQuery } from '@services/MovieApi';
import { capitalizeArray, formatDuration, formatReleaseDate } from '@utils';

import {
    DescriptionSection,
    FirstContentSection,
    LanguageChip,
    MovieDetailTopContentSection,
    Poster,
} from './MovieDetail.styles';

export const MovieDetail = () => {
    //Movie slug from URL
    const { slug } = useParams<{ slug: string }>();

    //Fetch movie details by slug
    const {
        data: movie,
        isLoading,
        isError,
    } = useGetMovieBySlugQuery(slug ?? '', { skip: !slug });

    //Navigate
    const navigate = useNavigate();

    //Loading state
    if (isLoading)
        return (
            <Box display="flex" justifyContent="center" marginTop={40}>
                <CircularProgress />
            </Box>
        );

    //Error State
    if (isError || !movie)
        return (
            <Typography
                variant="h1"
                color="primary.main"
                textAlign="center"
                marginTop={40}
            >
                Failed to load movie details.
            </Typography>
        );

    //Share movie
    const handleShare = async () => {
        const url = window.location.href;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: movie.name,
                    text: movie.description,
                    url,
                });

                return;
            }
        } catch {
            // fall through to clipboard fallback
        }

        if (navigator.clipboard?.writeText) {
            try {
                await navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');

                return;
            } catch {
                // fall through to manual copy
            }
        }

        window.prompt('Copy link:', url);
    };

    return (
        <Box display="flex" flexDirection="column" gap={24}>
            <Box bgcolor="common.black">
                <MovieDetailTopContentSection
                    backdrop={DummyPoster}
                    display="flex"
                    flexDirection="column"
                    gap={20}
                    padding={32}
                    maxWidth={1440}
                    margin="auto"
                >
                    <FirstContentSection display="flex" alignItems="flex-start">
                        {/*Go back button*/}
                        <IconButton
                            color="primary"
                            onClick={() => void navigate(-1)}
                            aria-label="Click to go back"
                        >
                            {<ArrowBackIosNewIcon />}
                        </IconButton>
                        {/* Movie Poster */}
                        <Poster
                            src={DummyPoster}
                            alt={movie.name}
                            width="100%"
                        />
                    </FirstContentSection>

                    {/* Movie info and action*/}
                    <Box display="flex" flexDirection="column" gap={16}>
                        {/*Movie Title*/}
                        <Typography variant="h1" color="common.white">
                            {movie.name}
                        </Typography>

                        {/*Info — Date | Duration | Genres*/}
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            gap={8}
                            color="secondary.light"
                        >
                            <Typography variant="h3">
                                {[
                                    formatReleaseDate(movie.release_date),
                                    formatDuration(movie.duration),
                                    capitalizeArray(movie.genres).join(', '),
                                ]
                                    .filter(Boolean)
                                    .join(' • ')}
                            </Typography>
                        </Box>
                        {/*Book Tickets and share buttons*/}
                        <Box display="flex" flexWrap="wrap" gap={8}>
                            <Button
                                variant="contained"
                                onClick={() =>
                                    void navigate(ROUTES.MOVIE_CINEMA_SLOTS)
                                }
                            >
                                Book Tickets
                            </Button>

                            <Button
                                variant="outlined"
                                onClick={() => void handleShare()}
                                startIcon={<ShareIcon />}
                            >
                                Share
                            </Button>
                        </Box>
                    </Box>
                </MovieDetailTopContentSection>
            </Box>
            <Box>
                {/*Bottom content section*/}
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={16}
                    maxWidth={1440}
                    margin="auto"
                    paddingInline={20}
                >
                    {/*Movie Description*/}
                    <DescriptionSection
                        display="flex"
                        flexDirection="column"
                        gap={8}
                    >
                        <Typography variant="h2" color="common.black">
                            About the movie
                        </Typography>
                        <Typography variant="subtitle2">
                            {movie.description}
                        </Typography>
                    </DescriptionSection>
                    {/*Available Languages*/}
                    <Box display="flex" flexDirection="column" gap={16}>
                        <Typography variant="h2" color="common.black">
                            Language
                        </Typography>
                        <Box display="flex" flexWrap="wrap" gap={12}>
                            {capitalizeArray(movie.languages).map((lang) => (
                                <LanguageChip key={lang} label={lang} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
