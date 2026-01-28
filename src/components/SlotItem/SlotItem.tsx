import dayjs from 'dayjs';

import { Box, Button, Typography } from '@mui/material';

import { calculateFillPercentage, getSlotFillStatus } from '@utils';

import { useSlotItemStyles } from './SlotItem.styles';
import { SlotItemProps } from './SlotItem.types';

export const SlotItem = (props: SlotItemProps) => {
    //Props
    const { startTime, metrics } = props;

    //Calculate percentage of seats filled
    const fillPercentage = metrics
        ? calculateFillPercentage(metrics.bookedSeats, metrics.totalSeats)
        : 0;

    //Determine the Slot Availability status based on fillPercentage
    const status = getSlotFillStatus(fillPercentage);

    //Styles using custom hook
    const { classes } = useSlotItemStyles({ status });

    return (
        <Box className={classes.slot} component={Button} alignContent="center">
            <Typography variant="h3">
                {dayjs(startTime).format('hh:mm A')}
            </Typography>
        </Box>
    );
};
