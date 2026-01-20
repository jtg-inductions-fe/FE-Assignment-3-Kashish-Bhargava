import { useNavigate } from 'react-router-dom';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CircularProgress, Typography } from '@mui/material';

import BrowseByCinemaImage from '@assets/images/browse-by-cinema.svg';
import MovieBanner from '@assets/images/movie-banner.png';
import { AppLink, Button, GridLayout, MovieCard } from '@components';
import { GRID_CONSTANTS, ROUTES } from '@constant';
import { useGetMoviesQuery } from '@services/MovieApi/movieApi';

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
    StyledCoverImage,
} from './Home.styles';

export const Home = () => {
    //Used for navigation between routes
    const navigate = useNavigate();

    //Fetch latest movies for homepage
    const { data, isLoading, isError } = useGetMoviesQuery({ latest: true });
    const movies = data?.results || [];

    //Grid column configuration
    const gridColumns = GRID_CONSTANTS.DEFAULT_GRID;

    //Shows loader while data is being fetched
    if (isLoading) {
        return (
            <LoadingBox>
                <CircularProgress />
            </LoadingBox>
        );
    }

    //Show error state if API fails
    if (isError) {
        return <ErrorMessageBox>Failed to load movies</ErrorMessageBox>;
    }

    //Show empty state if no movies available
    if (movies.length === 0) {
        return (
            <ErrorMessageBox>No movies available at the moment</ErrorMessageBox>
        );
    }

    return (
        <HomeLayout>
            {/*Top banner section*/}
            <HomePageBanner>
                <StyledCoverImage src={MovieBanner} alt="Movie Banner" />
            </HomePageBanner>
            {/*Latest movies section*/}
            <HomePageMainSection>
                <HomePageHeading>
                    <Typography variant="h2" color="text.primary">
                        Latest Movies
                    </Typography>
                    {/*Navigate to all movies page*/}
                    <AppLink
                        to={ROUTES.MOVIES}
                        label="See All"
                        variant="body1"
                        endIcon={<NavigateNextIcon fontSize="medium" />}
                        color="primary.main"
                        aria-label="See all movies"
                    />
                </HomePageHeading>
                {/*Movies grid layout*/}
                <GridLayout columns={gridColumns}>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </GridLayout>
            </HomePageMainSection>
            {/*Browse by cinema section*/}
            <CinemaBlock
                onClick={() => void navigate(ROUTES.CINEMAS)}
                component={Button}
            >
                <CinemaBlockImage>
                    <StyledCoverImage
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
