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
        flexDirection: 'column',
        backgroundColor: light,
        minHeight: '100vh',
        width: '100%',
    }),
);

export const AuthLayoutContainer = styled(Container)(
    ({ theme: { spacing } }) => ({
        maxWidth: spacing(1440),
        flexGrow: 1,
        marginTop: spacing(160),
        paddingInline: spacing(16),
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    }),
);
