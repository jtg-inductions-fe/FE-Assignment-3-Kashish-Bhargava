import { List, ListItemButton, Typography } from '@mui/material';

import { Button } from '@components';

import {
    DrawerContent,
    DrawerHeader,
    ResetAllButton,
    StyledCheckbox,
    StyledDivider,
    StyledDrawer,
} from './MovieFiltersMobile.styles';
import { MovieFiltersMobileProps } from './MovieFiltersMobile.types';

export const MovieFiltersMobile = (props: MovieFiltersMobileProps) => {
    const {
        open,
        onClose,
        availableLanguages,
        availableGenres,
        selectedLanguages,
        selectedGenres,
        setSelectedLanguages,
        setSelectedGenres,
        onApply,
        onReset,
    } = props;

    const toggleValue = (list: string[], value: string) =>
        list.includes(value)
            ? list.filter((v) => v !== value)
            : [...list, value];

    return (
        <StyledDrawer anchor="bottom" open={open} onClose={onClose}>
            <DrawerContent>
                <DrawerHeader>
                    <Typography variant="h2">Filters</Typography>
                    <ResetAllButton onClick={onReset}>Reset All</ResetAllButton>
                </DrawerHeader>

                <Typography variant="subtitle1" m={0}>
                    Languages
                </Typography>
                <List dense disablePadding>
                    {availableLanguages.map((lang) => (
                        <ListItemButton
                            disableGutters
                            key={lang}
                            onClick={() =>
                                setSelectedLanguages(
                                    toggleValue(selectedLanguages, lang),
                                )
                            }
                        >
                            <StyledCheckbox
                                checked={selectedLanguages.includes(lang)}
                            />
                            {lang}
                        </ListItemButton>
                    ))}
                </List>

                <StyledDivider />

                <Typography variant="subtitle1" m={0}>
                    Genres
                </Typography>
                <List dense disablePadding>
                    {availableGenres.map((genre) => (
                        <ListItemButton
                            disableGutters
                            key={genre}
                            onClick={() =>
                                setSelectedGenres(
                                    toggleValue(selectedGenres, genre),
                                )
                            }
                        >
                            <StyledCheckbox
                                checked={selectedGenres.includes(genre)}
                            />
                            {genre}
                        </ListItemButton>
                    ))}
                </List>

                <Button variant="contained" fullWidth onClick={onApply}>
                    Apply
                </Button>
            </DrawerContent>
        </StyledDrawer>
    );
};
