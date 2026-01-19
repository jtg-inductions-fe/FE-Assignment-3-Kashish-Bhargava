import { Box, Container, styled } from '@mui/material';

export const AuthLayoutWrapper = styled(Box)(
    ({
        theme: {
            palette: {
                primary: { light },
            },
        },
    }) => ({
        display: 'flex',
        backgroundColor: light,
        minHeight: '100vh',
        width: '100%',
    }),
);

export const AuthLayoutContainer = styled(Container)(
    ({
        theme: {
            spacing,
            appVars: { layoutContainerWidth },
        },
    }) => ({
        maxWidth: layoutContainerWidth,
        flexGrow: 1,
        marginTop: spacing(160),
        paddingInline: spacing(16),
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    }),
);
