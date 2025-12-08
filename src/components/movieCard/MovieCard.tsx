import React from 'react';

import { useNavigate } from 'react-router-dom';

import dummyPoster from '@assets/images/movie-poster.png';
import { ROUTES } from '@constant';

import {
    GenreText,
    MovieName,
    StyledCard,
    StyledCardContent,
    StyledCardMedia,
} from './MovieCard.styles';
import { MovieCardProps } from './movieCard.types';

export const MovieCard = ({ movie }: MovieCardProps) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        void navigate(`${ROUTES.MOVIES}/${movie.slug}`);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleCardClick();
        }
    };
    return (
        <StyledCard
            tabIndex={0}
            onClick={handleCardClick}
            onKeyDown={handleKeyPress}
            role="button"
        >
            <StyledCardMedia image={dummyPoster} title={movie.name} />
            <StyledCardContent>
                <MovieName>{movie.name}</MovieName>
                <GenreText>{movie.genres.join(', ')}</GenreText>
            </StyledCardContent>
        </StyledCard>
    );
};
