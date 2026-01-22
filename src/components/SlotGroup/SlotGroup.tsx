import { Box, Divider, Typography } from '@mui/material';

import { useSlotGroupStyles } from './SlotGroup.styles';
import { SlotGroupProps } from './SlotGroup.types';
import { SlotItem } from '../SlotItem/SlotItem';

export const SlotGroup = (props: SlotGroupProps) => {
    //Props
    const { title, subtitle, slots } = props;

    //Styles using custom hook
    const { classes } = useSlotGroupStyles();

    return (
        <>
            <Box
                className={classes.container}
                display="flex"
                justifyContent="flex-start"
            >
                {/*title and subtitle section*/}
                <Box display="flex" flexDirection="column" gap={8}>
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
                {/*Slots container*/}
                <Box display="flex" gap={12} flexWrap="wrap">
                    {slots.map((slot) => (
                        <SlotItem key={slot.id} startTime={slot.start_time} />
                    ))}
                </Box>
            </Box>
            <Divider />
        </>
    );
};
