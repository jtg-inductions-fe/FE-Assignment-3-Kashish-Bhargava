import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(
    ({
        theme: {
            spacing,
            typography: { button: typographyButton },
            borderRadius: { button: borderRadiusButton },
        },
    }) => ({
        ...typographyButton,
        borderRadius: borderRadiusButton,
        padding: spacing(8, 16),
        textTransform: 'none',
    }),
);
