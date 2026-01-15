import { Box, Typography } from '@mui/material';

import { useSlotGroupStyles } from './SlotGroup.styles';
import { SlotGroupProps } from './SlotGroup.types';
import { SlotItem } from '../SlotItem/SlotItem';

export const SlotGroup = ({ title, subtitle, slots }: SlotGroupProps) => {
    const { classes } = useSlotGroupStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.left}>
                <Typography
                    variant="h2"
                    textTransform="capitalize"
                    color="common.black"
                >
                    {title}
                </Typography>
                {subtitle && (
                    <Typography variant="h3" textTransform="capitalize">
                        {subtitle}
                    </Typography>
                )}
            </Box>

            <Box className={classes.right}>
                {slots.map((slot) => (
                    <SlotItem key={slot.id} startTime={slot.start_time} />
                ))}
            </Box>
        </Box>
    );
};
