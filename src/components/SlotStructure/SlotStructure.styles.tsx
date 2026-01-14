import { makeStyles } from 'tss-react/mui';

export const useSlotStructureStyles = makeStyles()(
    ({ spacing, palette: { divider } }) => ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: spacing(8),
        },
        header: {
            display: 'flex',
            flexDirection: 'column',
            gap: spacing(4),
            borderBottom: `1px solid ${divider}`,
        },
        chipRow: {
            display: 'flex',
            gap: spacing(8),
            flexWrap: 'wrap',
        },
        movieDetailChip: { borderRadius: spacing(12) },
        dateChip: {
            margin: spacing(1),
            padding: spacing(18),
            borderRadius: spacing(2),
        },
        dateRow: {
            display: 'flex',
            gap: spacing(2),
            overflowX: 'auto',
            scrollbarWidth: 'none',
        },
        statusRow: {
            display: 'flex',
            gap: spacing(12),
        },
        availability: {
            display: 'flex',
            alignItems: 'center',
            gap: spacing(4),
        },
        fastFilling: {
            display: 'flex',
            alignItems: 'center',
            gap: spacing(4),
        },
        fastFillingIndicator: {
            backgroundColor: 'orange',
            borderRadius: '50%',
            width: spacing(12),
            height: spacing(12),
        },
        availabilityIndicator: {
            backgroundColor: 'green',
            borderRadius: '50%',
            width: spacing(12),
            height: spacing(12),
        },
    }),
);
