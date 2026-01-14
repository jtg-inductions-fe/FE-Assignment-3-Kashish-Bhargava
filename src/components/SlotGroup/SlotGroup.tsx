import { Typography } from '@mui/material';

import { useSlotGroupStyles } from './SlotGroup.styles';
import { SlotGroupProps } from './SlotGroup.types';
import { SlotItem } from '../SlotItem/SlotItem';

export const SlotGroup = ({ title, subtitle, slots }: SlotGroupProps) => {
    const { classes } = useSlotGroupStyles();

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <Typography variant="h6">{title}</Typography>
                {subtitle && (
                    <Typography variant="body2" color="text.secondary">
                        {subtitle}
                    </Typography>
                )}
            </div>

            <div className={classes.right}>
                {slots.map((slot) => (
                    <SlotItem key={slot.id} startTime={slot.start_time} />
                ))}
            </div>
        </div>
    );
};
