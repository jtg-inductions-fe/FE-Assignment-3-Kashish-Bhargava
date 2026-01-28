import { makeStyles } from 'tss-react/mui';

export const useActionModalStyles = makeStyles()(
    ({ typography: { pxToRem }, breakpoints: { up }, spacing }) => ({
        mainContainer: {
            width: pxToRem(300),
            borderRadius: spacing(8),

            [up('sm')]: {
                width: pxToRem(450),
            },
        },
    }),
);
