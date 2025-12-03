import { useNavigate } from 'react-router-dom';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CircularProgress } from '@mui/material';

import BrowseByCinemaImage from '@assets/images/browse-by-cinema.svg';
import MovieBanner from '@assets/images/movie-banner.png';
import { MovieGrid } from '@components';
import { useGetLatestMoviesQuery } from '@services/movieApi';

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
    LoadingBox,
    MovieHeading,
    SeeAll,
    SeeAllText,
    StyledImage,
} from './Home.styles';

export const Home = () => {
    const navigate = useNavigate();
    const { data: movies = [], isLoading, isError } = useGetLatestMoviesQuery();

    return (
        <>
            <HomeLayout>
                <HomePageBanner>
                    <StyledImage
                        src={MovieBanner}
                        alt="Movie Banner"
                    ></StyledImage>
                </HomePageBanner>
                <HomePageHeading>
                    <MovieHeading>Latest Movies</MovieHeading>
                    <SeeAll onClick={() => void navigate('/movies')}>
                        <SeeAllText>See All</SeeAllText>
                        <NavigateNextIcon fontSize="medium" />
                    </SeeAll>
                </HomePageHeading>

                {isLoading ? (
                    <LoadingBox>
                        <CircularProgress />
                    </LoadingBox>
                ) : isError ? (
                    <ErrorMessageBox>Failed to load movies</ErrorMessageBox>
                ) : (
                    <MovieGrid movies={movies} />
                )}
                <CinemaBlock onClick={() => void navigate('/cinemas')}>
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
        </>
    );
};
