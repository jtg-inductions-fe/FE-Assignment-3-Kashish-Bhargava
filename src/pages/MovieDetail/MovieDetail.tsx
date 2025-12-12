import { useNavigate, useParams } from 'react-router-dom';

import ShareIcon from '@mui/icons-material/Share';
import { Box, CircularProgress, Typography } from '@mui/material';

import DummyPoster from '@assets/images/movie-poster.png';
import { Button } from '@components';
import { ROUTES } from '@constant';
import { useGetMovieBySlugQuery } from '@services/MovieApi';
import { formatDuration, formatReleaseDate } from '@utils';
import { capitalizeArray } from '@utils';

import {
    ActionButtons,
    ChipsContainer,
    ContentSection,
    DescriptionSection,
    FailedToLoadText,
    LanguageChip,
    LoadingBox,
    MovieDetailBottomContentSection,
    MovieDetailContainer,
    MovieDetailTopContentSection,
    MovieDetailTopSection,
    MovieInfo,
    MovieLanguageSection,
    Poster,
} from './MovieDetail.styles';

export const MovieDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const {
        data: movie,
        isLoading,
        isError,
    } = useGetMovieBySlugQuery(slug ?? '', { skip: !slug });

    if (isLoading)
        return (
            <LoadingBox>
                <CircularProgress />
            </LoadingBox>
        );

    if (isError || !movie)
        return (
            <FailedToLoadText>Failed to load movie details.</FailedToLoadText>
        );

    const handleShare = () => {
        if (navigator.share) {
            void navigator.share({
                title: movie.name,
                text: movie.description,
                url: window.location.href,
            });
        } else {
            void navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <MovieDetailContainer>
            <MovieDetailTopSection>
                <MovieDetailTopContentSection>
                    {/* Movie Poster */}
                    <Poster src={DummyPoster} alt={movie.name} />

                    {/* Right Section */}
                    <ContentSection>
                        <Typography variant="h1" color="common.white">
                            {movie.name}
                        </Typography>

                        {/*Info — Date | Duration | Genres*/}
                        <MovieInfo>
                            <Typography variant="h3">
                                {`${formatReleaseDate(movie.release_date)} • ${formatDuration(movie.duration)} • ${capitalizeArray(movie.genres).join(', ')}`}
                            </Typography>
                        </MovieInfo>

                        <ActionButtons>
                            <Button
                                variant="contained"
                                onClick={() =>
                                    void navigate(
                                        `${ROUTES.CINEMAS}?movie=${movie.id}`,
                                    )
                                }
                            >
                                Book Tickets
                            </Button>

                            <Button
                                variant="outlined"
                                onClick={handleShare}
                                startIcon={<ShareIcon />}
                            >
                                Share
                            </Button>
                        </ActionButtons>
                    </ContentSection>
                </MovieDetailTopContentSection>
            </MovieDetailTopSection>
            <Box>
                <MovieDetailBottomContentSection>
                    <DescriptionSection>
                        <Typography variant="h2" color="common.black">
                            About the movie
                        </Typography>
                        <Typography variant="subtitle2">
                            {movie.description}
                        </Typography>
                    </DescriptionSection>
                    <MovieLanguageSection>
                        <Typography variant="h2" color="common.black">
                            Language
                        </Typography>
                        <ChipsContainer>
                            {capitalizeArray(movie.languages).map((lang) => (
                                <LanguageChip key={lang} label={lang} />
                            ))}
                        </ChipsContainer>
                    </MovieLanguageSection>
                </MovieDetailBottomContentSection>
            </Box>
        </MovieDetailContainer>
    );
};
