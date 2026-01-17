/**
 * Styled Button component.
 */
import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(
    ({
        theme: {
            spacing,
            typography: { button: typographyButton },
            shape: { borderRadius },
        },
    }) => ({
        ...typographyButton,
        borderRadius: borderRadius,
        padding: spacing(8, 16),
        textTransform: 'none',
    }),
);
