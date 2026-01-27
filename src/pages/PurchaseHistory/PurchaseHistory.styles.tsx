/**Styles for PurchaseHistory Page */
import { makeStyles } from 'tss-react/mui';

export const usePurchaseHistoryStyles = makeStyles()(
    ({ typography: { pxToRem }, breakpoints: { up } }) => ({
        tabFontSize: {
            fontSize: pxToRem(16),

            [up('sm')]: {
                fontSize: pxToRem(18),
            },

            [up('md')]: {
                fontSize: pxToRem(20),
            },
        },
    }),
);
