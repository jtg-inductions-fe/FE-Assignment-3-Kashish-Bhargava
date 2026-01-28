import { List, ListItemButton, Typography } from '@mui/material';

import { toggleValue } from '@utils';

import { StyledCheckbox } from './FilterList.styles';
import { FilterListProps } from './FilterList.types';

/**Component for filters in mobile view */
export const FilterList = (props: FilterListProps) => {
    const { title, options, selectedValues, setSelectedValues } = props;

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
                        onClick={() =>
                            setSelectedValues((prev) =>
                                toggleValue(prev, option),
                            )
                        }
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
