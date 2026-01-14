import dayjs from 'dayjs';

import { calculateFillPercentage, getSlotFillStatus } from '@utils';

import { useSlotItemStyles } from './SlotItem.styles';
import { SlotItemProps } from './SlotItem.types';

export const SlotItem = ({ startTime, metrics }: SlotItemProps) => {
    const fillPercentage = metrics
        ? calculateFillPercentage(metrics.bookedSeats, metrics.totalSeats)
        : 0;
    const status = getSlotFillStatus(fillPercentage);
    const { classes } = useSlotItemStyles({ status });

    return (
        <div className={classes.slot}>{dayjs(startTime).format('hh:mm A')}</div>
    );
};
