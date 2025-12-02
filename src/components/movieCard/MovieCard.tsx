import dummyPoster from '@assets/images/movie-poster.png';

import {
    GenreText,
    MovieName,
    StyledCard,
    StyledCardContent,
    StyledCardMedia,
} from './MovieCard.styles';

interface Movie {
    id: number;
    name: string;
    genres: string[];
    languages: string[];
    description: string;
    duration: string;
    release_date: string;
}

interface MovieCardProps {
    movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => (
    <StyledCard>
        <StyledCardMedia image={dummyPoster} title={movie.name} />
        <StyledCardContent>
            <MovieName>{movie.name}</MovieName>
            <GenreText>{movie.genres.join(', ')}</GenreText>
        </StyledCardContent>
    </StyledCard>
);
