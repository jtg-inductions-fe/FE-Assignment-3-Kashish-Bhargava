/**Styled AuthForm component  */
import { IconButton, styled } from '@mui/material';

export const FormContainer = styled('form')(
    ({
        theme: {
            palette: { background },
            spacing,
            shape: { borderRadiusLg },
            typography: { pxToRem },
        },
    }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(12),
        width: '100%',
        maxWidth: pxToRem(400),
        marginInline: 'auto',
        padding: spacing(12),
        borderRadius: borderRadiusLg,
        backgroundColor: background.default,
        position: 'relative',
        textAlign: 'center',
    }),
);

export const GoBackHomeButton = styled(IconButton)(() => ({
    position: 'absolute',
}));
