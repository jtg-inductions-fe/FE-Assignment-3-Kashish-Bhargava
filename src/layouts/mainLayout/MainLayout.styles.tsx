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

export const MainContainer = styled(Container)(({ theme: { spacing } }) => ({
    maxWidth: 'lg',
    flexGrow: 1,
    marginTop: spacing(8),
    paddingInline: spacing(4),
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
}));
