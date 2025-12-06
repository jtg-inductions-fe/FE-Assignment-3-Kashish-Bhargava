import { Button, styled } from '@mui/material';
export const StyledButton = styled(Button)(
    ({
        theme: {
            spacing,
            typography: { button: typographyButton },
        },
    }) => ({
        borderRadius: spacing(3),
        padding: spacing(2.25, 4.25),
        ...typographyButton,
        textTransform: 'none',
    }),
);
