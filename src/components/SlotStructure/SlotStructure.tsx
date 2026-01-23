import dayjs from 'dayjs';

import { Box, Chip, Divider, Typography } from '@mui/material';

import { formatDuration } from '@utils';

import { useSlotStructureStyles } from './SlotStructure.styles';
import { SlotStructureProps } from './SlotStructure.types';

export const SlotStructure = (props: SlotStructureProps) => {
    //Props
    const { title, duration, genres, languages, selectedDate, onDateChange } =
        props;

    //Styles using custom hook
    const { classes } = useSlotStructureStyles();

    //Generate a list of 7 days starting from today
    const dates = Array.from({ length: 7 }).map((_, i) =>
        dayjs().add(i, 'day'),
    );

    return (
        <Box display="flex" flexDirection="column">
            {/*Header section containing title and movie details*/}
            <Box
                className={classes.header}
                display="flex"
                flexDirection="column"
                gap={12}
            >
                <Typography
                    variant="h1"
                    color="common.black"
                    textTransform="capitalize"
                >
                    {title}
                </Typography>

                <Box
                    display="flex"
                    gap={8}
                    flexWrap="wrap"
                    textTransform="capitalize"
                >
                    {duration && (
                        <Chip
                            className={classes.movieDetailChip}
                            label={`Movie Runtime: ${formatDuration(duration)}`}
                            variant="outlined"
                        />
                    )}
                    {genres?.map((genre) => (
                        <Chip
                            className={classes.movieDetailChip}
                            key={genre}
                            label={genre}
                            variant="outlined"
                        />
                    ))}
                    {languages?.map((language) => (
                        <Chip
                            className={classes.movieDetailChip}
                            key={language}
                            label={language}
                            variant="outlined"
                        />
                    ))}
                </Box>
            </Box>
            <Divider />
            {/*Date selection row*/}
            <Box className={classes.dateRow} display="flex" gap={2}>
                {dates.map((date) => {
                    {
                        /*Disable dates beyond 3 days from today*/
                    }
                    const isDisabled = date.diff(dayjs(), 'day') > 3;

                    return (
                        <Chip
                            className={classes.dateChip}
                            key={date.toString()}
                            label={date.format('ddd DD MMM')}
                            classes={{
                                label: classes.chipLabel,
                            }}
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
            </Box>
            <Divider />
            {/*Slot availability status indicators*/}
            <Box
                className={classes.statusRow}
                display="flex"
                justifyContent="flex-end"
                gap={12}
                marginBottom={20}
            >
                <Box display="flex" alignItems="center" gap={4}>
                    <Box
                        borderRadius="50%"
                        bgcolor="success.main"
                        width={12}
                        height={12}
                    ></Box>
                    <Typography variant="body1">Available</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={4}>
                    <Box
                        borderRadius="50%"
                        bgcolor="warning.main"
                        width={12}
                        height={12}
                    ></Box>
                    <Typography variant="body1">Fast Filling</Typography>
                </Box>
            </Box>
        </Box>
    );
};
