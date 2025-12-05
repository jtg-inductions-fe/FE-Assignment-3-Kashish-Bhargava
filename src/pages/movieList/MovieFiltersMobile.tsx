// import {
//     Box,
//     Button,
//     Checkbox,
//     Divider,
//     Drawer,
//     List,
//     ListItemButton,
//     Typography,
// } from '@mui/material';

// interface Props {
//     open: boolean;
//     onClose: () => void;
//     availableLanguages: string[];
//     availableGenres: string[];
//     selectedLanguages: string[];
//     selectedGenres: string[];
//     setSelectedLanguages: (langs: string[]) => void;
//     setSelectedGenres: (genres: string[]) => void;
// }

// export const MovieFiltersMobile = ({
//     open,
//     onClose,
//     availableLanguages,
//     availableGenres,
//     selectedLanguages,
//     selectedGenres,
//     setSelectedLanguages,
//     setSelectedGenres,
// }: Props) => {
//     const toggleValue = (list: string[], value: string) =>
//         list.includes(value)
//             ? list.filter((v) => v !== value)
//             : [...list, value];

//     const handleApply = () => onClose();
//     const handleReset = () => {
//         setSelectedLanguages([]);
//         setSelectedGenres([]);
//     };

//     return (
//         <Drawer anchor="bottom" open={open} onClose={onClose}>
//             <Box p={2} sx={{backgroundColor:'#fff'}}>
//                 <Box
//                     display="flex"
//                     justifyContent="space-between"
//                     alignItems="center"
//                 >
//                     <Typography variant="h6">Filters</Typography>
//                     <Button onClick={handleReset} color="error">
//                         Reset All
//                     </Button>
//                 </Box>

//                 <Typography variant="subtitle1" mt={2}>
//                     Languages
//                 </Typography>
//                 <List dense>
//                     {availableLanguages.map((lang) => (
//                         <ListItemButton
//                             key={lang}
//                             onClick={() =>
//                                 setSelectedLanguages(
//                                     toggleValue(selectedLanguages, lang),
//                                 )
//                             }
//                         >
//                             <Checkbox
//                                 checked={selectedLanguages.includes(lang)}
//                             />
//                             {lang}
//                         </ListItemButton>
//                     ))}
//                 </List>

//                 <Divider sx={{ my: 2 }} />

//                 <Typography variant="subtitle1">Genres</Typography>
//                 <List dense>
//                     {availableGenres.map((genre) => (
//                         <ListItemButton
//                             key={genre}
//                             onClick={() =>
//                                 setSelectedGenres(
//                                     toggleValue(selectedGenres, genre),
//                                 )
//                             }
//                         >
//                             <Checkbox
//                                 checked={selectedGenres.includes(genre)}
//                             />
//                             {genre}
//                         </ListItemButton>
//                     ))}
//                 </List>

//                 <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{ mt: 2 }}
//                     onClick={handleApply}
//                 >
//                     Apply
//                 </Button>
//             </Box>
//         </Drawer>
//     );
// };

// import { Typography } from '@mui/material';

import {
    ApplyButton,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    ResetButton,
    SectionTitle,
    StyledCheckbox,
    StyledDivider,
    StyledDrawer,
    StyledList,
    StyledListItemButton,
} from './MovieFiltersMobile.styles';

interface Props {
    open: boolean;
    onClose: () => void;
    availableLanguages: string[];
    availableGenres: string[];
    selectedLanguages: string[];
    selectedGenres: string[];
    setSelectedLanguages: (langs: string[]) => void;
    setSelectedGenres: (genres: string[]) => void;
}

export const MovieFiltersMobile = ({
    open,
    onClose,
    availableLanguages,
    availableGenres,
    selectedLanguages,
    selectedGenres,
    setSelectedLanguages,
    setSelectedGenres,
}: Props) => {
    const toggleValue = (list: string[], value: string) =>
        list.includes(value)
            ? list.filter((v) => v !== value)
            : [...list, value];

    const handleApply = () => onClose();

    const handleReset = () => {
        setSelectedLanguages([]);
        setSelectedGenres([]);
    };

    return (
        <StyledDrawer anchor="bottom" open={open} onClose={onClose}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle variant="h6">Filters</DrawerTitle>
                    <ResetButton onClick={handleReset} color="error">
                        Reset All
                    </ResetButton>
                </DrawerHeader>

                <SectionTitle variant="subtitle1" mt={2}>
                    Languages
                </SectionTitle>
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

                <SectionTitle variant="subtitle1">Genres</SectionTitle>
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

                <ApplyButton
                    variant="contained"
                    fullWidth
                    onClick={handleApply}
                >
                    Apply
                </ApplyButton>
            </DrawerContent>
        </StyledDrawer>
    );
};
