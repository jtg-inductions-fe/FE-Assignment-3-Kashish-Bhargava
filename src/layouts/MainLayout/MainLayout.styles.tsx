import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainLayoutWrapper = styled(Box)(
    ({
        theme: {
            palette: { background },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: background.default,
        minHeight: '100vh',
        width: '100%',
    }),
);

export const MainContainer = styled(Container)(
    ({
        theme: {
            spacing,
            breakpoints: { up },
        },
    }) => ({
        maxWidth: spacing(1440),
        flexGrow: 1,
        marginTop: spacing(32),
        paddingInline: spacing(16),
        [up('sm')]: {
            paddingInline: spacing(16),
        },
    }),
);
