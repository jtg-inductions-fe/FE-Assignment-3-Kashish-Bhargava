import dummyPoster from '@assets/images/movie-poster.png';

import {
    GenreText,
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
            <StyledCardMedia image={dummyPoster} title={movie.name} />
            <StyledCardContent>
                <MovieName>{movie.name}</MovieName>
                <GenreText>{movie.genres.join(', ')}</GenreText>
            </StyledCardContent>
        </StyledCard>
    );
};
