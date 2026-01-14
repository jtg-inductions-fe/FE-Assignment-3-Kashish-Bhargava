import { makeStyles } from 'tss-react/mui';

export const useSlotStructureStyles = makeStyles()(
    ({
        spacing,
        palette: {
            divider,
            common: { white },
        },
    }) => ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            // gap: spacing(8),
        },
        header: {
            display: 'flex',
            flexDirection: 'column',
            gap: spacing(12),
            paddingBottom: spacing(12),
            borderBottom: `1px solid ${divider}`,
            background: white,
            padding: spacing(12, 20),
        },
        chipRow: {
            display: 'flex',
            gap: spacing(8),
            flexWrap: 'wrap',
            textTransform: 'capitalize',
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
            borderBottom: `1px solid ${divider}`,
            paddingBottom: spacing(12),
            paddingTop: spacing(4),
            background: white,
            padding: spacing(12, 20),
        },
        statusRow: {
            display: 'flex',
            justifyContent: 'flex-end',
            gap: spacing(12),
            borderBottom: `1px solid ${divider}`,
            paddingBottom: spacing(8),
            marginBottom: spacing(20),
            background: white,
            padding: spacing(12, 20),
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
