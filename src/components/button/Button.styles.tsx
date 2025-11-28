import { Button, styled } from '@mui/material';
export const StyledButton = styled(Button)(
    ({
        theme: {
            palette: {
                primary: { main, contrastText },
                text: { primary },
            },
            spacing,
            typography: { button: typographyButton },
            shape: { borderRadius: buttonBorderRadius },
        },
    }) => ({
        backgroundColor: main,
        color: contrastText,
        borderRadius: buttonBorderRadius,
        padding: spacing(2.25, 4.25),
        ...typographyButton,
        textTransform: 'none',
        '&:hover,&:active': {
            backgroundColor: primary,
        },

        '&:focus-visible': {
            outline: `2px solid ${main}`,
            outlineOffset: '2px',
        },
    }),
);
