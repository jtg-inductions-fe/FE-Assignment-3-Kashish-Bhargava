import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';

import DummyPoster from '@assets/images/movie-poster.png';
import { ROUTES } from '@constant';
import { capitalizeArray } from '@utils';

import {
    MovieName,
    StyledCard,
    StyledCardContent,
    StyledCardMedia,
} from './MovieCard.styles';
import { MovieCardProps } from './MovieCard.types';

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
            <StyledCardMedia image={DummyPoster} title={movie.name} />
            <StyledCardContent>
                <MovieName>{movie.name}</MovieName>
                <Typography variant="body1" color="text.secondary">
                    {capitalizeArray(movie.genres)?.join(', ')}
                </Typography>
            </StyledCardContent>
        </StyledCard>
    );
};
