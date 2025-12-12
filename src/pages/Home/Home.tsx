import { useNavigate } from 'react-router-dom';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CircularProgress, Typography } from '@mui/material';

import BrowseByCinemaImage from '@assets/images/browse-by-cinema.svg';
import MovieBanner from '@assets/images/movie-banner.png';
import { GridLayout, MovieCard } from '@components';
import { ROUTES } from '@constant';
import { useGetLatestMoviesQuery } from '@services/MovieApi/movieApi';

import {
    BrowseByCinema,
    BrowseByCinemaDescription,
    BrowseByCinemaHeading,
    CinemaBlock,
    CinemaBlockContent,
    CinemaBlockImage,
    ErrorMessageBox,
    HomeLayout,
    HomePageBanner,
    HomePageHeading,
    HomePageMainSection,
    LoadingBox,
    SeeAllButton,
    StyledImage,
} from './Home.styles';

export const Home = () => {
    const navigate = useNavigate();
    const { data: movies = [], isLoading, isError } = useGetLatestMoviesQuery();
    const gridColumns = { xs: 6, sm: 4, md: 3, lg: 2 };

    return (
        <HomeLayout>
            <HomePageBanner>
                <StyledImage src={MovieBanner} alt="Movie Banner" />
            </HomePageBanner>
            <HomePageMainSection>
                <HomePageHeading>
                    <Typography variant="h2" color="text.primary">
                        Latest Movies
                    </Typography>
                    <SeeAllButton
                        onClick={() => void navigate(ROUTES.MOVIES)}
                        aria-label="See all movies"
                    >
                        <Typography variant="body1">See All</Typography>
                        <NavigateNextIcon fontSize="medium" />
                    </SeeAllButton>
                </HomePageHeading>

                {isLoading ? (
                    <LoadingBox>
                        <CircularProgress />
                    </LoadingBox>
                ) : isError ? (
                    <ErrorMessageBox>Failed to load movies</ErrorMessageBox>
                ) : (
                    <GridLayout
                        items={movies}
                        columns={gridColumns}
                        renderItem={(movie) => <MovieCard movie={movie} />}
                    />
                )}
            </HomePageMainSection>
            <CinemaBlock onClick={() => void navigate(ROUTES.CINEMAS)}>
                <CinemaBlockImage>
                    <StyledImage
                        src={BrowseByCinemaImage}
                        alt="Browse by cinema"
                    />
                </CinemaBlockImage>
                <CinemaBlockContent>
                    <BrowseByCinema>
                        <BrowseByCinemaHeading>
                            BROWSE BY CINEMA
                        </BrowseByCinemaHeading>
                        <NavigateNextIcon fontSize="medium" />
                    </BrowseByCinema>
                    <BrowseByCinemaDescription>
                        See what&apos;s playing in cinemas near you
                    </BrowseByCinemaDescription>
                </CinemaBlockContent>
            </CinemaBlock>
        </HomeLayout>
    );
};
