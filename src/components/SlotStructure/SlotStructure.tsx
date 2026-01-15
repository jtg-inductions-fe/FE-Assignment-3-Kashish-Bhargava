import dayjs from 'dayjs';

import { Chip, Typography } from '@mui/material';

import { formatDuration } from '@utils';

import { useSlotStructureStyles } from './SlotStructure.styles';
import { SlotStructureProps } from './SlotStructure.types';

export const SlotStructure = ({
    title,
    duration,
    genres,
    languages,
    selectedDate,
    onDateChange,
}: SlotStructureProps) => {
    const { classes } = useSlotStructureStyles();
    const dates = Array.from({ length: 7 }).map((_, i) =>
        dayjs().add(i, 'day'),
    );

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography
                    variant="h1"
                    color="common.black"
                    textTransform="capitalize"
                >
                    {title}
                </Typography>

                <div className={classes.chipRow}>
                    {duration && (
                        <Chip
                            className={classes.movieDetailChip}
                            label={`Movie Runtime: ${formatDuration(duration)}`}
                            variant="outlined"
                        />
                    )}
                    {genres?.map((g) => (
                        <Chip
                            className={classes.movieDetailChip}
                            key={g}
                            label={g}
                            variant="outlined"
                        />
                    ))}
                    {languages?.map((l) => (
                        <Chip
                            className={classes.movieDetailChip}
                            key={l}
                            label={l}
                            variant="outlined"
                        />
                    ))}
                </div>
            </div>

            <div className={classes.dateRow}>
                {dates.map((date) => {
                    const isDisabled = date.diff(dayjs(), 'day') > 3;

                    return (
                        <Chip
                            className={classes.dateChip}
                            key={date.toString()}
                            label={date.format('ddd DD MMM')}
                            disabled={isDisabled}
                            color={
                                date.format('YYYY-MM-DD') === selectedDate
                                    ? 'primary'
                                    : 'default'
                            }
                            onClick={() =>
                                !isDisabled &&
                                onDateChange(date.format('YYYY-MM-DD'))
                            }
                        />
                    );
                })}
            </div>
            <div className={classes.statusRow}>
                <div className={classes.availability}>
                    <span className={classes.availabilityIndicator}></span>
                    <Typography variant="body1">Available</Typography>
                </div>
                <div className={classes.fastFilling}>
                    <span className={classes.fastFillingIndicator}></span>
                    <Typography variant="body1">Fast Filling</Typography>
                </div>
            </div>
        </div>
    );
};
