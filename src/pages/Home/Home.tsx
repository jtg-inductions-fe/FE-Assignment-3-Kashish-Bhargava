import { useNavigate } from 'react-router-dom';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CircularProgress, Typography } from '@mui/material';

import BrowseByCinemaImage from '@assets/images/browse-by-cinema.svg';
import MovieBanner from '@assets/images/movie-banner.png';
import { GridLayout, MovieCard } from '@components';
import { GRID_CONSTANTS, ROUTES } from '@constant';
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
    //Used for navigation between routes
    const navigate = useNavigate();

    //Fetch latest movies for homepage
    const { data: movies = [], isLoading, isError } = useGetLatestMoviesQuery();

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

    return (
        <HomeLayout>
            {/*Top banner section*/}
            <HomePageBanner>
                <StyledImage src={MovieBanner} alt="Movie Banner" />
            </HomePageBanner>
            {/*Latest movies section*/}
            <HomePageMainSection>
                <HomePageHeading>
                    <Typography variant="h2" color="text.primary">
                        Latest Movies
                    </Typography>
                    {/*Navigate to all movies page*/}
                    <SeeAllButton
                        onClick={() => void navigate(ROUTES.MOVIES)}
                        aria-label="See all movies"
                    >
                        <Typography variant="body1">See All</Typography>
                        <NavigateNextIcon fontSize="medium" />
                    </SeeAllButton>
                </HomePageHeading>
                {/*Movies grid layout*/}
                <GridLayout columns={gridColumns}>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </GridLayout>
            </HomePageMainSection>
            {/*Browse by cinema section*/}
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
