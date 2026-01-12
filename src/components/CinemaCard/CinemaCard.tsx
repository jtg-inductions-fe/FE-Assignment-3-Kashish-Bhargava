import { useNavigate } from 'react-router-dom';

import CinemaPoster from '@assets/images/cinemas.jpg';
import { ROUTES } from '@constant';
import type { Cinema } from '@services/CinemaApi/cinemaApi.types';

import {
    StyledCinemaCard,
    StyledCinemaCardMedia,
    StyledCinemaContent,
    StyledCinemaName,
    StyledLocationText,
} from './CinemaCard.styles';

export const CinemaCard = ({ cinema }: { cinema: Cinema }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        void navigate(`${ROUTES.CINEMAS}/${cinema.id}`);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleCardClick();
        }
    };

    return (
        <StyledCinemaCard
            tabIndex={0}
            onClick={handleCardClick}
            onKeyDown={handleKeyPress}
            role="button"
        >
            <StyledCinemaCardMedia image={CinemaPoster} title={cinema.name} />
            <StyledCinemaContent>
                <StyledCinemaName variant="h2" color="secondary.dark">
                    {cinema.name}
                </StyledCinemaName>
                <StyledLocationText variant="h3" color="text.secondary">
                    {cinema.location}
                </StyledLocationText>
            </StyledCinemaContent>
        </StyledCinemaCard>
    );
};
