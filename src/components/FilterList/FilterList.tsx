import { List, ListItemButton, Typography } from '@mui/material';

import { StyledCheckbox } from './FilterList.styles';
import { FilterListProps } from './FilterList.types';

export const FilterList = (props: FilterListProps) => {
    const { title, options, selectedValues, setSelectedValues } = props;

    //Toggle selection
    const toggleValue = (value: string) =>
        selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];

    return (
        <>
            {/*List Title*/}
            <Typography variant="subtitle1" m={0}>
                {title}
            </Typography>
            {/*List of selectable options*/}
            <List dense disablePadding>
                {options.map((option) => (
                    <ListItemButton
                        disableGutters
                        key={option}
                        onClick={() => setSelectedValues(toggleValue(option))}
                    >
                        <StyledCheckbox
                            checked={selectedValues.includes(option)}
                        />
                        {option}
                    </ListItemButton>
                ))}
            </List>
        </>
    );
};
