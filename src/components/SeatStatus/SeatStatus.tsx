import { Box, Typography } from '@mui/material';

import { theme } from '@theme';

import { STATUS_ITEMS } from './SeatStatus.config';
import { useSeatStatusStyles } from './SeatStatus.styles';

export const SeatStatus = () => {
    // Styles using custom hook
    const { classes } = useSeatStatusStyles();

    return (
        //Seat Status Indicator
        <Box
            bgcolor="secondary.dark"
            display="flex"
            justifyContent="center"
            gap={32}
            padding={8}
            boxShadow={theme.shadows[4]}
            marginBottom={20}
        >
            {STATUS_ITEMS.map(({ label, status }) => (
                //Single status Indicator
                <Box key={status} display="flex" alignItems="center" gap={4}>
                    {/*Coloured Status Square*/}
                    <Box
                        className={`${classes[status]}`}
                        width={14}
                        height={14}
                    />
                    {/*Status Label*/}
                    <Typography variant="h3">{label}</Typography>
                </Box>
            ))}
        </Box>
    );
};
