/**
 * Styles for SlotStructure
 */
import { makeStyles } from 'tss-react/mui';

export const useSlotStructureStyles = makeStyles()(
    ({
        spacing,
        palette: {
            divider,
            common: { white },
        },
        typography: { pxToRem },
    }) => ({
        header: {
            background: white,
            padding: spacing(12, 20),
        },
        movieDetailChip: { borderRadius: spacing(12) },
        dateChip: {
            padding: spacing(24),
            borderRadius: spacing(2),
        },
        chipLabel: {
            fontSize: pxToRem(16),
        },
        dateRow: {
            overflowX: 'auto',
            scrollbarWidth: 'none',
            background: white,
            padding: spacing(12, 20),
        },
        statusRow: {
            borderBottom: `1px solid ${divider}`,
            background: white,
            padding: spacing(12, 20),
        },
    }),
);
