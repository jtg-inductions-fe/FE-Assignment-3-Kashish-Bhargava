import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, IconButton, Typography } from '@mui/material';

import { useSeatBookingHeaderStyles } from './SeatBookingHeader.styles';
import { SeatBookingHeaderProps } from './SeatBookingHeader.types';

export const SeatBookingHeader = (props: SeatBookingHeaderProps) => {
    //Props
    const { movieName, cinemaName, date, startTime, cinemaLocation } = props;

    //Styles using custom hook
    const { classes } = useSeatBookingHeaderStyles();

    // Navigation
    const navigate = useNavigate();

    return (
        <Box padding={12}>
            <Box
                maxWidth="1440px"
                margin="0 auto"
                display="flex"
                flexDirection="row"
                gap={2}
                justifyContent="flex-start"
                className={classes.headerDetails}
            >
                <IconButton
                    onClick={() => void navigate(-1)}
                    aria-label="Go back to explore another slot"
                >
                    <ArrowBackIosNewIcon fontSize="medium" />
                </IconButton>
                <Box display="flex" flexDirection="column" gap={8}>
                    {/*Movie Title*/}
                    <Typography variant="h2" color="common.black">
                        {movieName}
                    </Typography>
                    {/*Cinema name, location, date and show time*/}
                    <Typography variant="subtitle1" textTransform="capitalize">
                        {cinemaName}, {cinemaLocation} •&nbsp;
                        {dayjs(date).format('ddd, DD MMM')} •&nbsp;
                        {dayjs(startTime).format('hh:mm A')}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
