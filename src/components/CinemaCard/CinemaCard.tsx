import { useNavigate } from 'react-router-dom';

import { CardActionArea, Typography } from '@mui/material';

import CinemaPoster from '@assets/images/cinemas.jpg';
import { ROUTES } from '@constant';
import type { Cinema } from '@models/cinema';

import {
    StyledCinemaCard,
    StyledCinemaCardMedia,
    StyledCinemaContent,
} from './CinemaCard.styles';

export const CinemaCard = ({ cinema }: { cinema: Cinema }) => {
    //Navigation
    const navigate = useNavigate();

    return (
        <StyledCinemaCard>
            <CardActionArea
                onClick={() =>
                    void navigate(
                        `${ROUTES.CINEMA_MOVIE_SLOTS.replace(':slug', cinema.slug)}`,
                    )
                }
            >
                {/*Cinema Poster*/}
                <StyledCinemaCardMedia
                    image={CinemaPoster}
                    title={cinema.name}
                />
                <StyledCinemaContent>
                    {/*Cinema Name*/}
                    <Typography
                        variant="h2"
                        color="secondary.dark"
                        textTransform="capitalize"
                    >
                        {cinema.name}
                    </Typography>
                    {/*Cinema Location*/}
                    <Typography
                        variant="h3"
                        color="text.secondary"
                        textTransform="capitalize"
                    >
                        {cinema.location}
                    </Typography>
                </StyledCinemaContent>
            </CardActionArea>
        </StyledCinemaCard>
    );
};
