import { Typography } from '@mui/material';

import DummyPoster from '@assets/images/movie-poster.png';

import {
    MovieName,
    StyledCard,
    StyledCardContent,
    StyledCardMedia,
} from './MovieCard.styles';
import { MovieCardProps } from './movieCard.types';

export const MovieCard = (props: MovieCardProps) => {
    const { movie } = props;

    return (
        <StyledCard tabIndex={0}>
            <StyledCardMedia image={DummyPoster} title={movie.name} />
            <StyledCardContent>
                <MovieName>{movie.name}</MovieName>
                <Typography variant="body1" color="text.secondary">
                    {movie.genres?.join(', ') || 'No genres available'}
                </Typography>
            </StyledCardContent>
        </StyledCard>
    );
};
