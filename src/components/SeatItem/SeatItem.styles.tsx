/**Styles for SeatItem component */
import { makeStyles } from 'tss-react/mui';

export const useSeatItemStyles = makeStyles<{
    available: boolean;
    selected: boolean;
}>()(
    (
        {
            palette: {
                success: { main, light },
                text: { disabled },
                common: { white },
            },
        },
        { available, selected },
    ) => ({
        seat: {
            cursor: available ? 'pointer' : 'not-allowed',
            backgroundColor: selected ? main : 'transparent',
            color: selected ? white : available ? main : disabled,
            border: `1px solid ${available ? main : disabled}`,
            opacity: available ? 1 : 0.4,

            '&:hover':
                available && !selected
                    ? {
                          backgroundColor: light,
                      }
                    : undefined,
        },
    }),
);
