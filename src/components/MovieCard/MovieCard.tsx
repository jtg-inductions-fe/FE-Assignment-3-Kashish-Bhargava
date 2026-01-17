import { useNavigate } from 'react-router-dom';

import { CardActionArea, Typography } from '@mui/material';

import DummyPoster from '@assets/images/movie-poster.png';
import { ROUTES } from '@constant';

import {
    StyledCard,
    StyledCardContent,
    StyledCardMedia,
} from './MovieCard.styles';
import { MovieCardProps } from './MovieCard.types';

/**
 * Movie card component for displaying movie poster, title and genres.
 * @param props - Props for the movie card component.
 * @returns The rendered movie card component.
 */
export const MovieCard = (props: MovieCardProps) => {
    /**
     * Props for the movie card component.
     */
    const { movie } = props;

    /**
     * Hook for navigating programmatically.
     */
    const navigate = useNavigate();

    return (
        <StyledCard>
            <CardActionArea onClick={() => void navigate(ROUTES.MOVIES)}>
                <StyledCardMedia image={DummyPoster} title={movie.name} />
                <StyledCardContent>
                    <Typography
                        variant="h3"
                        color="secondary.dark"
                        fontWeight={600}
                    >
                        {movie.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        textTransform="capitalize"
                    >
                        {movie.genres?.join(', ')}
                    </Typography>
                </StyledCardContent>
            </CardActionArea>
        </StyledCard>
    );
};
