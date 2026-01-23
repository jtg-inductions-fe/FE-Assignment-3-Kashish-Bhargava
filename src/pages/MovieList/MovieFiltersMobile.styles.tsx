//Styled components for MovieFiltersMobile
import { Divider, Drawer, styled } from '@mui/material';
import { paperClasses } from '@mui/material/Paper';

export const StyledDrawer = styled(Drawer)(
    ({
        theme: {
            palette: {
                common: { white },
            },
            spacing,
        },
    }) => ({
        [`& .${paperClasses.root}`]: {
            backgroundColor: white,
            padding: spacing(8),
            gap: spacing(16),
        },
    }),
);

export const StyledDivider = styled(Divider)(({ theme: { spacing } }) => ({
    margin: spacing(8, 0),
}));
