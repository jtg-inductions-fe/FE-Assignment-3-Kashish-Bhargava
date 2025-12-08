import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(
    ({
        theme: {
            spacing,
            typography: { button: typographyButton },
        },
    }) => ({
        borderRadius: spacing(8),
        padding: spacing(8, 16),
        ...typographyButton,
        textTransform: 'none',
    }),
);
