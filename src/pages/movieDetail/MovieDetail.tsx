import { useNavigate, useParams } from 'react-router-dom';

import ShareIcon from '@mui/icons-material/Share';
import { CircularProgress } from '@mui/material';

import dummyPoster from '@assets/images/movie-poster.png';
import { Button } from '@components';
import { ROUTES } from '@constant';
import { useGetMovieBySlugQuery } from '@services/movieApi';
import { formatDuration, formatReleaseDate } from '@utils';

import {
    ActionButtons,
    ChipsContainer,
    ContentSection,
    DescriptionContent,
    DescriptionSection,
    DescriptionTitle,
    FailedToLoadText,
    LanguageChip,
    LoadingBox,
    MovieDetailBottomSection,
    MovieDetailContainer,
    MovieDetailTopSection,
    MovieInfo,
    MovieInfoItem,
    MovieLanguageHeading,
    MovieLanguageSection,
    Poster,
    Title,
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
                {/* Movie Poster */}
                <Poster src={dummyPoster} alt={movie.name} />

                {/* Right Section */}
                <ContentSection>
                    <Title>{movie.name}</Title>

                    {/*Info — Date | Duration | Genres*/}
                    <MovieInfo>
                        <MovieInfoItem>
                            {`${formatReleaseDate(movie.release_date)} | ${formatDuration(movie.duration)} | ${movie.genres.join(', ')}`}
                        </MovieInfoItem>
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
            </MovieDetailTopSection>
            <MovieDetailBottomSection>
                <DescriptionSection>
                    <DescriptionTitle>Description</DescriptionTitle>
                    <DescriptionContent>{movie.description}</DescriptionContent>
                </DescriptionSection>
                <MovieLanguageSection>
                    <MovieLanguageHeading>Language</MovieLanguageHeading>
                    <ChipsContainer>
                        {movie.languages.map((lang) => (
                            <LanguageChip key={lang} label={lang} />
                        ))}
                    </ChipsContainer>
                </MovieLanguageSection>
            </MovieDetailBottomSection>
        </MovieDetailContainer>
    );
};
