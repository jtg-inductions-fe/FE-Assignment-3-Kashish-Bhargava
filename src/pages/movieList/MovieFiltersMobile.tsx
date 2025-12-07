import { Button } from '@components';

import {
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    SectionTitle,
    StyledCheckbox,
    StyledDivider,
    StyledDrawer,
    StyledList,
    StyledListItemButton,
} from './MovieFiltersMobile.styles';
import { MovieFiltersMobileProps } from './MovieFiltersMobile.types';

export const MovieFiltersMobile = ({
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
}: MovieFiltersMobileProps) => {
    const toggleValue = (list: string[], value: string) =>
        list.includes(value)
            ? list.filter((v) => v !== value)
            : [...list, value];

    return (
        <StyledDrawer anchor="bottom" open={open} onClose={onClose}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Filters</DrawerTitle>
                    <Button onClick={onReset}>Reset All</Button>
                </DrawerHeader>

                <SectionTitle>Languages</SectionTitle>
                <StyledList dense>
                    {availableLanguages.map((lang) => (
                        <StyledListItemButton
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
                        </StyledListItemButton>
                    ))}
                </StyledList>

                <StyledDivider />

                <SectionTitle>Genres</SectionTitle>
                <StyledList dense>
                    {availableGenres.map((genre) => (
                        <StyledListItemButton
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
                        </StyledListItemButton>
                    ))}
                </StyledList>

                <Button variant="contained" fullWidth onClick={onApply}>
                    Apply
                </Button>
            </DrawerContent>
        </StyledDrawer>
    );
};
