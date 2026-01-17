/**
 * Styled Main Layout component.
 */
import { Box, Container, styled } from '@mui/material';

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
            appVars: { layoutContainerWidth },
            breakpoints: { up },
        },
    }) => ({
        maxWidth: layoutContainerWidth,
        flexGrow: 1,
        marginTop: spacing(32),
        paddingInline: spacing(16),

        [up('sm')]: {
            paddingInline: spacing(16),
        },
    }),
);
