//Styled components for MovieFiltersMobile
import { Divider, Drawer, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)(
    ({
        theme: {
            palette: {
                common: { white },
            },
        },
    }) => ({
        '& .MuiPaper-root': {
            backgroundColor: white,
        },
    }),
);

export const StyledDivider = styled(Divider)(({ theme: { spacing } }) => ({
    margin: spacing(8, 0),
}));
