import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

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
        maxWidth: 'lg',
        flexGrow: 1,
        marginTop: spacing(40),
        paddingInline: spacing(4),
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
    }),
);
